import React from "react";
import "../assets/css/gallery.css";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
// import Lenis from "@studio-freight/lenis";
import { useState } from "react";
import siera from "../assets/images/siera.svg";
import indonesia from "../assets/images/indonesia.svg";
import kenya from "../assets/images/kenya.svg";
import gameroon from "../assets/images/gameroon.svg";
import philippines from "../assets/images/philippines.svg";
import saudi from "../assets/images/saudi.svg";
import somaliland from "../assets/images/somaliland.svg";
import qatar from "../assets/images/qatar.svg";
import ghana from "../assets/images/ghana.svg";
import uae from "../assets/images/uae.svg";
import angola from "../assets/images/angola.svg";
import sudan from "../assets/images/sudan.svg";
import srilanka from "../assets/images/srilanka.svg";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(Flip);

const Gallery = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/ourvideo#our-video-page");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  React.useEffect(() => {
    const body = document.body;
    const content = document.querySelector(".content");
    const enterButton = document.querySelector(".enter");
    const fullview = document.querySelector(".fullview");
    const grid = document.querySelector(".grid");
    const gridRows = grid.querySelectorAll(".row");

    let winsize = { width: window.innerWidth, height: window.innerHeight };
    window.addEventListener("resize", () => {
      winsize = { width: window.innerWidth, height: window.innerHeight };
    });

    let mousepos = { x: winsize.width / 2, y: winsize.height / 2 };

    const config = {
      translateX: true,
      skewX: false,
      contrast: true,
      scale: false,
      brightness: true,
    };

    const numRows = gridRows.length;
    const middleRowIndex = Math.floor(numRows / 2);

    const middleRow = gridRows[middleRowIndex];
    const middleRowItems = middleRow.querySelectorAll(".row__item");
    const numRowItems = middleRowItems.length;
    const middleRowItemIndex = Math.floor(numRowItems / 2);
    const middleRowItemInner =
      middleRowItems[middleRowItemIndex].querySelector(".row__item-inner");
    const middleRowItemInnerImage =
      middleRowItemInner.querySelector(".row__item-img");
    middleRowItemInnerImage.classList.add("row__item-img--large");

    const baseAmt = 0.1;
    const minAmt = 0.05;
    const maxAmt = 0.1;

    let renderedStyles = Array.from({ length: numRows }, (v, index) => {
      const distanceFromMiddle = Math.abs(index - middleRowIndex);
      const amt = Math.max(baseAmt - distanceFromMiddle * 0.03, minAmt);
      const scaleAmt = Math.min(baseAmt + distanceFromMiddle * 0.03, maxAmt);
      let style = { amt, scaleAmt };

      if (config.translateX) {
        style.translateX = { previous: 0, current: 0 };
      }
      if (config.skewX) {
        style.skewX = { previous: 0, current: 0 };
      }
      if (config.contrast) {
        style.contrast = { previous: 100, current: 100 };
      }
      if (config.scale) {
        style.scale = { previous: 1, current: 1 };
      }
      if (config.brightness) {
        style.brightness = { previous: 100, current: 100 };
      }

      return style;
    });

    let requestId;

    const getMousePos = (e) => {
      let posx = 0;
      let posy = 0;
      if (!e) e = window.event;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        posy =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }
      return { x: posx, y: posy };
    };

    window.addEventListener("mousemove", getMousePos);

    const updateMousePosition = (e) => {
      const pos = getMousePos(e);
      if (pos) {
        mousepos.x = pos.x;
        mousepos.y = pos.y;
      }
    };

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const calculateMappedX = () => {
      if (!mousepos) return 0;
      return (
        (((mousepos.x / winsize.width) * 2 - 1) * 40 * winsize.width) / 100
      );
    };
    const calculateMappedSkew = () => {
      return ((mousepos.x / winsize.width) * 2 - 1) * 3;
    };

    const calculateMappedContrast = () => {
      const centerContrast = 100;
      const edgeContrast = 330;
      const t = Math.abs((mousepos.x / winsize.width) * 2 - 1);
      const factor = Math.pow(t, 2);
      return centerContrast - factor * (centerContrast - edgeContrast);
    };

    const calculateMappedScale = () => {
      const centerScale = 1;
      const edgeScale = 0.95;
      return (
        centerScale -
        Math.abs((mousepos.x / winsize.width) * 2 - 1) *
          (centerScale - edgeScale)
      );
    };

    const calculateMappedBrightness = () => {
      const centerBrightness = 100;
      const edgeBrightness = 15;
      const t = Math.abs((mousepos.x / winsize.width) * 2 - 1);
      const factor = Math.pow(t, 2);
      return centerBrightness - factor * (centerBrightness - edgeBrightness);
    };

    const getCSSVariableValue = (element, variableName) => {
      return getComputedStyle(element).getPropertyValue(variableName).trim();
    };

    const render = () => {
      const mappedValues = {
        translateX: calculateMappedX(),
        skewX: calculateMappedSkew(),
        contrast: calculateMappedContrast(),
        scale: calculateMappedScale(),
        brightness: calculateMappedBrightness(),
      };

      gridRows.forEach((row, index) => {
        const style = renderedStyles[index];

        for (let prop in config) {
          if (config[prop]) {
            style[prop].current = mappedValues[prop];
            const amt = prop === "scale" ? style.scaleAmt : style.amt;
            style[prop].previous = lerp(
              style[prop].previous,
              style[prop].current,
              amt
            );
          }
        }
        let gsapSettings = {};
        if (config.translateX) gsapSettings.x = style.translateX.previous;
        if (config.skewX) gsapSettings.skewX = style.skewX.previous;
        if (config.scale) gsapSettings.scale = style.scale.previous;
        if (config.contrast)
          gsapSettings.filter = `contrast(${style.contrast.previous}%)`;
        if (config.brightness)
          gsapSettings.filter = `${
            gsapSettings.filter ? gsapSettings.filter + " " : ""
          }brightness(${style.brightness.previous}%)`;

        gsap.set(row, gsapSettings);
      });

      requestId = requestAnimationFrame(render);
    };

    const startRendering = () => {
      if (!requestId) {
        render();
      }
    };

    const stopRendering = () => {
      if (requestId) {
        cancelAnimationFrame(requestId);
        requestId = undefined;
      }
    };

    const enterFullview = () => {
      body.classList.add("noscroll");

      content.style.visibility = "hidden";

      const flipstate = Flip.getState(middleRowItemInner);
      fullview.appendChild(middleRowItemInner);

      const transContent = getCSSVariableValue(content, "--trans-content");

      const tl = gsap.timeline();

      tl.add(
        Flip.from(flipstate, {
          duration: 0.9,
          ease: "power4",
          absolute: true,
          onComplete: stopRendering,
        })
      )

        .to(
          grid,
          {
            duration: 0.9,
            ease: "power4",
            opacity: 0.01,
          },
          0
        )

        .to(
          middleRowItemInnerImage,
          {
            scale: 1.2,
            duration: 3,
            ease: "sine",
          },
          "<-=0.45"
        )

        .to(content, {
          y: transContent,
          duration: 0.9,
          ease: "power4",
        });

      enterButton.classList.add("hidden");

      body.classList.remove("noscroll");
      setTimeout(() => {
        content.style.visibility = "visible";
      }, 1000);
    };

    const init = () => {
      startRendering();
      enterButton.addEventListener("click", enterFullview);
      enterButton.addEventListener("touchstart", enterFullview);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("touchmove", (ev) => {
      const touch = ev.touches[0];
      updateMousePosition(touch);
    });

    const initSmoothScrolling = () => {
      // const lenis = new Lenis({ lerp: 0.2 });

      // gsap.ticker.add((time) => {
      //     lenis.raf(time * 2000);
      // });

      gsap.ticker.lagSmoothing(0);
    };

    init();
    initSmoothScrolling();

    return () => {
      window.removeEventListener("mousemove", getMousePos);
      window.cancelAnimationFrame(requestId);
    };
  }, []);
  const handleExploreClick = () => {
    setIsExploreClicked(true);
    // Additional code to display more content or interact with the gallery
  };
  return (
    <>
      <div className="p-2">
        <div className="scroll">
          <div className="custom-container">
            <div className="intro">
              <div className="grid">
                <div className="row explore-img">
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${siera})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${indonesia})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${kenya})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${gameroon})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${philippines})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${saudi})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${somaliland})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row explore-img">
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${qatar})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${ghana})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${uae})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${angola})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${sudan})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${srilanka})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${siera})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row explore-img">
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${srilanka})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${indonesia})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${kenya})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${gameroon})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${philippines})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${saudi})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${somaliland})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row explore-img">
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${qatar})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${ghana})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${uae})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${angola})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${sudan})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${srilanka})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${indonesia})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row explore-img">
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${kenya})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${gameroon})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${philippines})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${saudi})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${qatar})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${ghana})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                  <div className="row__item">
                    <div className="row__item-inner">
                      <div
                        className="row__item-img"
                        style={{
                          backgroundImage: `url(${uae})`,
                        }}
                        loading="lazy"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fullview"></div>
              <div
                className="enter"
                onClick={handleNavigate}
                style={{ cursor: "pointer" }}
              >
                <span className="enter-btn">Explore more Videos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
