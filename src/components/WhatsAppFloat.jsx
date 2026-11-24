import { WHATSAPP_URL } from "../data/contact";
import "./WhatsAppFloat.css";

function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with JAMB Tool Box on WhatsApp (opens in a new tab)"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 3.5a12 12 0 0 0-10.3 18.1L4 28l6.6-1.7A12 12 0 1 0 16 3.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12.1 10.1c.3-.7.6-.7.9-.7h.7c.2 0 .4.1.5.4l1 2.3c.1.2.1.4 0 .6l-.6.8c-.2.2-.3.4-.1.7.7 1.2 1.7 2.2 3 2.8.3.2.5.1.7-.1l.9-1c.2-.2.4-.3.7-.2l2.2 1.1c.3.1.4.3.4.5 0 .5-.2 1.7-1 2.4-.7.6-1.6.9-2.5.7-1-.2-2.2-.7-3.9-1.7-2.1-1.3-3.5-2.9-4-4.1-.6-1.3-.3-2.5.2-3.3Z"
          fill="currentColor"
        />
      </svg>
      <span>Chat on WhatsApp</span>
    </a>
  );
}

export default WhatsAppFloat;
