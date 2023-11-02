import React from "react";
import Image from "next/image";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

const Hero = () => {
  return (
    <section className="lg:py-16">
      <div className="flex flex-col md:flex-row place-content-between gap-3 p-4 my-6">
        <div className="place-self-center text-center md:text-left justify-self-center">
          <p className="text-[#ADB7BE] text-base md:text-lg lg:text-3xl">
            Hi there,
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            {"I'm "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FEE8D] to-[#17c964]">
              Parunchai Kaewkhampa
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base md:text-2lg lg:text-4xl">
            <Link href="https://github.com/parunchxi">
              <i className="ri-github-fill hover:text-white ease-in-out"> </i>
            </Link>
            <Link href="https://www.facebook.com/parunchxi">
              <i className="ri-facebook-circle-fill hover:text-white ease-in-out">
                {" "}
              </i>
            </Link>
            <Link href="mailto:parunchxi@gmail.com">
              <i className="ri-mail-fill hover:text-white ease-in-out"> </i>
            </Link>
          </p>
        </div>
        <div className="place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/image1.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
