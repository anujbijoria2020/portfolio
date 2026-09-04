'use client'

import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import Title from '@/components/ui/Title';
import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { bricolage_grotesque } from '@/utils/fonts';

const INITIAL_PROJECTS = 4;

const ProjectCardList = () => {
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_PROJECTS);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  return (
    <div className='w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8'>
      <Title title='Proof of Work' />

      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.slice(0, visibleProjects).map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
      {visibleProjects < data.length && (
        <button
          type="button"
          onClick={loadMoreProjects}
          className={`flex items-center justify-center gap-1 px-2.5 py-1 text-[11px] sm:text-xs font-medium rounded bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all duration-200 mt-6 cursor-pointer shadow-sm active:scale-95 ${bricolage_grotesque}`}
        >
          <span>Load More</span>
          <ChevronDownIcon className='h-3 w-3 shrink-0 transition-transform duration-200' />
        </button>
      )}
    </div>
  )
}

export default ProjectCardList;

const data: Project[] = [
  {
    logo: "/ScorePulse.svg",
    title: "ScorePulse",
    description:
      "ScorePulse is a real-time sports score tracking app built with React and Pure Web sockets It provides live updates for various sports, allowing users to stay informed about their favorite teams and games without needing to refresh the page.",
    techStack: [
      "Reactjs",
      "Tailwindcss",
      "Websockets",
      "Nodejs",
      "Expressjs",
      "postgresql",
      "drizzle-orm",
    ],
    link: "https://scorepulse.anujpatel.tech",
    source: "https://github.com/anujbijoria2020/ScorePulseFrontend",
  },
  {
    logo: "/archflow.png",
    title: "ArchFlow",
    description:
      "An intelligent AI-powered SDE tool that generates Software Requirement Specifications (SRS), optimized SQL queries, and visual Mermaid diagrams from natural language using Google Gemini AI.",
    link: "https://arcflowapp.netlify.app/",
    source: "https://github.com/Ankitprajapati24/SysDesign-AI",
    techStack: [
      "React.js",
      "FastAPI",
      "Python",
      "Gemini AI",
      "Mermaid.js",
      "Pydantic",
    ],
  },
  {
    logo: "/ideanode.jpg",
    title: "IdeaNode",
    description:
      "Turn scattered thoughts into structured ideas — your second brain in the cloud.",
    link: "https://ideanode.anujpatel.tech",
    source: "https://github.com/anujbijoria2020/IdeaNode",
    techStack: [
      "Reactjs",
      "Nodejs",
      "Expressjs",
      "Typescript",
      "Mongodb",
      "JWT-auth",
    ],
  },
  {
    logo: "/nextstepai.jpg",
    title: "NextStep AI",
    description:
      "NextStep AI is an AI-powered roadmap builder and productivity assistant.It allows users to generate personalized learning or career roadmaps using AI, view their recently generated roadmaps in a beautiful card-based UI, and sign in securely with Google OAuth",
    techStack: [
      "Reactjs",
      "tailwindcss",
      "Oauth",
      "JWT",
      "Nodejs",
      "Expressjs",
      "Passportjs",
      "Nodemailer",
      "Mongodb",
      "deepseek Ai",
    ],
    link: "https://nextstepai.anujpatel.tech",
    source: "https://github.com/anujbijoria2020/NextStep_AI",
  },
  {
    logo: "/schemaforge_logo.png",
    title: "SchemaForge",
    description:
      "A visual SaaS platform for designing, validating, and generating database schemas. Build relational schemas, export production-ready migrations, and manage data configurations with a modern drag-and-drop workspace.",
    techStack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "React Flow",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
    ],
    link: "https://schema-forge-frontend.vercel.app/",
    source: "https://github.com/anujbijoria2020/SchemaForge",
  },
];