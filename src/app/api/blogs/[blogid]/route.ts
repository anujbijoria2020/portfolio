import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  context: { params: any} 
) {
  const { blogid } = await context.params;

  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: blogid,
      },
    });

    return NextResponse.json(
      { success: true, message: blog },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error in fetching blog:', error);
    return NextResponse.json(
      { success: false, message: 'Error in fetching blog' },
      { status: 500 }
    );
  }
}
