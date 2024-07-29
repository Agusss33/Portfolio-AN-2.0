import React from "react";
import { skills } from "../projectsdata";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Habilidades y Tecnologías
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skills) => (
            <div key={skills.skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex justify-between p-4 h-full items-center">
                <span className="title-font font-medium text-white flex">
                  <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  {skills.skill}
                </span>
                <img src={skills.image} alt="" className="w-[4rem]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
