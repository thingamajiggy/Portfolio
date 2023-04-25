import "./intro.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import AnimatedShapes from "../animation/AnimatedShapes";

const Intro = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) {
      return;
    }
    init(textRef.current, {
      strings: ["Junior Developer", "Writer", "Traveller", "Walker"],

      typeSpeed: 100,

      backSpeed: 50,

      startDelay: 500,

      backDelay: 500,

      loop: true,

      showCursor: true,

      placeholder: false,

      disableBackTyping: false,

      cursorChar: "|",

      onFinished: function () {},
    });
  }, []);

  return (
    <div>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Hyerin Eom</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">
                  <span ref={textRef}></span>
                </div>
              </div>
            </div>
            <p className="i-desc">
              I am ready to start my new career as a Graduate Developer. As a
              fast learner, an enthusiastic coder, I can contribute to building
              websites of all sizes that could show our customers' imaginations.
            </p>
            <div className="i-contact">
              <div>📧 herinum199@gmail.com</div>
              <div>💻 https://github.com/thingamajiggy</div>
              <div>📱 07435 917909</div>
            </div>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg">
            <AnimatedShapes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
