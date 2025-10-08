'use client'

import { Badge } from '@/components/ui/badge'
import { MagicCard } from '@/components/ui/magic-card'
import ShineBorder from '@/components/ui/shine-border'
import { useDarkMode } from '@/hooks/useDarkMode'
import { Project } from '@/types/project'
import { bricolage_grotesque, inter } from '@/utils/fonts'
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons'
import { Link } from '@radix-ui/themes'
import Image from 'next/image'

const ProjectCard = (props: Project) => {
  const { isDarkMode } = useDarkMode()

  return (


    <MagicCard
      className={`rounded-xl 
        w-full sm:w-[45%] max-sm:w-full 
        border-gray-300 dark:border-gray-600 border-[1.5px] 
        bg-transparent px-5 py-6 
        flex flex-col justify-between 
        gap-4 
        transition-shadow duration-300 
        hover:shadow-lg dark:hover:shadow-xl 
        h-[350px]  
        overflow-hidden`}
      gradientColor={isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}
    >

                <div className="flex items-center gap-3">
                <Image
                  src={props.logo}
                  alt="project-logo"
                  width={40}
                  height={40}
                  className="rounded-sm object-contain m-1"
                />
                <Link href={props.link || props.source} target="_blank" underline="none">
                  <h1
                    className={`text-2xl text-black dark:text-white font-semibold tracking-tight ${bricolage_grotesque}`}
                  >
                    {props.title}
                  </h1>
                </Link>
              </div>
        
              <p
                className={`text-sm leading-relaxed text-gray-700 dark:text-gray-300 ${inter} line-clamp-3`}
              >
                {props.description}
              </p>
        
              <div className="flex flex-wrap gap-2 mt-1">
                {props.techStack?.map((tech, idx) => (
                  <Badge
                    key={idx}
                    color="gray"
                    variant="secondary"
                    className={`text-[11px] px-2 py-[2px] rounded-md bg-gray-200/80 dark:bg-gray-700 dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black ${bricolage_grotesque}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
        
              <div className="flex gap-2 mt-5 flex-wrap">
                {props.link && (
                  <Link href={props.link} target="_blank">
                    <Badge
                      color="gray"
                      className={`text-[11px] px-3 py-[4px] bg-gray-800 dark:bg-gray-200 dark:hover:bg-gray-400 hover:bg-black hover:text-white dark:hover:text-black ${bricolage_grotesque} cursor-none`}
                    >
                      <GlobeIcon width={12} height={12} className="mr-1" /> Website
                    </Badge>
                  </Link>
                )}
                {props.source && (
                  <Link href={props.source} target="_blank">
                    <Badge
                      color="gray"
                      className={`text-[11px] px-3 py-[4px] bg-gray-800 dark:bg-gray-200 dark:hover:bg-gray-400 hover:bg-black hover:text-white dark:hover:text-black ${bricolage_grotesque} cursor-none`}
                    >
                      <GitHubLogoIcon width={12} height={12} className="mr-1" /> Source
                    </Badge>
                  </Link>
                )}
              </div>
    
    </MagicCard>
  )
}

export default ProjectCard
