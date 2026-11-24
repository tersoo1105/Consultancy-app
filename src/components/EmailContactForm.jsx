import { useState } from "react";
import "./EmailContactForm.css";

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() ?? "";
const validFormspreeEndpoint =
  /^https:\/\/formspree\.io\/f\/[\w-]+\/?$/i.test(formspreeEndpoint);

function EmailContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setStatus({ type: "", message: "" });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validFormspreeEndpoint) {
      setStatus({
        type: "error",
        message:
          "Email delivery is not connected yet. Configure a valid Formspree endpoint to enable this form.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) {
        const details = Array.isArray(result.errors)
          ? result.errors.map((error) => error.message).join(" ")
          : "";
        setStatus({
          type: "error",
          message: details || "Your message could not be sent. Please try again.",
        });
        return;
      }

      setForm({ name: "", email: "", subject: "", message: "" });
      setStatus({
        type: "success",
        message: "Thanks for your message. It has been sent successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Unable to send your message right now. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="email-contact-card">
      <form className="email-contact-form" onSubmit={handleSubmit}>
        <div className="email-contact-fields">
          <label>
            Your name
            <input
              autoComplete="name"
              maxLength="100"
              name="name"
              onChange={updateField}
              placeholder="Your name"
              required
              value={form.name}
            />
          </label>
          <label>
            Email address
            <input
              autoComplete="email"
              maxLength="254"
              name="email"
              onChange={updateField}
              placeholder="you@example.com"
              required
              type="email"
              value={form.email}
            />
          </label>
        </div>
        <label>
          Subject
          <input
            maxLength="150"
            name="subject"
            onChange={updateField}
            placeholder="What is your message about?"
            required
            value={form.subject}
          />
        </label>
        <label>
          Message
          <textarea
            maxLength="5000"
            name="message"
            onChange={updateField}
            placeholder="Write your message here..."
            required
            rows="5"
            value={form.message}
          />
        </label>
        {!validFormspreeEndpoint && (
          <p className="email-contact-notice" role="status">
            This form is ready, but email delivery still needs a Formspree
            endpoint. See the setup instructions in the project README.
          </p>
        )}
        {status.message && (
          <p
            className={`email-contact-status email-contact-status-${status.type}`}
            role={status.type === "error" ? "alert" : "status"}
          >
            {status.message}
          </p>
        )}
        <button
          className="email-contact-submit"
          disabled={!validFormspreeEndpoint || isSending}
          type="submit"
        >
          {isSending ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
}

export default EmailContactForm;
