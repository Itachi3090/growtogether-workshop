import "./Testimonials.css";

function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="test-header fade-in">
                <p className="section-label">
                    Student Stories
                </p>

                <h2 className="section-title">
                    Words from
                    <br />
                    <p>Those Who Grew</p>
                </h2>

                <div
                    className="divider"
                    style={{ margin: "28px auto" }}
                ></div>
            </div>

            <div className="video-grid fade-in">
                <div className="video-card">
                    <img
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&q=80"
                        alt="Student"
                    />

                    <div className="video-play"></div>

                    <div className="video-info">
                        <span className="name">
                            Priya Nair
                        </span>

                        <span className="city">
                            Kochi · Sony A7III
                        </span>
                    </div>
                </div>

                <div className="video-card">
                    <img
                        src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&q=80"
                        alt="Student"
                    />

                    <div className="video-play"></div>

                    <div className="video-info">
                        <span className="name">
                            Arjun Mehta
                        </span>

                        <span className="city">
                            Mumbai · Canon R6
                        </span>
                    </div>
                </div>

                <div className="video-card">
                    <img
                        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&q=80"
                        alt="Student"
                    />

                    <div className="video-play"></div>

                    <div className="video-info">
                        <span className="name">
                            Shreya Das
                        </span>

                        <span className="city">
                            Pune · Nikon Z6
                        </span>
                    </div>
                </div>
            </div>

            <div className="reviews-grid fade-in">
                <div className="review-card">
                    <div className="review-stars">
                        ★★★★★
                    </div>

                    <p className="review-quote">
                        "The Lightroom module alone changed
                        how I deliver to clients. My galleries
                        went from 'nice' to something clients
                        genuinely cry over."
                    </p>

                    <div className="review-author">
                        <span className="review-name">
                            Kavitha Reddy
                        </span>

                        <span className="review-meta">
                            Hyderabad · Sony A7IV
                        </span>
                    </div>
                </div>

                <div className="review-card">
                    <div className="review-stars">
                        ★★★★★
                    </div>

                    <p className="review-quote">
                        "I finally understand light. Not just
                        theoretically — I can walk into any
                        venue and immediately know where to
                        position my couple."
                    </p>

                    <div className="review-author">
                        <span className="review-name">
                            Rahul Sharma
                        </span>

                        <span className="review-meta">
                            Delhi · Canon R5
                        </span>
                    </div>
                </div>

                <div className="review-card">
                    <div className="review-stars">
                        ★★★★★
                    </div>

                    <p className="review-quote">
                        "The presets are professional-grade.
                        My workflow is now 60% faster and my
                        photos have never looked this
                        consistent."
                    </p>

                    <div className="review-author">
                        <span className="review-name">
                            Ananya Pillai
                        </span>

                        <span className="review-meta">
                            Bangalore · Nikon Z7
                        </span>
                    </div>
                </div>

                <div className="review-card">
                    <div className="review-stars">
                        ★★★★★
                    </div>

                    <p className="review-quote">
                        "MMPF taught me that composition isn't
                        a rule — it's a feeling."
                    </p>

                    <div className="review-author">
                        <span className="review-name">
                            Mohammed Rafi
                        </span>

                        <span className="review-meta">
                            Chennai · Sony A7III
                        </span>
                    </div>
                </div>

                <div className="review-card">
                    <div className="review-stars">
                        ★★★★★
                    </div>

                    <p className="review-quote">
                        "After this workshop, I invested in
                        the proper tools and my business
                        doubled in four months."
                    </p>

                    <div className="review-author">
                        <span className="review-name">
                            Deepa Krishnan
                        </span>

                        <span className="review-meta">
                            Kochi · Fujifilm X-T5
                        </span>
                    </div>
                </div>

                <div className="review-card">
                    <div className="review-stars">
                        ★★★★★
                    </div>

                    <p className="review-quote">
                        "The skin tone correction module
                        helped me deliver photos that my
                        brides absolutely love."
                    </p>

                    <div className="review-author">
                        <span className="review-name">
                            Vikram Joshi
                        </span>

                        <span className="review-meta">
                            Ahmedabad · Canon 5D Mark IV
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;