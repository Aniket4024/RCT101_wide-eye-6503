import { ThemeContext } from "../../../Context/ThemeContext";
import { useContext } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import SushrutiNihale from "../../../Images/SushrutiNihale.jpg"
import masaiLogo from "../../../Images/masaiLogo.png"
import vaibhavSultane from "../../../Images/vaibhavSultane.jpg"
import googleLogo from "../../../Images/googleLogo.png"
import nishutMahunta from "../../../Images/nishutMahunta.jpg"
import microSoftLogo from "../../../Images/microSoftLogo.png"
import abhishekPandey from "../../../Images/abhishekPandey.png"
import amazonLogo from "../../../Images/amazonLogo.png"
function Home6(){

    const {theme} = useContext(ThemeContext)
    return <div style={{
        height:"700px",
        width:'90%',
        margin:"50px auto 20px auto",
        
        // border:"1px solid red"
    }}>
        <div style={{
            height:"21%",
            width:'100%',
            // marginTop:"-20px"
            // border:"1px solid green"
        }}>
            <h1>What Our <label style={{color:"rgb(0,208,180)"}}>Students</label> Say</h1>
            <div style={{width:"35%",border:"1px solid rgb(0,208,180",margin:"-15px auto 0px auto"}}></div>
            <p style={{marginTop:"12px"}}>
                Those are real stories from real students demonstrate
                <br />
                the power of education and the positive impact
                <br />
                that <mark style={{color:"rgb(0,208,180)",backgroundColor:"transparent"}}>Eduxcel</mark> can have on your life.
            </p>
        </div>
        <div style={{
            height:"67%",
            width:'100%',
            marginTop:"0px",
            // border:"1px solid",
            display:"flex",
            justifyContent:'space-Evenly',
            alignItems:"center",
        }}>

            <div style={{
                backgroundImage:`url(${SushrutiNihale})`,
                width:"22%",
                height:"85%",
                backgroundSize:"cover",
                backgroundPosition:"center",
                borderRadius:"20px",
                border:theme ? "3px solid rgb(0,208,180)" : "0px",
                display:"flex",
                alignItems:"flex-end",
                color:"white",
            }}>
                <div style={{
                    backgroundImage: theme ? "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))" : "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))",
                    height:"50%",
                    width:'100%',
                    borderBottomRightRadius:"17px",
                    borderBottomLeftRadius:"17px",
                    // border:"1px solid black",
                }}>
                    
                    <div style={{
                            // border:'1px solid red',
                            width:"95%",
                            height:"60%",
                            margin:"auto",
                            textAlign:"start",
                            marginTop:"5%",
                            display:'flex',
                            alignItems:'center',
                            marginLeft:"10px"
                        }}>
                            <div style={{
                                width:'100%',
                                height:'100%',
                                display:'flex',
                                justifyContent:'space-Between',
                                alignItems:"center"
                            }}>
                                <svg stroke="currentColor" fill="#6FCD9E" stroke-width="0" viewBox="0 0 512 512" height="15px"  width="1em" xmlns="http://www.w3.org/2000/svg" style={{display: "flex",justifyContent:'center',alignSelf:"flex-start",marginTop:"5px"}}><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
                                <p style={{
                                    width:"92%",
                                    // fontSize:"15px",
                                }}>I got placed within 2 days after graduation! I’m happy I am part of the Masai family, not because they helped me but because of their mission to help other lost...</p>
                            </div>
                    </div>
                    <div style={{
                            // border:'1px solid red',
                            width:"95%",
                            height:"30%",
                            margin:"auto",
                    }}>
                        <div style={{width:"100%",marginTop:'10px'}}>
                            <h3 style={{marginTop:'0px'}}>Sushruti Nihale</h3>
                            <div style={{width:"70%",margin:'auto',border:"1px solid rgb(0,208,180",marginTop:'-17px'}}></div>
                            <p style={{marginTop:'0px',fontSize:"13px",fontWeight:"500",display:'flex',justifyContent:"center",alignItems:'center'}}>Placed At <img width="55px" style={{marginTop:"2.5px"}} src={masaiLogo} alt="" /></p>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{
                backgroundImage:`url(${vaibhavSultane})`,
                width:"22%",
                height:"85%",
                backgroundSize:"cover",
                backgroundPosition:"center",
                borderRadius:"20px",
                border:theme ? "3px solid rgb(0,208,180)" : "0px",
                display:"flex",
                alignItems:"flex-end",
                color:"white",
            }}>
                <div style={{
                    backgroundImage: theme ? "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))" : "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))",
                    height:"50%",
                    width:'100%',
                    borderBottomRightRadius:"17px",
                    borderBottomLeftRadius:"17px",
                    // border:"1px solid black",
                }}>
                    
                    <div style={{
                            // border:'1px solid red',
                            width:"95%",
                            height:"60%",
                            margin:"auto",
                            textAlign:"start",
                            marginTop:"5%",
                            display:'flex',
                            alignItems:'center',
                            marginLeft:"10px"
                        }}>
                            <div style={{
                                width:'100%',
                                height:'100%',
                                display:'flex',
                                justifyContent:'space-Between',
                                alignItems:"center"
                            }}>
                                <svg stroke="currentColor" fill="#6FCD9E" stroke-width="0" viewBox="0 0 512 512" height="15px"  width="1em" xmlns="http://www.w3.org/2000/svg" style={{display: "flex",justifyContent:'center',alignSelf:"flex-start",marginTop:"5px"}}><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
                                <p style={{
                                    width:"92%",
                                    // fontSize:"15px",
                                }}>
                                    Masai brought discipline to my life, helped me develop a coder’s mindset and increase my concentration as well as time management skills. It took me...
                                </p>
                            </div>
                    </div>
                    <div style={{
                            // border:'1px solid red',
                            width:"95%",
                            height:"30%",
                            margin:"auto",
                    }}>
                        <div style={{width:"100%",marginTop:'10px'}}>
                            <h3 style={{marginTop:'0px'}}>Vaibhav J. Sultane</h3>
                            <div style={{width:"70%",margin:'auto',border:"1px solid rgb(0,208,180",marginTop:'-17px'}}></div>
                            <p style={{marginTop:'0px',fontSize:"13px",fontWeight:"500",display:'flex',justifyContent:"center",alignItems:'center',gap:'5px'}}>Placed At <img width="45px" style={{marginTop:"4px"}} src={googleLogo} alt="" /></p>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{
                backgroundImage:`url(${nishutMahunta})`,
                width:"22%",
                height:"85%",
                backgroundSize:"cover",
                backgroundPosition:"center",
                borderRadius:"20px",
                border:theme ? "3px solid rgb(0,208,180)" : "0px",
                display:"flex",
                alignItems:"flex-end",
                color:"white",
            }}>
                <div style={{
                    backgroundImage: theme ? "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))" : "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))",
                    height:"50%",
                    width:'100%',
                    borderBottomRightRadius:"17px",
                    borderBottomLeftRadius:"17px",
                    // border:"1px solid black",
                }}>
                    
                    <div style={{
                            // border:'1px solid red',
                            width:"95%",
                            height:"60%",
                            margin:"auto",
                            textAlign:"start",
                            marginTop:"5%",
                            display:'flex',
                            alignItems:'center',
                            marginLeft:"10px"
                        }}>
                            <div style={{
                                width:'100%',
                                height:'100%',
                                display:'flex',
                                justifyContent:'space-Between',
                                alignItems:"center"
                            }}>
                                <svg stroke="currentColor" fill="#6FCD9E" stroke-width="0" viewBox="0 0 512 512" height="15px"  width="1em" xmlns="http://www.w3.org/2000/svg" style={{display: "flex",justifyContent:'center',alignSelf:"flex-start",marginTop:"5px"}}><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
                                <p style={{
                                    width:"92%",
                                    // fontSize:"15px",
                                }}>
                                    Projects are a part of journey at Masai. It gives the opportunity to work in a team, which gives a real experience of the corporate world. This helps students to...
                                </p>
                            </div>
                    </div>
                    <div style={{
                            // border:'1px solid red',
                            width:"95%",
                            height:"30%",
                            margin:"auto",
                    }}>
                        <div style={{width:"100%",marginTop:'10px'}}>
                            <h3 style={{marginTop:'0px'}}>Nishut S. Mahunta</h3>
                            <div style={{width:"70%",margin:'auto',border:"1px solid rgb(0,208,180",marginTop:'-17px'}}></div>
                            <p style={{marginTop:'0px',fontSize:"13px",fontWeight:"500",display:'flex',justifyContent:"center",alignItems:'center',gap:"5px"}}>Placed At <img width="65px" style={{marginTop:"2.5px"}} src={microSoftLogo} alt="" /></p>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{
                backgroundImage:`url(${abhishekPandey})`,
                width:"22%",
                height:"85%",
                backgroundSize:"cover",
                backgroundPosition:"center",
                borderRadius:"20px",
                border:theme ? "3px solid rgb(0,208,180)" : "0px",
                display:"flex",
                alignItems:"flex-end",
                color:"white",
            }}>
                <div style={{
                    backgroundImage: theme ? "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))" : "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,89,80,1))",
                    height:"50%",
                    width:'100%',
                    borderBottomRightRadius:"17px",
                    borderBottomLeftRadius:"17px",
                    // border:"1px solid black",
                }}>
                    
                    <div style={{
                            // border:'1px solid red',
                            width:"95%",
                            height:"60%",
                            margin:"auto",
                            textAlign:"start",
                            marginTop:"5%",
                            display:'flex',
                            alignItems:'center',
                            marginLeft:"10px"
                        }}>
                            <div style={{
                                width:'100%',
                                height:'100%',
                                display:'flex',
                                justifyContent:'space-Between',
                                alignItems:"center"
                            }}>
                                <svg stroke="currentColor" fill="#6FCD9E" stroke-width="0" viewBox="0 0 512 512" height="15px"  width="1em" xmlns="http://www.w3.org/2000/svg" style={{display: "flex",justifyContent:'center',alignSelf:"flex-start",marginTop:"5px"}}><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
                                <p style={{
                                    width:"92%",
                                    // fontSize:"15px",
                                }}>
                                    Masai helped me switch from Infosys to a top product-based company with 3X higher salary, all thanks to their excellent curriculum and career support. Highly recommend to...
                                </p>
                            </div>
                    </div>
                    <div style={{
                            // border:'1px solid red',
                            width:"95%",
                            height:"30%",
                            margin:"auto",
                    }}>
                        <div style={{width:"100%",marginTop:'10px'}}>
                            <h3 style={{marginTop:'0px'}}>Abhishek R. Pandey</h3>
                            <div style={{width:"70%",margin:'auto',border:"1px solid rgb(0,208,180",marginTop:'-17px'}}></div>
                            <p style={{marginTop:'0px',fontSize:"13px",fontWeight:"500",display:'flex',justifyContent:"center",alignItems:'center',gap:"7px"}}>
                                Placed At 
                                <img width="40px" style={{marginTop:"6px"}} src={amazonLogo} alt="" />
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            

        </div>
        <div style={{
            height:"12%",
            width:'100%',
            marginTop:"0px",
            // border:"1px solid",
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
                More Stories <ChevronRightIcon/>
            </button>
        </div>
    </div>
}

export default Home6;