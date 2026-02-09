"use client";

import { useState } from "react";

const projectTypes = [
  "Outdoor Kitchen",
  "Grill",
  "Outdoor Refrigeration / Coolers",
  "Pizza Oven",
  "Accessories / Knives",
  "Other"
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="glass-card">
      <h3 className="heading-md text-sand">Request your consultation</h3>
      <p className="mt-2 text-sm text-steel">
        Tell us about your outdoor kitchen or grilling goals. We will respond within one business day.
      </p>
      <form
        className="mt-6 grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="form-input" name="name" placeholder="Name" aria-label="Name" required />
          <input className="form-input" name="phone" placeholder="Phone" aria-label="Phone" required />
        </div>
        <input className="form-input" name="email" placeholder="Email" aria-label="Email" type="email" required />
        <select className="form-select" name="project" aria-label="Project Type" required>
          <option value="">Project Type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-steel">
            <input type="radio" name="contactMethod" value="Call" className="accent-ember" />
            Call
          </label>
          <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-steel">
            <input type="radio" name="contactMethod" value="Text" className="accent-ember" />
            Text
          </label>
          <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-steel">
            <input type="radio" name="contactMethod" value="Email" className="accent-ember" />
            Email
          </label>
        </div>
        <textarea
          className="form-textarea min-h-[120px]"
          name="message"
          placeholder="Tell us about your backyard vision"
          aria-label="Message"
          required
        />
        <button className="btn-primary w-full" type="submit">
          Submit Request
        </button>
        {submitted && (
          <p className="rounded-2xl border border-ember/40 bg-ember/10 px-4 py-3 text-sm text-ember">
            Thanks! Your request is on the way. We will contact you shortly.
          </p>
        )}
      </form>
    </div>
  );
}
