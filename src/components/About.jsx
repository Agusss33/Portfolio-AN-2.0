import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white dark:text-black">
            Hola, soy Agustin
            <br className="" />
            Soy desarrollador
          </h1>
          <p className="mb-8 leading-relaxed">
            Me encuentro estudiando y aprendiendo nuevas habilidades en este
            mundo de la programación con muchas ganas de seguir profundizando en
            este área.
          </p>
          <div className="flex justify-center">
            <a
              href="https://drive.google.com/file/d/1-xjzEop0wgVaQERVdWStvOeXATwZj5Q5/view?usp=drive_link"
              target="_blank"
              className="inline-flex text-white bg-slate-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-300 rounded text-lg hover:text-black"
            >
              Curriculum
            </a>
          </div>
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src=""
          />
        </div> */}
      </div>
    </section>
  );
}
