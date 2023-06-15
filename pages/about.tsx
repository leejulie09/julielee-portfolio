"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function Home() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();

    function myFunction() {
      tl.to(".pre-loader", 1, {
        opacity: 0,
        display: "none",
        ease: "power2.inOut",
      });

      tl.to(
        ".header-row",
        0.8,
        {
          top: "0",
          ease: "power4.inOut",
          stagger: {
            amount: 0.2,
          },
        },
        "-=1.2"
      );

      tl.from(
        ".navbar > *, .footer",
        2,
        {
          y: "40",
          opacity: 0,
          ease: "power4.inOut",
          stagger: {
            amount: 0.2,
          },
        },
        "-=1"
      );
    }

    tl.to(".header > h1", 2, {
      top: "0",
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    }).to(".pre-loader-btn", 0.3, {
      opacity: 1,
      delay: 2,
    });
  });

  return (
    <>
      <div className="website-content">
        <div className="navbar">
          <div className="logo">
            Chiara
            <br />
            Luzzana
          </div>
          <div className="menu-icon">Menu</div>
        </div>
        <div className="site-header">
          <div className="row">
            <div className="header-row">
              <span>the</span>purity
            </div>
            <div className="header-row-wrapper"></div>
          </div>
          <div className="row">
            <div className="header-row">
              <span>of</span>noise
            </div>
            <div className="header-row-wrapper"></div>
          </div>
        </div>
        <div className="footer-about">"Everyday life is her sound"</div>
      </div>
      <div className="pre-loader">
        <div className="pre-loader-container">
          <div className="pre-loader-header">
            <div className="header concat">
              <h1 data-text="React">React</h1>
              &nbsp; &nbsp;
              <h1>based</h1>
              <div className="header-wrapper"></div>
            </div>
            <div className="header concat">
              <h1 data-text="frontend">frontend</h1>
              &nbsp; &nbsp;
              <div className="header-wrapper"></div>
            </div>
            <div className="header">
              <h1>developer</h1>
              <div className="header-wrapper"></div>
            </div>
            <div className="header concat">
              <h1 data-text="Julie">Julie</h1>
              &nbsp; &nbsp;
              <h1>Lee</h1>
              <div className="header-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
