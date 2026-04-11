interface BlogHeaderProps {
    author: string
    createdAt: string
    readingTime: string
}

import { formatDate } from '@/utils/formateDate'
import { Link } from '@radix-ui/themes'
import React from 'react'

const BlogHeader = ({author,createdAt,readingTime}:BlogHeaderProps) => {

   return (
        <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-black/65 dark:text-white/70 max-sm:text-xs">

            <Link
                href='https://github.com/anujbijoria2020'
                underline='none'
                className='font-medium text-black transition-colors hover:text-black/70 dark:text-white dark:hover:text-white/80'
            >
                {author}
            </Link>
            <span className='text-black/35 dark:text-white/35'>•</span>
            <p>{formatDate(createdAt)}</p>
            <span className='text-black/35 dark:text-white/35'>•</span>
            <p>{readingTime}</p>
        </div>
    )
}

export default BlogHeader
