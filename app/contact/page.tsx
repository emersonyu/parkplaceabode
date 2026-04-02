import { playfairDisplay } from '../../utils/fonts'
import styles from './contact.module.css'

export default function Contact() {
    return (
        <main>
            {/* ── Page Header ── */}
            <header className={styles.pageHeader}>
                <span className={styles.eyebrow}>Get in Touch</span>
                <h1
                    className={`${playfairDisplay.className} ${styles.pageTitle}`}
                >
                    Let&rsquo;s work together
                </h1>
                <p className={styles.pageSubtitle}>
                    Tell Natalie about your project and she&rsquo;ll be in touch
                    within 2 business days.
                </p>
            </header>

            <div className={styles.contactLayout}>
                {/* ── Inquiry Form ── */}
                <section className={styles.formSection}>
                    <h2
                        className={`${playfairDisplay.className} ${styles.sectionHeading}`}
                    >
                        Send an inquiry
                    </h2>

                    {/*
                        For deployment on Netlify: add data-netlify="true" and
                        name="contact" to the form element. For other hosts,
                        point action to your form handler (Formspree, etc.).
                    */}
                    <form className={styles.form} name="contact" method="POST">
                        <input
                            type="hidden"
                            name="form-name"
                            value="contact"
                        />

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label
                                    htmlFor="name"
                                    className={styles.label}
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={styles.input}
                                    placeholder="Your full name"
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label
                                    htmlFor="email"
                                    className={styles.label}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={styles.input}
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label
                                htmlFor="projectType"
                                className={styles.label}
                            >
                                Project type
                            </label>
                            <select
                                id="projectType"
                                name="projectType"
                                className={styles.select}
                            >
                                <option value="">Select a project type</option>
                                <option value="kitchen">Kitchen cabinetry</option>
                                <option value="bathroom">
                                    Bathroom vanity / cabinetry
                                </option>
                                <option value="builtin">
                                    Built-ins &amp; shelving
                                </option>
                                <option value="living">
                                    Living / dining room
                                </option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label
                                htmlFor="message"
                                className={styles.label}
                            >
                                Tell me about your project
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className={styles.textarea}
                                rows={6}
                                placeholder="Describe your space, what you're looking for, and any timing or budget you have in mind."
                                required
                            />
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Send Inquiry
                        </button>
                    </form>
                </section>

                {/* ── Sidebar: Info + Calendly ── */}
                <aside className={styles.sidebar}>
                    <div className={styles.contactInfo}>
                        <h2
                            className={`${playfairDisplay.className} ${styles.sectionHeading}`}
                        >
                            Contact info
                        </h2>
                        <div className={styles.contactDetails}>
                            <div className={styles.contactDetail}>
                                <span className={styles.detailLabel}>
                                    Email
                                </span>
                                <a
                                    href="mailto:natalie@parkplaceabode.com"
                                    className={styles.detailValue}
                                >
                                    natalie@parkplaceabode.com
                                </a>
                            </div>
                            <div className={styles.contactDetail}>
                                <span className={styles.detailLabel}>
                                    Instagram
                                </span>
                                <a
                                    href="https://www.instagram.com/parkplaceabode/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.detailValue}
                                >
                                    @parkplaceabode
                                </a>
                            </div>
                            <div className={styles.contactDetail}>
                                <span className={styles.detailLabel}>
                                    Location
                                </span>
                                <span className={styles.detailValue}>
                                    San Jose, CA
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ── Calendly Placeholder ── */}
                    <div className={styles.calendlyBlock}>
                        <h2
                            className={`${playfairDisplay.className} ${styles.sectionHeading}`}
                        >
                            Schedule a call
                        </h2>
                        <p className={styles.calendlyDesc}>
                            Prefer to talk it through? Book a free 30-minute
                            discovery call directly on Natalie&rsquo;s calendar.
                        </p>

                        {/*
                            TO ACTIVATE: Replace this placeholder with the Calendly
                            inline embed. Install the package:
                                npm install react-calendly
                            Then replace the div below with:
                                <InlineWidget url="https://calendly.com/YOUR_USERNAME/30min" />

                            Or use the script embed:
                                <div
                                    className="calendly-inline-widget"
                                    data-url="https://calendly.com/YOUR_USERNAME/30min"
                                    style={{ minWidth: '320px', height: '700px' }}
                                />
                                <script
                                    type="text/javascript"
                                    src="https://assets.calendly.com/assets/external/widget.js"
                                    async
                                />
                        */}
                        <div className={styles.calendlyPlaceholder}>
                            <div className={styles.calendlyPlaceholderInner}>
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={styles.calendlyIcon}
                                >
                                    <rect
                                        x="3"
                                        y="4"
                                        width="18"
                                        height="18"
                                        rx="2"
                                        ry="2"
                                    />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                <p className={styles.calendlyPlaceholderText}>
                                    Calendly booking widget
                                </p>
                                <span className={styles.calendlyPlaceholderHint}>
                                    Connect your Calendly account to enable scheduling
                                </span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    )
}
