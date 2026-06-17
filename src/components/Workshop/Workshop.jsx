import "./Workshop.css";

function Workshop() {
    return (
        <section className="about" id="about">
            <div className="about-grid">
                <div className="about-image">
                    <img
                        src="src\assets\Workshop Images .jpg"
                        alt="Wedding Photography"
                        loading="lazy"
                    />
                </div>

                <div className="about-content fade-in">
                    <p className="section-label">
                        The Workshop
                    </p>

                    <h2 className="section-title">
                        More Than A
                        <br />
                        <p>Photography Workshop</p>
                    </h2>

                    <div className="divider"></div>

                    <p className="section-body">
                        This is a complete immersive experience in
                        the art and craft of wedding photography.
                        From understanding the golden hour to
                        delivering a polished gallery, you will
                        master every stage of the journey — as a
                        professional, as an artist, and as a
                        storyteller.
                    </p>

                    <ul className="about-list">
                        <li>Photography Fundamentals</li>
                        <li>Light Understanding</li>
                        <li>Exposure Mastery</li>
                        <li>Composition</li>
                        <li>Storytelling</li>
                        <li>Lightroom Workflow</li>
                        <li>Color Grading</li>
                        <li>Preset Usage</li>
                        <li>Client Delivery</li>
                        <li>Consistent Tones</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Workshop;