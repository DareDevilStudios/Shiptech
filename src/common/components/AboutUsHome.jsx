import Image from "next/image";
import React from "react";
import About from "../../../public/assets/images/about-home2.jpg";
import Return from "../../../public/assets/icons/return.svg";

const AboutUsHome = () => {
  return (
    <div>
      <section class="bg-white w-full">
        <div class="flex items-center justify-center w-full py-8 gap-9 lg:py-16">
          <div class="w-1/2">
            <h3 className="font-semibold text-3xl text-gray-400 mb-4">
              About Us
            </h3>
            <h1 class="font-body w-5/6 mb-5 text-3xl font-semibold tracking-tight leading-none md:text-3xl xl:text-5xl text-blue-700">
              We Take Pride in Serving Our Customers Safely.
            </h1>
            <p class="text-justify mb-6 font-light lg:mb-8 md:text-lg lg:text-2xl ">
              Innovation with strong engineering background being the founding
              stone of ShipTech-ICON,
              <span className="font-bold">
                our aim is to innovate and improve the product and client
                processes so as to have cost effective and better solutions.
              </span>{" "}
              We provide technical assistance to the maritime and related
              industries/organizations by way of design, modifications,
              evaluation of projects etc. with active support from other experts
              in the field. ShipTech-ICON adopts scientific design procedures on
              a much cheaper rate thereby making it more accessible to the
              owners and thus ensuring the proper life cycle management of
              products including boats and vessels. We have experience doing a
              wide spectrum of projects including site supervision, project
              management, basic design, production design & support.
            </p>
            <div class="">
              <h3 className="font-display tracking-wide font-normal text-2xl text-black mb-7">
                We Provide Best Quality Services
              </h3>
              <div className="grid gap-4 text-gray-500 text-xl tracking-wider">
                <div className="grid grid-cols-2  ">
                  <div className="flex w-max">
                    <Image src={Return} alt="mockup" width={25} />
                    <p className="font-normal ml-2">
                      Naval Architectural Services
                    </p>
                  </div>
                  <div className="flex w-max">
                    <Image src={Return} alt="mockup" width={25} />
                    <p className="font-normal ml-2">
                      Product Designing
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex w-max">
                    <Image src={Return} alt="mockup" width={25} />
                    <p className="font-normal ml-2">
                      Marine Services
                    </p>
                  </div>
                  <div className="flex w-max">
                    <Image src={Return} alt="mockup" width={25} />
                    <p className="font-normal ml-2">
                      Prototype Manufacturing
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex w-max">
                    <Image src={Return} alt="mockup" width={25} />
                    <p className="font-normal ml-2">
                    Structural Engineering Services
                    </p>
                  </div>
                  <div className="flex w-max">
                    <Image src={Return} alt="mockup" width={25} />
                    <p className="font-normal ml-2">
                    Hydrodynamics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <Image className="h-full" src={About} alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsHome;
