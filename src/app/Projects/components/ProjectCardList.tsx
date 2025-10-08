'use client'

import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import Title from '@/components/ui/Title';
import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Badge } from '@radix-ui/themes';
import { bricolage_grotesque } from '@/utils/fonts';


const ProjectCardList = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
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
        <Badge color="gray" variant="solid" highContrast onClick={loadMoreProjects} className={`text-xs max-sm:text-[10px] flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 hover:bg-gray-800 mt-6 ${bricolage_grotesque}`}>
          <span>Load More</span>
          <span className='!ml-[-3px] mt-[1px]'>
            <ChevronDownIcon className='h-3 w-3 dark:!text-black !text-white  shrink-0  transition-transform duration-200' />
          </span>
        </Badge>
      )}
    </div>
  )
}

export default ProjectCardList;


const data:Project[] = [
{
    logo:"/RepoMind.png",
    title:"RepoMind-Ai github SaaS platform",
    description:"RepoMind is an AI tool that summarizes your GitHub repos, tracks commits, answers code questions, and generates meeting issues for your projects",
    link:"https://repo-mind-nine.vercel.app",
    source:"https://github.com/anujbijoria2020/RepoMind",
    techStack:['Nextjs',"shadcn",'trpc','tailwindcss','prisma','octokit','Gemini AI','vector embeddings','razorpay'],
},
{
  logo:"/brain.png",
  title:"IdeaNode",
  description:"Turn scattered thoughts into structured ideas — your second brain in the cloud.",
  link:"https://idea-node.vercel.app",
  source:"https://github.com/anujbijoria2020/IdeaNode",
  techStack:["Reactjs","Nodejs","Expressjs","Typescript","Mongodb","JWT-auth"]
},{
  logo:"/nextstep.png",
  title:"NextStep AI",
  description:"NextStep AI is an AI-powered roadmap builder and productivity assistant.It allows users to generate personalized learning or career roadmaps using AI, view their recently generated roadmaps in a beautiful card-based UI, and sign in securely with Google OAuth",
  techStack:["Reactjs","tailwindcss","Oauth","JWT","Nodejs","Expressjs","Passportjs","Nodemailer","Mongodb","deepseek Ai"],
  link:"https://next-step-ai-chi.vercel.app/",
  source:"https://github.com/anujbijoria2020/NextStep_AI",
}
]