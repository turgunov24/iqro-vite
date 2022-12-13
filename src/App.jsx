//hooks
import { useState } from "react";
//components
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

//sections
import HomeSection from "./sections/home-section/home-section";
import SubjectSection from "./sections/subject-section/subject-section";
import TestimonialSection from "./sections/testimonials-section/testimonials";
import AboutSection from "./sections/about-section/about-section";

//additional
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <SubjectSection />
      <TestimonialSection />
      <AboutSection />
      <Footer />
    </>
  );
}

export default App;
