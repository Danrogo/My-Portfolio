import React from "react";
import Recipe from '../assets/projects/Recipe.png';
import Carrental from '../assets/projects/Carrental.png';
import Restaurant from '../assets/projects/Restaurant.png';
import Calculator from '../assets/projects/Calculator.png';
const Projects = () => {
  const projects = [
     
    {
      title: "Car Renting System",
      description:
        "This is vehicle renting system that allows users to rent vehicles for a specific period of time. I developed using React With Typescript and Hono & MongoDB for the backend.",
      photo: Carrental,
      link: "https://danrogo.github.io/VehicleRentingSystemProjectFrontend/",
      github: "https://github.com/Danrogo/VehicleRentingSystemProjectFrontend",
    },
    {
      title: "Restaurant App",
      description:
        "A restaurant app that allows users to view menu, place orders, and make reservations. I developed using ReactJS for the frontend and nodejs for the backend.",
      photo: Restaurant,
      link: "https://github.com/Danrogo/RESTAURANT-APP.git",
      github: "https://github.com/Danrogo/RESTAURANT-APP.git",
    },
    {
      title: "Calculator App",
      description:
        "Its is a simple calculator app that is fully responsive and functional. I used HTML, CSS and JavaScript to build the app.",
      photo: Calculator,
      link: "https://danrogo.github.io/calculator-app-/",
      github: "https://github.com/Danrogo/calculator-app-",
    },
    {
      title: "Recipe Frontend UI",
      description:
        "A simple Recipe UI. I designed using HTML, CSS and JavaScript. The web app is fully responsive.",
      photo: Recipe,
      link: "https://danrogo.github.io/RECIPE-MAIN/",
      github: "https://github.com/Danrogo/RECIPE-MAIN.git",
    },
   
  ];

  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <div className="md:flex my-7 items-center justify-center ">
        <div className="text-primary text-5xl font-bold items-center ">⭐ Featured Project ⭐</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"

              >
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>

              <p className=" text-white mt-1">{project.description}</p>
              <div className="mt-5">
                <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                  <a href={project.link}>Live Link</a>
                </button>
                <button className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white ">
                  <a href={project.github}>GitHub</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
