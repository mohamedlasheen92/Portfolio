import { Menu, Moon, Sun, X } from "lucide-react";
import "./header.scss";
import { useState } from "react";
import IconButton from "../ui/IconButton";

const Header = () => {

  const [modal, setModal] = useState(false)
  const [iconMode, setIconMode] = useState(true);
  const toggleMode = () => setIconMode(!iconMode);


  
  return (
    <>
      <header className="header flex items-center justify-between">
        <IconButton displayed="sm:hidden">
          <Menu onClick={() => setModal(true)} />
        </IconButton>
        <div className="hidden sm:block"></div>
        <nav className="hidden sm:block rounded-full">
          <ul className="flex space-x-5 py-3 px-7  text-lg font-semibold ">
            <li className=" tracking-widest">
              <a href="/">Home</a>
            </li>
            <li className=" tracking-widest">
              <a href="/">About</a>
            </li>
            <li className=" tracking-widest">
              <a href="/">Projects</a>
            </li>
            <li className=" tracking-widest">
              <a href="/">Contact</a>
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
                  <a href="/" className="block py-3 border-b-2 border-gray-800">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" className="block py-3 border-b-2 border-gray-800">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/" className="block py-3 ">
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
