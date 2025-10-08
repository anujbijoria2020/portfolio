import { Link } from "@radix-ui/themes"

const Footer = () => {
  return (
   <footer className="w-full px-[400px] max-[1285px]:px-[350px] max-lg:px-64 max-sm:px-4 py-10 flex flex-col max-sm:text-center items-center mt-4 pb-8">
    <div className="w-full">
        <p className="text-sm max-sm:text-xs text-center">
            Designed and Developed by  
            <Link href="https://github.com/anujbijoria2020" className="" target="_blank">  <span className="text-blue-900/80 italic font-semibold">Anuj Patel</span></Link>
        </p>
    </div>
   </footer>
  )
}

export default Footer
