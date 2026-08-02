import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tape } from './ScrapbookComponents';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden" id="contact">
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="font-pixel text-xs text-[var(--gold)] uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
            <span>✉️</span> TRANSMIT A MESSAGE
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[var(--ink)]">
            Let's Connect & Build
          </h2>
          <p className="font-body text-base text-[var(--ink-secondary)] mt-2">
            Open for React Native engineering roles, mobile app builds, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start w-full">
          {/* Left Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4 w-full">
            <div className="bg-[var(--paper-raised)] border-2 border-[var(--border-color)] p-5 rounded-md shadow-sm relative">
              <Tape variant="kraft" position="top-left" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[var(--kraft)] border border-[var(--border-color)] flex items-center justify-center text-xl">
                  ✉️
                </div>
                <div>
                  <div className="font-pixel text-[10px] text-[var(--ink-muted)] uppercase">DIRECT EMAIL</div>
                  <a href="mailto:sanketnehe21@gmail.com" className="font-mono text-sm font-bold text-[var(--ink)] hover:text-[var(--gold)]">
                    sanketnehe21@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[var(--paper-raised)] border-2 border-[var(--border-color)] p-5 rounded-md shadow-sm relative">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[var(--kraft)] border border-[var(--border-color)] flex items-center justify-center text-xl">
                  📞
                </div>
                <div>
                  <div className="font-pixel text-[10px] text-[var(--ink-muted)] uppercase">PHONE / WHATSAPP</div>
                  <a href="tel:+919309367739" className="font-mono text-sm font-bold text-[var(--ink)] hover:text-[var(--gold)]">
                    +91 93093 67739
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[var(--paper-raised)] border-2 border-[var(--border-color)] p-5 rounded-md shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[var(--kraft)] border border-[var(--border-color)] flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <div className="font-pixel text-[10px] text-[var(--ink-muted)] uppercase">LOCATION</div>
                  <div className="font-mono text-sm font-bold text-[var(--ink)]">Mumbai, India</div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--paper-raised)] border-2 border-[var(--border-color)] p-5 rounded-md shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[var(--kraft)] border border-[var(--border-color)] flex items-center justify-center text-xl">
                  🐙
                </div>
                <div>
                  <div className="font-pixel text-[10px] text-[var(--ink-muted)] uppercase">GITHUB REPOSITORY</div>
                  <a href="https://github.com/Sanketnehe-21" target="_blank" rel="noreferrer" className="font-mono text-sm font-bold text-[var(--ink)] hover:text-[var(--gold)]">
                    github.com/Sanketnehe-21
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[var(--paper-raised)] border-2 border-[var(--border-color)] p-8 rounded-md shadow-md relative w-full">
              <Tape variant="forest" position="top-right" />

              <h3 className="font-heading text-2xl font-bold text-[var(--ink)] mb-6 border-b-2 border-dashed border-[var(--border-color)] pb-3">
                Send a Desk Transmission
              </h3>

              {submitted && (
                <div className="bg-[var(--forest)]/10 border-2 border-[var(--forest)] text-[var(--forest)] p-4 rounded font-mono text-xs mb-6">
                  ✓ Thank you! Your transmission has been dispatched. I will reply shortly!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 font-body text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-pixel text-[10px] text-[var(--ink-muted)] block uppercase mb-1">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[var(--kraft)] border-2 border-[var(--border-color)] rounded p-3 font-mono text-xs text-[var(--ink)] focus:outline-none focus:border-[var(--gold)]"
                    />
                  </div>
                  <div>
                    <label className="font-pixel text-[10px] text-[var(--ink-muted)] block uppercase mb-1">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[var(--kraft)] border-2 border-[var(--border-color)] rounded p-3 font-mono text-xs text-[var(--ink)] focus:outline-none focus:border-[var(--gold)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-pixel text-[10px] text-[var(--ink-muted)] block uppercase mb-1">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[var(--kraft)] border-2 border-[var(--border-color)] rounded p-3 font-mono text-xs text-[var(--ink)] focus:outline-none focus:border-[var(--gold)]"
                  />
                </div>

                <div>
                  <label className="font-pixel text-[10px] text-[var(--ink-muted)] block uppercase mb-1">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your mobile app project or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[var(--kraft)] border-2 border-[var(--border-color)] rounded p-3 font-mono text-xs text-[var(--ink)] focus:outline-none focus:border-[var(--gold)]"
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-wood w-full py-3.5 text-center text-sm">
                  {loading ? 'SENDING TRANSMISSION...' : 'SEND TRANSMISSION ✉️'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
