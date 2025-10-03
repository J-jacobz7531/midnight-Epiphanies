import React from "react";

const EMAIL_TO = "info@ophelholdings.org";

const gmailHref = (to: string, subject: string, body: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    to
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const outlookHref = (to: string, subject: string, body: string) =>
  `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
    to
  )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const mailtoHref = (to: string, subject: string, body: string) =>
  `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

type Provider = "gmail" | "outlook" | "default";

const ContactQuickSend: React.FC = () => {
  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [reason, setReason] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [menuOpen, setMenuOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  const fieldBase =
    "w-full px-3 py-3 bg-transparent border-b-2 text-ig-off-white " +
    "placeholder:italic placeholder:text-gray-400/60 " + // faint + italic placeholders
    "transition-all duration-200 ease-out " +
    "focus:outline-none focus:border-ig-accent-teal focus:ring-2 focus:ring-ig-accent-teal/30 " +
    "focus:shadow-lg/10 focus:translate-y-[-1px] focus:scale-[1.01]"; // subtle motion

  const buildSubject = () => (reason.trim() ? reason.trim() : "Inquiry from Website");

  const buildBody = () => {
    const headerLine = `My name is ${first || "[First Name]"} ${last || "[Last Name]"} from ${
      company || "[Company]"
    }, and I am reaching out in regards to ${reason || "[Reason/Subject]"}.`;
    const body = message ? `\n\n${message}` : "\n\n[Your message here]";
    const contactLine = `\n\nYou can reach me on ${contact || "[Phone Number]"} or by email at ${
      email || "[Email Address]"
    }.`;
    const footer = `\n\n— Sent from ophelholdings.org`;
    return `${headerLine}${body}${contactLine}${footer}`;
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!first.trim()) e.first = "Please enter your first name.";
    if (!last.trim()) e.last = "Please enter your last name.";
    if (!company.trim()) e.company = "Please enter your company.";
    if (!reason.trim()) e.reason = "Please enter the reason/subject.";
    if (!message.trim()) e.message = "Please enter your message.";
    if (!contact.trim()) e.contact = "Please enter your contact number.";
    if (!email.trim()) e.email = "Please enter your email address.";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = "Invalid email address.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const openWithProvider = (provider: Provider) => {
    const subject = buildSubject();
    const body = buildBody();
    let href = "";
    if (provider === "gmail") href = gmailHref(EMAIL_TO, subject, body);
    else if (provider === "outlook") href = outlookHref(EMAIL_TO, subject, body);
    else href = mailtoHref(EMAIL_TO, subject, body);
    window.open(href, "_blank", "noopener,noreferrer");
    setMenuOpen(false);
  };

  const handleSendClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setMenuOpen((s) => !s);
  };

  React.useEffect(() => {
    const handler = (ev: MouseEvent) => {
      if (!buttonRef.current) return;
      const target = ev.target as Node;
      if (!buttonRef.current.contains(target)) setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [menuOpen]);

  return (
    <form className="space-y-4">
      {/* First and Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="group">
          <label className="block text-sm text-gray-300 mb-1 transition-colors group-focus-within:text-ig-accent-teal">
            First Name
          </label>
          <input
            className={`${fieldBase} ${errors.first ? "border-red-500" : "border-gray-500"}`}
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            placeholder="Christina"
          />
          {errors.first && <p className="text-xs text-red-500 mt-1">{errors.first}</p>}
        </div>

        <div className="group">
          <label className="block text-sm text-gray-300 mb-1 transition-colors group-focus-within:text-ig-accent-teal">
            Last Name
          </label>
          <input
            className={`${fieldBase} ${errors.last ? "border-red-500" : "border-gray-500"}`}
            value={last}
            onChange={(e) => setLast(e.target.value)}
            placeholder="Woodlock"
          />
          {errors.last && <p className="text-xs text-red-500 mt-1">{errors.last}</p>}
        </div>
      </div>

      {/* Company */}
      <div className="group">
        <label className="block text-sm text-gray-300 mb-1 transition-colors group-focus-within:text-ig-accent-teal">
          Company
        </label>
        <input
          className={`${fieldBase} ${errors.company ? "border-red-500" : "border-gray-500"}`}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Fleming Sesame"
        />
        {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
      </div>

      {/* Contact Number */}
      <div className="group">
        <label className="block text-sm text-gray-300 mb-1 transition-colors group-focus-within:text-ig-accent-teal">
          Contact Number
        </label>
        <input
          className={`${fieldBase} ${errors.contact ? "border-red-500" : "border-gray-500"}`}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="+254 700 000 000"
        />
        {errors.contact && <p className="text-xs text-red-500 mt-1">{errors.contact}</p>}
      </div>

      {/* Email Address */}
      <div className="group">
        <label className="block text-sm text-gray-300 mb-1 transition-colors group-focus-within:text-ig-accent-teal">
          Email Address
        </label>
        <input
          type="email"
          className={`${fieldBase} ${errors.email ? "border-red-500" : "border-gray-500"}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="christina@flemingsesame.llc"
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>

      {/* Reason */}
      <div className="group">
        <label className="block text-sm text-gray-300 mb-1 transition-colors group-focus-within:text-ig-accent-teal">
          Reason / Subject
        </label>
        <input
          className={`${fieldBase} ${errors.reason ? "border-red-500" : "border-gray-500"}`}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Product inquiry"
        />
        {errors.reason && <p className="text-xs text-red-500 mt-1">{errors.reason}</p>}
      </div>

      {/* Message */}
      <div className="group">
        <label className="block text-sm text-gray-300 mb-1 transition-colors group-focus-within:text-ig-accent-teal">
          Message
        </label>
        <textarea
          rows={4}
          className={`${fieldBase} ${errors.message ? "border-red-500" : "border-gray-500"} resize-none`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="To have 1000 tonnes of Coffee delivered to Singapore"
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      {/* Send Button + Dropdown */}
      <div className="relative inline-block">
        <button
          ref={buttonRef}
          onClick={handleSendClick}
          className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-ig-accent-teal text-ig-off-white 
                     hover:bg-ig-accent-teal/10 transition-all duration-200 
                     hover:shadow-lg hover:-translate-y-[1px]"
        >
          Send
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Animated dropdown */}
        <div
          className={`absolute z-20 mt-2 w-56 rounded-md bg-[#1f2937] border border-gray-700 shadow-lg origin-top-left
                     transition-all duration-150 ease-out
                     ${menuOpen ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"}`}
        >
          <div className="py-1 text-sm text-gray-200">
            <p className="px-4 py-2 text-gray-400">Send with:</p>
            <button
              type="button"
              onClick={() => openWithProvider("gmail")}
              className="w-full text-left px-4 py-2 hover:bg-[#111827] transition-colors"
            >
              Gmail
            </button>
            <button
              type="button"
              onClick={() => openWithProvider("outlook")}
              className="w-full text-left px-4 py-2 hover:bg-[#111827] transition-colors"
            >
              Outlook
            </button>
            <button
              type="button"
              onClick={() => openWithProvider("default")}
              className="w-full text-left px-4 py-2 hover:bg-[#111827] transition-colors"
            >
              Default Email Client
            </button>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-3">
        We’ll open your selected email provider with your message prefilled. No data is stored on our servers.
      </p>
    </form>
  );
};

export default ContactQuickSend;
