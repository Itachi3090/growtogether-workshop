import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg"></div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">
          MMPF — A Photography Education
        </p>

        <h1 className="hero-title">
          Grow Together
        </h1>

        <p className="hero-sub">
          Master the art of wedding photography,
          lighting, composition, storytelling,
          and Lightroom color grading.
        </p>

        <p className="hero-support">
          Learn how to create timeless wedding
          photographs with professional editing
          techniques, signature color tones,
          and industry-proven workflows.
        </p>

        <div className="hero-actions">
          <a href="#register-seat" className="btn-primary">
            Reserve Your Seat
          </a>

          <a href="#workshop" className="btn-outline">
            Explore Workshop
          </a>
        </div>
      </div>

      {/* <div className="scroll-hint">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div> */}
    </section>
  );
}

export default HeroSection;