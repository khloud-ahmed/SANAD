import "./Navbar.css";

const NAV_LINKS = ["Appointments", "Patients", "Providers", "Schedule", "Analytics", "Settings"];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <i className="fa-solid fa-house-medical"></i> SANAD
      </div>

      <nav className="navbar-links">
        {NAV_LINKS.map((link) => (
          <a href="#" key={link} className="navbar-link">
            {link}
          </a>
        ))}
      </nav>

      <div className="navbar-actions">
        <div className="navbar-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search appointments..." />
        </div>
        <button className="navbar-icon-btn" aria-label="Notifications">
          <i className="fa-regular fa-bell"></i>
        </button>
        <div className="navbar-avatar">SJ</div>
      </div>
    </header>
  );
}

export default Navbar;
