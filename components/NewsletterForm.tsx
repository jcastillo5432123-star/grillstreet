"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="glass-card grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <h3 className="heading-md text-sand">Join the Grill Street event list</h3>
      <p className="text-sm text-steel">
        Get invitations to showroom demos, seasonal promos, and grilling workshops.
      </p>
      <input
        className="form-input"
        type="email"
        name="email"
        aria-label="Email"
        placeholder="Email address"
        required
      />
      <button className="btn-primary" type="submit">
        Sign me up
      </button>
      {submitted && (
        <p className="rounded-2xl border border-ember/40 bg-ember/10 px-4 py-3 text-sm text-ember">
          You are on the list! We'll send the next event update soon.
        </p>
      )}
    </form>
  );
}
