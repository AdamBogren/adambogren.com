import {
  capabilities,
  caseStudies,
  experience,
  outcomes,
  profile,
} from "@/data/profile";

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

function LinkedinMark() {
  return (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92A1.96 1.96 0 0 0 5.25 3ZM20.44 12.98c0-3.16-1.68-4.63-3.93-4.63-1.8 0-2.61.99-3.07 1.69V8.5h-3.38c.04 1.02 0 10.5 0 10.5h3.38v-5.86c0-.31.02-.63.11-.85.25-.63.82-1.28 1.77-1.28 1.25 0 1.75.96 1.75 2.36V19h3.37v-6.02Z" />
    </svg>
  );
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nashville",
    addressRegion: "TN",
    addressCountry: "US",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Kansas" },
    { "@type": "CollegeOrUniversity", name: "University of Tennessee" },
  ],
  sameAs: [profile.linkedin],
  knowsAbout: [
    "Talent Acquisition",
    "Recruiting Operations",
    "Hiring Strategy",
    "Structured Interviewing",
    "Recruiting Analytics",
  ],
};

export default function Home() {
  return (
    <main>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        type="application/ld+json"
      />

      <header className="site-header">
        <a aria-label="Adam Bogren — home" className="brand" href="#top">
          <span className="brand-mark">{profile.shortName}</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav aria-label="Primary navigation" className="main-nav">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>

        <a
          className="header-link"
          href={profile.linkedin}
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
          <ArrowUpRight />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow animate-in">Talent Acquisition · Strategy · Operations</p>
          <h1 className="animate-in animate-delay-1">
            I build better
            <span> hiring systems.</span>
          </h1>
          <p className="hero-intro animate-in animate-delay-2">
            I’m Adam Bogren. I connect recruiting strategy, data, process,
            technology, and stakeholder behavior so organizations can hire with
            greater speed, consistency, and confidence.
          </p>
          <div className="hero-actions animate-in animate-delay-3">
            <a className="button button-primary" href="#work">
              Explore my work
              <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-secondary"
              href={profile.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <LinkedinMark />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <aside className="hero-aside animate-in animate-delay-2" aria-label="Current focus">
          <div className="status-line">
            <span className="status-dot" />
            Currently exploring
          </div>
          <p>{profile.status}</p>
          <dl>
            <div>
              <dt>Focus</dt>
              <dd>Leadership · Operations · Transformation</dd>
            </div>
            <div>
              <dt>Based</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Known for</dt>
              <dd>Practical systems that earn business trust</dd>
            </div>
          </dl>
        </aside>

        <div className="hero-note animate-in animate-delay-3">
          <span>01</span>
          <p>I’m at my best when hiring is messy, important, and fixable.</p>
        </div>
      </section>

      <div className="discipline-rail" aria-label="Areas of expertise">
        <span>Recruiting strategy</span>
        <i aria-hidden="true" />
        <span>TA operations</span>
        <i aria-hidden="true" />
        <span>Data credibility</span>
        <i aria-hidden="true" />
        <span>Structured hiring</span>
        <i aria-hidden="true" />
        <span>Stakeholder accountability</span>
      </div>

      <section className="outcomes section-shell" aria-labelledby="outcomes-heading">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">Selected outcomes</p>
            <h2 id="outcomes-heading">Proof over promises.</h2>
          </div>
          <p>
            The common thread: turn scattered recruiting activity into a system
            leaders and hiring teams can actually use.
          </p>
        </div>
        <div className="outcomes-grid">
          {outcomes.map((outcome, index) => (
            <article className="outcome-card" key={outcome.label}>
              <span className="card-index">0{index + 1}</span>
              <strong>{outcome.value}</strong>
              <h3>{outcome.label}</h3>
              <p>{outcome.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="systems-section" aria-labelledby="systems-heading">
        <div className="section-shell systems-layout">
          <div className="systems-title">
            <p className="kicker kicker-light">How I think</p>
            <h2 id="systems-heading">Hiring problems are systems problems.</h2>
          </div>
          <div className="systems-copy">
            <p className="lead">
              Hiring breaks down where priorities, data, process, technology, and
              decision-making stop lining up.
            </p>
            <p>
              My work makes those connections visible, then turns them into
              practical operating habits: trustworthy vacancy data, clearer
              priorities, capable recruiters, accountable hiring managers, and
              decisions people can explain.
            </p>
            <div className="principles">
              <span>Make the data trustworthy</span>
              <span>Create operating discipline</span>
              <span>Improve hiring decisions</span>
              <span>Connect TA to the business</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work section-shell" id="work" aria-labelledby="work-heading">
        <div className="section-heading work-heading">
          <div>
            <p className="kicker">Selected work</p>
            <h2 id="work-heading">The work behind the outcomes.</h2>
          </div>
          <p>Three examples of building clarity, capability, and momentum in complex hiring environments.</p>
        </div>

        <div className="case-list">
          {caseStudies.map((study) => (
            <article className="case-study" key={study.index}>
              <div className="case-number">{study.index}</div>
              <div className="case-main">
                <p className="case-company">{study.company}</p>
                <h3>{study.title}</h3>
                <div className="case-tags" aria-label="Areas of focus">
                  {study.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <dl className="case-detail">
                <div>
                  <dt>The situation</dt>
                  <dd>{study.situation}</dd>
                </div>
                <div>
                  <dt>The work</dt>
                  <dd>{study.work}</dd>
                </div>
                <div className="case-result">
                  <dt>The result</dt>
                  <dd>{study.result}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities" id="capabilities" aria-labelledby="capabilities-heading">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="kicker">Capabilities</p>
              <h2 id="capabilities-heading">Strategy that reaches the operating details.</h2>
            </div>
            <p>
              I work across the seams—where recruiting, finance, operations, HR,
              systems, and leadership all need to agree on what happens next.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability, index) => (
              <article key={capability.title}>
                <span>0{index + 1}</span>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience section-shell" id="experience" aria-labelledby="experience-heading">
        <div className="section-heading experience-heading">
          <div>
            <p className="kicker">Experience</p>
            <h2 id="experience-heading">Where I’ve contributed.</h2>
          </div>
          <p>
            A career spanning corporate, production, technical, frontline, and
            leadership hiring—moving from execution into function building and transformation.
          </p>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={item.company}>
              <div className="timeline-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="timeline-company">
                <p>{item.period}</p>
                <h3>{item.company}</h3>
              </div>
              <div className="timeline-role">
                <h4>{item.role}</h4>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-heading">
        <div className="section-shell about-grid">
          <div className="about-quote">
            <span aria-hidden="true">“</span>
            <blockquote>
              Process should earn its place. The goal is a hiring system the
              business can trust.
            </blockquote>
          </div>
          <div className="about-copy">
            <p className="kicker kicker-light">About</p>
            <h2 id="about-heading">People, systems, and business priorities.</h2>
            <p>
              I’ve spent my career helping organizations move from reactive
              recruiting toward a more disciplined way of hiring: reliable data,
              clear priorities, capable recruiters, accountable hiring managers,
              and decisions people can explain.
            </p>
            <p>
              I value direct communication, practical solutions, and process that
              solves a real problem—not process theater.
            </p>
            <div className="education">
              <div>
                <span>MBA</span>
                <p>University of Kansas</p>
              </div>
              <div>
                <span>BA, Spanish</span>
                <p>University of Tennessee · Universidad de Valencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" aria-labelledby="contact-heading">
        <div className="contact-orbit orbit-one" aria-hidden="true" />
        <div className="contact-orbit orbit-two" aria-hidden="true" />
        <div className="section-shell contact-inner">
          <p className="kicker kicker-light">Start a conversation</p>
          <h2 id="contact-heading">Let’s make hiring work better.</h2>
          <p>
            If you’re building, scaling, or improving a Talent Acquisition
            function—and need someone who can connect strategy to the operating
            details—I’d welcome a conversation.
          </p>
          <a
            className="contact-link"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <span>Connect on LinkedIn</span>
            <ArrowUpRight />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <span className="brand-mark brand-mark-footer">{profile.shortName}</span>
          <div>
            <strong>{profile.name}</strong>
            <p>Talent Acquisition Leadership · Operations · Transformation</p>
          </div>
        </div>
        <p>Nashville, Tennessee</p>
        <a href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </main>
  );
}
