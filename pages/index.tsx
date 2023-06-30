"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

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
        0.3,
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
      </div>

      <div id="nav-container">
        <div className="home-nav">
          <div className="col flex">
            <div className="nav-logo">:)</div>
            <div className="nav-socials">
              <a href="https://selonjulie.tistory.com/" target="_blank">
                Blog
              </a>
              <a href="https://github.com/leejulie09" target="_blank">
                Github
              </a>
              <a href="https://www.linkedin.com/in/leejulie09/" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="col">
            <div className="nav-link">
              <Link href="/about">About</Link>
              <div className="nav-item-wrapper"></div>
            </div>
            <div className="nav-link">
              <Link href="/projects">Projects</Link>
              <div className="nav-item-wrapper"></div>
            </div>
            <div className="nav-link">
              <Link href="/contact">Contact</Link>
              <div className="nav-item-wrapper"></div>
            </div>
          </div>
        </div>
        <div className="nav-footer">
          <div className="contact">
            <a href="#">leejulie09@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
