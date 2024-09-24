// Import all images
const landing_images = [];
const tablet_front_images = [];
const tablet_side_images = [];


for (let i = 0; i <= 140; i++) {
    const index = String(i).padStart(5, '0'); // Pads the number with leading zeros to ensure it has 5 digits
    const image = require(`../imgs/PNG_Sequence/BR_Spinnninganm_${index}.png`);
    landing_images.push(image);
}

for (let i = 0; i <= 40; i++) {
    const index = String(i).padStart(5, '0'); // Pads the number with leading zeros to ensure it has 5 digits
    const image = require(`../imgs/TABFRONT_SEQ/BR_TabletFront_${index}.png`);
    tablet_front_images.push(image);
}

for (let i = 0; i <= 40; i++) {
    const index = String(i).padStart(5, '0'); // Pads the number with leading zeros to ensure it has 5 digits
    const image = require(`../imgs/TABSIDE_SEQ/BR_TabletSide_${index}.png`);
    tablet_side_images.push(image);
}


const images = { landing_images, tablet_front_images, tablet_side_images };
export default images;

