import {prisma} from '@/lib/prisma'
import { NextRequest,NextResponse } from 'next/server'

export async function GET(req:NextRequest,{params}:{params:{blogid:string}}){
    const blogId = params.blogid;
    try{
   const blog = await prisma.blog.findUnique({
    where:{
        id:blogId,
    }
   });
   return NextResponse.json(
    {success:true,message:blog},
    {status:200}
   )
    }catch(error){
        console.log("Error in fetching blog:",error);
        return NextResponse.json(
            {success:false,nessage:"Error in fetching blog"}
        )
    }
}