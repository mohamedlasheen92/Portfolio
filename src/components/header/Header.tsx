import { Moon } from "lucide-react";
import styles from "./header.module.scss";

const Header = () => {
  console.log(styles);

  return (
    <>
      <header className="header flex items-center justify-between">
        <div></div>
        <nav>
          <ul className="flex space-x-5 py-3 px-7 rounded-full">
            <li className="font-semibold text-sm">
              <a href="/">Home</a>
            </li>
            <li className="font-semibold text-sm">
              <a href="/">Projects</a>
            </li>
            <li className="font-semibold text-sm">
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <div
          className={`icon p-2 ${styles.icon} rounded-full cursor-pointer border transition-colors duration-300`}
        >
          <Moon />
        </div>
      </header>
    </>
  );
};

export default Header;
