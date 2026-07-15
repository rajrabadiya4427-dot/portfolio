import { ExternalLink } from "lucide-react";
import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ image,name,description,liveLink,githubLink}) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,.3)]">
      
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {description}
        </p>

        <div className="mt-6 flex gap-4">
          
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-700"
          >
            <ExternalLink size={16}/>
            Live Demo
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-black/20 dark:border-white/20 px-4 py-2 text-sm font-medium text-black dark:text-white transition hover:border-purple-500"
          >
            <FaGithub size={16} />
            Github
          </a>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;