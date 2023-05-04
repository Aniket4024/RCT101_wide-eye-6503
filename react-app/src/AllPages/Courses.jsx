import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"

function Courses(){

    const {theme} = useContext(ThemeContext)
    return <div style={{
        height:"1000px",
        backgroundColor:theme?"#005950":"white"
    }}>
        <h1>Courses</h1>
    </div>
}
export default Courses