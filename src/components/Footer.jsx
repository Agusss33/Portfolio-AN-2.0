// src/components/Footer.jsx
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
          © 2024 Portfolio —
          <a
            href="https://www.linkedin.com/in/agustin-natali-b84091226/"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Agustin Natali
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="text-gray-400"
            href="https://github.com/Agusss33"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="ml-3 text-gray-400"
            href="https://www.linkedin.com/in/agustin-natali-b84091226/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
}
