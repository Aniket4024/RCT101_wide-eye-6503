import { MdOutlineStar, MdOutlineStarHalf, MdOutlineStarOutline } from "react-icons/md";
import { useContext } from "react"
import { ThemeContext } from "../../../Context/ThemeContext"
import { NavLink } from "react-router-dom";
import SingleProduct from "../../SingleProduct";

function CourseCard({Title,image,detials,duration,lecture,level,ratings,ratingCount,id}){

    const {theme} = useContext(ThemeContext)

    return <div style={{
                boxShadow:theme ? "rgba(0,208,180,0.1) 0px 1px 3px 1px, rgba(0,208,180, 0.5) 0px 0px 0px 1px" : "rgba(0,89,80,0.1) 0px 1px 3px 1px, rgba(0,89,80, 0.5) 0px 0px 0px 1px",
                height:"360px",
                borderRadius:"15px",
                // backgroundColor:"",
                // border:theme ? "2px solid rgb(0,208,180)" : "0px",
                color:theme ?  "white" : "rgb(0,89,80)",
            }}>
                <div style={{
                    height:"44%",
                    backgroundImage:`url(${image})`,
                    backgroundSize:"cover",
                    backgroundRepeat:"no-repeat",
                    borderRadius:"15px 15px 0px 0px",
                    backgroundPosition:'center'
                }}>

                </div>
                <div style={{
                    height:"56%",
                    // border:'1px solid blue',
                    textAlign:"start",
                    width:"95%",
                    margin:"auto"
                }}>
                    <p style={{margin:"5px 0px 0px 0px",fontSize:"15px",fontWeight:"500",height:"40px",display:"flex",alignItems:'center'}}>{Title.length>55 ? Title.substring(0,54)+"..." : Title}</p>
                    <div style={{width:"100%",margin:"5px 0px -5px 0px",border:"1px solid rgb(0,208,180"}}></div>
                    <p style={{fontSize:"12px",height:"32px",}}>{detials.length>=79 ? detials.substring(0,75)+"..." : detials}</p>
                    <label style={{fontSize:"15px",fontWeight:"500",display:"flex",alignItems:"center",gap:"10px",color:"rgb(0,208,180)",margin:"-10px 0px -20px 0px"}}>
                        {ratings}
                        <div style={{marginTop:'4px'}}>
                            {
                                (+ratings.trim().split(".")[0])===5 ?
                                <>
                                    {new Array(+ratings.trim().split(".")[0]).fill().map(()=><MdOutlineStar/>)}
                                </> :
                                (+ratings.trim().split(".")[0])===4 ?
                                <>
                                    {new Array(+ratings.trim().split(".")[0]).fill().map(()=><MdOutlineStar/>)}
                                    <MdOutlineStarHalf/>
                                </> : 
                                (+ratings.trim().split(".")[0])===3 ?
                                <>
                                    {new Array(+ratings.trim().split(".")[0]).fill().map(()=><MdOutlineStar/>)}
                                    <MdOutlineStarHalf/> 
                                    <MdOutlineStarOutline/>
                                </> : 
                                (+ratings.trim().split(".")[0])===2 ?
                                <>
                                    {new Array(+ratings.trim().split(".")[0]).fill().map(()=><MdOutlineStar/>)}
                                    <MdOutlineStarHalf/> 
                                    <MdOutlineStarOutline/>
                                    <MdOutlineStarOutline/>
                                </> :
                                (+ratings.trim().split(".")[0])===1 ?
                                <>
                                    {new Array(+ratings.trim().split(".")[0]).fill().map(()=><MdOutlineStar/>)}
                                    <MdOutlineStarHalf/> 
                                    <MdOutlineStarOutline/>
                                    <MdOutlineStarOutline/>
                                    <MdOutlineStarOutline/>
                                </> :
                                <>
                                    <MdOutlineStarOutline/>
                                    <MdOutlineStarOutline/>
                                    <MdOutlineStarOutline/>
                                    <MdOutlineStarOutline/>
                                    <MdOutlineStarOutline/>
                                </> 
                            }
                            
                        </div>
                        <p style={{fontSize:"12px",color:theme ? "rgba(230,230,230,0.6)" : "rgb(0,89,80,0.5)"}}>
                        {ratingCount}
                        </p>
                    </label>
                    <p style={{fontSize:"11px",color:theme ? "rgba(230,230,230,0.6)" : "rgb(0,89,80,0.7)"}}>
                        {duration} | {lecture} | {level}
                    </p>
                   <NavLink to={`/Product/${id}`} >
                    <button style={{
                            marginLeft:"77px",
                            padding:"9px 10px",
                            borderRadius:"10px",
                            backgroundColor:theme ?"rgb(0,208,180)" : "rgb(0,89,80)",
                            border:"0px",
                            fontWeight:"600",
                            marginTop:"8px",
                            cursor:"pointer",
                            color:theme ? "rgb(0,89,80)" : "white" 
                        }}
                    >
                            View Detials
                        </button>
                   </NavLink>
                </div>
            </div>
}
export default CourseCard;