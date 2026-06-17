import "./Curriculum.css";

function Curriculum() {
    return (
        <section className="curriculum" id="curriculum">
            <div className="curriculum-header fade-in">
                <p className="section-label">
                    What You Will Learn
                </p>

                <h2 className="section-title">
                    The Complete
                    <br />
                    <p>Curriculum</p>
                </h2>

                <div
                    className="divider"
                    style={{ margin: "28px auto" }}
                ></div>

                <p
                    className="section-body"
                    style={{
                        maxWidth: "560px",
                        margin: "0 auto",
                    }}
                >
                    Ten carefully structured modules designed
                    to elevate your photography from technical
                    to deeply artistic.
                </p>
            </div>

            <div className="curriculum-grid fade-in">
                <div className="curr-card">
                    <span className="curr-icon">📷</span>
                    <div className="curr-name">
                        Camera Mastery
                    </div>
                    <p className="curr-desc">
                        Manual mode, settings, and camera
                        intelligence for real wedding conditions.
                    </p>
                </div>

                <div className="curr-card">
                    <span className="curr-icon">☀️</span>
                    <div className="curr-name">
                        Lighting Sense
                    </div>
                    <p className="curr-desc">
                        Read and shape natural light. Find the
                        magic in every scene.
                    </p>
                </div>

                <div className="curr-card">
                    <span className="curr-icon">◻</span>
                    <div className="curr-name">
                        Composition
                    </div>
                    <p className="curr-desc">
                        Rule of thirds, negative space, and
                        visual flow for editorial frames.
                    </p>
                </div>

                <div className="curr-card">
                    <span className="curr-icon">❤</span>
                    <div className="curr-name">
                        Storytelling
                    </div>
                    <p className="curr-desc">
                        Capture emotion, candid moments, and
                        narrative arcs across a wedding day.
                    </p>
                </div>

                <div className="curr-card">
                    <span className="curr-icon">💍</span>
                    <div className="curr-name">
                        Wedding Workflow
                    </div>
                    <p className="curr-desc">
                        Full day coverage strategy, backup
                        systems, and professional approach.
                    </p>
                </div>

                <div className="curr-card">
                    <span className="curr-icon">✦</span>
                    <div className="curr-name">
                        Lightroom Editing
                    </div>
                    <p className="curr-desc">
                        Develop module mastery, batch editing,
                        and professional retouching.
                    </p>
                </div>

                <div className="curr-card">
                    <span className="curr-icon">🎨</span>
                    <div className="curr-name">
                        Color Science
                    </div>
                    <p className="curr-desc">
                        HSL, curves, color wheels, and building
                        a signature color story.
                    </p>
                </div>

                <div className="curr-card">
                    <span className="curr-icon">✧</span>
                    <div className="curr-name">
                        Skin Tone Correction
                    </div>
                    <p className="curr-desc">
                        Natural, flattering skin tones across
                        all Indian skin tones and lighting.
                    </p>
                </div>

                <div className="curr-card">
                    <span className="curr-icon">▽</span>
                    <div className="curr-name">
                        Preset Creation
                    </div>
                    <p className="curr-desc">
                        Build your own presets and develop a
                        signature editing identity.
                    </p>
                </div>

                <div className="curr-card">
                    <span className="curr-icon">✉</span>
                    <div className="curr-name">
                        Client Delivery
                    </div>
                    <p className="curr-desc">
                        Gallery curation, export settings, and
                        presenting your work professionally.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Curriculum;