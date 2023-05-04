import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"

function Scholarships(){

    const {theme} = useContext(ThemeContext)
    return <div style={{
        height:"1000px",
        backgroundColor:theme?"#005950":"white"
    }}>
        <h1>Scholarships</h1>
    </div>
}
export default Scholarships