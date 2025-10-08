import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

type RouteContext = {
  params: {
    blogid: string;
  };
};

export async function GET(
  req: NextRequest,
  context: RouteContext 
): Promise<NextResponse> {
  
  const { blogid } = context.params;

  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: blogid,
      },
    });

    if (!blog) {
      return NextResponse.json(
        { success: false, message: `Blog with ID '${blogid}' not found.` },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: blog },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in fetching blog:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error while fetching blog.' },
      { status: 500 }
    );
  }
}