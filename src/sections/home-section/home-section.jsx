//hooks
import React from "react";
//additional
import "./home-section.css";
import childOne from "../../assets/child1.jpg";
import childTwo from "../../assets/child2.jpg";
import childThree from "../../assets/child3.jpg";
import childFour from "../../assets/child4.jpg";
import { AiFillStar } from "react-icons/ai";

function HomeSection() {
  const randomStarGenerator = (e) => {
    let stars = [];
    let sizes = ["xs", "sm", "lg", "xl", "2xl", "3xl"];
    let yPositions = [
      2, 4, 8, 11, 14, 20, 28, 36, 40, 48, 56, 60, 64, 72, 80, 96,
    ];
    let xPositions = [
      2, 4, 8, 11, 14, 20, 28, 36, 40, 48, 56, 60, 64, 72, 80, 96,
    ];
    for (let i = 0; i < 8; i++) {
      let randomX = Math.abs(Math.floor(Math.random() * yPositions.length - 1));
      let randomY = Math.abs(Math.floor(Math.random() * xPositions.length - 1));
      let randomSize = Math.abs(Math.floor(Math.random() * sizes.length - 1));
      let randomStar = `top-${yPositions[randomY]} left-${xPositions[randomX]} text-${sizes[randomSize]}`;
      stars.push({
        size: randomStar,
      });
    }
    return stars;
  };

  return (
    <section
      id="home-section"
      className="relative w-full min-h-screen flex flex-col items-center gap-5 py-16 px-10 text-center sm:px-14 md:px-16 md:pt-20"
    >
      <h1 className="w-full text-3xl mt-10 sm:text-4xl lg:text-6xl tracking-wide">
        Education is the abitlity to <br className="hidden sm:block" /> meet
        life's situations.
      </h1>
      <p className="w-full text-sm">
        Anyone who isn't embrassed of who they were last{" "}
        <br className="hidden md:block" /> year probably isn't learning enough
      </p>
      <div className="relative z-10 w-full flex flex-col items-center justify-between gap-5 mt-10 border sm:flex-row md:mt-5">
        <div className="w-72 h-80 border-5 border-ylw rounded-b-full overflow-hidden sm:h-72 md:h-96 md:w-1/3 lg:w-1/4">
          <img
            id="home-child"
            src={childOne}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden sm:relative top-16 sm:block w-72 h-72 md:w-1/3 border-5 border-green rounded-t-full overflow-hidden lg:h-96 lg:w-1/4">
          <img
            id="home-child"
            src={childTwo}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden md:relative md:block w-1/3 h-96 border-5 border-red rounded-b-full overflow-hidden lg:w-1/4">
          <img
            id="home-child"
            src={childThree}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden lg:relative top-16 lg:block w-1/4 h-96 border-5 border-ylw rounded-t-full overflow-hidden ">
          <img
            id="home-child"
            src={childFour}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="hidden md:block md:absolute bottom-1/3 left-5 z-0 text-yellow">
        <AiFillStar />
      </div>
      <div className="hidden md:block md:absolute bottom-32 right-1/3 z-0 text-yellow">
        <AiFillStar />
      </div>
      <div className="hidden md:block md:absolute top-56 right-10 z-0 text-yellow text-6xl">
        <AiFillStar />
      </div>
      <div className="hidden md:block md:absolute top-96 left-96 z-0 text-yellow">
        <AiFillStar />
      </div>
      <div className="hidden md:block md:absolute top-56 left-36 z-0 text-yellow text-4xl">
        <AiFillStar />
      </div>
      <div className="hidden md:block md:absolute bottom-10 left-80 z-0 text-yellow text-5xl">
        <AiFillStar />
      </div>
      <div className="hidden md:block md:absolute top-64 left-48 z-0 text-yellow">
        <AiFillStar />
      </div>
      <div className="hidden md:block md:absolute top-1/3 right-1/4 z-0 text-yellow text-2xl">
        <AiFillStar />
      </div>
      <div className="hidden md:block md:absolute bottom-10 right-20 z-0 text-yellow text-2xl">
        <AiFillStar />
      </div>
    </section>
  );
}

export default HomeSection;
