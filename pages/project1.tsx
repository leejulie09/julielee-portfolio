"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";

export default function Project1() {
  useLayoutEffect(() => {
    const loadDependencies = async () => {
      const [{ default: Flip }, { default: CustomEase }] = await Promise.all([
        import("https://assets.codepen.io/16327/Flip.min.js"),
        import(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/CustomEase.min.js"
        ),
      ]);

      gsap.registerPlugin(Flip);
      CustomEase.create("cubic", "0.83, 0, 0.17, 1");
    };

    loadDependencies();

    // This part of the code will not be executed in a non-browser environment
    if (typeof document === "undefined") {
      return;
    }

    const script1 = document.createElement("script");
    script1.src =
      "https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://unpkg.co/gsap@3/dist/gsap.min.js";
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src = "https://assets.codepen.io/16327/Flip.min.js";
    document.body.appendChild(script3);

    const script4 = document.createElement("script");
    script4.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/CustomEase.min.js";
    document.body.appendChild(script4);

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

    return () => {
      // Clean up the added scripts when the component unmounts
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  });

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
