import "./EditGallery.css";
import BeforeAfterSlider from "./BeforeAfterSlider";

function EditGallery() {
  return (
    <section
      className="gallery-section"
      id="gallery"
    >
      <div className="gallery-header">
        <p className="section-label">
          Lightroom Showcase
        </p>

        <h2 className="section-title">
          The Edit
          <br />
          <em
            style={{
              color: "var(--taupe)"
            }}
          >
            Makes the Story
          </em>
        </h2>

        <div
          className="divider"
          style={{
            background: "var(--taupe)",
            margin: "28px auto"
          }}
        ></div>

        <p
          className="section-body"
          style={{
            color:
              "rgba(255,255,255,0.5)",
            maxWidth: "520px",
            margin: "0 auto"
          }}
        >
          Drag the slider to reveal the
          transformation from RAW capture to
          finished image using MMPF signature
          presets.
        </p>
      </div>

      <div className="gallery-grid">
        <BeforeAfterSlider
          image="https://images.unsplash.com/photo-1525438160292-a4a860951216?w=600&q=80"
          preset="Golden Hour Preset"
        />

        <BeforeAfterSlider
          image="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80"
          preset="Wedding Day Preset"
        />

        <BeforeAfterSlider
          image="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80"
          preset="Reception Preset"
        />

        <BeforeAfterSlider
          image="https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=600&q=80"
          preset="Indoor Ceremony Preset"
        />

        <BeforeAfterSlider
          image="https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=600&q=80"
          preset="Portrait Preset"
        />

        <BeforeAfterSlider
          image="https://images.unsplash.com/photo-1548704806-0c6b45a8b7c6?w=600&q=80"
          preset="Golden Hour Preset"
        />
      </div>
    </section>
  );
}

export default EditGallery;