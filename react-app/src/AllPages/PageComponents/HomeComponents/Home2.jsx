import { ThemeContext } from "../../../Context/ThemeContext";
import studentsIMG from "../../../Images/wp4385848-student-education-wallpapers.jpg"
import { useContext } from "react";

function Home2(){

    const {theme} = useContext(ThemeContext)

    return <div style={{
        display:"flex",
        justifyContent:'space-between',
        alignContent:'center',
        height:"500px"
    }}>
        <div style={{
            width:"45%",
            height:"80%"
        }}>

        </div>
        <div style={{
            width:"45%",
            height:"80%",
            borderRight:theme ? "5px solid rgb(0,208,180)" : "5px solid rgb(0,89,80)",
            borderLeft:theme ? "5px solid rgb(0,208,180)" : "5px solid rgb(0,89,80)",
            borderTop:theme ? "5px solid rgb(0,208,180)" : "5px solid rgb(0,89,80)",
            borderRight:"0px",
            borderRadius:"205px 0px 0px 205px",
            backgroundImage:`url(${studentsIMG})`,
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
        }}>

        </div>
        
    </div>
}
export default Home2;