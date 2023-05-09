import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"
import { NavLink } from "react-router-dom";
import {  AppStoreButton, GooglePlayButton } from "react-mobile-app-button";

import {
    FaDribbble,
    FaFacebookSquare,
    FaGraduationCap,
    FaInstagram,
    FaLinkedin,
    FaTwitter,

} from 'react-icons/fa'
import { 
    MdOutlineCookie,
    MdOutlinePrivacyTip,
    MdOutlineStickyNote2,
    MdInfoOutline,
    MdOutlineHandshake,
    MdOutlineImageSearch,
    MdOutlineFeaturedPlayList,
    MdOndemandVideo,
    MdOutlinePriceChange,
    MdUploadFile,
    MdOutlinePending
} from "react-icons/md";

import { VscLaw } from "react-icons/vsc";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../Images/DarkLogo.png"
function Footer(){

    const {theme} = useContext(ThemeContext);

    const navstyle = {
        textDecoration:"none",
        color:theme?"white":"rgb(0,89,80)",
        fontWeight:"500",
        display:'flex',
        alignItems:"center",
        gap:"5px",
        // border:"1px solid red"
    }

    return <div style={{
        width:"100%",
        height:"400px",
        margin: "auto",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:theme ? "rgb(0,89,80)" : "white",
        paddingTop:"50px",
    }}>
        <div style={{border:"1px solid rgb(210, 210, 210)",width:"98%",margin:"auto"}}></div>
        <div style={{
            height:"20%",
            // border:"1px solid red",
            lineHeight:"0px",
        }}>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:'center',
                gap:"20px",
                marginTop:"15px"
            }}>
                <div style={{border:"1px solid rgb(0, 208, 180)",width:"5%"}}></div>
                <img width="130px" src={logo} alt="" />
                <div style={{border:"1px solid rgb(0, 208, 180)",width:"5%"}}></div>
            </div>
            <p style={{marginTop:"10px"}}>A Transformation In Education</p>
        </div>
        <div style={{
            width:"100%",
            height:"300px",
        }}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                alignItems:'center',
                width:"90%",
                // border:"1px solid red",
                height:"80%",
                margin:"auto"
            }}>
                <div style={{
                    width:"15%",
                    // border:"1px solid green",
                    textAlign:"start",
                    height:"90%"
                }}>
                    <h3>Product</h3>
                    <div style={{border:"1px solid rgb(0,208,180)",width:"42%",marginTop:"-12px",}}></div>
                    <div style={{
                        height:"60%",
                        // border:"1px solid green",
                        display:"grid",
                        alignItems:"flex-end",
                        marginTop:"10px",
                        width:"45%"
                    }}>
                        <NavLink style={navstyle} to="/"><MdOutlineImageSearch/> Overview</NavLink>
                        <NavLink style={navstyle} to="/"><MdOutlineFeaturedPlayList/> Features</NavLink>
                        <NavLink style={navstyle} to="/"><MdOndemandVideo/> Tutorials</NavLink>
                        <NavLink style={navstyle} to="/"><MdOutlinePriceChange/> Pricing</NavLink>
                        <NavLink style={navstyle} to="/"><MdUploadFile/> Releases</NavLink>
                    </div>
                </div>
                <div style={{
                    width:"15%",
                    // border:"1px solid green",
                    textAlign:"start",
                    height:"90%"
                }}>
                    <h3>Company</h3>
                    <div style={{border:"1px solid rgb(0,208,180)",width:"47%",marginTop:"-12px",}}></div>
                    <div style={{
                        height:"60%",
                        // border:"1px solid green",
                        display:"grid",
                        alignItems:"flex-end",
                        marginTop:"10px",
                        width:"50%"
                    }}>
                        <NavLink style={navstyle} to="/About"><MdInfoOutline/> About Us</NavLink>
                        <NavLink style={navstyle} to="/"><HiOutlineNewspaper/> Press</NavLink>
                        <NavLink style={navstyle} to="/"><FaGraduationCap/> Careers</NavLink>
                        <NavLink style={navstyle} to="/Contact"><FiPhoneCall fontSize="14px"/> Contact Us</NavLink>
                        <NavLink style={navstyle} to="/"><MdOutlineHandshake/> Partners</NavLink>
                    </div>
                </div>
                <div style={{
                    width:"15%",
                    // border:"1px solid green",
                    textAlign:"start",
                    height:"90%",
                }}>
                    <h3>Legal</h3>
                    <div style={{border:"1px solid rgb(0,208,180)",width:"30%",marginTop:"-12px",}}></div>
                    <div style={{
                        height:"60%",
                        // border:"1px solid green",
                        display:"grid",
                        alignItems:"flex-end",
                        marginTop:"10px",
                        width:"74%"
                    }}>
                        <NavLink style={navstyle} to="/"><MdOutlineCookie/> Cookies Policy</NavLink>
                        <NavLink style={navstyle} to="/"><MdOutlinePrivacyTip/> Privacy Policy</NavLink>
                        <NavLink style={navstyle} to="/"><MdOutlineStickyNote2/> Terms of Service</NavLink>
                        <NavLink style={navstyle} to="/"><VscLaw/> Law Enforcement</NavLink>
                        <NavLink style={navstyle} to="/"><MdOutlinePending/> Status</NavLink>
                    </div>
                </div>
                <div style={{
                    width:"15%",
                    // border:"1px solid green",
                    textAlign:"start",
                    height:"90%"
                }}>
                    <h3>Follow Us</h3>
                    <div style={{border:"1px solid rgb(0,208,180)",width:"50%",marginTop:"-12px",}}></div>
                    <div style={{
                        height:"60%",
                        // border:"1px solid green",
                        display:"grid",
                        alignItems:"flex-end",
                        marginTop:"10px",
                        width:"46%"
                    }}>
                        <NavLink style={navstyle} to="/"><FaFacebookSquare/><div style={{marginTop:"-2px"}}>Facebook</div></NavLink>
                        <NavLink style={navstyle} to="/"><FaTwitter /><div style={{marginTop:"-2px"}}>Twitter</div></NavLink>
                        <NavLink style={navstyle} to="/"><FaDribbble /><div style={{marginTop:"-2px"}}>Dribble</div></NavLink>
                        <NavLink style={navstyle} to="/"><FaInstagram /><div style={{marginTop:"-2px"}}>Instagram</div></NavLink>
                        <NavLink style={navstyle} to="/"><FaLinkedin /><div style={{marginTop:"-2px"}}>LinkedIn</div></NavLink>
                    </div>
                </div>
                <div style={{width:"25%",height:"100%"}}>
                    <div style={{
                        height:"20%",
                        // border:'1px solid green',
                        display:'flex',
                        justifyContent:"center",
                        alignItems:'center',
                    }}>
                        <h1 style={{marginTop:"0px"}}>Download App</h1>
                    </div>
                    {/* <div style={{width:"60%",border:"1px solid rgb(0,208,180",margin:"-15px auto 0px auto"}}></div> */}
                    <div style={{
                        display:"flex",
                        justifyContent:'center',
                        alignItems:'center',
                        // border:"1px solid red",
                        height:"80%",
                        width:"100%",
                    }}>
                        <div style={{
                            height:"95%",
                            // border:"1px solid blue"
                        }}>
                            <div style={{
                                margin:"15px"
                            }}>
                                <GooglePlayButton
                                    url={"APKUrl"}
                                    theme={theme ? "light" : "dark"}
                                    height={30}
                                    width={160}
                                />
                            </div>
                            <div style={{
                                margin:"15px"
                            }}>
                                <AppStoreButton
                                    url={"iOSUrl"}
                                    theme={theme ? "light" : "dark"}
                                    height={30}
                                    width={160}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{border:"1px solid rgb(210, 210, 210)",width:"98%",margin:"auto"}}></div>
            <div style={{
                height:"20%",
                width:"100%",
                display:"flex",
                justifyContent:"center",
                alignItems:"flex-end",
            }}>
                <h4>© 2023 Eduxcel. All rights reserved.</h4>
            </div>
        </div>
    </div>

}

export default Footer

export const MyComponent = () => {
    const APKUrl =
      "https://play.google.com/store/apps/details?id=host.exp.exponent";
    return (
      <div>
        <GooglePlayButton
          url={APKUrl}
          theme={"light"}
          className={"custom-style"}
        />
      </div>
    );
  };