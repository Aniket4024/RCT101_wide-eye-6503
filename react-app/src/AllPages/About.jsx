import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"

function About(){

    const {theme} = useContext(ThemeContext)
    return <div style={{
        height:"1000px",
        backgroundColor:theme?"#005950":"white"
    }}>
        <h1>About</h1>
    </div>
}
export default About