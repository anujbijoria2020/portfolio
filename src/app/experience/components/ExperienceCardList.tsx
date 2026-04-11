'use client'

import Title from '@/components/ui/Title'
import ExperienceCard from './ExperienceCard'
import { experienceData } from './data'

const ExperienceCardList = () => {
  return (
    <div className="w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8">
      <Title title="Work Experience" />

      <div className="w-full mt-4 flex flex-col gap-4">
        {experienceData.map((experience, index) => (
          <ExperienceCard key={`${experience.companyName}-${index}`} experience={experience} />
        ))}
      </div>
    </div>
  )
}

export default ExperienceCardList
