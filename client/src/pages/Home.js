import React from "react";
import Hero from "../components/website/Hero";
import AboutSection from "../components/website/AboutSection";
import ServicesSection from "../components/website/ServicesSection";

// Aap yahan aur bhi sections import kar sakte hain jaise Services, Gallery, etc.

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      {/* Yahan par aap Services, Gallery, Contact, etc. sections bhi add kar sakte hain */}
    </>
  );
}
