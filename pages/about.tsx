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
        <div className="footer-home">"Everyday life is her sound"</div>
      </div>
      <div className="pre-loader">
        <div className="pre-loader-container">
          <div className="pre-loader-header">
            <div className="header">
              <h1>A creator of</h1>
              <div className="header-wrapper"></div>
            </div>
            <div className="header concat">
              <h1 data-text="sound">sound</h1>
              &nbsp; &nbsp;
              <h1>From pure</h1>
              <div className="header-wrapper"></div>
            </div>
            <div className="header">
              <h1>noise to melody,</h1>
              <div className="header-wrapper"></div>
            </div>
            <div className="header">
              <h1>everyday life</h1>
              <div className="header-wrapper"></div>
            </div>
            <div className="header concat">
              <h1>is her</h1>
              &nbsp; &nbsp;
              <h1 data-text="symphony">symphony</h1>
              <div className="header-wrapper"></div>
            </div>
          </div>
          <div className="pre-loader-btn" onclick="myFunction()">
            <div className="btn">
              Click anywhere
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 10">
                <defs></defs>
                <path
                  fill="#e2e2dd"
                  d="M59.2,9.6V6.2h-58v-2c0,0,0,0,0,0h58V0.7L67,5.1L59.2,9.6z"
                ></path>
              </svg>
              to enable the sound
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
