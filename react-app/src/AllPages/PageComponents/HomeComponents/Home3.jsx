import codingDarkImg from "../../../Images/codingDark.png"
import codingWhiteImg from "../../../Images/codingWhiteImg.png"
import cloudDark from "../../../Images/cloudDark.png"
import cloudWhite from "../../../Images/cloudWhite.png"
import dtDark from "../../../Images/dataScienceDark.png"
import dtWhite from "../../../Images/dataScienceWhite.png"
import appDark from "../../../Images/appDark.png"
import appWhite from "../../../Images/appWhite.png"
import digitalDark from "../../../Images/digitalDark.png"
import digitalWhite from "../../../Images/digitalWhite.png"
import financeDark from "../../../Images/financeDark.png"
import financeWhite from "../../../Images/financeWhite.png"
import { ThemeContext } from "../../../Context/ThemeContext"
import { useContext } from "react"
function Home3(){

    const {theme}  = useContext(ThemeContext)

    const styles = {
        backgroundColor:theme ? "#005950" : "white",
        height:"180px",
        width:"180px",
        borderRadius:"20px",
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        color:theme ? "white" : "#005950",
        lineHeight:"0px",
        border:theme ? "3px solid white" : "3px solid rgb(0,89,80)"
    }


    return <div style={{
        height:"530px",
        // border:"1px solid red"
    }}>
        <div style={{
            height:"35%"
        }}>
            <h1 style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>Online Course <p style={{color:"rgb(0,208,180)"}}>Category</p></h1>
            <div style={{width:"30%",border:"1px solid rgb(0,208,180",margin:"-35px auto 0px auto"}}></div>
            <p>
                We Have State-Of-The-art Learning Facilities And Innovative
                <br />
                Technology To Ensure Our Students Have Access To A
                <br />
                World-Class Education. As A Bonus,
            </p>
        </div>
        <div style={{
            // border:"1px solid green",
            height:'42%',
            margin:"auto",
            width:"90%",
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:"end",
            
        }}>
            <div style={styles}>
                <div>
                    <img width="70px" src={theme ? codingWhiteImg : codingDarkImg} alt="Coding" />
                    <h4>Web Development</h4>
                </div>
            </div>
            <div style={styles}>
                <div>
                    <img width="70px" src={theme ? cloudWhite : cloudDark} alt="Coding" />
                    <h4>Cloud Computing</h4>
                </div>
            </div>
            <div style={styles}>
                <div>
                    <img width="70px" src={theme ? dtWhite : dtDark} alt="Coding" />
                    <h4>Data Science</h4>
                </div>
            </div>
            <div style={styles}>
                <div>
                    <img width="70px" src={theme ? appWhite : appDark} alt="Coding" />
                    <h4>App Development</h4>
                </div>
            </div>
            <div style={styles}>
                <div>
                    <img width="70px" src={theme ? digitalWhite : digitalDark} alt="Coding" />
                    <h4>Digital Marketing</h4>
                </div>
            </div>
            <div style={styles}>
                <div>
                    <img width="70px" src={theme ? financeWhite : financeDark} alt="Coding" />
                    <h4>Finance</h4>
                </div>
            </div>
        </div>
        <div style={{
            height:"23%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%"
        }}>
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
                View All Courses
            </button>
        </div>
    </div>
}

export default Home3