import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* HERO STRIP */}
      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <p className="eyebrow text-uppercase mb-1">Contact</p>
          <h1 className="hero-title mb-0">Send Us A Message</h1>
        </div>
      </section>

      {/* MAIN CARD: MAP + FORM */}
      <section className="contact-main container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-11">
            <div className="contact-card row g-4 g-lg-5 align-items-start">
              {/* LEFT: MAP */}
              <div className="col-12 col-lg-6">
                <div className="contact-card-block">
                  <div className="ratio ratio-4x3 contact-map">
                    <iframe
                      title="Olsen Hall Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.4439377816756!2d-71.329414!3d42.6548818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3a4508d06e59d%3A0x272c0c1630f00f79!2sOlsen%20Hall!5e0!3m2!1sen!2sus!4v1731889000000!5m2!1sen!2sus"
                      style={{ border: 0, marginTop: "80px" }}
                      loading="lazy"
                      allowFullScreen=""
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT: FORM */}
              <div className="col-12 col-lg-6">
                <div className="contact-card-block h-100">
                  <div className="card-body p-4 p-md-5">
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="mb-3">
                        <label className="form-label label-min text-navy">
                          Your Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control clean"
                          placeholder="Name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label label-min text-navy">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control clean"
                          placeholder="Email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label label-min text-navy">
                          Description <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control clean"
                          placeholder="Message"
                          rows={4}
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100 btn-navy"
                      >
                        Send
                      </button>

                      {submitted && (
                        <div
                          className="alert alert-soft mt-3 mb-0"
                          role="alert"
                        >
                          Thanks! Your message has been recorded (demo).
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM INFO STRIP */}
            <div className="big-info-box mt-5">
              <div className="row text-center justify-content-center g-4">
                {/* Email */}
                <div className="col-12 col-md-4">
                  <div className="inner-item">
                    <div className="icon-circle-large">📧</div>
                    <h6 className="fw-bold text-navy mt-3 mb-1">Email</h6>
                    <p className="contact-line mb-0">
                      <a
                        href="mailto:teresa@leewormlab.org"
                        className="info-link"
                      >
                        teresa@leewormlab.org
                      </a>
                    </p>
                  </div>
                </div>

                {/* Twitter / Bluesky */}
                <div className="col-12 col-md-4">
                  <div className="inner-item">
                    <div className="icon-circle-large">🐦</div>
                    <h6 className="fw-bold text-navy mt-3 mb-1">
                      Twitter / Bluesky
                    </h6>
                    <p className="contact-line mb-0">
                      <a
                        href="https://bsky.app/profile/snickclunk.bsky.social"
                        className="info-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @snickclunk
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="col-12 col-md-4">
                  <div className="inner-item">
                    <div className="icon-circle-large">📍</div>
                    <h6 className="fw-bold text-navy mt-3 mb-1">Location</h6>
                    <p className="contact-line mb-0">
                      Department of Biological Sciences
                      <br />
                      612 Olsen Hall
                      <br />
                      Lowell, MA 01854
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style>{`
        :root {
          --navy: #143D6D;
          --accent-blue: #1CC0F0;
          --card-bg: #ffffff;
          --muted: #6b7280;
        }

        .contact-page {
          min-height: 100vh;
          background-color: #E9E3DF;
          font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        /* HERO BAND */
        .contact-hero {
          background: var(--navy);
          color: #ffffff;
          padding: 3.2rem 0 5.5rem;  /* bottom padding makes room for overlapping card */
        }
        .contact-hero-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .hero-title {
          font-size: clamp(2rem, 2.8vw + 1rem, 2.6rem);
          letter-spacing: 0.04em;
        }
        .eyebrow {
          letter-spacing: .18em;
          font-size: .78rem;
          opacity: .9;
        }

        /* MAIN CARD */
        .contact-main {
          padding-bottom: 4rem;
        }
        .contact-card {
          max-width: 1100px;
          margin: -3.5rem auto 0;   /* pulls card up into hero band like your inspo */
          background: var(--card-bg);
          border-radius: 1.75rem;
          box-shadow: 0 20px 40px rgba(0,0,0,.08);
          padding: 2.4rem 2.2rem;
        }
        @media (max-width: 767.98px) {
          .contact-card {
            padding: 1.6rem 1.2rem;
            margin-top: -2.4rem;
          }
        }
        .contact-card-block {
          border-radius: 1.2rem;
          overflow: hidden;
        }

        .contact-map iframe {
          border-radius: 1.2rem;
        }

        .text-navy { color: var(--navy) !important; }

        /* Form controls */
        .label-min {
          font-weight: 600;
          font-size: .95rem;
        }
        .form-control.clean {
          border-radius: .7rem;
          border: 1px solid #e5e7eb;
          padding: .8rem 1rem;
          background: #fff;
          color: var(--navy);
        }
        .form-control.clean:focus {
          border-color: var(--navy);
          box-shadow: 0 0 0 .16rem rgba(20,61,109,.14);
        }

        .btn-navy {
          background: var(--navy);
          border: none;
          border-radius: .9rem;
          padding: .9rem 1.1rem;
          font-weight: 600;
          letter-spacing: 0.03em;
        }
        .btn-navy:hover {
          filter: brightness(.97);
        }
        .btn-navy:active {
          transform: translateY(1px);
        }

        .alert-soft {
          background: #E6F0FF;
          color: var(--navy);
          border: 1px solid #CFE0FF;
          border-radius: .6rem;
          font-size: .9rem;
        }

        /* BOTTOM INFO BLOCK (like the examples) */
        .big-info-box {
          margin-top: 3rem;
          padding: 2.2rem 2rem;
          background: rgba(255,255,255,0.94);
          border-radius: 1.75rem;
          box-shadow: 0 18px 38px rgba(0,0,0,.06);
        }
        .icon-circle-large {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: #cfe9ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          margin: auto;
        }
        .contact-line {
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.4;
        }
        .info-link {
          color: var(--navy);
          font-weight: 600;
          text-decoration: none;
        }
        .info-link:hover {
          color: var(--accent-blue);
          text-decoration: underline;
        }
        .inner-item {
          padding: 0.5rem .75rem;
        }
      `}</style>
    </div>
  );
}
