import vivekAgarwal from "../../../Images/vivelAgarwal.png"
import MuhammedNasif from "../../../Images/MuhammedNasif.png"
import rahulRajeevan from "../../../Images/rahulRajeevan.png"
import dhirajGiri from "../../../Images/dhirajGiri.png"
import { ChevronRightIcon } from "@chakra-ui/icons"

import { ThemeContext } from "../../../Context/ThemeContext";
import { useContext } from "react";

function Home5(){

    const {theme} = useContext(ThemeContext)

    return <div style={{
        width:"90%",
        height:"650px",
        // border:'1px solid',
        margin:"auto"
    }}>
        <div style={{
            height:"30%",
            // border:"1px solid red"
        }}>
            <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    Meet Your <p style={{color:"rgb(0,208,180)",marginLeft:"10px"}}>Mentors</p>
            </h1>
            <div style={{width:"35%",border:"1px solid rgb(0,208,180",margin:"-45px auto 0px auto"}}></div>
            <p style={{marginTop:"15px"}}>
                We believe that mentorship is an essential part of personal and
                <br />
                professional growth, and we are thrilled to introduce
                <br />
                you to our talented team of mentors.
            </p>
        </div>
        <div style={{
            height:"55%",
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:'center'
        }}>
            <div style={{
                height:"90%",
                width:"20%",
                border:theme ? "3px solid rgb(0,208,180)" : "0px",
                borderRadius:"20px",
                backgroundImage:`url(${vivekAgarwal})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                display:"flex",
                alignItems:"flex-end",
                color:"white",
                
                
            }}>
                <div style={{
                        backgroundImage: theme ? "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))" : "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))",
                        height:"30%",
                        width:'100%',
                        borderBottomRightRadius:"17px",
                        borderBottomLeftRadius:"17px",
                        display:"flex",
                        justifyContent:'center',
                        alignItems:'flex-end',
                    }}>
                        <div style={{width:"100%"}}>
                            <h3 style={{marginTop:'0px'}}>Vivek M. Agarwal</h3>
                            <div style={{width:"70%",margin:'auto',border:"1px solid rgb(0,208,180",marginTop:'-17px'}}></div>
                            <p style={{marginTop:'1px',fontSize:"13px",fontWeight:"500"}}>Curriculum Engineer</p>
                        </div>
                </div>
            </div>
            <div style={{
                height:"90%",
                width:"20%",
                border:theme ? "3px solid rgb(0,208,180)" : "0px",
                borderRadius:"20px",
                backgroundImage:`url(${MuhammedNasif})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                display:"flex",
                alignItems:"flex-end",
                color:"white",
                
                
            }}>
                <div style={{
                        backgroundImage: theme ? "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))" : "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))",
                        height:"30%",
                        width:'100%',
                        borderBottomRightRadius:"17px",
                        borderBottomLeftRadius:"17px",
                        display:"flex",
                        justifyContent:'center',
                        alignItems:'flex-end',
                    }}>
                        <div style={{width:"100%"}}>
                            <h3 style={{marginTop:'0px'}}>Muhammed Nasif</h3>
                            <div style={{width:"70%",margin:'auto',border:"1px solid rgb(0,208,180",marginTop:'-17px'}}></div>
                            <p style={{marginTop:'1px',fontSize:"13px",fontWeight:"500"}}>Lead Instructional Associate</p>
                        </div>
                </div>
                
            </div>
            <div style={{
                height:"90%",
                width:"20%",
                border:theme ? "3px solid rgb(0,208,180)" : "0px",
                borderRadius:"20px",
                backgroundImage:`url(${rahulRajeevan})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                display:"flex",
                alignItems:"flex-end",
                color:"white",
            }}>
                <div style={{
                        backgroundImage: theme ? "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))" : "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))",
                        height:"30%",
                        width:'100%',
                        borderBottomRightRadius:"17px",
                        borderBottomLeftRadius:"17px",
                        display:"flex",
                        justifyContent:'center',
                        alignItems:'flex-end',
                    }}>
                        <div style={{width:"100%"}}>
                            <h3 style={{marginTop:'0px'}}>Rahul Rajeevan</h3>
                            <div style={{width:"70%",margin:'auto',border:"1px solid rgb(0,208,180",marginTop:'-17px'}}></div>
                            <p style={{marginTop:'1px',fontSize:"13px",fontWeight:"500"}}>Instructional Associate</p>
                        </div>
                </div>
                
            </div>
            <div style={{
                height:"90%",
                width:"20%",
                border:theme ? "3px solid rgb(0,208,180)" : "0px",
                borderRadius:"20px",
                backgroundImage:`url(${dhirajGiri})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                display:"flex",
                alignItems:"flex-end",
                color:"white",
            }}>
                <div style={{
                        backgroundImage: theme ? "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))" : "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))",
                        height:"30%",
                        width:'100%',
                        borderBottomRightRadius:"17px",
                        borderBottomLeftRadius:"17px",
                        display:"flex",
                        justifyContent:'center',
                        alignItems:'flex-end',
                    }}>
                        <div style={{width:"100%"}}>
                            <h3 style={{marginTop:'0px'}}>Dhiraj Kumar Giri</h3>
                            <div style={{width:"70%",margin:'auto',border:"1px solid rgb(0,208,180",marginTop:'-17px'}}></div>
                            <p style={{marginTop:'1px',fontSize:"13px",fontWeight:"500"}}>Instructional Associate</p>
                        </div>
                </div>
                
            </div>
        </div>
        <div style={{
            height:"15%",
            // border:"1px solid red",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <button style={{
                border:"0px",
                backgroundColor:theme ? "rgb(0,208,180)": "rgb(0,89,80)",
                padding:"12px",
                borderRadius:"15px",
                fontSize:"14px",
                fontWeight:"bold",
                cursor:'pointer',
                marginTop:"10px",
                color:theme ? "rgb(0,89,80)" :"white"
            }}>
                See More <ChevronRightIcon/>
            </button>
        </div>
    </div>
}
export default Home5;