import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineBookOpen,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiArrowUpRight,
  HiOutlineMicrophone,
  HiOutlineSparkles,
} from 'react-icons/hi2';
import { FaEarListen, FaHandsAslInterpreting } from 'react-icons/fa6';
import {
  WEBSITE,
  about,
  education,
  experience,
  profile,
  research,
  services,
  training,
} from '../data/portfolio';

const serviceIcons = {
  speech: HiOutlineChatBubbleLeftRight,
  ear: FaEarListen,
  language: HiOutlineBookOpen,
  sign: FaHandsAslInterpreting,
  family: HiOutlineUserGroup,
  school: HiOutlineAcademicCap,
};

function SectionHead({ label, title, text, center }) {
  return (
    <div className={`section-head ${center ? 'section-head--center' : ''}`} data-reveal>
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <figure className="about__photo" data-reveal>
          <img
            src="/images/personal/institute.jpeg"
            alt="Maria Anayat at the Institute of Special Education, University of the Punjab"
            width="1080"
            height="1229"
            loading="lazy"
          />
          <figcaption>Institute of Special Education, University of the Punjab</figcaption>
        </figure>
        <div className="about__body" data-reveal>
          <span className="eyebrow">About</span>
          <h2 className="about__title">Classroom experience, clinical training and research, together</h2>
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <ul className="about__facts">
            <li><HiOutlineMapPin /> {profile.location}</li>
            <li><HiOutlineChatBubbleLeftRight /> Urdu, English &amp; Pakistan Sign Language</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="section section--tint">
      <div className="container">
        <SectionHead
          center
          label="How I help"
          title="Areas of practice"
          text="Therapy and teaching for deaf and hard of hearing children, from early listening to confident communication."
        />
        <div className="services">
          {services.map(({ icon, title, text }, i) => {
            const Icon = serviceIcons[icon];
            return (
              <article className="card service" key={title} data-reveal style={{ '--d': `${i * 60}ms` }}>
                <span className="service__icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead label="Experience" title="Where I work" />
        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline__item" key={job.role} data-reveal>
              <span className="timeline__period">{job.period}</span>
              <div className="card timeline__card">
                <h3>{job.role}</h3>
                <p className="timeline__org">{job.org}</p>
                <ul>
                  {job.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section section--tint">
      <div className="container">
        <SectionHead label="Qualifications" title="Education and training" />
        <div className="edu">
          <div className="edu__degrees">
            {education.map((d) => (
              <article className="card degree" key={d.title} data-reveal>
                <span className="degree__period">{d.period}</span>
                <h3>{d.title}</h3>
                <p className="degree__org">{d.org}</p>
                {d.note && <p className="degree__note">{d.note}</p>}
              </article>
            ))}
          </div>
          <aside className="card edu__training" data-reveal>
            <h3>Professional training</h3>
            <ul>
              {training.map((t) => (
                <li key={t.title}>
                  <span>{t.period}</span>
                  <div>
                    <strong>{t.title}</strong>
                    <small>{t.org}</small>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <SectionHead
          label="Research"
          title="Conference presentations"
          text="Co-authored with Dr. Samina Ashraf and Dr. Munawar Malik, University of the Punjab."
        />
        <div className="research">
          {research.map((r, i) => (
            <article className="card paper" key={r.title} data-reveal style={{ '--d': `${i * 80}ms` }}>
              <div className="paper__top">
                <span className="paper__icon"><HiOutlineMicrophone /></span>
                <span className="paper__year">{r.year}</span>
              </div>
              <h3>{r.title}</h3>
              <p>{r.event}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section className="section section--slim">
      <div className="container">
        <div className="founder" data-reveal>
          <div>
            <span className="eyebrow eyebrow--light"><HiOutlineSparkles /> Founder</span>
            <h2>VoiceForUnheard</h2>
            <p>
              Free speech, language and listening education for deaf and hard of hearing children in Pakistan,
              in Urdu and English. Practice tools, milestone checklists and direct consultations for families and teachers.
            </p>
          </div>
          <a className="btn btn--light" href={WEBSITE} target="_blank" rel="noreferrer">
            Visit the website <HiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact">
        <SectionHead
          center
          label="Contact"
          title="Let’s talk about your child’s communication"
          text="For consultations, school support or research collaboration, reach out by email or through the VoiceForUnheard consultation form."
        />
        <div className="contact__actions" data-reveal>
          <a className="btn btn--accent" href={profile.consultationUrl} target="_blank" rel="noreferrer">
            Request a consultation <HiArrowUpRight />
          </a>
          <a className="btn btn--outline" href={`mailto:${profile.email}`}>
            <HiOutlineEnvelope /> {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          <strong>{profile.name}</strong> · {profile.role} · {profile.location}
        </p>
        <p>
          © {new Date().getFullYear()} ·{' '}
          <a href={WEBSITE} target="_blank" rel="noreferrer">voiceforunheard.vercel.app</a>
        </p>
      </div>
    </footer>
  );
}
