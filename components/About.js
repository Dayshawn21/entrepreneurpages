import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <section className="container md:grid md:grid-cols-2  py-6">
      <div>
        <Image src="/img/teamwork.jpg" width={500} height={400} />
      </div>
      <div>
        <div>
          <h1 className="text-center md:pt-20 text-4xl">Entrepreneur Pages</h1>
        </div>
        <div className="pt-3">
          <p className="text-2xl">
            Entrepreneur Pages is a business directory aimed at listing quality
            entrepreneur businesses. We're your one stop shop for all your
            needs!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
