import useLocalStorage from "./custom_hook";
import "./styles.css";

export default function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
        document.documentElement.setAttribute("data-theme", theme); // Apply theme globally

    }

    return (
        <div className={`container`} theme={theme}>
            <p>Hello World!</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}