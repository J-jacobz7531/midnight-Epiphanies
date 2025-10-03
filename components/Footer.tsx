import React from "react";

const EMAIL = "info@ophelholdings.org";
const SUBJECT = "Inquiry from Ophel Holdings Website";
const ENCODED_SUBJECT = encodeURIComponent(SUBJECT);

// ✅ Gmail compose link
const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${ENCODED_SUBJECT}`;

// ✅ Outlook compose link
const outlookComposeHref = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
  EMAIL
)}&subject=${ENCODED_SUBJECT}`;

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-ig-dark text-ig-off-white pt-24 md:pt-32 pb-16"
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <a href="/" aria-label="Ophel Holdings Home">
              <img
                src="/OphelHoldings.png"
                alt="Ophel Holdings Logo"
                className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto mb-6"
                loading="lazy"
              />
            </a>
            <p className="text-sm text-gray-400">
              &copy; {year} Ophel Holdings.{" "}
              <a href="/privacy" className="underline hover:text-white">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="/terms" className="underline hover:text-white">
                Terms & Conditions
              </a>
            </p>
          </div>

          {/* Contact + Social */}
          <div className="md:col-span-8">
            <h2
              id="footer-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2"
            >
              Let's Connect!
            </h2>
            <p className="text-gray-300 font-light mb-6 text-sm sm:text-base">
              Join our network of game changers.
            </p>

            <address className="not-italic text-gray-300 font-light leading-relaxed mb-6">
              <p className="mb-2">
                For inquiries, collaborations, or more information, reach out to us:
              </p>

              <div className="flex items-center gap-3 sm:gap-4 mt-4">
                {/* ✅ Gmail Icon Button */}
                <a
                  href={gmailComposeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Compose an email using Gmail"
                  className="transition-transform hover:scale-110"
                >
                  <img
                    src="/gmail.png"
                    alt="Gmail"
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 hover:opacity-90"
                    loading="lazy"
                  />
                </a>

                {/* ✅ Outlook Icon Button */}
                <a
                  href={outlookComposeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Compose an email using Outlook"
                  className="transition-transform hover:scale-110"
                >
                  <img
                    src="/outlook.png"
                    alt="Outlook"
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 hover:opacity-90"
                    loading="lazy"
                  />
                </a>

                {/* ✅ LinkedIn Icon Button */}
                <a
                  href="https://www.linkedin.com/in/jordan-muhwezi-8aaa5637a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  aria-label="Visit our LinkedIn page"
                >
                  <img
                    src="/Link.png"
                    alt="LinkedIn"
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 hover:opacity-90"
                    loading="lazy"
                  />
                </a>
              </div>
            </address>

            <p className="mt-2 text-sm">Brisbane | Kampala | Luanda</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
