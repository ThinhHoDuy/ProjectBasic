import { useContext } from "react"
import { ThemeContext } from "./Form"


function Paragraph() {
    const theme = useContext(ThemeContext)

    return (
        <p className={theme}>
            You can’t just ask customers what they want and then try to give that to them. By the time you get it built, they’ll want something new
        </p>
    )
}
export default Paragraph
