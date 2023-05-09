import { MdOutlineClose } from "react-icons/md";
import {  FaRegUser } from "react-icons/fa";
import { VscEye, VscEyeClosed, VscKey } from "react-icons/vsc";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { CiWarning } from "react-icons/ci";




function Login({handleCheck}){

    const [show,setShow] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [invalid,setInvalid] = useState(false);

    
    const {isAuth,logIn,logOut,handleName} = useContext(AuthContext)
    
    const [status,setStatus] = useState(isAuth);
    const handleLogin = ()=>{
        fetch(`http://localhost:8080/users`)
        .then((res)=>res.json())
        .then((data1)=>
                data1.map((e)=>{
                if(email==e.email && password==e.password){
                    handleName(e.name.trim().split(" ")[0]);
                    // setStatus(true)
                    logIn()
                    setInvalid(false)
                    alert("login Sucessfull ✅");

                }

                else if((email!==e.email || password!==e.password) || (email!==e.email && password!==e.password)){
                    // setInvalid(true);
                    // setStatus(false)
                    logOut()
                    setInvalid(true);
                }
            })
        )
    }

    // useEffect(()=>{
    //     if(status){
           
    //     }
    //     else{
    //         logOut()
    //         setInvalid(false);
    //     }
    // },[status])

    return <div style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
        backgroundColor: "rgba(0,0,0, 0.5)",
        zIndex:"5"

    }}>
        <div style={{
            position: "absolute",
            left: "37%",
            right: "37%",
            top: "20%",
            bottom: "20%",
            margin: "auto",
            background: "#E9E8E8",
            borderRadius:"25px",
            boxShadow: "rgba(255, 255, 255, 0.6) 0px 5px 30px",
            display:"flex",
            justifyContent:'center',
            alignItems:"center"
        }}>
            <div style={{
                // border:"1px solid red",
                height:"92%",
                width:"92%",
                margin:"auto"
            }}>
                <div style={{
                    height:"5%",
                    width:"100%",
                    display:'flex',
                    justifyContent:"end"
                }}>
                    <button style={{
                        border:"0px",
                        fontSize:"15px",
                        cursor:"pointer",
                        backgroundColor:"rgba(0,89,80,0.3)",
                        color:"rgb(0,89,80)",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        padding:"3px",
                        borderRadius:"20px"
                        }} 
                        onClick={()=>handleCheck(false)}
                    >
                        <MdOutlineClose/>
                    </button>
                </div>
                <div style={{
                    // border:"1px solid green",
                    height:"15%",
                    width:"100%",
                    display:'flex',
                    justifyContent:"center",
                    color:"rgb(0,89,80)",
                    alignItems:"flex-start"
                }}>

                    <div style={{width:"100%",height:"100%",marginTop:"-15px"}}>
                        <h1>Login</h1>
                        <div style={{width:"40%",margin:"-15px auto 0px auto",border:"1px solid rgb(0,208,180"}}></div>
                    </div>

                </div>
                <div style={{
                    border:"1px solid transparent",
                    height:"53%",
                    width:"100%",
                    // display:"block",
                    // justifyContent:"center",
                    color:"rgb(0,89,80)",
                    // alignItems:"center",
                }}>
                    <div style={{
                        height:"45px",
                        margin:"40px auto 10px auto",
                        borderRadius:"15px",
                        width:"93%",
                        // border:"2px solid gray",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-around",
                        backgroundColor:"white",
                        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 5px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                    }}>
                        <FaRegUser style={{cursor:"text"}}/> 
                        <p style={{marginTop:"10px"}}>|</p>
                        <input 
                            type="email"
                            style={{
                                height:"95%",
                                borderRadius:"15px",
                                width:"83%",
                                border:"0px",
                                outline:"none",
                            }}
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div style={{
                        height:"45px",
                        margin:"5px auto 0px auto",
                        borderRadius:"15px",
                        width:"93%",
                        // border:"1px solid red",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-around",
                        backgroundColor:"white",
                        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 5px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                    }}>
                        <VscKey style={{cursor:"text"}}/>
                        <p style={{marginTop:"10px"}}>|</p>
                        <input
                            type={show ? "text" : "password"}
                            style={{
                                height:"96%",
                                borderRadius:"15px",
                                width:"75%",
                                border:"0px",
                                outline:"none"
                            }}
                            placeholder="Password"
                            value={[password]}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        {show ? 
                            <VscEyeClosed style={{cursor:"pointer"}} onClick={()=>setShow(!show)}/>
                            :
                            <VscEye style={{cursor:"pointer"}} onClick={()=>setShow(!show)}/>
                        }
                        
                    </div>
                    {invalid ?
                    
                        <div style={{
                            fontSize:"13px",
                            fontWeight:"500",
                            // border:"1px solid red",
                            // cursor:"pointer",
                            display:"flex",
                            justifyContent:invalid ? "space-between" : "end",
                            alignItems:'center',
                            height:"30px"
                            
                        }}>
                            <p style={{
                                fontSize:"13px",
                                fontWeight:"500",
                                marginTop:"5px",
                                marginLeft:"30px",
                                // cursor:"text",
                                color:"red",
                                display:"flex",
                                alignItems:'center',
                                gap:"5px"
                            }}>
                                Invalid Credentials <CiWarning style={{marginTop:"1"}}/>
                            </p>
                            <p style={{
                                fontSize:"13px",
                                fontWeight:"500",
                                marginTop:"5px",
                                marginRight:"30px",
                                cursor:"pointer"
                            }}>
                                Forget Password ?
                            </p>
                        </div>

                        :

                        <div style={{
                            fontSize:"13px",
                            fontWeight:"500",
                            // border:"1px solid red",
                            // cursor:"pointer",
                            display:"flex",
                            justifyContent:invalid ? "space-between" : "end",
                            alignItems:'center',
                            height:"30px"
                            
                        }}>
                            <p style={{
                                fontSize:"13px",
                                fontWeight:"500",
                                marginTop:"5px",
                                marginRight:"30px",
                                cursor:"pointer"
                            }}>
                                Forget Password ?
                            </p>
                        </div>
                
                    }
                    
                    <button 
                        style={{
                            backgroundColor:"rgb(0,89,80)",
                            color:"white",
                            width:'35%',
                            height:"40px",
                            borderRadius:"15px",
                            border:"0px",
                            boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 5px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                            fontSize:"14px",
                            fontWeight:"600",
                            letterSpacing:"1px",
                            marginTop:"15px",
                            cursor:'pointer'
                        }}
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
                <div style={{
                    //  border:"1px solid green",
                     height:"27%",
                     width:"100%",
                     color:"rgb(0,89,80)",
                }}>
                    <div style={{
                        // border:"1px solid red",
                        height:"20px",
                        display:"flex",
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop:"6px",
                        marginBottom:"6px"
                    }}>
                        <div style={{width:"32%",border:"1px solid rgb(0,208,180"}}></div>
                        <p style={{fontSize:"13px",fontWeight:"500",margin:"auto 15px"}}>OR</p>
                        <div style={{width:"32%",border:"1px solid rgb(0,208,180"}}></div>
                    </div>    
                    <div style={{
                        // border:"1px solid red",
                        height:"50px",
                        display:"flex",
                        justifyContent:'center',
                        alignItems:'center',
                        // margin:"10px"
                    }}>
                        <button class="button" style={{
                                padding: "6px 27px",
                                maxWidth: "320px",
                                display: "flex",
                                fontSize: "13px",
                                lineHeight: "24px",
                                fontWeight: "600",
                                textAlign: "center",
                                textTransform: "uppercase",
                                verticalAlign: "middle",
                                aligItems: "center",
                                borderRadius: "10px",
                                border: "1px solid rgba(0, 0, 0, 0.25)",
                                gap: "12px",
                                color: "rgb(65, 63, 63)",
                                backgroundColor: "#fff",
                                cursor: "pointer",
                                transition: "all .6s ease"
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" height="22px" style={{marginTop:"1px"}}>
                            <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                            <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                            <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                            <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                            </svg>
                                Continue with Google
                        </button>
                    </div>
                    <div style={{
                        // border:"1px solid red",
                        height:"30px",
                        display:"flex",
                        justifyContent:'center',
                        alignItems:'center',
                    }}>
                        <p style={{
                            fontSize:"13px",
                            fontWeight:"500",
                            marginTop:"5px",
                        }}>
                            Already Have an Account ?
                            <label style={{marginLeft:"8px",cursor:"pointer"}}>Sign up</label>
                        </p>
                    </div>
                              
                </div>
            </div>
        </div>
    </div>
}
export default Login;