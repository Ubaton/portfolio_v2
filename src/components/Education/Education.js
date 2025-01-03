"use cache";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/constant/ListIcon/LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="flex flex-col items-center justify-between my-8 first:mt-0 last:mb-0 w-[60%] mx-auto md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="flex flex-col w-full items-start justify-between ml-4 xs:ml-2">
          <Details
            type={"Matric Certificate."}
            time={"2002-2015"}
            place={"Phomolong Sconadry School."}
            info={`Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence.`}
          />
          <Details
            type={"Degree in Mechatronics Engineering."}
            time={"2016-2017"}
            place={"Germiston Ekurhuleni West College (EWC)."}
            info={`Relevant courses included Engineering Sciences and Mathantics, Engineering Draft and Design, and Mechanotechnics.`}
          />
          <Details
            type={"Javascript Certificate (Online)."}
            time={"2023-2024"}
            place={
              "San Francisco, 600 Harrison Street, 3rd Floor, United States."
            }
            info={`Relevant courses included Data Structures and JavaScript, Computer Systems Engineering, and MySQL.`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
