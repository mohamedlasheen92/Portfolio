import { Github, Link } from "lucide-react";
import { IProject } from "../interfaces"

interface IProps {
  project: IProject;
}

const ProjectCard = ({ project  }: IProps) => {
  const { imagePath, title, description, code, preview } = project;

  return (
    <>
      <div className="border border-gray-500 max-w-md mx-auto product-card">
        {imagePath && <img src={imagePath} alt={title} className="" />}
        <div className="desc p-2">
          <h3 className="text-lg">{title}</h3>
          {description && <p className="my-2 info">{description}</p>}

          <div className="links flex space-x-5">
            <a href={code} target="_blank">
              <Github />
            </a>
            {preview && (
              <a href={preview} target="_blank">
                <Link />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard