"use client";

import React, { useEffect } from "react";
import AOS from "aos";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section
      id="hero"
      className="hero section dark-background"
      style={{
        background: "#011b39",
      }}
    >
      <img
        src="assets/images/world-dotted-map.png"
        alt=""
        className="hero-bg"
        data-aos="fade-in"
      />

      <div className="container">
        <div className="row gy-4 d-flex justify-content-center">
          <div className="col-lg-8 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center">
            <img
              src="assets/images/phoenix7_logo.png"
              className="img-fluid mb-3 mb-lg-0"
              alt=""
            />

            <h2 data-aos="fade-up">Phoenix Seven Investment Group</h2>
            <p data-aos="fade-up" data-aos-delay="100">
              A Bold Business Ecosystem for Growth, Innovation & Impact. <br />-{" "}
              <br />
              One Vision. Many Ventures. A United Rise.
            </p>
            <p data-aos="fade-up" data-aos-delay="150"></p>

            <div className="row gy-4" data-aos="fade-up" data-aos-delay="300">
              <h2 className="cs" data-aos="fade-up">
                Coming Soon !
              </h2>

              <div className="contact d-flex">
                <a href="mailto:phoenix7investmentgroup@gmail.com">
                  <i className="bi bi-envelope-at-fill"></i>
                  <span>phoenix7investmentgroup@gmail.com</span>
                </a>
                <a href="tel:+251 975 666 999">
                  <i className="bi bi-telephone-fill"></i>
                  <span>+251 975 666 999</span>
                </a>
                <a href="www.phoenix7investmentgroup.com">
                  <i className="bi bi-globe"></i>
                  <span>www.phoenix7investmentgroup.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
