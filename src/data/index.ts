import { IProject } from "../interfaces"
import courseCover from "../assets/course-cover.png"
import productsBuilder from "../assets/products-builder.png"
import reduxMovies from "../assets/redux-movies.png"

export const categories: string[] = [
  "All",
  // "HTML CSS(SASS) JS",
  // "JavaScript",
  "Backend",
  "Front End"
  // "React",
  // "Node Express",

  
  
]

export const projects: IProject[] = [
  {
    //imagePath: courseCover,
    title: "NodeJS Product API",
    description:
      "A simple Node.js API to filter, sort, and paginate products using MongoDB.",
    category: "Backend",
    code: "https://github.com/mohamedlasheen92/NodeJS-Product-API",
  },
  {
    //imagePath: courseCover,
    title: "Task Manager",
    description:
      "API for managing tasks with CRUD operations, using async middleware and custom error handling.",
    category: "Backend",
    code: "https://github.com/mohamedlasheen92/nodejs-task-manager",
  },
  {
    imagePath: productsBuilder,
    title: "Products Builder",
    description: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
    category: "Front End",
    code: "https://github.com/mohamedlasheen92/products-builder",
    preview: "https://mohamedlasheen92.github.io/products-builder/",
  },
  {
    imagePath: reduxMovies,
    title: "Redux Movies App",
    description: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
    category: "Front End",
    code: "https://github.com/mohamedlasheen92/Redux_Movies_App",
    preview: "https://reduxmoviesapp.netlify.app/",
  },

  {
    imagePath: courseCover,
    title: "Text Title 70",
    description: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
    category: "Backend",
  },
  {
    imagePath: courseCover,
    title: "Text Title 80",
    description: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
    category: "Backend",
  },
];