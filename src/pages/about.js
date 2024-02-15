import AnimatedText from "@/components/Animated/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ProfileImage from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills/Skills";
import Exprience from "@/components/Experience/Exprience";
import Education from "@/components/Education/Education";
import Trophy from "../../public/assets/trophy-star.png";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Raymond Ngobeni | About Page</title>
        <meta
          name="description"
          content="Learn more about Raymond Ngobeni, his background, expertise, and achievements. Get insights into his skills, experience, and contributions in the field of technology and web development."
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Passion Fuels Purpose! "}
            className={"mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"}
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 md:col-span-8 md:order-2 xl:col-span-4 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>

              <p className="font-medium">
                Hi, I&apos;m Raymond Ngobeni, a Software developer and UI/UX
                designer with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 4 years of experience in
                the field. I am always looking for new and innovative ways to
                bring my clients&apos; visions to life.
              </p>

              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty, it&apos;s about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className="font-medium">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-3 md:col-span-8 xl:col-span-4 md:order-1 relative h-mav rounded-2xl border-2 border-solid border-dark dark:border-light bg-light p-8 dark:bg-dark">
              <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={ProfileImage}
                alt="Raymond Ngobeni"
                className="w-full h-auto rounded-lg"
              />
              <div className="flex flex-row items-center text-dark dark:text-light">
                <span>
                  <h3 className="pt-4 font-semibold text-2xl">
                    Raymond Ngobeni
                  </h3>
                  <h4 className="font-medium">South African</h4>
                  <h4 className="font-medium">
                    <span>Born:</span> 1996/08/13
                  </h4>
                  <h4 className="text-primary font-medium">
                    Full-Stack Software Developer
                  </h4>
                </span>
                <span className="pl-4">
                  <Image
                    src={Trophy}
                    priority
                    sizes="(max-width: 768) 100vw, (max-width: 1200px) 50vw, 33vw "
                    alt="Trophy"
                    width={50}
                    height={50}
                  />{" "}
                </span>
              </div>
            </div>
            <div className="col-span-2 md:order-3 xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-center justify-between">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} /> +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  setisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-cente xl:items-centerr">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experiences
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Exprience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
