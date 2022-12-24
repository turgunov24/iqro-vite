//hooks
import React from "react";
//icons
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

//additional
import "./footer.css";
import logoImage from "../../assets/iqro.jpg";
import { subjects } from "../../data/subjects/subjects";

function Footer() {
  return (
    <footer className="w-full min-h-max flex flex-wrap justify-between gap-10 py-16 px-10 bg-violet sm:px-14 md:px-16">
      <div className="w-full flex flex-col items-start justify-start gap-5 sm:w-52">
        <div className="w-max flex gap-3 items-center justify-between">
          <img src={logoImage} className="w-10 h-10 rounded-full" />
          <h5 className="font-semibold">Iqro kids</h5>
        </div>
        <p className="text-sm duration-300 hover:text-white">
          Manzil: Andijon shahar, buyuk turon 36
        </p>
        <p className="text-sm duration-300 hover:text-white">
          Mo'ljal: Mumtoz savdo markazi orqa tomoni
        </p>
        <div className="w-max flex items-center justify-between gap-5">
          <a
            href="https://www.instagram.com/iqrokids/"
            target="_blank"
            className="p-3 rounded-md bg-icon"
          >
            <h3>
              <AiFillInstagram />
            </h3>
          </a>
          <a
            href="https://t.me/MentalArifmetika_Uz"
            target="_blank"
            className="p-3 rounded-md bg-icon"
          >
            <h3>
              <FaTelegramPlane />
            </h3>
          </a>
          <a
            href="https://www.youtube.com/reutv"
            target="_blank"
            className="p-3 rounded-md bg-icon"
          >
            <h3>
              <IoLogoYoutube />
            </h3>
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-5 sm:w-52">
        <h5 className="font-semibold">Fanlar</h5>
        <div className="flex flex-col gap-5">
          {subjects.map((subject) => (
            <p className="text-sm duration-300 hover:text-white">
              {subject.name}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-5 sm:w-52">
        <h5 className="font-semibold">Aloqa</h5>
        <div className="flex flex-col gap-5">
          <p className="text-sm duration-300 hover:text-white">
            Tel: +998916001222
          </p>
          <p className="text-sm duration-300 hover:text-white">
            <a href="https://t.me/MentalArifmetika_Uz" target="_blank">
              t.me/MentalArifmetika_Uz
            </a>
          </p>
          <p className="text-sm duration-300 hover:text-white">
            <a href="https://t.me/iqromax_admin" target="_blank">
              Admin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
