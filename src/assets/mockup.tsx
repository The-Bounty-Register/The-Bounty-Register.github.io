
import React, { useState, useEffect } from "react";

// const AppMockup = () => {
//   return (
//     <svg width="100%" height="100%" viewBox="0 0 320 600" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <rect width="320" height="600" rx="32" fill="#1A1A1A" />
      
//       {/* Status Bar */}
//       <rect y="0" width="320" height="40" fill="#282828" />
//       <circle cx="24" cy="20" r="4" fill="#0EA5E9" />
//       <rect x="34" y="18" width="60" height="4" rx="2" fill="#666666" />
//       <rect x="220" y="18" width="30" height="4" rx="2" fill="#666666" />
//       <rect x="260" y="18" width="20" height="4" rx="2" fill="#666666" />
//       <rect x="290" y="18" width="10" height="4" rx="2" fill="#666666" />
      
//       {/* App Header */}
//       <rect y="40" width="320" height="60" fill="#1A1A1A" />
//       <rect x="20" y="60" width="120" height="8" rx="4" fill="#0EA5E9" />
//       <circle cx="280" cy="70" r="16" fill="#333333" />
//       <rect x="274" y="64" width="12" height="12" rx="6" fill="#555555" />
      
//       {/* Navigation Tabs */}
//       <rect y="540" width="320" height="60" fill="#282828" />
//       <circle cx="60" cy="570" r="20" fill="#333333" />
//       <rect x="54" y="564" width="12" height="12" rx="2" fill="#0EA5E9" />
//       <circle cx="160" cy="570" r="20" fill="#333333" />
//       <rect x="154" y="564" width="12" height="12" rx="2" fill="#555555" />
//       <circle cx="260" cy="570" r="20" fill="#333333" />
//       <rect x="254" y="564" width="12" height="12" rx="2" fill="#555555" />
      
//       {/* Machine Booking Cards */}
//       <rect x="20" y="120" width="280" height="90" rx="12" fill="rgba(14, 165, 233, 0.1)" />
//       <rect x="36" y="140" width="40" height="40" rx="8" fill="rgba(14, 165, 233, 0.3)" />
//       <rect x="90" y="146" width="100" height="8" rx="4" fill="#FFFFFF" />
//       <rect x="90" y="166" width="160" height="4" rx="2" fill="#666666" />
//       <circle cx="260" cy="156" r="16" fill="#0EA5E9" />
//       <rect x="254" y="154" width="12" height="4" rx="2" fill="#FFFFFF" />
      
//       <rect x="20" y="220" width="280" height="90" rx="12" fill="#333333" />
//       <rect x="36" y="240" width="40" height="40" rx="8" fill="#444444" />
//       <rect x="90" y="246" width="100" height="8" rx="4" fill="#AAAAAA" />
//       <rect x="90" y="266" width="160" height="4" rx="2" fill="#666666" />
//       <circle cx="260" cy="256" r="16" fill="#555555" />
//       <rect x="254" y="254" width="12" height="4" rx="2" fill="#AAAAAA" />
      
//       <rect x="20" y="320" width="280" height="90" rx="12" fill="rgba(14, 165, 233, 0.1)" />
//       <rect x="36" y="340" width="40" height="40" rx="8" fill="rgba(14, 165, 233, 0.3)" />
//       <rect x="90" y="346" width="100" height="8" rx="4" fill="#FFFFFF" />
//       <rect x="90" y="366" width="160" height="4" rx="2" fill="#666666" />
//       <circle cx="260" cy="356" r="16" fill="#0EA5E9" />
//       <rect x="254" y="354" width="12" height="4" rx="2" fill="#FFFFFF" />
      
//       <rect x="20" y="420" width="280" height="90" rx="12" fill="#333333" />
//       <rect x="36" y="440" width="40" height="40" rx="8" fill="#444444" />
//       <rect x="90" y="446" width="100" height="8" rx="4" fill="#AAAAAA" />
//       <rect x="90" y="466" width="160" height="4" rx="2" fill="#666666" />
//       <circle cx="260" cy="456" r="16" fill="#555555" />
//       <rect x="254" y="454" width="12" height="4" rx="2" fill="#AAAAAA" />

//       {/* Shine effect */}
//       <rect 
//         x="0" 
//         y="0" 
//         width="320" 
//         height="600" 
//         rx="32" 
//         fill="url(#shineGradient)" 
//         style={{mixBlendMode: 'overlay'}} 
//       />
      
//       <defs>
//         <linearGradient 
//           id="shineGradient" 
//           x1="0" 
//           y1="0" 
//           x2="320" 
//           y2="600" 
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop offset="0" stopColor="white" stopOpacity="0.1" />
//           <stop offset="0.5" stopColor="white" stopOpacity="0.05" />
//           <stop offset="1" stopColor="white" stopOpacity="0" />
//         </linearGradient>
//       </defs>
//     </svg>
//   );
// };


const AppMockup = ({ frameCount = 141, frameRate = 55 }) => {
  const [frameIndex, setFrameIndex] = useState(0);
  
  // Generating the frame filenames dynamically based on the naming convention
  const frames = Array.from({ length: frameCount }, (_, i) => 
    `/tablet-frames/BR_Spinnninganm_${String(i).padStart(5, '0')}.png`
  );

  useEffect(() => {
    const preloadImages = () => {
      frames.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();

    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, frameRate);

    return () => clearInterval(interval);
  }, [frames, frameRate]);

  return (
    <div>
      <img src={frames[frameIndex]} alt="App Animation" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};


export default AppMockup;
