'use client'

import { motion } from 'framer-motion'
import ExperienceCardList from './components/ExperienceCardList'

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-32 dark:bg-black"
    >
      <ExperienceCardList />
    </motion.div>
  )
}

export default Page
