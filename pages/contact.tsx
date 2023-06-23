"use client";

import { use, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Contact() {
  useLayoutEffect(() => {
    const cursor = document.getElementById("cursor");
    const tl = gsap.timeline({ paused: true });
    tl.to(cursor, { duration: 0.2, scale: 1.5, opacity: 1 });

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
      //form나오게 하는 애니메이션
      button.addEventListener("click", () => {
        tl2.reversed(!tl2.reversed());
      });
    });

    document.addEventListener("mousemove", (e) => {
      gsap.to(cursor, { duration: 0.2, x: e.clientX, y: e.clientY });
    });

    document.addEventListener("mouseout", () => {
      cursor.textContent = "";
      tl.reverse();
    });

    const tl2 = gsap.timeline({ paused: true });

    function resetInputs() {
      setTimeout(() => {
        document
          .querySelectorAll(".form input, .form textarea")
          .forEach((input) => {
            input.value = "";
          });
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
      }, 2000);
    }

    function openNav() {
      animateOpenNav();
      const submit = document.getElementById("submit");
    }

    openNav();

    function animateOpenNav() {
      tl2.to(".overlay", 1, {
        right: "0",
        ease: "power4.out",
      });

      tl2
        .to(
          ".nav-item",
          1,
          {
            top: 0,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .reverse();
    }

    tl2.play();
  });
  return (
    <div>
      <div className="container-contact">
        <div className="copy">
          <div className="copy-wrapper">
            <h1>
              &emsp;&emsp;Send
              <br />
              an email <br />
              &emsp;to Julie
              <br />
            </h1>
            <p>
              Get in touch - leejulie09@gmail.com
              <br />
              <br />
              <a href="https://selonjulie.tistory.com/" target="_blank">
                Blog
              </a>
              <br />
              <a href="https://github.com/leejulie09" target="_blank">
                Github
              </a>
              <br />
              <a href="https://www.linkedin.com/in/leejulie09/" target="_blank">
                LinkedIn
              </a>
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="overlay">
        {/* <div className="close-btn" id="close-btn">
          <ion-icon name="close-outline"></ion-icon>
        </div> */}
        <div className="overlay-copy">
          <div className="form">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <textarea name="" id="" rows="5" placeholder="Message"></textarea>
          </div>
          <div className="form-action">
            <label className="checkmark-wrapper">
              <span>I accept Privacy Policy</span>
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <div className="submit-btn">
              <button id="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div id="cursor"></div>
    </div>
  );
}
