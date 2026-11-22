import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { profile } from "@/lib/portfolio";

const empty = { name: "", email: "", message: "" };

const fieldClass =
  "w-full border-b border-ivory/25 bg-transparent pb-2.5 pt-1 text-[14.5px] text-ivory placeholder:text-ivory/30 transition-colors duration-200 focus:border-flash focus:outline-none";

export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const update = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10) next.message = "Please add a little more detail (10 characters or more).";
    return next;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const body = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`;
    const query = new URLSearchParams({
      subject: `Portfolio inquiry from ${values.name.trim()}`,
      body,
    });
    window.location.href = `mailto:${profile.email}?${query}`;
    setStatus("drafted");
  };

  if (status === "drafted") {
    return (
      <div className="rounded-[3px] border border-ivory/20 p-6">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-flash text-flash">
          <Check className="h-4 w-4" />
        </span>
        <p className="mt-5 font-heading text-[20px] leading-tight text-ivory">Your email draft is ready.</p>
        <p className="mt-2 text-[14px] leading-relaxed text-ivory/60">
          Your email app should open with the message. If it doesn't, email me at{" "}
          <a className="underline underline-offset-2" href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ivory/60 underline decoration-ivory/30 underline-offset-4 transition-colors hover:text-flash"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="contact-name" className="meta-label block text-ivory/45">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={values.name}
          onChange={update("name")}
          placeholder="Your name"
          maxLength={120}
          aria-invalid={Boolean(errors.name)}
          className={`mt-2 ${fieldClass}`}
        />
        {errors.name && <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-flash">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className="meta-label block text-ivory/45">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={values.email}
          onChange={update("email")}
          placeholder="you@company.com"
          maxLength={160}
          aria-invalid={Boolean(errors.email)}
          className={`mt-2 ${fieldClass}`}
        />
        {errors.email && (
          <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-flash">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="meta-label block text-ivory/45">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={values.message}
          onChange={update("message")}
          placeholder="A role, a project, or a question…"
          maxLength={4000}
          aria-invalid={Boolean(errors.message)}
          className={`mt-2 resize-none ${fieldClass}`}
        />
        {errors.message && (
          <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-flash">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-[2px] bg-flash px-5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-ivory sm:w-auto"
      >
        Prepare email
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}