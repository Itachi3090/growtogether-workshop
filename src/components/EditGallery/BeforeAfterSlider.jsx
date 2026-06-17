import { useState } from "react";

function BeforeAfterSlider({ image, preset }) {
    const [position, setPosition] = useState(50);
    const [dragging, setDragging] = useState(false);

    const updatePosition = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const percentage = (x / rect.width) * 100;

        setPosition(
            Math.min(100, Math.max(0, percentage))
        );
    };

    return (
        <div
            className="gallery-item"
            onPointerDown={(e) => {
                setDragging(true);
                updatePosition(e);
            }}
            onPointerMove={(e) => {
                if (dragging) updatePosition(e);
            }}
            onPointerUp={() => setDragging(false)}
            onPointerLeave={() => setDragging(false)}
        >
            <div className="ba-before">
                <img
                    src={image}
                    alt="Before"
                    draggable="false"
                />
            </div>

            <div
                className="ba-after"
                style={{
                    clipPath: `inset(0 ${100 - position}% 0 0)`
                }}
            >
                <img
                    src={image}
                    alt="After"
                    draggable="false"
                    style={{
                        filter:
                            "sepia(.12) brightness(1.05) saturate(1.2)"
                    }}
                />
            </div>

            <div className="ba-tag before">
                RAW
            </div>

            <div className="ba-tag after">
                Edited
            </div>

            <div
                className="ba-slider"
                style={{
                    left: `${position}%`
                }}
            ></div>

            <div className="preset-label">
                {preset}
            </div>
        </div>
    );
}

export default BeforeAfterSlider;