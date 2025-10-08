"use client"

import { Badge } from '@radix-ui/themes'
import React from 'react'
import { bricolage_grotesque } from '@/utils/fonts'
import Title from './ui/Title'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const Skills = () => {
  return (
    <div className='w-2/3 max-lg:w-full max-sm:w-full flex flex-col items-center mt-4 pb-8'>
      <Title title='Skills' />

      <div className="flex w-full flex-col max-lg:flex-row max-sm:flex-row gap-3 max-sm:gap-2 lg:flex-row mt-4 px-40 max-[1285px]:px-24 max-lg:px-28 max-sm:px-6 flex-wrap justify-center items-center max-sm:ml-">
        {
          data.map((skill, idx) => (
            <Tooltip key={idx}>
          <TooltipTrigger>
                <Badge color="gray" variant="solid" highContrast className={`text-xs max-sm:text-[10px]  ${bricolage_grotesque} rounded-xs p-1 bg-black text-white dark:bg-gray-700 dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black
         `}>
                {skill}
              </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <span>{skill}</span>
          </TooltipContent>
            </Tooltip>
          ))
        }
      </div>
    </div>
  )
}

export default Skills;

const data: string[] = ["JavaScript", "TypeScript", "Next.js", "React", "Prisma", "MongoDB", "PostgreSQL", "Redux", "Tailwind CSS", "Node.js", "Express.js", "Git","VsCode"];