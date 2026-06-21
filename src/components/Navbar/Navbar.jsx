import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}
      id="mainNav">
      <a href="#hero" className="nav-logo">
        Grow Together
      </a>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#gallery">Gallery</a>
        </li>

        <li>
          <a href="#about">Workshop</a>
        </li>

        <li>
          <a href="#curriculum">Curriculum</a>
        </li>

        <li>
          <a href="#testimonials">Stories</a>
        </li>

        {/* <li>
          <a href="#">Admin</a>
        </li> */}
      </ul>

      <a href="#booking" className="nav-cta">
        Reserve Seat
      </a>
    </nav>
  );
}

export default Navbar;