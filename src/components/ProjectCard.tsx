import { IProject } from "../interfaces"

interface IProps {
  project: IProject
}

const ProjectCard = ({ project }: IProps) => {
  const { imagePath, title, description } = project;

  return (
    <>
      <div className="border border-red-500 max-w-md mx-auto">
        <img src={imagePath} alt={title} className="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}

export default ProjectCard