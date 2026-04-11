
'use client'

import { MagicCard } from './ui/magic-card'
import Image from 'next/image'
import { Link } from '@radix-ui/themes'
import { bricolage_grotesque, inter } from '@/utils/fonts'
import Title from './ui/Title'
import { useDarkMode } from '@/hooks/useDarkMode'

type I_Experience = {
  companyName: string
  companyLogo?: string
  positionName: string
  timing: string
  companyUrl?: string
}

const Experience = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <div className="w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8">
      <Title title="Work Experience" />

      {experienceData.map((exp: I_Experience, idx) => (
        <MagicCard
          key={idx}
          className="dark:shadow-2xl mt-5 !bg-transparent border-none"
          gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}
        >
          <div className="flex w-full px-5 max-sm:px-0 max-sm:pr-1 py-3">
            <div className="w-24 flex items-center justify-center">
              {exp.companyLogo ? (
                exp.companyUrl ? (
                  <Link href={exp.companyUrl} target="_blank">
                    <Image
                      src={exp.companyLogo}
                      alt={`${exp.companyName}-logo`}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </Link>
                ) : (
                  <Image
                    src={exp.companyLogo}
                    alt={`${exp.companyName}-logo`}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                )
              ) : (
                <div
                  className={`h-[50px] w-[50px] rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-base font-semibold ${bricolage_grotesque}`}
                >
                  {exp.companyName.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            <div className="w-full">
              <div>
                <div className={`flex items-center w-[41vw] max-lg:w-full max-sm:w-full justify-between ${bricolage_grotesque}`}>
                  {exp.companyUrl ? (
                    <Link href={exp.companyUrl} target="_blank" underline="none">
                      <h1 className="text-lg leading-4 mb-1 max-sm:text-base font-semibold text-black dark:text-white">
                        {exp.companyName}
                      </h1>
                    </Link>
                  ) : (
                    <h1 className="text-lg leading-4 mb-1 max-sm:text-base font-semibold text-black dark:text-white">
                      {exp.companyName}
                    </h1>
                  )}

                  <span className={`text-xs max-sm:text-[10px] max-sm:hidden ${inter}`}>
                    {exp.timing}
                  </span>
                </div>
                <h2 className={`text-sm max-sm:text-xs ${inter}`}>{exp.positionName}</h2>
                <h2 className={`text-sm max-sm:text-[10px] hidden max-sm:block mt-1 ${inter}`}>{exp.timing}</h2>
              </div>
            </div>
          </div>
        </MagicCard>
      ))}
    </div>
  )
}

export default Experience

const experienceData: I_Experience[] = [
  {
    companyName: 'vednix technology pvt ltd',
    companyLogo: '/vednix.jpg',
    positionName: 'Backend developer Intern',
    timing: 'Apr 2026 - Present',
    companyUrl: '',
  },
]
