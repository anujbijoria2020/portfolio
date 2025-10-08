'use client'
import dynamic from 'next/dynamic';

import InitialLanding from './components/InitialLanding';
const ProjectCardList = dynamic(()=>import('@/app/Projects/components/ProjectCardList'),{ssr:false})
const HomeRouteBlogs = dynamic(()=>import('@/components/HomeRouteBlogs'),{ssr:false})
const GitGraph = dynamic(()=>import('./components/GitGraph'),{ssr:false})
const Skills = dynamic(()=>import('@/components/Skills'),{ssr:false})
const Education = dynamic(()=>import('@/components/Education'),{ssr:false})
const Contact = dynamic(()=>import('@/components/Contact'),{ssr:false})

const Page = () => {
  return (
    <div className="max-[350px]:overflow-hidden mt-8 max-sm:mt-0">
      <InitialLanding />

        <div className="w-full flex justify-center mt-45">
        <ProjectCardList/>
      </div>
        <div className="w-full flex justify-center mt-8">
        <HomeRouteBlogs />
      </div>

        <div className="w-full  flex justify-center mt-8 items-center">
        <GitGraph />
      </div>
        <div className="w-full flex justify-center mt-12">
        <Skills />
      </div>
            <div className="w-full flex justify-center mt-12">
        <Education />
      </div>
            <div className="w-full flex justify-center mt-12">
        < Contact />
      </div>
      </div>
  );
};

export default Page;