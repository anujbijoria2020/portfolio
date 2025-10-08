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
        <div className="mt-4 flex flex-wrap items-center gap-2">

            <Link
                href='https://github.com/anujbijoria2020'
                underline='none'
                className='text-sm text-black dark:text-white'
            >
                {author}
            </Link>
            <p className='text-sm max-sm:text-xs'>{formatDate(createdAt)}</p>
            <p className='text-sm max-sm:text-xs'>{readingTime}</p>
        </div>
    )
}

export default BlogHeader
