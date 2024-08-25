import React, { useRef, useEffect, useState } from "react";
import images from "../data/landing_images";

const CanvasAnimation = ({ frameRate = 25 }) => {
    const canvasRef = useRef(null);
    const animationFrameIdRef = useRef(null);
    const [loadedImages, setLoadedImages] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const loaded = await Promise.all(
                images.map((src) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = src;
                        img.onload = () => resolve(img);
                    });
                })
            );
            setLoadedImages(loaded);
        };
        loadImages();
    }, []);

    useEffect(() => {
        if (loadedImages.length === 0 || !canvasRef.current) return;

        const ctx = canvasRef.current.getContext("2d");
        let currentFrame = 0;
        let lastFrameTime = Date.now();

        const drawFrame = () => {
            const now = Date.now();
            const elapsed = now - lastFrameTime;

            if (!canvasRef.current) return; // Ensure canvasRef is valid
            if (!canvasRef.current.width) return; // Ensure width is valid

            if (elapsed > 1000 / frameRate) {
                lastFrameTime = now;
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                ctx.drawImage(
                    loadedImages[currentFrame],
                    0,
                    0,
                    canvasRef.current.width,
                    canvasRef.current.height
                );
                currentFrame = (currentFrame + 1) % loadedImages.length;
            }

            animationFrameIdRef.current = requestAnimationFrame(drawFrame);
        };

        drawFrame();

        return () => {
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, [loadedImages, frameRate]);

    return <canvas ref={canvasRef} width="1056" height="594" />;
};

export default CanvasAnimation;
