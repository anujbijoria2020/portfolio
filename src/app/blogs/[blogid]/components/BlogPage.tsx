'use client';

import { CldImage } from 'next-cloudinary'
import React from 'react'

type PublicId = {
    public_id: string
}

const BlogPage = ({ public_id }: PublicId) => {
    return (
        <CldImage
            width="1600"
            height="900"
            src={public_id}
            sizes="100vw"
            alt="Blog Image"
            crop="fill"
            gravity="auto"
            className="h-auto w-full rounded-2xl border border-black/10 object-cover shadow-md dark:border-white/15"
        />
    )
}

export default BlogPage