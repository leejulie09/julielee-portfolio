"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "../../public/js/Flip.min.js";
import LocomotiveScroll from "locomotive-scroll";
import { CustomEase } from "../../public/js/CustomEase.min.js";

export default function Educere() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const scroller = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    gsap.registerPlugin(Flip);
    CustomEase.create("cubic", "0.83, 0, 0.17, 1");

    const handleButtonClick = () => {
      let state = Flip.getState(".img-gallery-container, .img");

      gallery.classList.toggle("order");
      images.forEach((wr, i) => {
        wr.classList.toggle("reorder");
      });

      Flip.from(state, {
        absolute: true,
        duration: 2,
        stagger: 0.05,
        ease: "cubic",
      });
    };

    const gallery = document.querySelector(".img-gallery-container");
    const images = gsap.utils.toArray(".img");
    const button = document.querySelector(".btn");

    button.addEventListener("click", handleButtonClick);

    return () => {
      if (scroller) {
        scroller.destroy();
      }
      button.removeEventListener("click", handleButtonClick);
    };
  }, []);
  return (
    <>
      <div className="img-gallery" data-scroll-container>
        <div className="img-gallery-container" data-scroll>
          <div className="img">
            <img src="./images/img-1.png" />
          </div>
          <div className="img">
            <img src="./images/img-2.png" />
          </div>
          <div className="img">
            <img src="./images/img-10.png" />
          </div>
          <div className="img">
            <img src="./images/img-4.png" />
          </div>
          <div className="img">
            <img src="./images/img-5.png" />
          </div>
          <div className="img">
            <img src="./images/img-6.png" />
          </div>
          <div className="img">
            <img src="./images/img-7.png" />
          </div>
          <div className="img">
            <img src="./images/img-8.png" />
          </div>
          <div className="img">
            <img src="./images/img-9.png" />
          </div>
          <div className="img">
            <img src="./images/img-2.png" />
          </div>
        </div>
      </div>

      <div className="btn">Flip layout</div>
    </>
  );
}
