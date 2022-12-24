//hooks
import React from "react";
//icons
import { BsFillPeopleFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
//additional
import image from "../../assets/about.png";

function AboutSection() {
  const dropdownToggle = (e) => {
    e.currentTarget.classList.toggle("h-max");
  };

  return (
    <section className="w-full min-h-max flex flex-col items-center gap-10 py-16 px-10 sm:px-14 md:px-16 md:gap-16">
      <div className="w-full flex flex-col items-center gap-5 md:gap-10">
        <div className="w-full flex flex-col gap-5 md:flex-row items-end">
          <div className="w-full flex flex-col gap-3 md:w-1/2">
            <h6 className="text-sm font-bold">Nega aynan biz ?</h6>
            <h2 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-4xl">
              What you choose also <br /> chooses you.
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque id ex eum excepturi porro itaque ab ad fugit enim.
              Voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-5 md:justify-around md:gap-10">
          <div className="w-full flex flex-col items-start gap-3 p-5 duration-300 rounded-xl border-1 border-grey sm:w-80 hover:shadow-xl hover:border-none">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green">
              <h6 className="text-white text-lg">
                <FaChalkboardTeacher />
              </h6>
            </div>
            <h2 className="font-semibold">Tajribali ustozlar</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              impedit ad incidunt!
            </p>
          </div>
          <div className="w-full flex flex-col items-start gap-3 p-5 duration-300 rounded-xl border-1 border-grey sm:w-80 hover:shadow-xl hover:border-none">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-violet">
              <h6 className="text-white text-lg">
                <GiTeacher />
              </h6>
            </div>
            <h2 className="font-semibold">Bola tarbiyasi</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              impedit ad incidunt!
            </p>
          </div>
          <div className="w-full flex flex-col items-start gap-3 p-5 duration-300 rounded-xl border-1 border-grey sm:w-80 hover:shadow-xl hover:border-none">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red">
              <h6 className="text-white text-lg">
                <RiComputerLine />
              </h6>
            </div>
            <h2 className="font-semibold">Zamonaviy ta'lim</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              impedit ad incidunt!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-5 md:flex-row justify-between md:gap-10">
        <div className="w-3/4 md:w-1/2">
          <img src={image} className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-full flex flex-col items-start justify-start gap-3 py-3 md:w-1/2">
          <h6 className="text-sm font-bold">Ko'p so'raladigan savollar</h6>
          <h2 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-4xl">
            One time in high school.
          </h2>
          <div className="flex flex-col items-start gap-5 mt-5">
            <div
              onClick={dropdownToggle}
              className="w-full h-10 flex flex-col gap-1 py-2 overflow-hidden"
            >
              <h2 className="">Qaytarish siyosati nima ?</h2>
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Magnam, perspiciatis.
              </p>
            </div>
            <div className="w-full border-1 border-grey"></div>
            <div
              onClick={dropdownToggle}
              className="w-full h-10 flex flex-col gap-1 py-2 overflow-hidden"
            >
              <h2 className="">Kurslar oldindan yozib olinadimi ?</h2>
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Magnam, perspiciatis.adipisicing elit. Magnam, perspiciatis.
              </p>
            </div>
            <div className="w-full border-1 border-grey"></div>
            <div
              onClick={dropdownToggle}
              className="w-full h-10 flex flex-col gap-1 py-2 overflow-hidden"
            >
              <h2 className="">"Read Me" ga qanday qo'shilaman ?</h2>
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Magnam, perspiciatis.
              </p>
            </div>
            <div className="w-full border-1 border-grey"></div>
            <div
              onClick={dropdownToggle}
              className="w-full h-10 flex flex-col gap-1 py-2 overflow-hidden"
            >
              <h2 className="">"Read Me" da qanday ko'nikmalar bor ?</h2>
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Magnam, perspiciatis.adipisicing elit. Magnam, perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
