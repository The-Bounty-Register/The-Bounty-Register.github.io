// Import all images
const images = [];

for (let i = 1; i <= 140; i++) {
    const index = String(i).padStart(5, '0'); // Pads the number with leading zeros to ensure it has 5 digits
    const image = require(`../imgs/PNG_Sequence/BR_Spinnninganm_${index}.png`);
    images.push(image);
}

export default images;
