import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (hash) => {
    if (location.pathname === "/contact") {
      navigate(`/${hash}`);
    } else {
      window.location.hash = hash;
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col justify-between md:flex-row items-center">
        <button
          onClick={() => handleNavigation("#about")}
          className="ml-3 text-xl hover:text-white"
        >
          Agustin Natali
        </button>
        <button className="md:hidden ml-auto text-white" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto w-full`}
        >
          <div className="md:flex md:space-x-4">
            <button
              onClick={() => handleNavigation("#projects")}
              className="block md:inline-block mr-5 hover:text-white"
            >
              Aplicaciones
            </button>
            <button
              onClick={() => handleNavigation("#skills")}
              className="block md:inline-block mr-5 hover:text-white"
            >
              Habilidades
            </button>
            <Link
              to="/contact"
              className="block md:inline-block border-0 py-1 px-3 focus:outline-none hover:text-white rounded text-base mt-4 md:mt-0"
            >
              Contacto
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
