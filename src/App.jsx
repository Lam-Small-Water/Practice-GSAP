import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import "./App.scss";

const App = () => {
  const gspaRef = useRef();

  const [circle, setCircle] = useState(0);
  const randomMove = gsap.utils.random(-200, 200, 50);
  console.log(randomMove);

  // useGSAP(() => {
  //   gsap.to(".box", {
  //     x: 1000,
  //     duration: 2,
  //     delay: 1
  //   })
  // })

  // useGSAP(() => {
  //   gsap.to(gspaRef.current, {
  //     x: 200,
  //     duration: 2,
  //     delay: 1
  //   })
  // })

  useGSAP(
    () => {
      gsap.from(".rectangle", {
        rotate: 360,
        scale: 0,
        duration: 1,
        opacity: 0,
        delay: 0.5,
      });
    },
    { scope: ".container" }
  ); // or ref

  useGSAP(
    () => {
      gsap.to(".circle", {
        x: circle,
        duration: 0.5,
      });
    },
    { scope: ".card--1", dependencies: [circle] }
  );
  return (
    <div>
      <main>
        {/* <div ref={gspaRef} className="box">

        </div> */}

        <div ref={gspaRef} className="container">
          <div className="circle"></div>
          <div className="rectangle"></div>
        </div>

        <button className="btn" onClick={() => setCircle(randomMove)}>
          move
        </button>
        <div className="card--1">
          <div className="circle"></div>
          <div className="rectangle"></div>
        </div>
      </main>
    </div>
  );
};

export default App;
