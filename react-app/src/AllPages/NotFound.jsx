import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"

function NotFound(){

    const {theme} = useContext(ThemeContext)
    return <div style={{
        height:"580px",
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
        gap:"20px",
        backgroundColor:theme?"#005950":"white"
    }}>
        <h1 style={{fontSize:"60px"}}>404</h1>
        <div style={{height:"80px",marginTop:"5px",border:"1px solid rgb(0,208,180)"}}></div>
        <div style={{textAlign:"start",lineHeight:"10px"}}>
            <h1>Page Not Found !</h1>
            <p>Sorry, we couldn’t found the page you’re looking for.</p>
        </div>
    </div>
}
export default NotFound