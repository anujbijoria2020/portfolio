import { calculateReadingTime } from "@/utils/blogReadingTime";
import { getBlog } from "@/lib/getBlog";
import { bricolage_grotesque } from "@/utils/fonts";
import BlogHeader from "./components/BlogHeader";
import BlogPage from "./components/BlogPage";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import unescapeHTML from "@/utils/unescapeHTML";

const getPlainText = (content: string) =>
    unescapeHTML(content)
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

type PageProps = {
    params:Promise<{blogid:string}>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
     
    const {blogid} = await params;

    const blog = await getBlog(blogid)
  if(!blog){
    return {
        title:"Blog Not Found",
        description:"The blog you are looking for does not exist.",
        openGraph:{
            title:"Blog Not Found",
            description:"The blog you are looking for does not exist.",
            type:"article"
        }
  }
}
    const plainContent = getPlainText(blog.content);

    return {
        title: blog.title,
        description: plainContent.slice(0, 160),
        openGraph: {
            title: blog.title,
            description: plainContent.slice(0, 160),
            type: 'article',
            authors: [blog.author]
        },
    }
}

const BlogDetailPage = async ({params}:PageProps) => {
    const { blogid } = await params;

  console.log("Blog ID:", blogid);

  if (!blogid) {
    throw new Error("Blog ID missing");
  }

  const blog = await getBlog(blogid);

    const unescapedContent = unescapeHTML(blog.content);
    const readingTime = calculateReadingTime(unescapedContent);

    const formattedContent = unescapedContent.includes("<")
        ? unescapedContent
        : unescapedContent.replace(/\n/g, "<br />");

  blog.content = formattedContent;

  return (
        <article className="mt-28 pb-12 sm:mt-32">
            <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
                <header className="border-b border-black/10 pb-8 dark:border-white/15">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 dark:text-white/50">
                        Blog Post
                    </p>
                    <h1 className={`${bricolage_grotesque} text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl`}>
                        {blog.title}
                    </h1>

                    <BlogHeader
                        author={blog.author}
                        createdAt={blog.createdAt.toString()}
                        readingTime={readingTime}
                    />
                </header>

                <div className="mt-8">
                    <BlogPage public_id={blog.image_public_id} />
                </div>

                <div className="mt-10 blog-content prose prose-zinc max-w-none text-[1.06rem] leading-8 dark:prose-invert">
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
            </div>
    </article>
  )
}

export default BlogDetailPage


export async function generateStaticParams() {
    const blogs = await prisma.blog.findMany({
        select: { id: true },
        take: 20
    })

    return blogs.map((blog) => ({
        blogid: blog.id
    }))

}
