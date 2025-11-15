"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDarkMode } from "@/hooks/useDarkMode";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Link, Separator } from "@radix-ui/themes";
import {
  CodeIcon,
  FileIcon,
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  NotebookIcon,
  Rows3Icon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const pathname = usePathname();

  return (
    <nav className="w-full py-6 flex justify-center z-50 top-4 sticky">
      <div className="rounded-full px-2 py-1 bg-white/10 backdrop-blur-lg border top-3 dark:border-white/20 flex items-center justify-center dark:shadow-none shadow w-[850px] max-[400px]:w-[345px] max-[350px]:w-[330px] max-[321px]:w-[310px] ">
        <div className="flex justify-center px-2 items-center transition-all max-sm:gap-4 gap-8 max-[400px]:gap-4 max-[450px]:gap-5">
          <Link href="/">
            <Tooltip>
              <TooltipTrigger>
                <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                  <HomeIcon
                    className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white 
                                    ${pathname == "/" ? "dark:!text-[#FFC83D] !text-[#cc9e2b]" : ""}
                                    `}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span>Home</span>
              </TooltipContent>
            </Tooltip>
          </Link>
          <Link href="/Projects">
            <Tooltip>
              <TooltipTrigger>
                <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                  <CodeIcon
                    className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white 
                                    ${pathname == "/projects" ? "dark:!text-[#FFC83D] !text-[#cc9e2b]" : ""}
                                    `}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span>projects</span>
              </TooltipContent>
            </Tooltip>
          </Link>
          <Link href="/blogs">
            <Tooltip>
              <TooltipTrigger>
                <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                  <NotebookIcon
                    className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white 
                                    ${pathname.startsWith("/blogs") ? "dark:!text-[#FFC83D] !text-[#cc9e2b]" : ""}
                                    `}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span>blogs</span>
              </TooltipContent>
            </Tooltip>
          </Link>

          <Separator
            orientation="vertical"
            size="2"
            className="bg-gray-300 dark:bg-gray-700 w-px max-sm:h-4 h-5"
          />
          <Link href="/Resume.pdf" target="_blank">
            <Tooltip>
              <TooltipTrigger>
                <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                  <FileIcon
                    className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white `}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span>Resume</span>
              </TooltipContent>
            </Tooltip>
          </Link>
          <Link href="https://x.com/AnujKurmi78252" target="_blank">
            <Tooltip>
              <TooltipTrigger>
                <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                  <GithubIcon
                    className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white `}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span>Github</span>
              </TooltipContent>
            </Tooltip>
          </Link>
          <Link
            href="https://www.linkedin.com/in/anuj-kurmi-4774ab27a"
            target="_blank"
          >
            <Tooltip>
              <TooltipTrigger>
                <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                  <LinkedinIcon
                    className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white `}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span>LinkedIn</span>
              </TooltipContent>
            </Tooltip>
          </Link>

          <Separator
            orientation="vertical"
            size="2"
            className="bg-gray-300 dark:bg-gray-700 w-px max-sm:h-4 h-5"
          />

          <div
            className="hover:px-3 max-sm:hover:px-2 py-2.5 rounded-full transition-all duration-300 "
            onClick={toggleDarkMode}
          >
            <div className="flex items-center">
              <button>
                {isDarkMode ? (
                  <MoonIcon
                    className={`w-[18px] h-[18px] max-sm:w-[14px] max-sm:h-[14px]`}
                  />
                ) : (
                  <SunIcon className="w-5 h-5 max-sm:w-[15px] max-sm:h-[15px]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
