import { useRef, useState } from "react";

function BeforeAfterSlider({ image, preset }) {
    const [position, setPosition] = useState(50);
    const containerRef = useRef(null);

    const updatePosition = (clientX) => {
        const rect = containerRef.current.getBoundingClientRect();

        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;

        setPosition(Math.min(100, Math.max(0, percentage)));
    };

    const handlePointerDown = (e) => {
        e.preventDefault();

        const target = e.currentTarget;
        target.setPointerCapture(e.pointerId);

        updatePosition(e.clientX);
    };

    const handlePointerMove = (e) => {
        if (e.pressure === 0) return; // important mobile fix
        updatePosition(e.clientX);
    };

    const handlePointerUp = (e) => {
        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch { }
    };

    return (
        <div className="gallery-item" ref={containerRef}>
            <div className="ba-before">
                <img src={image} alt="Before" draggable="false" />
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
                        filter: "sepia(.12) brightness(1.05) saturate(1.2)"
                    }}
                />
            </div>

            <div className="ba-tag before">RAW</div>
            <div className="ba-tag after">Edited</div>

            <div
                className="ba-slider"
                style={{ left: `${position}%` }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
            />

            <div className="preset-label">{preset}</div>
        </div>
    );
}

export default BeforeAfterSlider;