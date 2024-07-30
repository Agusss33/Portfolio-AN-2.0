import React from "react";
import { CiMail } from "react-icons/ci";
import { FiSmartphone } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="md:h-screen">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap sm:h-screen">
        <div className="w-full sm:w-1/2 sm:mr-6 sm:h-4/6">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className=""
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22421.16772332068!2d-60.23278198483266!3d-33.34686936427998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b76793f9b400f7%3A0x622348daf45e89b1!2sSan%20Nicol%C3%A1s%20de%20Los%20Arroyos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1722014372023!5m2!1ses-419!2sar"
          />
        </div>

        <form
          name="contact"
          className="lg:w-1/3 md:w-1/2 sm:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-3 font-medium title-font">
            ¡Contrátame!
          </h2>
          <h4 className="mb-3 flex flex-row">
            <FiSmartphone size={25} className="mr-1"/> 3364359560
          </h4>
          <h4 className="mb-3 flex flex-row">
            <CiMail size={25} className="mr-1"/> agustinnatali7@gmail.com
          </h4>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-slate-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-300 rounded text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
