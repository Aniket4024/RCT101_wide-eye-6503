import { NavLink } from "react-router-dom"
import {SunIcon , MoonIcon}from "@chakra-ui/icons"
import DarkLogo from"../Images/DarkLogo.png"
import LightLogo from"../Images/LightLogo.jpeg"
import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"
import { AuthContext } from "../Context/AuthContext"
import { VscAccount } from "react-icons/vsc";




function Navbar({handleCheck}){

    const {theme,toggleTheme} = useContext(ThemeContext);
    const {isAuth,name} = useContext(AuthContext);
    console.log(isAuth,name)


    const activeStyle = {
        textDecoration:"none",
        color:"rgb(0, 208, 180)",
        fontSize:"18px",
        fontWeight:"700",
        padding:theme ? "12px 2px" : "13.5px 2px",
        borderBottom:"2px solid rgb(0, 208, 180)",
        height:"30px"
    }

    const defaultStyle = {
        textDecoration:"none",
        color:theme ? "white" : "rgb(0, 89, 80)",
        fontSize:"18px",
        fontWeight:"700",
        padding:"12px 2px",
        height:"30px"
    }

    

    return <div style={{
        width: "100%",
        height: "65px",
        margin: "auto",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: "0",
        // border:"1px solid red",
        zIndex:"3"
    }}>
        <div 
            style={{
                display:"flex",
                backgroundColor:`${theme ? "rgb(0, 89, 80)" : "white"}`,
                justifyContent:"space-between",
                alignItems:"center"
            }}>
        <div style={{
            display:"flex",
            justifyContent:"center",
            width:"30%",
        }}>
            <div style={{
                // borderRadius:"10px",
                height:"40px",
                display:"flex",
                alignItems:"center",
                // border:theme ? "0px" : "2px solid rgb(0, 89, 80)"
            }}>
                <NavLink to="/">
                    {theme ? <img width="140px" style={{marginTop:"8px",borderRadius:"10px"}} src={DarkLogo} alt="logo" /> : <img width="140px" style={{marginTop:"8px",borderRadius:"10px"}} src={LightLogo} alt="logo" />}
                </NavLink>
            </div>
        </div>
        <div style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            width:"35%",
            marginLeft:"150px",
            marginTop:"15px"
        }}>
            <NavLink to="/" style={({ isActive })=> (isActive) ? activeStyle : defaultStyle}>
                Home
            </NavLink>
            <NavLink to="/Courses" style={({ isActive })=> (isActive) ? activeStyle : defaultStyle}>
                Courses
            </NavLink>
            <NavLink to="/Scholarships" style={({ isActive })=> (isActive) ? activeStyle : defaultStyle}>
                Scholarships
            </NavLink>
            <NavLink to="/About" style={({ isActive })=> (isActive) ? activeStyle : defaultStyle}>
                About 
            </NavLink>
            <NavLink to="/Contact" style={({ isActive })=> (isActive) ? activeStyle : defaultStyle}>
                Contact
            </NavLink>
        </div>
        <div 
            style={{
                width:"10%",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                marginRight:"30px",
                color:""
            }}
        >

            {theme ? 
                 <SunIcon boxSize="20" style={{cursor:"pointer",marginTop:"10px",color:"rgb(0, 208, 180)"}} onClick={()=>toggleTheme()}/>
                :
                <MoonIcon boxSize="20" style={{cursor:"pointer",marginTop:"10px"}} onClick={()=>toggleTheme()}/>
            }
            { isAuth ?
                <p style={{display:'flex',justifyContent:'center',alignItems:'center',gap:"5px",fontSize:'15px',fontWeight:"500"}}>
                    <VscAccount style={{marginTop:'1px'}}/> 
                    Hi {name} <span class="material-symbols-outlined">
                                    waving_hand
                                </span>
                </p>

                :

                <button
                    onClick={()=>handleCheck(true)}
                    style={{
                        padding:"12px 20px",
                        backgroundColor:theme ? "rgb(0, 208, 180)" : "rgb(0, 89, 80)",
                        border:"0px",
                        borderRadius:"15px",
                        color:theme ? "rgb(0, 89, 80)" : "white",
                        cursor:'pointer',
                        fontWeight:"bold",
                        fontSize:'13px'
                    }}
                >
                    Sign In
                </button>
                
            }
            
              
        </div>
        </div>
        <hr style={{width:"98%",border:"1px solid rgb(210, 210, 210)",marginTop:"-1.5px"}}/>
    </div>
}

export default Navbar