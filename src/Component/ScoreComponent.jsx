// import React, { useEffect, useState, useRef } from 'react';
// import "../assets/css/score.css";

// function Counter({ target, duration, prefix = '', suffix = '+' }) {
//   const [value, setValue] = useState(0);
//   const counterRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           let start = 0;
//           const increment = target / (duration / 10);

//           const timer = setInterval(() => {
//             start += increment;
//             if (start >= target) {
//               clearInterval(timer);
//               setValue(target); // Ensure the final value is accurate
//             } else {
//               setValue(Math.ceil(start));
//             }
//           }, 10);

//           observer.disconnect(); // Stop observing after animation starts
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (counterRef.current) {
//       observer.observe(counterRef.current);
//     }

//     return () => observer.disconnect(); // Cleanup observer
//   }, [target, duration]);

//   return (
//     <h1 className="display-2 fw-bold score-style score-color albert-sans" ref={counterRef}>
//       {prefix}{value}{suffix}
//     </h1>
//   );
// }

// function ScoreComponent() {
//   return (
//     <div className="container pt-mlg-5 pt-5 pb-lg-5 pb-5">
//       <div className="row d-flex justify-content-center text-center">

//         {/* First Item */}
//         <div className="col-3 col-lg-3 col-md-4 mb-3 px-lg-0 px-2">
//           <Counter target={50} duration={1600} />
//           <p className="score-color score-text text-lg-center text-md-center text-center albert-sans ">Years of experience</p>
//         </div>

//         {/* Second Item */}
//         <div className="col-4 col-lg-3 col-md-4 mb-3 px-lg-0 px-2">
//           <Counter target={400} duration={1500} />
//           <p className="score-color score-text text-lg-center albert-sans">Satisfied clients</p>
//         </div>

//         {/* Third Item */}
//         <div className="col-4 col-lg-3 col-md-4 mb-3 px-lg-0 px-2">
//           <Counter target={500} duration={2000} />
//           <p className="score-color score-text text-lg-center text-md-center albert-sans">Projects delivered</p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default ScoreComponent;
import React, { useEffect, useState, useRef } from "react";
import "../assets/css/score.css";

function Counter({ target, duration, prefix = "", suffix = "+" }) {
  const [value, setValue] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = target / (duration / 10);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              clearInterval(timer);
              setValue(target); // Ensure the final value is accurate
            } else {
              setValue(Math.ceil(start));
            }
          }, 10);

          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect(); // Cleanup observer
  }, [target, duration]);

  return (
    <h1
      className="display-2 fw-bold score-style score-color albert-sans"
      ref={counterRef}
    >
      {prefix}
      {value}
      {suffix}
    </h1>
  );
}

function ScoreComponent({ scores }) {
  return (
    <div className="container pt-mlg-5 pt-5 pb-lg-5 pb-5">
      <div className="row d-flex justify-content-center text-center">
        {scores.map((score, index) => (
          <div
            key={index}
            className="col-3 col-lg-3 col-md-4 mb-3 px-lg-0 px-2"
          >
            <Counter target={score.target} duration={score.duration} />
            <p className="score-color score-text text-lg-center text-md-center text-center albert-sans">
              {score.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScoreComponent;
