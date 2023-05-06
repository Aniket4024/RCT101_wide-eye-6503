import studentsIMG from "../../../Images/studnets.jpg"
import {ThemeContext} from "../../../Context/ThemeContext";
import { useContext } from "react";
import capLight from "../../../Images/capLight.png"
import capWhite from "../../../Images/capLightWhite.png"
function Home4(){

    const {theme} = useContext(ThemeContext)

    return <div style={{
        width:"100%",
        height:"450px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:"50px",
        // border:'1px solid'
    }}>
        <div style={{
            width:"40%",
            height:"95%",
            backgroundImage:`url(${studentsIMG})`,
            backgroundSize:"cover",
            borderBottom:theme ? "5px solid rgb(0,208,180)" : "5px solid rgb(0,89,80)",
            borderRight:theme ? "5px solid rgb(0,208,180)" : "5px solid rgb(0,89,80)",
            borderTop:theme ? "5px solid rgb(0,208,180)" : "5px solid rgb(0,89,80)",
            borderTopRightRadius:"230px",
            borderBottomRightRadius:"230px",
        }}>

        </div>
        <div style={{
            width:"50%",
            height:"95%",
        }}>
            <h1 style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                Why Choose <p style={{color:"rgb(0,208,180)",marginLeft:"10px"}}>Us ?</p>
            </h1>
            <div style={{width:"35%",border:"1px solid rgb(0,208,180",marginTop:"-40px",marginLeft:"-15px"}}></div>
            <p style={{marginTop:"20px",textAlign:"start"}}>
                We are dedicated to helping you achieve your goals and to
                <br /> 
                supporting you every step of the way. By choosing our website, 
                <br />
                you will have access to valuable resources, expert guidance 
                <br />
                and a supportive community of learners.
            </p>
            {/* <div style={{height:"70%",marginTop:"30px",width:"90%"}}>
                <div style={{
                    display:'flex',
                    justifyContent:"space-between",
                    alignItems:"center",
                    border:"1px solid red",
                    height:"50%",
                    textAlign:"start"
                }}>
                    <div style={{
                        width:"45%",
                        height:"100%",
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        // border:'1px solid'
                    }}>
                        <div>
                            <div>
                                <img width="50px" style={{marginBottom:"-20px"}} src={theme ? capWhite : capLight} alt="capIcon" />
                                <h3>Scholarship</h3>
                            </div>
                            <p style={{fontSize:"13px",fontWeight:"500",marginTop:"-5px",marginLeft:"0px"}}>
                                    We Have State-Of-The-art 
                                    <br />
                                    Learning Facilities And Innovative Technology To
                                    <br />
                                    Ensure Our Students
                                </p>                     
                        </div>
                    </div>
                    <div style={{
                        width:"45%",
                        height:"100%",
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        // border:'1px solid'
                    }}>
                        <div>
                            <div>
                                <img width="50px" style={{marginBottom:"-20px"}} src={theme ? capWhite : capLight} alt="capIcon" />
                                <h3>Scholarship</h3>
                            </div>
                            <p style={{fontSize:"13px",fontWeight:"500",marginTop:"-5px",marginLeft:"0px"}}>
                                    We Have State-Of-The-art 
                                    <br />
                                    Learning Facilities And Innovative Technology To
                                    <br />
                                    Ensure Our Students
                                </p>                     
                        </div>
                    </div>
                </div>
                <div style={{
                        display:'flex',
                        justifyContent:"center",
                        alignItems:"center",
                        border:"1px solid red",
                        height:"50%",
                        textAlign:"start"
                }}>
                        <div style={{
                        width:"45%",
                        height:"100%",
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        // border:'1px solid'
                    }}>
                        <div>
                            <div>
                                <img width="50px" style={{marginBottom:"-20px"}} src={theme ? capWhite : capLight} alt="capIcon" />
                                <h3>Scholarship</h3>
                            </div>
                            <p style={{fontSize:"13px",fontWeight:"500",marginTop:"-5px",marginLeft:"0px"}}>
                                    We Have State-Of-The-art 
                                    <br />
                                    Learning Facilities And Innovative Technology To
                                    <br />
                                    Ensure Our Students
                                </p>                     
                        </div>
                    </div>
                </div>
            </div> */}
             <div style={{lineHeight:"0px",marginTop:"20px"}}>
                <div style={{display:'flex',alignItems:"center"}}>
                    <img width="30px" src={theme ? capWhite : capLight} alt="" />
                    <h4 style={{marginLeft:"10px"}}>Scholarships Upto 80%</h4>
                </div>
                <div style={{display:'flex',alignItems:"center"}}>
                    <img width="30px" src={theme ? capWhite : capLight} alt="" />
                    <h4 style={{marginLeft:"10px"}}>Average Hike 8 LPA</h4>
                </div>
                <div style={{display:'flex',alignItems:"center"}}>
                    <img width="30px" src={theme ? capWhite : capLight} alt="" />
                    <h4 style={{marginLeft:"10px"}}>4800+ Placement</h4>
                </div>
            </div>
        </div>
    </div>
}
export default Home4;