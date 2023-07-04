import { useState, createContext } from "react" 
import './Form.scss'
import Mid from "./mid"

export const ThemeContext = createContext()


export default function Form() {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')

    }
   
    
    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ padding: 20}}>
                <button onClick={toggleTheme}>Toggle theme</button>  
                <Mid/>
            </div>
        </ThemeContext.Provider>
    )
}