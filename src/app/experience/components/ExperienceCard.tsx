'use client'

import { Experience } from '@/types/experience'
import { bricolage_grotesque, inter } from '@/utils/fonts'
import { Link } from '@radix-ui/themes'
import Image from 'next/image'
import { MagicCard } from '@/components/ui/magic-card'
import { useDarkMode } from '@/hooks/useDarkMode'

type ExperienceCardProps = {
  experience: Experience
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { isDarkMode } = useDarkMode()

  return (
    <MagicCard
      className="dark:shadow-2xl mt-5 !bg-transparent border-none"
      gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}
    >
      <div className="flex w-full px-5 max-sm:px-0 max-sm:pr-1 py-3">
        <div className="w-24 flex items-center justify-center">
          {experience.companyLogo ? (
            <Link href={experience.companyUrl || '#'} target="_blank">
              <Image
                src={experience.companyLogo}
                alt={`${experience.companyName} logo`}
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>
          ) : (
            <div className={`h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-semibold ${bricolage_grotesque}`}>
              {experience.companyName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        <div className="w-full">
          <div>
            <div className={`flex items-center w-[41vw] max-lg:w-full max-sm:w-full justify-between ${bricolage_grotesque}`}>
              {experience.companyUrl ? (
                <Link href={experience.companyUrl} target="_blank" underline="none">
                  <h1 className="text-lg leading-4 mb-1 max-sm:text-base font-semibold text-black dark:text-white">
                    {experience.companyName}
                  </h1>
                </Link>
              ) : (
                <h1 className="text-lg leading-4 mb-1 max-sm:text-base font-semibold text-black dark:text-white">
                  {experience.companyName}
                </h1>
              )}
              <span className={`text-xs max-sm:text-[10px] max-sm:hidden text-gray-600 dark:text-gray-300 ${inter}`}>
                {experience.timing}
              </span>
            </div>
            <h2 className={`text-sm max-sm:text-xs ${inter}`}>{experience.positionName}</h2>
            <h2 className={`text-sm max-sm:text-[10px] hidden max-sm:block mt-1 ${inter}`}>
              {experience.timing}
            </h2>
          </div>
        </div>
      </div>
    </MagicCard>
  )
}

export default ExperienceCard
