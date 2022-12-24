//hooks
import React from "react";

//icons
import { RiMentalHealthLine } from "react-icons/ri";
import { TbMathFunction, TbNumbers } from "react-icons/tb";
import { AiOutlineCode } from "react-icons/ai";
//additional
import "./subject-section.css"




function SubjectSection() {
  return (
    <section id="subject-section" className="w-full min-h-max flex flex-col items-center gap-3 py-16 px-10 sm:px-14 md:px-16">
      <h6 className="text-sm font-bold">Fanlar</h6>
      <h2 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-4xl">
        Bolalar biz bilan nimalarni o'rganadi
      </h2>
      <p className="text-center text-sm">
        Education is the learning process, gaining knowledge and growing every
        day <br className="hidden md:block" /> and being capable of excelling in
        the field wherever we go
      </p>
      <div className="w-full flex flex-wrap items-start justify-center gap-5 py-5 sm:gap-5 md:justify-around">
        <div id="subject-yellow" className="w-80 flex flex-col items-start gap-3 p-5 rounded-2xl duration-300 sm:w-64 md:w-56">
          <div className="w-16 h-16 flex items-center justify-center p-5 rounded-full text-white text-3xl bg-yellow">
            <TbNumbers />
          </div>
          <h2>Mental arifmetika</h2>
          <p className="text-sm">
            Og'zaki tez hisoblash mahoratiga ega bo'lish. Bola kalkulyatordan
            tezroq ko'p xonali raqamlar bilan misollarni yechishga qodir bo'ladi
          </p>
        </div>
        <div id="subject-violet" className="w-80 flex flex-col items-start gap-3 p-5 rounded-2xl duration-300 sm:w-64 md:w-56">
          <div className="w-16 h-16 flex items-center justify-center p-5 rounded-full text-white text-3xl bg-violet">
            <RiMentalHealthLine />
          </div>
          <h2>Mnemonika</h2>
          <p className="text-sm">
            Og'zaki tez hisoblash mahoratiga ega bo'lish. Bola kalkulyatordan
            tezroq ko'p xonali raqamlar bilan misollarni yechishga qodir bo'ladi
          </p>
        </div>
        <div id="subject-red" className="w-80 flex flex-col items-start gap-3 p-5 rounded-2xl duration-300 sm:w-64 md:w-56">
          <div className="w-16 h-16 flex items-center justify-center p-5 rounded-full text-white text-3xl bg-red">
            <AiOutlineCode />
          </div>
          <h2>Kognitiv</h2>
          <p className="text-sm">
            Kognitiv - bu juda ko'p mavzularni o'z ichiga olgan katta hajmli
            bilimlar sohasi. Materialni to'liq o'zlashtirish uchun siz ularning
            har birini alohida tushunishingiz kerak.
          </p>
        </div>
        <div id="subject-green" className="w-80 flex flex-col items-start gap-3 p-5 rounded-2xl duration-300 sm:w-64 md:w-56">
          <div className="w-16 h-16 flex items-center justify-center p-5 rounded-full text-white text-3xl bg-green">
            <TbMathFunction />
          </div>
          <h2>Pedagogika</h2>
          <p className="text-sm">
            Shaxsni tarbiyalash, oʻqitish va shakllantirish Pedagogikaning asosiy
            funksiyasi hisoblanadi
          </p>
        </div>
      </div>
    </section>
  );
}

export default SubjectSection;
