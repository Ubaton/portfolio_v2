import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/constant/ListIcon/LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary dark:text-primaryDark capitalize"
          >
            @ {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="flex flex-col w-full items-start justify-between ml-4 xs:ml-2">
          <Details
            position={"Web Developer"}
            company={"SundayCreatives"}
            companyLink={"https://www.sundaycreatives.co.za/"}
            time={"2024-Present"}
            address={
              "Northlands Corner New Market Road, Northriding Johannesburg"
            }
            work={`Working as team responsible for developing new features and Softwares for 
                   clients, and creating custome application, including improving the exiting Web and Mobile app and 
                   developing new tools and seemless integration.`}
          />
          <Details
            position={"Web Developer"}
            company={"Silotu Consulting"}
            companyLink={"http://www.silotuconsulting.co.za/"}
            time={"2022-2023"}
            address={"181 DERBY DR, NORTHRIDING, RANDBURG, GP, 2169"}
            work={`Worked on a team responsible for developing new features for Google's 
                   search engine, including improving the accuracy and relevance of search results and 
                   developing new tools for data analysis and visualization.`}
          />
          <Details
            position={"Software Engineer"}
            company={"Homepower"}
            companyLink={"www.homepower.co.za"}
            time={"2023-Present"}
            address={`EAST DRIEFOTEIN VILLAGE, 15 PLOVER, CARLTONVILLE, GP, 2499`}
            work={`Worked on a team responsible for developing new features for Google's 
                   search engine, including improving the accuracy and relevance of search results and 
                   developing new tools for data analysis and visualization.`}
          />
          <Details
            position={"Software Engineer"}
            company={"Creative Minds Graphics"}
            companyLink={"https://creativemg.netlify.app/"}
            time={"2022-Present"}
            address={"4912 DE BRUYN STREET, CHLOORKOP, EDENVALE, 1624"}
            work={`Worked on a team responsible for developing new features for Google's 
                   search engine, including improving the accuracy and relevance of search results and 
                   developing new tools for data analysis and visualization.`}
          />
          <Details
            position={"Software Engineer"}
            company={"Creative Minds Graphics"}
            companyLink={"https://qrcode-generator-cmg.netlify.app/"}
            time={"2022-Present"}
            address={"4912 DE BRUYN STREET, CHLOORKOP, EDENVALE, 1624"}
            work={` SasS Worked on a team responsible for developing new features for Google's 
                   search engine, including improving the accuracy and relevance of search results and 
                   developing new tools for data analysis and visualization.`}
          />
          <Details
            position={"Software Engineer"}
            company={"Creative Minds Graphics"}
            companyLink={"https://creativemg.netlify.app/"}
            time={"2022-Present"}
            address={"4912 DE BRUYN STREET, CHLOORKOP, EDENVALE, 1624"}
            work={`Worked on a team responsible for developing new features for Google's 
                   search engine, including improving the accuracy and relevance of search results and 
                   developing new tools for data analysis and visualization.`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
