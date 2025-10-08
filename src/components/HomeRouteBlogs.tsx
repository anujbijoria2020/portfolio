'use client'
import React, { memo } from 'react'
import Title from './ui/Title';
import { Blog } from '@/types/project';
import HomeRouteBlogCard from './HomeRouteBlogCard';

const HomeRouteBlogs = () => {
    const [blogs,setBlogs]  = React.useState([]);
    
    React.useEffect(()=>{
        const fetchBlogs = async()=>{
          try{
              const res = await fetch('/api/blogs');
            const data = await res.json();

            if(data.success){
                setBlogs(data.message)
            }else{
                setBlogs([])
            }
        }catch(error){
            console.log("Error in fetching blogs:",error);
        }
          }
          fetchBlogs();
    },[])

  return (
    <section className='w-1/2 max-lg:w-full max-sm:px-5 px-9 max-sm:w-full flex flex-col items-center mt-4 pb-8'>
        <Title title='Recent Blogs'/>
        {blogs.slice(0,3).map((blog:Blog,index:number)=>(
            <HomeRouteBlogCard
            key={index}
            title={blog.title}
            id={blog.id}
            createdAt={blog.createdAt}
            />
        ))}
    </section>
  )
}

export default memo(HomeRouteBlogs)
