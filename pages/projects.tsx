"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Projects() {
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
      let imageWrapperBounds: DOMRect | ClientRect | null = null;
      if (imageWrapper) {
        imageWrapperBounds = imageWrapper.getBoundingClientRect();
      }
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

      const onMouseMove = (evt: Event) => {
        if (imageWrapper && imageWrapperBounds?.height) {
          let yOffset = itemBounds.top / imageWrapperBounds.height;
          yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
          gsap.to(imageWrapper, {
            duration: 1.25,
          });
        }
      };

      item.addEventListener("mouseenter", onMouseEnter);
      item.addEventListener("mouseleave", onMouseLeave);
      item.addEventListener("mousemove", onMouseMove as EventListener);

      window.addEventListener("resize", () => {
        itemBounds = item.getBoundingClientRect();
      });
    });
  });

  return (
    <div className="container-projects">
      <nav className="menu">
        <div className="menu__item">
          <div className="menu__item-image_wrapper">
            <div className="menu__item-image_inner">
              <img
                className="menu__item-image"
                src="assets/educere_board.png"
              />
            </div>
          </div>
          <span className="menu__item-text">
            <span className="menu__item-innertext">
              <Link href="/project/educere">Educere</Link>
            </span>
          </span>
        </div>

        <br />

        <div className="menu__item">
          <div className="menu__item-image_wrapper">
            <div className="menu__item-image_inner">
              <img
                className="menu__item-image"
                src="assets/fanddle_mypage.png"
              />
            </div>
          </div>
          <span className="menu__item-text">
            <span className="menu__item-innertext">
              <Link href="/project/training">Training</Link>
            </span>
          </span>
        </div>
      </nav>
    </div>
  );
}
