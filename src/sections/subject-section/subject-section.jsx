//hooks
import React from "react";

//icons
import { RiMentalHealthLine } from "react-icons/ri";
import { TbMathFunction, TbNumbers } from "react-icons/tb";
import { AiOutlineCode } from "react-icons/ai";

function SubjectSection() {
  return (
    <section className="w-full min-h-max flex flex-col items-center gap-3 py-16 px-10 sm:px-14 md:px-16">
      <h6 className="text-sm font-bold">Subjects</h6>
      <h2 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-4xl">
        What you can learn with Us
      </h2>
      <p className="text-center text-sm">
        Education is the learning process, gaining knowledge and growing every
        day <br className="hidden md:block" /> and being capable of excelling in
        the field wherever we go
      </p>
      <div className="w-full flex flex-wrap items-center justify-center gap-5 py-5 sm:gap-5 md:justify-around">
        <div className="w-80 flex flex-col items-start gap-3 p-5 rounded-2xl duration-300 sm:w-64 md:w-56 hover:bg-yellow">
          <div className="w-16 h-16 flex items-center justify-center p-5 rounded-full text-white text-3xl bg-yellow">
            <TbNumbers />
          </div>
          <h2>Mental arifmetika</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            voluptatem perspiciatis quisquam inventore
          </p>
        </div>
        <div className="w-80 flex flex-col items-start gap-3 p-5 rounded-2xl duration-300 sm:w-64 md:w-56 hover:bg-violet">
          <div className="w-16 h-16 flex items-center justify-center p-5 rounded-full text-white text-3xl bg-violet">
            <RiMentalHealthLine />
          </div>
          <h2>Mnemonika</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            voluptatem perspiciatis quisquam inventore
          </p>
        </div>
        <div className="w-80 flex flex-col items-start gap-3 p-5 rounded-2xl duration-300 sm:w-64 md:w-56 hover:bg-red">
          <div className="w-16 h-16 flex items-center justify-center p-5 rounded-full text-white text-3xl bg-red">
            <AiOutlineCode />
          </div>
          <h2>Dasturlash</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            voluptatem perspiciatis quisquam inventore
          </p>
        </div>
        <div className="w-80 flex flex-col items-start gap-3 p-5 rounded-2xl duration-300 sm:w-64 md:w-56 hover:bg-green">
          <div className="w-16 h-16 flex items-center justify-center p-5 rounded-full text-white text-3xl bg-green">
            <TbMathFunction />
          </div>
          <h2>Matematika</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            voluptatem perspiciatis quisquam inventore
          </p>
        </div>
      </div>
    </section>
  );
}

export default SubjectSection;
