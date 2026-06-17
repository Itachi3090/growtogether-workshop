import { useState } from "react";
import "./RegisterSeat.css";

function RegisterSeat() {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();

        // Later we will call API here

        setShowConfirmation(true);
    };

    return (
        <>
            <section className="booking" id="booking">
                <div className="booking-grid">
                    <div className="booking-left fade-in">
                        <p className="section-label">
                            Join the Workshop
                        </p>

                        <h2 className="section-title">
                            Reserve Your
                            <br />
                            <p>Seat</p>
                        </h2>

                        <div className="divider"></div>

                        <p>
                            Limited seats are available for each
                            cohort. Complete this form to secure
                            your place in the MMPF Grow Together
                            workshop.
                        </p>

                        <div className="booking-note">
                            <p>
                                <strong
                                    style={{
                                        color: "var(--warm-brown)",
                                        fontWeight: 500,
                                    }}
                                >
                                    Included with Registration:
                                </strong>

                                <br />

                                Full workshop access · MMPF
                                Signature Presets · 7-day preset
                                portal access · Certificate of
                                completion
                            </p>
                        </div>
                    </div>

                    <div className="fade-in">
                        <form
                            id="bookingForm"
                            onSubmit={submitForm}
                        >
                            <div className="form-group">
                                <label>Full Name</label>

                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="form-group">
                                <label>Address</label>

                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Your address"
                                />
                            </div>

                            <div className="form-grid-2">
                                <div className="form-group">
                                    <label>State</label>

                                    <input
                                        type="text"
                                        name="state"
                                        placeholder="Maharashtra"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>District</label>

                                    <input
                                        type="text"
                                        name="district"
                                        placeholder="Pune"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>
                                    Your Camera & Lenses
                                </label>

                                <input
                                    type="text"
                                    name="camera"
                                    placeholder="Sony A7III + 85mm + 35mm"
                                />

                                <p className="form-hint">
                                    List your primary camera body
                                    and lenses
                                </p>
                            </div>

                            <div className="form-group">
                                <label>
                                    Editing Platform
                                </label>

                                <select name="platform">
                                    <option value="">
                                        Select your platform
                                    </option>

                                    <option>
                                        Lightroom Classic
                                    </option>

                                    <option>
                                        Lightroom Basic
                                    </option>

                                    <option>Photoshop</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>
                                    Is your Lightroom Licensed?
                                </label>

                                <div className="radio-group">
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="licensed"
                                            value="Paid"
                                        />
                                        Paid (Licensed)
                                    </label>

                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="licensed"
                                            value="Pirated"
                                        />
                                        Pirated (We'll help you
                                        switch)
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>
                                    Why did you choose Grow
                                    Together?
                                </label>

                                <textarea
                                    name="reason"
                                    placeholder="Tell us what inspired you..."
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label>
                                    How did you come across us?
                                </label>

                                <select name="source">
                                    <option value="">
                                        Select a source
                                    </option>

                                    <option>Instagram</option>

                                    <option>WhatsApp</option>

                                    <option>
                                        Friend / Family Reference
                                    </option>

                                    <option>
                                        Previous Participant
                                    </option>

                                    <option>Other</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="btn-submit"
                            >
                                Reserve My Seat →
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {showConfirmation && (
                <div
                    className="confirmation"
                    id="confirmScreen"
                >
                    <div className="conf-logo">
                        Grow Together · MMPF
                    </div>

                    <div className="conf-icon">✓</div>

                    <h2 className="conf-title">
                        You're In.
                    </h2>

                    <p className="conf-sub">
                        Thank you for reserving your seat.
                        Our team will personally reach out
                        within 24 hours.
                    </p>

                    <div className="conf-divider"></div>

                    <div className="conf-contact">
                        <a
                            href="https://instagram.com"
                            className="conf-link"
                        >
                            📷 Instagram
                        </a>

                        <a
                            href="https://wa.me"
                            className="conf-link"
                        >
                            💬 WhatsApp
                        </a>

                        <a
                            href="mailto:hello@mmpf.in"
                            className="conf-link"
                        >
                            ✉ hello@mmpf.in
                        </a>
                    </div>

                    <button
                        className="btn-submit"
                        onClick={() =>
                            setShowConfirmation(false)
                        }
                    >
                        Close
                    </button>
                </div>
            )}
        </>
    );
}

export default RegisterSeat;