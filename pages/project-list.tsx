"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function ProjectList() {
  useLayoutEffect(() => {
    gsap
      .timeline()
      .set(".menu", { autoAlpha: 1 })
      .from(".menu__item-innertext", {
        delay: 1,
        duration: 0.85,
        stagger: 0.095,
        skewY: gsap.utils.wrap([-8, 8]),
        ease: "expo.out",
      })
      .set(".menu", { pointerEvents: "all" });

    gsap.defaults({
      duration: 0.55,
      ease: "expo.out",
    });

    const menuItems = document.querySelectorAll(".menu__item");

    menuItems.forEach((item) => {
      const imageWrapper = item.querySelector(".menu__item-image_wrapper");
      const imageWrapperBounds = imageWrapper.getBoundingClientRect();
      let itemBounds = item.getBoundingClientRect();

      const onMouseEnter = () => {
        gsap.set(imageWrapper, {
          scale: 0.8,
        });
        gsap.to(imageWrapper, { opacity: 1, scale: 1 });
      };

      const onMouseLeave = () => {
        gsap.to(imageWrapper, {
          opacity: 0,
          scale: 0.2,
        });
      };

      const onMouseMove = ({ x, y }) => {
        let yOffset = itemBounds.top / imageWrapperBounds.height;
        yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
        gsap.to(imageWrapper, {
          duration: 1.25,
        });
      };

      item.addEventListener("mouseenter", onMouseEnter);
      item.addEventListener("mouseleave", onMouseLeave);
      item.addEventListener("mousemove", onMouseMove);

      window.addEventListener("resize", () => {
        itemBounds = item.getBoundingClientRect();
      });
    });
  });

  return (
    <div className="container-project-list">
      <nav className="menu">
        <div className="menu__item">
          <div className="menu__item-image_wrapper">
            <div className="menu__item-image_inner">
              <img className="menu__item-image" src="assets/img_01.png" />
            </div>
          </div>
          <span className="menu__item-text">
            <span className="menu__item-innertext">Impulse /</span>
          </span>
        </div>

        <div className="menu__item">
          <div className="menu__item-image_wrapper">
            <div className="menu__item-image_inner">
              <img className="menu__item-image" src="assets/img_02.png" />
            </div>
          </div>
          <span className="menu__item-text">
            <span className="menu__item-innertext">&nbsp;Rubber</span>
          </span>
        </div>
        <br />

        <div className="menu__item">
          <div className="menu__item-image_wrapper">
            <div className="menu__item-image_inner">
              <img className="menu__item-image" src="assets/img_03.jpeg" />
            </div>
          </div>
          <span className="menu__item-text">
            <span className="menu__item-innertext">PU /</span>
          </span>
        </div>
        <div className="menu__item">
          <div className="menu__item-image_wrapper">
            <div className="menu__item-image_inner">
              <img className="menu__item-image" src="assets/img_04.png" />
            </div>
          </div>
          <span className="menu__item-text">
            <span className="menu__item-innertext">&nbsp;Technopolymers</span>
          </span>
        </div>
        <br />
        <div className="menu__item">
          <div className="menu__item-image_wrapper">
            <div className="menu__item-image_inner">
              <img className="menu__item-image" src="assets/img_05.jpeg" />
            </div>
          </div>
          <span className="menu__item-text">
            <span className="menu__item-innertext">Relife /</span>
          </span>
        </div>
        <div className="menu__item">
          <div className="menu__item-image_wrapper">
            <div className="menu__item-image_inner">
              <img className="menu__item-image" src="assets/img_06.png" />
            </div>
          </div>
          <span className="menu__item-text">
            <span className="menu__item-innertext">&nbsp;TPU /</span>
          </span>
        </div>
        <div className="menu__item">
          <div className="menu__item-image_wrapper">
            <div className="menu__item-image_inner">
              <img className="menu__item-image" src="assets/img_07.png" />
            </div>
          </div>
          <span className="menu__item-text">
            <span className="menu__item-innertext">&nbsp;EVA</span>
          </span>
        </div>
      </nav>
    </div>
  );
}
