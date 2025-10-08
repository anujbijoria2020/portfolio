import { DarkModeContext } from "@/context/DarkModeContext"
import { useContext } from "react"


export const useDarkMode = ()=>{
    const context = useContext(DarkModeContext);
    if(!context){
        throw new Error("DarkModeContext is possbly undefined!");
    }
    return context;
}