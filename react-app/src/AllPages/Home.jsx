import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"
import Home1 from "./PageComponents/HomeComponents/Home1"
import Home2 from "./PageComponents/HomeComponents/Home2"
import Home3 from "./PageComponents/HomeComponents/Home3"

function Home(){

    const {theme} = useContext(ThemeContext)

    return <div style={{
        backgroundColor:theme?"#005950":"white"
    }}>
        <Home1/>
        <Home2/>
        <Home3/>
    </div>
}

export default Home