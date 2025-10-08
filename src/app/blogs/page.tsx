import { Suspense } from "react"
import ClientWrapper from "./components/ClientWrapper"
import BlogSkeleton from "./components/BlogSkeleton"
import BlogList from "./components/BlogList"



const page = () => {
  return (
<ClientWrapper>
<Suspense fallback={<BlogSkeleton/>}>
<BlogList/>
</Suspense>
</ClientWrapper>
  )
}

export default page
