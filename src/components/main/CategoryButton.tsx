import { txtSlicer } from '../../utils/functions'
import './category.scss'

interface IProps {
  name: string
}

const CategoryButton = ({name}: IProps) => {

  return (
    <>
      <button className="category-btn py-3 px-2 text-center w-fit lg:w-full transition-colors text-sm font-semibold ">
        {txtSlicer(name)}
      </button>
    </>
  );
}

export default CategoryButton