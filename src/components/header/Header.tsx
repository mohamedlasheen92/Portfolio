import { Menu, Moon, Sun, X } from "lucide-react";
import "./header.scss";
import { useState } from "react";
import IconButton from "../ui/IconButton";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [iconMode, setIconMode] = useState(true);
  const toggleMode = () => {
    setIconMode(!iconMode);
    if (document.body.classList.contains("light")) {
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
    }
  };

  return (
    <>
      <header className="header flex items-center justify-between sticky top-0">
        <IconButton onClick={() => setModal(true)} displayed="sm:hidden">
          <Menu />
        </IconButton>
        <div className="hidden sm:block"></div>
        <nav className="hidden sm:block rounded-full">
          <ul className="flex space-x-5 py-3 px-7  text-lg font-semibold ">
            <li className=" tracking-widest">
              <a href="#home">Home</a>
            </li>
            <li className=" tracking-widest">
              <a href="#about">About</a>
            </li>
            <li className=" tracking-widest">
              <a href="#skills">Skills</a>
            </li>
            <li className=" tracking-widest">
              <a href="#projects">Projects</a>
            </li>
            <li className=" tracking-widest">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <IconButton onClick={() => toggleMode()}>
          {iconMode ? <Moon /> : <Sun className="sun" />}
        </IconButton>

        {modal && (
          <div className="modal fixed inset-0 backdrop-blur-sm	">
            <div className="popup  w-4/5 left-[10%] absolute top-10 py-4 px-8 rounded-lg">
              <button className="absolute right-3 top-2 hover:rotate-180 hover:scale-150 duration-500">
                <X onClick={() => setModal(false)} size={30} />
              </button>
              <ul className="mt-4 text-lg font-semibold">
                <li>
                  <a
                    href="#home"
                    className="block py-3 border-b-2 border-gray-800"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block py-3 border-b-2 border-gray-800"
                  >
                    about
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="block py-3 border-b-2 border-gray-800"
                  >
                    skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="block py-3 border-b-2 border-gray-800"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="block py-3 ">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
