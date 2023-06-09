"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function Contact() {
  useLayoutEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js';
    document.body.appendChild(script);

      const cursor = document.getElementById("cursor");
      const tl = gsap.timeline({ paused: true });
      tl.to(cursor, { duration: 0.2, scale: 1.5, opacity: 1 });
  
      const buttons = document.querySelectorAll(".btn");
      const overlayTitle = document.getElementById("title");
      const overlayFlag = document.getElementById("flag");
  
      buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          cursor.textContent = button.dataset.country;
          tl.play();
        });
  
        button.addEventListener("mouseleave", () => {
          cursor.textContent = "";
          tl.reverse();
        });
  
        button.addEventListener("click", () => {
          overlayTitle.innerText = button.innerText;
          overlayFlag.innerText = button.dataset.country;
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
        const closeBtn = document.getElementById("close-btn");
        const submit = document.getElementById("submit");
        closeBtn.onclick = function (e) {
          tl2.reversed(!tl2.reversed());
          resetInputs();
        };
        submit.onclick = function (e) {
          tl2.reversed(!tl2.reversed());
          resetInputs();
        };
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
      return () => {
        document.body.removeChild(script);
      };
  })

  return (
    <>
    {/* <!-- nav --> */}
    <div className="logo"><a href="#">The Hiring Chain</a></div>
    <div className="nav">
      <div className="nav-items primary">
        <a href="#" id="main-branch">Hire Now</a>
        <a href="#">Share</a>
      </div>
      <div className="nav-items">
        <a href="#">About</a>
      </div>
    </div>
    <div className="container-contact">
      <!-- copy -->
      <div className="copy">
        <div className="copy-wrapper">
          <h1>
            &emsp;&emsp;Get
            <br />
            someone, <br />&emsp;creative on <br />your team.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            dolorem unde et! Voluptatum repudiandae inventore quasi ipsum
            repellendus aut quam.
          </p>
        </div>
      </div>

      {/* <!-- actual stuff --> */}
      <div className="items">
        <div className="item">
          <button className="btn" id="btn1" data-country="🇺🇸">usa</button>
        </div>
        <div className="item">
          <button className="btn" data-country="🇮🇹">italy</button>
        </div>
        <div className="item">
          <button className="btn" data-country="🇨🇦">canada</button>
        </div>
        <div className="item">
          <button className="btn" data-country="🇦🇺">australia</button>
        </div>
      </div>
      <div className="items">
        <div className="item">
          <button className="btn" data-country="🇬🇧">uk</button>
        </div>
        <div className="item">
          <button className="btn" data-country="🇧🇷">brazil</button>
        </div>
        <div className="item">
          <button className="btn" data-country="🇹🇷">turkey</button>
        </div>
        <div className="item">
          <button className="btn" data-country="🇨🇭">switzerland</button>
        </div>
      </div>
    </div>

    {/* <!-- overlay (form) --> */}
    <div className="overlay">
      <div className="close-btn" id="close-btn">
        <ion-icon name="close-outline"></ion-icon>
      </div>
      <div className="overlay-copy">
        <div className="header">
          <div><span id="subtitle">Hire in:</span></div>
          <div className="titlebar">
            <div className="nav-item">
              <span id="title">Italy</span><span id="flag">🇺🇸</span>
            </div>
            <div className="nav-item-wrapper"></div>
          </div>
        </div>
        <div className="form">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <textarea
            name=""
            id=""
            rows="5"
            placeholder="Interested in hiring a creative front end developer with 3 years of experience and I would like more info"
          ></textarea>
        </div>
        <div className="form-action">
          <label className="checkmark-wrapper"
            ><span>I accept Privacy Policy</span>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <div className="submit-btn"><button id="submit">Submit</button></div>
        </div>
      </div>
    </div>
    {/* <!-- phew.. overlay ends  --> */}
    <div id="cursor"></div>
    </>
  );
}
