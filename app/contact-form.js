"use client";

import { useState } from "react";

// ──────────────────────────────────────────────
// 1. Go to https://web3forms.com
// 2. Enter zenposers@gmail.com
// 3. They'll email you an access key
// 4. Paste it below
// ──────────────────────────────────────────────
const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("access_key", WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("sent");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot spam trap — hidden from users, bots fill it */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
      />

      <div className="space-y-5">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="zen-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          required
          className="zen-input"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone / WhatsApp handle"
          className="zen-input"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          className="zen-input resize-y min-h-[80px]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 bg-ink text-parchment px-8 py-3 text-[13px] tracking-[0.08em] lowercase hover:opacity-85 transition-opacity disabled:opacity-50"
      >
        {status === "sending"
          ? "sending…"
          : status === "sent"
          ? "sent ✓"
          : status === "error"
          ? "error — retry"
          : "send"}
      </button>
    </form>
  );
}
