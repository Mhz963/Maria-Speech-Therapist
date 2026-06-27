import { useEffect, useRef, useState } from 'react';
import * as pdfjs from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function PdfCertificate({ file, title, onOpen }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return undefined;

    const renderPdf = async () => {
      setStatus('loading');
      try {
        const pdf = await pdfjs.getDocument(file).promise;
        const page = await pdf.getPage(1);
        if (cancelled) return;

        const baseViewport = page.getViewport({ scale: 1 });
        const containerWidth = container.clientWidth || 320;
        const scale = (containerWidth / baseViewport.width) * Math.min(window.devicePixelRatio || 1, 2);
        const viewport = page.getViewport({ scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = '100%';
        canvas.style.height = 'auto';

        await page.render({
          canvasContext: canvas.getContext('2d'),
          viewport,
        }).promise;

        if (!cancelled) setStatus('ready');
      } catch {
        if (!cancelled) setStatus('error');
      }
    };

    renderPdf();

    return () => {
      cancelled = true;
    };
  }, [file]);

  return (
    <button
      type="button"
      className="education__certificate education__certificate--pdf"
      onClick={onOpen}
      aria-label={`View ${title} in new tab`}
    >
      <div className="cert-pdf__preview" ref={containerRef}>
        {status === 'loading' && <div className="cert-pdf__loading">Loading certificate…</div>}
        {status === 'error' && (
          <div className="cert-pdf__loading cert-pdf__loading--error">
            Preview unavailable. Tap to open PDF.
          </div>
        )}
        <canvas
          ref={canvasRef}
          className={`cert-pdf__canvas ${status === 'ready' ? 'cert-pdf__canvas--ready' : ''}`}
        />
      </div>
      <div className="education__certificate-overlay">
        <span>Training Certificate</span>
      </div>
    </button>
  );
}
