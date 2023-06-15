"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function Home() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();

    function animateOpenNav() {
      tl.to("#nav-container", 0.2, {
        autoAlpha: 1,
        delay: 0.1,
      });

      tl.to(".site-logo", 0.2, {
        color: "#fff",
      });

      tl.from(".flex > div", 0.4, {
        opacity: 0,
        y: 10,
        stagger: {
          amount: 0.04,
        },
      });

      tl.to(
        ".nav-link > a",
        0.8,
        {
          top: 0,
          ease: "power2.inOut",
          stagger: {
            amount: 0.1,
          },
        },
        "-=0.4"
      );

      tl.from(
        ".nav-footer",
        0.3,
        {
          opacity: 0,
        },
        "-=0.5"
      );
    }

    animateOpenNav();
  }, []);

  return (
    <div className="home-container">
      <div className="navbar">
        <div className="site-logo">Julie</div>
        {/* <div className="menu-toggle">
          <div id="menu-toggle-btn">
            <span></span>
          </div>
        </div> */}
      </div>
      {/* <div className="header">
        We transform <br />
        ideas into digital <br />
        outcomes
      </div> */}
      <div id="nav-container">
        <div className="home-nav">
          <div className="col flex">
            <div className="nav-logo">c/</div>
            <div className="nav-socials">
              <a href="#">Blog</a>
              <a href="#">Github</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <div className="col">
            <div className="nav-link">
              <a href="/about">About</a>
              <div className="nav-item-wrapper"></div>
            </div>
            <div className="nav-link">
              <a href="/projects">Work</a>
              <div className="nav-item-wrapper"></div>
            </div>
            <div className="nav-link">
              <a href="/contact">Contact</a>
              <div className="nav-item-wrapper"></div>
            </div>
          </div>
        </div>
        <div className="nav-footer">
          <div className="links">
            <a href="#">Privacy policy</a>
            <a href="#">Cookie policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="contact">
            <a href="#">leejulie09@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
