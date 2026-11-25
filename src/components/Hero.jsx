import { HiArrowRight, HiOutlineEnvelope, HiCheckBadge } from 'react-icons/hi2';
import { highlights, profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <span className="eyebrow">{profile.subRole}</span>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a className="btn btn--accent" href={profile.consultationUrl} target="_blank" rel="noreferrer">
              Request a consultation <HiArrowRight />
            </a>
            <a className="btn btn--outline" href="#contact">
              <HiOutlineEnvelope /> Get in touch
            </a>
          </div>

          <ul className="hero__stats">
            {highlights.map((h) => (
              <li key={h.label}>
                <strong>{h.value}</strong>
                <span>{h.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__backdrop" aria-hidden="true" />
          <figure className="hero__photo">
            <img
              src={profile.photo}
              alt="Maria Anayat, speech and language therapist"
              width="515"
              height="901"
              fetchPriority="high"
            />
          </figure>
          <div className="hero__badge hero__badge--top">
            <HiCheckBadge />
            <div>
              <strong>Gazetted Officer</strong>
              <span>Government of Punjab</span>
            </div>
          </div>
          <div className="hero__badge hero__badge--bottom">
            <span className="hero__badge-dot" />
            <div>
              <strong>Founder</strong>
              <span>VoiceForUnheard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
