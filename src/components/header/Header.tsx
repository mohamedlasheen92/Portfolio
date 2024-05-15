import { Moon, Sun } from "lucide-react";
import "./header.scss";
import { useState } from "react";

const Header = () => {

  
  const [iconMode, setIconMode] = useState(true);
  const toggleMode = () => setIconMode(!iconMode);


  
  return (
    <>
      <header className="header flex items-center justify-between">
        <div></div>
        <nav>
          <ul className="flex space-x-5 py-3 px-7 rounded-full">
            <li className="font-semibold text-sm tracking-widest">
              <a href="/">Home</a>
            </li>
            <li className="font-semibold text-sm tracking-widest">
              <a href="/">Projects</a>
            </li>
            <li className="font-semibold text-sm tracking-widest">
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <div
          className={`icon p-2 icon rounded-full cursor-pointer border transition-colors duration-300`}
          onClick={() => toggleMode()}
        >
          {iconMode ? <Moon /> : <Sun className="sun" />}
        </div>
      </header>
    </>
  );
};

export default Header;
