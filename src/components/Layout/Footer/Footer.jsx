import "./Footer.css";

const FOOTER_LINKS = ["Privacy Policy", "Terms of Service", "Support"];

// NOTE: Not part of the required Week 2 deliverable — see
// docs/week-2-notes.md for why this was added anyway.
function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 SANAD Clinical Systems. All rights reserved. </p>
      <div className="footer-links">
        {FOOTER_LINKS.map((link) => (
          <a href="#" key={link}>
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
