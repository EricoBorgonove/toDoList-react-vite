import  { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useTheme (){
    const [theme, setTheme] = useLocalStorage("theme", "light");
    useEffect(()=>{
        const root = document.documentElement;
        if (theme === "dark"){
            root.classList.add("dark");
        }else{
            root.classList.remove("dark");
        }
        }, [theme]);
        function toggleTheme(){
            setTheme ((current) => (current === "light" ? "dark" : "light"));
        }
        return {theme, toggleTheme}
}