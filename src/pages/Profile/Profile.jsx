import React from "react";
import ProfileIMG from "../../../public/images/ProfileIMG.png";

const Profile = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${ProfileIMG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="text-gray-50">
        <h1 className="text-center font-bold text-4xl p-4">Profile</h1>
        <p className="text-center px-6 pb-2">
          I am a highly skilled Full-stack developer with expertise in web and
          mobile application development. With a strong command of front-end and
          back-end technologies, I create innovative and user-friendly
          solutions. Let's build exceptional applications together!
        </p>

        <p className="text-center px-6 pb-2">
          Experienced Full-stack Software Developer with 4+ years of expertise.
          Specialized in building robust web applications, proficient in
          front-end (
          <span className="bg-orange-500 px-2 text-zinc-950 rounded-md">
            HTML
          </span>
          ,
          <span className="bg-violet-500 px-2 text-zinc-950 rounded-md">
            CSS
          </span>
          ,
          <span className="bg-yellow-500 px-2 text-zinc-950 rounded-md">
            JavaScript
          </span>
          ,
          <span className="bg-sky-500 px-2 text-zinc-950 rounded-md">
            React
          </span>
          ,
          <span className="bg-blue-500 px-2 text-zinc-950 rounded-md">
            React Native
          </span>
          ,
          <span className="bg-zinc-50 px-2 text-zinc-950 rounded-md">
            Next JS
          </span>
          ,
          <span className="bg-green-700 px-2 text-zinc-950 rounded-md">
            Vue JS
          </span>
          , ) and back-end (
          <span className="bg-green-600 px-2 text-zinc-950 rounded-md">
            Python
          </span>
          ,
          <span className="bg-green-500 px-2 text-zinc-950 rounded-md">
            Node.js
          </span>{" "}
          ,
          <span className="bg-blue-500 px-2 text-zinc-950 rounded-md">
            Django
          </span>{" "}
          ,
          <span className="bg-yellow-400 px-2 text-zinc-950 rounded-md">
            Express.js
          </span>{" "}
          ) development. Strong database management skills (SQL, NoSQL).
          Committed to delivering high-quality code and user-friendly
          interfaces. Skilled in problem-solving and collaborative team
          environments. Adaptable to new technologies, providing end-to-end
          development solutions tailored to client needs.
        </p>
      </div>
    </div>
  );
};

export default Profile;
