import React, { useEffect, useRef, useState } from "react";

const ScrollAnimation = ({ images, id }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageRef = useRef(null);

    const updateImageIndex = () => {
        if (!imageRef.current) return;

        const boundingRect = imageRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate how much of the element is within the viewport
        const visibleTop = Math.max(0, boundingRect.top);
        const visibleBottom = Math.min(viewportHeight, boundingRect.bottom);
        const visibleHeight = visibleBottom - visibleTop;

        // Calculate how far into the viewport the element is
        const elementInView = (visibleHeight / viewportHeight);

        // Calculate the percentage of the element's visibility
        const scrollPosition = (viewportHeight - boundingRect.top) / (viewportHeight + boundingRect.height);

        // Map scroll position to the corresponding image in the sequence
        const newIndex = Math.min(images.length - 1, Math.max(0, Math.floor(scrollPosition * images.length)));
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const handleScroll = () => {
            updateImageIndex();
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll); // Update on resize as well

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [images]);

    return (
        <img
            ref={imageRef}
            className="scrollAnimationImage"
            src={images[currentIndex]}
            alt="sequence"
            id={id}
        />
    );
};

export default ScrollAnimation;
