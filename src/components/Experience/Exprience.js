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
        <span className="capitalize font-medium text-dark/75 dark:text-primary xs:text-sm">
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

  const workToList = (work) => {
    return (
      <span className="list-disc pl-5">
        {work
          .split("\n")
          .filter((item) => item.trim() !== "")
          .map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
      </span>
    );
  };

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
            key="sunday-creatives"
            position="Web Developer"
            company="SundayCreatives"
            companyLink="https://www.sundaycreatives.co.za/"
            time="2024-Present"
            address="Northlands Corner New Market Road, Northriding Johannesburg"
            work={workToList(`Software Engineer

 Designed and structured scalable applications, ensuring seamless updates and maintenance.
 Developed robust codebase architecture with a focus on clean integration and scalability.
 Worked with industry-leading databases such as MySQL, PostgreSQL, AWS Cloud, and Firebase.
 Utilized a versatile tech stack, including JavaScript, TypeScript, Python, Node.js, and RESTful APIs, for maintainable and efficient software development.
 Optimized cloud-based applications and databases, focusing on performance, reliability, and cost-effectiveness.
 Conducted comprehensive data analysis for large-scale applications using Python to derive actionable insights.`)}
          />
          ,
          <Details
            key="silotu-consulting"
            position="Web Developer"
            company="Silotu Consulting"
            companyLink="https://www.silotuconsulting.co.za/"
            time="2022-2023"
            address="181 DERBY DR, NORTHRIDING, RANDBURG, GP, 2169"
            work={workToList(`Worked on a team responsible for developing new features for Google's search engine.
 Improved the accuracy and relevance of search results.
 Developed new tools for data analysis and visualization.`)}
          />
          ,
          <Details
            key="homepower"
            position="Software Engineer"
            company="Homepower"
            companyLink="https://www.homepower.co.za"
            time="2023-2024"
            address="EAST DRIEFOTEIN VILLAGE, 15 PLOVER, CARLTONVILLE, GP, 2499"
            work={workToList(`Contributed to the development of new features for Google's search engine.
 Enhanced the accuracy and relevance of search results.
 Created tools for comprehensive data analysis and visualization.`)}
          />
          ,
          <Details
            key="creative-minds-graphics-1"
            position="Software Engineer"
            company="Creative Minds Graphics"
            companyLink="https://creativemg.netlify.app/"
            time="2022-Present"
            address="4912 DE BRUYN STREET, CHLOORKOP, EDENVALE, 1624"
            work={workToList(`Collaborated on a team to enhance Google's search engine features.
 Focused on improving the accuracy and relevance of search outcomes.
 Developed tools for data analysis and visual reporting.`)}
          />
          ,
          <Details
            key="creative-minds-graphics-qr"
            position="Software Engineer"
            company="Creative Minds Graphics"
            companyLink="https://qrcode-generator-cmg.netlify.app/"
            time="2022-Present"
            address="4912 DE BRUYN STREET, CHLOORKOP, EDENVALE, 1624"
            work={workToList(`Engaged in a SaaS project developing features for Google's search engine.
 Enhanced the accuracy of search results and user experience.
 Created and implemented new tools for data analysis and visualization.`)}
          />
          ,
          <Details
            key="creative-minds-graphics-2"
            position="Software Engineer"
            company="Creative Minds Graphics"
            companyLink="https://creativemg.netlify.app/"
            time="2022-Present"
            address="4912 DE BRUYN STREET, CHLOORKOP, EDENVALE, 1624"
            work={workToList(`Worked on improving features of Google's search engine.
 Focused on increasing the relevance of search results.
 Developed advanced data analysis tools for enhanced visualization.`)}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
