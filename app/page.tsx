import {
  capabilities,
  caseStudies,
  experience,
  labProjects,
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
    "AI Workflow Design",
    "Process Automation",
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
          <a href="#lab">AI Lab</a>
          <a href="#work">Career</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
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

      <nav aria-label="Mobile navigation" className="mobile-nav">
        <a href="#lab">AI Lab</a>
        <a href="#work">Career</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow animate-in">Talent Acquisition · AI · Systems</p>
          <h1 className="animate-in animate-delay-1">
            I build practical
            <span> operating systems.</span>
          </h1>
          <p className="hero-intro animate-in animate-delay-2">
            I’m Adam Bogren. My background is Talent Acquisition. My current
            work combines that expertise with AI, automation, data, and process
            design to improve decisions, reduce manual work, and make complex
            work easier to run.
          </p>
          <div className="hero-actions animate-in animate-delay-3">
            <a className="button button-primary" href="#lab">
              Explore Adam&apos;s AI Lab
              <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href="#work">
              View my career experience
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
              <dd>TA leadership · AI enablement · Transformation</dd>
            </div>
            <div>
              <dt>Based</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Known for</dt>
              <dd>Practical systems that earn human trust</dd>
            </div>
          </dl>
        </aside>

        <div className="hero-note animate-in animate-delay-3">
          <span>01</span>
          <p>I’m at my best when the problem is messy, important, and fixable.</p>
        </div>
      </section>

      <div className="discipline-rail" aria-label="Areas of expertise">
        <span>Talent Acquisition</span>
        <i aria-hidden="true" />
        <span>AI workflows</span>
        <i aria-hidden="true" />
        <span>Automation</span>
        <i aria-hidden="true" />
        <span>Decision quality</span>
        <i aria-hidden="true" />
        <span>Systems thinking</span>
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
            <h2 id="systems-heading">Operating problems are systems problems.</h2>
          </div>
          <div className="systems-copy">
            <p className="lead">
              Most operating problems break down where priorities, data,
              process, technology, and decision-making stop lining up.
            </p>
            <p>
              My Talent Acquisition work taught me to make those connections
              visible. Adam&apos;s AI Lab extends the same discipline into practical
              experiments: trustworthy inputs, clear ownership, useful
              automation, human judgment, and decisions people can explain.
            </p>
            <div className="principles">
              <span>Make the data trustworthy</span>
              <span>Create operating discipline</span>
              <span>Keep humans accountable</span>
              <span>Document what changes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="lab section-shell" id="lab" aria-labelledby="lab-heading">
        <div className="section-heading lab-heading">
          <div>
            <p className="kicker">Adam&apos;s AI Lab</p>
            <h2 id="lab-heading">Real problems. Practical solutions.</h2>
          </div>
          <p>
            The lab is where I apply AI, automation, and systems thinking to work
            and everyday life challenges that actually matter. Status labels are deliberate:
            this is a record of progress, not a showroom of imaginary products.
          </p>
        </div>

        <div className="lab-grid">
          {labProjects.map((project) => (
            <article className="lab-card" key={project.index}>
              <div className="lab-card-top">
                <span className="lab-index">{project.index}</span>
                <span className="lab-status">{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="lab-summary">{project.summary}</p>
              <dl>
                <div>
                  <dt>The problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>The approach</dt>
                  <dd>{project.approach}</dd>
                </div>
                <div>
                  <dt>Next</dt>
                  <dd>{project.next}</dd>
                </div>
              </dl>
              <div className="case-tags" aria-label="Project themes">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
        <p className="lab-note">
          Built in the open, shared responsibly. Sensitive job-search, family,
          home-network, and security details stay private.
        </p>
      </section>

      <section className="work section-shell" id="work" aria-labelledby="work-heading">
        <div className="section-heading work-heading">
          <div>
            <p className="kicker">Career evidence</p>
            <h2 id="work-heading">Talent Acquisition is the proving ground.</h2>
          </div>
          <p>Three examples of building clarity, capability, and momentum in complex hiring environments—the foundation beneath the lab.</p>
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
            <p>
              Adam&apos;s AI Lab is a natural extension of that work: a place to test
              how AI and automation can support better operating systems while
              keeping evidence, privacy, and human accountability intact.
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

      <section className="contact" id="contact" aria-labelledby="contact-heading">
        <div className="contact-orbit orbit-one" aria-hidden="true" />
        <div className="contact-orbit orbit-two" aria-hidden="true" />
        <div className="section-shell contact-inner">
          <p className="kicker kicker-light">Start a conversation</p>
          <h2 id="contact-heading">Let’s make complex work better.</h2>
          <p>
            If you’re improving Talent Acquisition, exploring responsible AI
            enablement, or need someone who can connect strategy to operating
            details, I’d welcome a conversation.
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
            <p>Talent Acquisition · AI enablement · Systems thinking</p>
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
