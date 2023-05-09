import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"
import Home1 from "./PageComponents/HomeComponents/Home1"
import Home2 from "./PageComponents/HomeComponents/Home2"
import Home3 from "./PageComponents/HomeComponents/Home3"
import Home4 from "./PageComponents/HomeComponents/Home4"
import Home5 from "./PageComponents/HomeComponents/Home5"
import Home6 from "./PageComponents/HomeComponents/Home6"
import Home7 from "./PageComponents/HomeComponents/Home7"

function Home(){



    const {theme} = useContext(ThemeContext);

    return <div style={{
        backgroundColor:theme?"#005950":"white",
    }}>
        <Home1/>
        <Home2/>
        <Home3/>
        <Home4/>
        <Home5/>
        <Home6/>
        <Home7/>
        
    </div>
}

export default Home