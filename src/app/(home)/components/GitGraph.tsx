'use client'

import Title from '@/components/ui/Title'
import { Link } from '@radix-ui/themes'
import React, { memo } from 'react'
import GithubCalendar from 'react-github-calendar'


const GitGraph = () => {
return (
  <div className='w-full flex flex-col items-center justify-center mt-8 mb-4 gap-4 px-4 sm:px-6 md:px-8 lg:px-12'>
    <Title title="Github Contributions" />
    <Link href='https://github.com/anujbijoria2020' target='_blank' />

    <div className='w-full max-w-full flex justify-center overflow-x-auto'>
      <GithubCalendar 
        username="anujbijoria2020"
        blockSize={15} 
        blockMargin={4} 
        fontSize={12} 
        theme={{
          light: ["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"],
          dark: ["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]
        }}
      />
    </div>
  </div>
)
}


export default memo(GitGraph)
