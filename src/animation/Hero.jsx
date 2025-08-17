// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import bgFloating from "../assets/bg-floating.png";

// gsap.registerPlugin(ScrollTrigger);

// export default function Hero() {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     // Efek ngambang (infinite floating)
//     gsap.to(imageRef.current, {
//       y: 20,
//       repeat: -1,
//       yoyo: true,
//       duration: 2,
//       ease: "power1.inOut",
//     });

//     // Efek hilang pas scroll
//     gsap.to(imageRef.current, {
//       opacity: 0,
//       scrollTrigger: {
//         trigger: imageRef.current,
//         start: "top center",   // mulai hilang saat gambar masuk ke tengah
//         end: "bottom top",     // full hilang saat gambar keluar layar
//         scrub: true,           // smooth
//       },
//     });
//   }, []);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-teal-700 to-teal-900">
//       <img
//         ref={imageRef}
//         src={bgFloating}
//         alt="Floating Background"
//         className="absolute w-1/2"
//       />
//       <h1 className="text-white text-4xl font-bold z-10">
//         Your report is our early warning
//       </h1>
//     </section>
//   );
// }
