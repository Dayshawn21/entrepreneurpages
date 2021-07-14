import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" md:flex justify-around items-center ">
      <div className=" text-center">
        <h1 className="text-5xl"> Entrepreneur Pages</h1>
        <p className="text-2xl pt-2">
          We will help you find the best entrepreneurs around the world
        </p>
      </div>
      <div>
        <Image
          src="/img/4380.jpg"
          alt="Picture of the author"
          width={500}
          height={400}
          className="heroimg"
        />
      </div>
    </div>
  );
};

export default Hero;
