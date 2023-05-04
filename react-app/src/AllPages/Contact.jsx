import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"

function Contact(){

    const {theme} = useContext(ThemeContext)
    return <div style={{
        height:"1000px",
        backgroundColor:theme?"#005950":"white"
    }}>
        <h1>Contact</h1>
    </div>
}
export default Contact