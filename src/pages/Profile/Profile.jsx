import React from "react";
import ProfileIMG from "../../../public/images/ProfileIMG.png";
import Work from "@/components/Links/Work";
import Home from "@/components/Links/Home";

const ProfilePage = () => {
  return (
    <>
      <Home />
      <div
        style={{
          backgroundImage: `url(${ProfileIMG.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="pt-8 text-gray-50 text-sm">
          <div className="pb-8 px-11">
            <h1 className="text-center font-bold text-4xl p-4">Profile</h1>
            <p className="text-center px-6 pb-2">
              I am a highly skilled Full-stack developer with expertise in web
              and mobile application development. With a strong command of
              front-end and back-end technologies, I create innovative and
              user-friendly solutions. Let's build exceptional applications
              together!
            </p>

            <p className="text-center px-6 pb-2">
              Experienced Full-stack Software Developer with 4+ years of
              expertise. Specialized in building robust web applications,
              proficient in front-end (
              <span className="bg-orange-500/20 backdrop-blur-sm px-2 rounded-md">
                HTML
              </span>
              ,
              <span className="bg-violet-500/20 backdrop-blur-sm px-2 rounded-md">
                CSS
              </span>
              ,
              <span className="bg-yellow-500/20 backdrop-blur-sm px-2 rounded-md">
                JavaScript
              </span>
              ,
              <span className="bg-sky-500/20 backdrop-blur-sm px-2 rounded-md">
                React
              </span>
              ,
              <span className="bg-blue-500/20 backdrop-blur-sm px-2 rounded-md">
                React Native
              </span>
              ,
              <span className="bg-zinc-50/20 backdrop-blur-sm px-2 rounded-md">
                Next JS
              </span>
              ,
              <span className="bg-green-700/20 backdrop-blur-sm px-2 rounded-md">
                Vue JS
              </span>
              , ) and back-end (
              <span className="bg-green-600/20 backdrop-blur-sm px-2 rounded-md">
                Python
              </span>
              ,
              <span className="bg-green-500/20 backdrop-blur-sm px-2 rounded-md">
                Node.js
              </span>{" "}
              ,
              <span className="bg-blue-500/20 backdrop-blur-sm px-2 rounded-md">
                Django
              </span>{" "}
              ,
              <span className="bg-yellow-400/20 backdrop-blur-sm px-2 rounded-md">
                Express.js
              </span>{" "}
              ) development. Strong database management skills (SQL, NoSQL).
              Committed to delivering high-quality code and user-friendly
              interfaces. Skilled in problem-solving and collaborative team
              environments. Adaptable to new technologies, providing end-to-end
              development solutions tailored to client needs.
            </p>
          </div>

          <div className="px-8">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="px-12 p-4">
                <h2 className="text-2xl font-bold">Skills</h2>
                <p>Figma Design & Prototyping</p>
                <p>Adobe PhotoShop (Photo munipulation)</p>
                <p>Adobe Illustrator (Logo/Customer Style shapes)</p>
                <p>Blender (Creating 3D OBJ)</p>
              </div>
              <div className="px-12 p-4">
                <h2 className="text-2xl font-bold">JavaScript Framework</h2>
                <p>React JS</p>
                <p>Next Js</p>
                <p>React Native</p>
                <p>Vue JS</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="px-12 p-4">
                <h2 className="text-2xl font-bold">Tools</h2>
                <p>VS Code</p>
                <p>Sublime Text</p>
                <p>MySQL Workbench</p>
                <p>MongoDB</p>
              </div>
              <div className="px-12 p-4">
                <h2 className="text-2xl font-bold">Programing Laugauge</h2>
                <p>Python</p>
                <p>JavaScript</p>
                <p>HTML</p>
                <p>CSS</p>
              </div>
            </div>
          </div>
        </div>
        <Work />
      </div>
    </>
  );
};

export default ProfilePage;
