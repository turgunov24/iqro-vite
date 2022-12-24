//hooks
import React from "react";

//additional
import "./testimonials.css";
import childs from "../../assets/childs.png";

function TestimonialSection() {
  return (
    <section
      id="testimonials-section"
      className="w-full min-h-max flex flex-col items-center gap-5 py-16 px-10 sm:px-14 md:px-16 md:flex-row justify-between"
    >
      <div className="relative w-full h-full flex items-center justify-center md:w-1/2">
        <img src={childs} className="object-cover" />
      </div>
      <div className="w-full flex flex-col items-start gap-3 py-3 md:w-1/2">
        <h6 className="text-sm font-bold">Izohlar</h6>
        <h2 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-4xl">
          To us, it's weird when people review improv at all.
        </h2>
        <p className="text-sm">
          Entertaining these opinions of the course to be pursued, i beg of
          gentlemen to look at the question, as i have done, in a calm review of
          facts and of principles
        </p>
        <div className="w-full flex items-center justify-start gap-5">
          <div className="flex flex-col gap-1">
            <h6 className="text-4xl font-semibold">1.58k</h6>
            <p>Students</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-4xl font-semibold">857</h4>
            <p>Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
