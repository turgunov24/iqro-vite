//hooks
import React from "react";
//icons
import { ImTwitter } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

//additional
import "./footer.css";
import logoImage from "../../assets/iqro.jpg";
import { subjects } from "../../data/subjects/subjects";

function Footer() {
  return (
    <footer className="w-full min-h-max flex flex-wrap justify-between gap-10 py-16 px-10 bg-violet sm:px-14 md:px-16">
      <div className="w-full flex flex-col items-start justify-between gap-5 sm:w-52">
        <div className="w-max flex gap-3 items-center justify-between">
          <img src={logoImage} className="w-10 h-10 rounded-full" />
          <h5 className="font-semibold">Iqro kids</h5>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          beatae.elit. Delectus beatae.
        </p>
        <div className="w-max flex items-center justify-between gap-5">
          <h3 className="p-3 rounded-md bg-icon">
            <ImTwitter />
          </h3>
          <h3 className="p-3 rounded-md bg-icon">
            <FaFacebookF />
          </h3>
          <h3 className="p-3 rounded-md bg-icon">
            <IoLogoYoutube />
          </h3>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-between gap-5 sm:w-52">
        <h5 className="font-semibold">Subjects</h5>
        <div className="flex flex-col gap-5">
          {subjects.map((subject) => (
            <p className="text-sm duration-300 hover:text-white">{subject.name}</p>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-between gap-5 sm:w-52">
        <h5 className="font-semibold">About us</h5>
        <div className="flex flex-col gap-5">
          <p className="text-sm duration-300 hover:text-white">Address</p>
          <p className="text-sm duration-300 hover:text-white">
            Community update
          </p>
          <p className="text-sm duration-300 hover:text-white">Press Kit</p>
          <p className="text-sm duration-300 hover:text-white">Countact Us</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
