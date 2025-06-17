"use client";

import Hero from "@/components/Hero";
// import Portfolio from "@/components/Portfolio";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("@/components/Portfolio"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />

      {/* <Companies /> */}

      {/* <Services /> */}

      {/* <Gallery /> */}

      {/* <Portfolio /> */}

      {/* <Testimonials /> */}

      {/* <FAQs /> */}

      {/* <Contact /> */}

      {/* <Footer /> */}

      {/* <a href="#" className="shadow btn-primary rounded-circle back-to-top">
        <i className="fas fa-chevron-up"></i>
      </a> */}
    </>
  );
}
