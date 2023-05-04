import { ThemeContext } from "../../../Context/ThemeContext";
import studentsIMG from "../../../Images/wp4385848-student-education-wallpapers.jpg"
import { useContext } from "react";
import DarkLogo from "../../../Images/DarkLogo.png";
import capLight from "../../../Images/capLight.png"
import capLightWhite from "../../../Images/capLightWhite.png"


function Home2(){

    const {theme} = useContext(ThemeContext)

    return <div style={{
        display:"flex",
        justifyContent:'space-between',
        alignItems:'center',
        height:"450px",
        // border:"1px solid green"
    }}>
        <div style={{
            width:"15%",
            height:"80%"
        }}>

        </div>


        <div style={{
            width:"35%",
            height:"90%",
            // border:"1px solid red",
            textAlign:"start"
        }}>
            <h1 style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                Welcome To 
                <img width="170px" style={{marginTop:"9px"}} src={DarkLogo} alt="" />
            </h1>
            <div style={{width:"85%",border:"1px solid rgb(0,208,180",marginTop:"-20px",marginLeft:"-15px"}}></div>
            <p style={{marginTop:"20px"}}>
                We Have State-Of-The-art Learning Facilities And Innovative
                <br />
                Technology To Ensure Our Students Have Access To A
                <br />
                World-Class Education. As A Bonus,
            </p>
            <div style={{lineHeight:"0px",marginTop:"20px"}}>
                <div style={{display:'flex',alignItems:"center"}}>
                    <img width="30px" src={theme ? capLightWhite : capLight} alt="" />
                    <h4 style={{marginLeft:"10px"}}>Scholarships Upto 80%</h4>
                </div>
                <div style={{display:'flex',alignItems:"center"}}>
                    <img width="30px" src={theme ? capLightWhite : capLight} alt="" />
                    <h4 style={{marginLeft:"10px"}}>Average Hike 8 LPA</h4>
                </div>
                <div style={{display:'flex',alignItems:"center"}}>
                    <img width="30px" src={theme ? capLightWhite : capLight} alt="" />
                    <h4 style={{marginLeft:"10px"}}>4800+ Placement</h4>
                </div>
            </div>
            <button 
                style={{
                    padding:'10px 20px',
                    fontSize:"15px",
                    fontWeight:'bold',
                    backgroundColor:theme ? "rgb(0,208,180)" : "rgb(0,89,80)",
                    border:'0px',
                    borderRadius:"14px",
                    marginTop:"35px",
                    color:theme? "rgb(0,89,80)" : "white"
                }}
            >
                Get Started
            </button>
        </div>


        <div style={{
            width:"50%",
            height:"90%",
            borderBottom:theme ? "5px solid rgb(0,208,180)" : "5px solid rgb(0,89,80)",
            borderLeft:theme ? "5px solid rgb(0,208,180)" : "5px solid rgb(0,89,80)",
            borderTop:theme ? "5px solid rgb(0,208,180)" : "5px solid rgb(0,89,80)",
            borderRadius:"215px 0px 0px 215px",
            backgroundImage:`url(${studentsIMG})`,
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
        }}>

        </div>
    </div>
}
export default Home2;