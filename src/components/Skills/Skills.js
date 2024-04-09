import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark py-3 px-8 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightlg lg:dark:bg-circularDarklg        md:bg-circularLightMd lg:dark:bg-circularDarkMd     sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:p-2 xs:text-xs"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="TypeScript" x="6vw" y="9vw" />
        <Skill name="PostgreSQL" x="14vw" y="-4vw" />
        <Skill name="Next JS" x="-20vw" y="-15vw" />
        <Skill name="API" x="15vw" y="-12vw" />
        <Skill name="React JS" x="-32vw" y="-5vw" />
        <Skill name="JQuery" x="32vw" y="-5vw" />
        <Skill name="Node JS" x="8vw" y="-20vw" />
        <Skill name="EJS" x="-8vw" y="-20vw" />
        <Skill name="React Native" x="-25vw" y="-20vw" />
        <Skill name="Figma" x="-20vw" y="-7vw" />
        <Skill name="Firebase" x="20vw" y="15vw" />
        <Skill name="MongoDB" x="-10vw" y="12vw" />
        <Skill name="AWS Cloud" x="-27vw" y="10vw" />
        <Skill name="MySQL" x="-14vw" y="18vw" />
        <Skill name="Tailwind CSS" x="26vw" y="-18vw" />
      </div>
    </>
  );
};

export default Skills;
