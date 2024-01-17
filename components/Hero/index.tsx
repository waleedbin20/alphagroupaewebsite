"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-[#443e3e] dark:text-white xl:text-hero ">
                We Are Alpha Group {"   "}
              </h1>
              <p>
                Your Source for <strong className="text-[#9e0d0d]">Precision Transportation</strong>, <strong className="text-[#2f8799]">Cutting-edge Electronics</strong>, and <strong className="text-[#0d3b9e]">Robust Heavy Machine Maintenance</strong> services in <strong>Abu Dhabi, UAE</strong>.
                .With a trio of subsidiaries, we seamlessly integrate precision,
                reliability, and innovation into every aspect of our operations.
              </p>

              <div className="mt-10">
                <div className="flex flex-wrap gap-5">
                  <a href="https://wa.me/+971542177854?text=Thank%20you%20for%20reaching%20out%20to%20Alpha%20Group!%20Please%20enter%20your%20query%20below,%20and%20we'll%20get%20back%20to%20you%20as%20soon%20as%20possible." aria-label="speak to our team">
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Speak To Our Team
                    </button>
                  </a>
                </div>

              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="dark:hidden"
                    src="/images/hero/alpha-logo-1.png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden dark:block"
                    src="/images/hero/alpha-logo-1.png"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
