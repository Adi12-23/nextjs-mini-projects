"use client"
import "./styles.css";
import useLocalStorage from "./useLocalStorage";

export default function DarkMode(){
    const [theme,setTheme] = useLocalStorage("theme","dark");

    function handleToggleTheme(){
        setTheme(theme==="light"? "dark":"light")
        console.log(theme)
    }

    return (
        <div className="dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello Universe !</p>
                <button onClick={handleToggleTheme}>Switch Theme</button>
            </div>
        </div>
    );
}