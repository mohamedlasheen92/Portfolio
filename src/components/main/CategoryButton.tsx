import { txtSlicer } from '../../utils/functions'
import './category.scss'



interface IProps {
  name: string;
  activeBtn: boolean;
  onClickCategory: (name: string) => void;
}

const CategoryButton = ({ name, activeBtn, onClickCategory }: IProps) => {
  return (
    <>
      <button
        className={`category-btn py-3 px-2 text-center w-fit lg:w-44 
          transition-colors text-sm font-semibold rounded-md ${activeBtn ? "active" : ""}`}
        onClick={() => onClickCategory(name)}
      >
        {txtSlicer(name)}
      </button>
    </>
  );
};

export default CategoryButton