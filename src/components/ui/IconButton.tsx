import { ButtonHTMLAttributes, ReactNode } from "react"
import './IconButton.scss'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  displayed?: string;
}

const IconButton = ({children,displayed = "block", ...rest}: IProps) => {

  return (
    <>
      <button className={`icon p-2 rounded-full border transition-colors duration-300 ${displayed}`} {...rest}>
        {children}
      </button>
    </>
  );
}

export default IconButton