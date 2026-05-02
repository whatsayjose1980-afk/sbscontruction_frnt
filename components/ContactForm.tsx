"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      projectType: String(data.get("projectType") ?? ""),
      message: String(data.get("message") ?? "").trim(),
    };

    const nextErrors: Errors = {};
    if (!payload.name) nextErrors.name = "Please enter your name.";
    if (!payload.email) nextErrors.email = "Please enter your email.";
    else if (!EMAIL_RE.test(payload.email))
      nextErrors.email = "Please enter a valid email address.";
    if (!payload.message) nextErrors.message = "Please tell us about your project.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 sm:p-10 ring-1 ring-brand-border shadow-sm text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent text-2xl">
          ✓
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold text-brand-primary">
          Thanks — we&apos;ve received your message.
        </h3>
        <p className="mt-2 text-brand-muted">
          A member of our team will reach out within one business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setState("idle");
            setErrors({});
          }}
          className="mt-6 inline-flex h-10 items-center rounded-full border border-brand-border px-5 text-sm font-semibold text-brand-primary transition hover:bg-brand-light"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl bg-white p-6 sm:p-10 ring-1 ring-brand-border shadow-sm space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Full name"
          name="name"
          type="text"
          autoComplete="name"
          error={errors.name}
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          error={errors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Phone (optional)"
          name="phone"
          type="tel"
          autoComplete="tel"
        />
        <SelectField
          label="Project type"
          name="projectType"
          options={[
            "Residential",
            "Commercial",
            "Infrastructure",
            "Consultancy",
            "Other",
          ]}
        />
      </div>

      <TextareaField
        label="Tell us about your project"
        name="message"
        rows={5}
        error={errors.message}
        required
      />

      {state === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your message. Please try again or call us
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-brand-accent px-8 text-base font-semibold text-white shadow-md shadow-brand-accent/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
      >
        {state === "submitting" ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  error?: string;
  required?: boolean;
};

function Field({ label, name, type, autoComplete, error, required }: FieldProps) {
  const id = `f-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-brand-primary"
      >
        {label}
        {required && <span className="text-brand-accent"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-1.5 block w-full rounded-lg border border-brand-border bg-white px-3.5 py-2.5 text-brand-dark placeholder:text-brand-muted/70 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  const id = `f-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-brand-primary"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        className="mt-1.5 block w-full rounded-lg border border-brand-border bg-white px-3.5 py-2.5 text-brand-dark focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextareaField({
  label,
  name,
  rows,
  error,
  required,
}: {
  label: string;
  name: string;
  rows: number;
  error?: string;
  required?: boolean;
}) {
  const id = `f-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-brand-primary"
      >
        {label}
        {required && <span className="text-brand-accent"> *</span>}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-1.5 block w-full rounded-lg border border-brand-border bg-white px-3.5 py-2.5 text-brand-dark placeholder:text-brand-muted/70 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
