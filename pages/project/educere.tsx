"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";

export default function Training() {
  useLayoutEffect(() => {
    const scroller = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    gsap.registerPlugin(Flip);
    CustomEase.create("cubic", "0.83, 0, 0.17, 1");
    const gallery = document.querySelector(".img-gallery-container"),
      images = gsap.utils.toArray(".img");

    document.querySelector(".btn").addEventListener("click", () => {
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
    });
  });
  return (
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
  );
}
