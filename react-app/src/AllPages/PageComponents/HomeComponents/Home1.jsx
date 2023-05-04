import DarkLogo from "../../../Images/DarkLogo.png"
import { useContext } from "react"
import { ThemeContext } from "../../../Context/ThemeContext"
import svg from "../../../Images/9650007_7566-ai.png"
import {Search2Icon} from "@chakra-ui/icons"

function Home1(){

    const {theme} = useContext(ThemeContext)

    return <div style={{
        height:"550px",
        paddingTop:"0px",
        width:'90%',
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        margin:"auto"
    }}>
        <div>
            <img src={svg} alt="svg" />
        </div>
        <div style={{lineHeight:"20px"}}>
                <h1 style={{fontSize:"40px"}}>Explore Your Knowledge </h1>
                <div style={{border:"1px solid rgb(0,208,180)",width:"100%",margin:"auto"}}></div>
                <h1 style={{fontSize:"60px"}}>Start Your Journey</h1>
                <h1 style={{fontSize:"40px",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"-25px"}}>With <img width="250px" style={{marginTop:"8px",marginLeft:"10px"}} src={theme ? DarkLogo : DarkLogo} alt="" /></h1>
                <p style={{color:"rgb(0,208,180)"}}>
                    It is a long established fact that a reader will be distracted by the readable
                    <br />
                    content of a page when looking at its layout.
                </p>
                <div style={{
                            height:"50px",
                            width:"406px",
                            backgroundColor:"white",
                            display:"flex",
                            paddingLeft:"25px",
                            justifyContent:"center",
                            borderRadius:"18px 18px 18px 18px",
                            alignItems:'center',
                            border:theme ? "0px" : "2px solid rgb(0,89,80)",
                            margin:"40px 50px"
                        }}>
                    <Search2Icon mr={"10px"} color={"rgb(0,208,180)"}/>
                    <input 
                        type="search" 
                        placeholder={"Search your courses"}
                        style={{
                            height:"50px",
                            width:"300px",
                            paddingRight:"10px",
                            borderRadius:"18px 0px 0px 18px",
                            fontSize:"18px",
                            border:"0px",
                            outline:"0px",
                            caretColor:"rgb(0,208,180)",
                            fontWeight:"600",
                            color:"rgb(0,208,180)",
                            backgroundColor:"white"
                        }}
                    />
                    <button style={{
                            height:"50px",
                            width:"100px",
                            fontSize:"18px",
                            borderRadius:"0px 16px 16px 0px",
                            border:"0px",
                            outline:"0px",
                            backgroundColor:theme ? "rgb(0,208,180)" : "rgb(0,89,80)",
                            color:theme ? "rgb(0,89,80)" : "white"
                        }}>Search</button>
                </div>
        </div>
        </div>
}

export default Home1