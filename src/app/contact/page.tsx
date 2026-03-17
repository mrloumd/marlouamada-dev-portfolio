"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/Buttons";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mrlou.md@gmail.com",
    href: "mailto:mrlou.md@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Iloilo City, Philippines",
    href: null,
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mrloumd",
    Icon: GitHubIcon,
    username: "@mrloumd",
  },
  {
    label: "LinkedIn",
    href: "linkedin.com/in/mrlou-m",
    Icon: LinkedInIcon,
    username: "Marlou Amada",
  },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(
          data.error ?? "Something went wrong. Please try again.",
        );
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50 transition-all duration-200";

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-light mb-4">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-50 tracking-tight mb-4">
              Let&apos;s work together
            </h1>
            <p className="text-zinc-400 max-w-xl leading-relaxed">
              I&apos;m open to full-time roles, contracts, and interesting
              collaborations. Drop me a message and I&apos;ll get back to you
              within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-5">
                  Contact Info
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-brand-light" />
                        </div>
                        <div>
                          <p className="text-xs text-zinc-600 mb-0.5">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-zinc-300 text-sm hover:text-brand-light transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-zinc-300 text-sm">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-5">
                  Socials
                </h2>
                <div className="space-y-3">
                  {socialLinks.map((s) => {
                    const Icon = s.Icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-brand/40 hover:bg-zinc-800/60 transition-all group"
                      >
                        <Icon className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                        <div>
                          <p className="text-xs text-zinc-600">{s.label}</p>
                          <p className="text-sm text-zinc-300 font-medium">
                            {s.username}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.1} className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-64 text-center py-16">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                    Message sent!
                  </h3>
                  <p className="text-zinc-500 mb-6">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    variant="outline"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry / Job opportunity / etc."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full sm:w-auto"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                    {error && <p className="text-sm text-red-400">{error}</p>}
                  </div>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
