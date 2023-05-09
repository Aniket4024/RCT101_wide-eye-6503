import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"
import { Search2Icon } from "@chakra-ui/icons";
import courseBackground from "../Images/CourseBackground.jpg"
import CourseCard from "./PageComponents/CourseComponents/CourseCard";
import { useState } from "react";
import { useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineStar, MdOutlineStarOutline } from "react-icons/md";
import { Spinner } from '@chakra-ui/react'


const getURL = (page,search)=>{
    if(search!==""){
        return `http://localhost:8080/products?q=${search}&_limit=20&_page=${page}`;
    }
    else{
        return `http://localhost:8080/products?_limit=20&_page=${page}`;   
    }
}

function Courses(){

    const {theme} = useContext(ThemeContext);
    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);
    const [total,setTotal] = useState(0);
    const [loding,setLoading] = useState(false);
    const [search,setSearch] = useState("");
    

    const handleSearch = (value)=>{
        setSearch(value)
    }
    const handleLevel = (value)=>{
        setLoading(true)
        
        // fetch(getURL(page,search))
        // .then((res)=>res.json())
        // .then((data1)=>{
        //     setLoading(false)
            
        //      data1.map((e)=>{
        //         level.map((i)=>{
        //             if(e.level==i){
        //                 arr=[...arr,e]
        //             }
        //         })
        //     });
        //     setData(arr)
        // })

        fetch(getURL(page,search))
        .then((res)=>res.json())
        .then((data1)=>{
            setLoading(false)
            const newData = data1.filter((e)=>e.level===value);
            setData(newData)
        })

    }

    const handleSort = (value)=>{
        setLoading(true)
        fetch(`http://localhost:8080/products?_sort=ratings&_order=${value}&_limit=20&_page=${page}`)
        .then((res)=>res.json())
        .then((data1)=>{
            setLoading(false)
            setData(data1)
        })
    }

    const handleRatings = (value)=>{
        setLoading(true)

        fetch(getURL(page,search))
        .then((res)=>res.json())
        .then((data1)=>{
            setLoading(false)
            const newData = data1.filter((e)=>+e.ratings>=+value);
            setData(newData)
        })

    }


    useEffect(()=>{
        setLoading(true)
        fetch(getURL(page,search))
        .then((res)=>res.json())
        .then((data1)=>{setLoading(false);setData(data1)})
        .catch((err)=>console.log(err))

        fetch(`http://localhost:8080/products`)
        .then((res)=>res.json())
        .then((data2)=>setTotal(data2.length))
        .catch((err)=>console.log(err));
        // console.log(level)
    },[page,search])


    return <div style={{
        backgroundColor:theme?"#005950":"white",
        // marginTop:"49px",
        width:"1519px",
        margin:"auto"
    }}>
       <div style={{
            backgroundImage:`url(${courseBackground})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            // backgroundColor:"black",
            height:"300px",
            width:"100%",
            // marginTop:"40px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            
       }}>
            <div style={{height:"100%",width:"100%" ,backgroundColor:"rgba(0,0,0,0.7)"}}>
                <h1 style={{fontSize:"42px",marginTop:"70px", color:"white"}}>All Courses</h1>
                <div style={{width:"20%",margin:"-25px auto 0px auto",border:"1px solid rgb(0,208,180"}}></div>
                <p style={{fontSize:"12px",marginTop:"6px",marginBottom:"40px",color:'white',fontWeight:"500"}}>Explore Our Diverse Range of Courses</p>
                <input 
                    type="search"
                    style={{
                        width:"20%",
                        height:"45px",
                        border:"0px",
                        borderRadius:"15px 0px 0px 15px",
                        outline:"0px",
                        padding:"0px 0px 0px 20px",
                        backgroundColor:"rgba(255,255,255,0.8)",
                        caretColor:"rgb(0,89,80)"
                    }}
                    placeholder="Search Courses"
                    onChange={(e)=>{handleSearch(e.target.value)}}
                />
                <label style={{
                    padding:"9px 10px 14.5px 10px",
                    backgroundColor:"rgba(255,255,255,0.8)",
                    color:"rgb(0,89,80)"
                }}>
                    |
                </label>
                <button style={{
                    border:"0px",
                    height:'45px',
                    borderRadius:"0px 15px 15px 0px",
                    padding:"0px 15px 0px 0px",
                    backgroundColor:"rgba(255,255,255,0.8)",
                    color:"rgb(0,89,80)"
                }}>
                    <Search2Icon/>
                </button>
            </div>

       </div>
       <div style={{
            // height:"500px",
            width:"90%",
            // border:"1px solid red",
            margin:" 50px auto",
            display:"flex",
            justifyContent:"space-between",
            alignItems:'start'
       }}>
            <div 
                style={{
                    height:"900px",
                    width:"15%",
                    // border:"1px solid green",
                    // backgroundColor:"greenyellow",
                    borderRight:"2px solid rgb(0,208,180)",
                    
                }}
            >
                
                <div style={{
                    height:"125px",
                    width:"100%",
                    // border:"1px solid gray",
                    textAlign:"start"
                }}>
                    <h3>Sort By  Ratings</h3>
                    <div style={{width:"73%",margin:"-15px 0px 25px 0px",border:"1px solid rgb(0,208,180"}}></div>
                    <div>
                        <label  style={{display:"flex",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",cursor:"pointer"}}>
                            <input onChange={()=>handleSort("desc")} name="a" type="radio" style={{border:"1px solid red",width:'12px',marginLeft:"6px",cursor:"pointer"}} />
                            Hight to Low
                        </label>
                        <br />
                        <label onChange={()=>handleSort("asc")} style={{display:"flex",alignItems:"start",fontSize:"13px",fontWeight:"500",marginTop:"-13px",gap:"5px",cursor:"pointer"}}>
                            <input name="a" type="radio" style={{width:"15px",border:"1px solid red",cursor:"pointer"}} />
                            Low To high
                        </label>
                        
                    </div>
                </div>
                <div style={{
                    height:"300px",
                    width:"100%",
                    // border:"1px solid gray",
                    textAlign:"start"
                }}>
                    <h3>Skills Category</h3>
                    <div style={{width:"70%",margin:"-15px 0px 25px 0px",border:"1px solid rgb(0,208,180"}}></div>
                    <div style={{
                        height:"75%",
                        width:"100%",
                        margin:"auto",
                        // border:"1px solid gray",
                        textAlign:"start",
                    }}>
                        <label style={{display:"flex",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input type="checkbox" name="" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            Web Debelopment
                        </label>
                        <label style={{display:"flex",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input type="checkbox" name="" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            App Development
                        </label>
                        <label style={{display:"flex",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input type="checkbox" name="" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            Cloud Computing
                        </label>
                        <label style={{display:"flex",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input type="checkbox" name="" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            Grafics Designing
                        </label>
                        <label style={{display:"flex",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input type="checkbox" name="" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            Digital Marketing
                        </label>
                        <label style={{display:"flex",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input type="checkbox" name="" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            3D Animation
                        </label>
                        <label style={{display:"flex",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input type="checkbox" name="" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            Video Editing
                        </label>
                        <label style={{display:"flex",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input type="checkbox" name="" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            Data Science
                        </label>
                        <label style={{display:"flex",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input type="checkbox" name="" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            Finance
                        </label>
                    </div>
                </div>
                <div style={{
                    height:"200px",
                    width:"80%",
                    // border:"1px solid gray",
                    textAlign:"start"
                }}>
                    <h3>Course Level</h3>
                    <div style={{width:"76%",margin:"-15px 0px 25px 0px",border:"1px solid rgb(0,208,180"}}></div>
                    <div style={{
                        height:"75%",
                        width:"100%",
                        margin:"auto",
                        // border:"1px solid gray",
                        textAlign:"start",
                    }}>
                        <label style={{display:"flex",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input value="All Levels" onChange={(e)=>handleLevel(e.target.value)} type="radio" name="a" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            All Level
                        </label>
                        <label style={{display:"flex",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input value="Beginner" onChange={(e)=>handleLevel(e.target.value)} type="radio" name="a" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            Beginner
                        </label>
                        <label style={{display:"flex",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input value="Intermediate" onChange={(e)=>handleLevel(e.target.value)} type="radio" name="a" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            Intermediate
                        </label>
                        <label style={{display:"flex",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input value="Expert" onChange={(e)=>{handleLevel(e.target.value);console.log(e)}} type="radio" name="a" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            Expert
                        </label>
                    </div>
                </div>
                <div style={{
                    height:"215px",
                    width:"100%",
                    // border:"1px solid gray",
                    textAlign:"start",
                    marginTop:"-30px"
                }}>
                    <h3>Course Ratings</h3>
                    <div style={{width:"73%",margin:"-15px 0px 25px 0px",border:"1px solid rgb(0,208,180"}}></div>
                    <div style={{
                        height:"75%",
                        width:"100%",
                        margin:"auto",
                        // border:"1px solid gray",
                        textAlign:"start",
                    }}>
                        <label style={{display:"flex",color:"rgb(0,208,180)",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input value="5" onChange={(e)=>handleRatings(e.target.value)} type="radio" name="a" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            <label style={{fontSize:"15px",fontWeight:"500",display:"flex",alignItems:"center",gap:"10px",color:"rgb(0,208,180)",margin:"-2px 0px 0px 0px"}}>5.0</label>
                            <div>
                                <MdOutlineStar/>
                                <MdOutlineStar/>
                                <MdOutlineStar/>
                                <MdOutlineStar/>
                                <MdOutlineStar/>
                            </div>
                        </label>
                        <label style={{display:"flex",color:"rgb(0,208,180)",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input value="4" onChange={(e)=>handleRatings(e.target.value)} type="radio" name="a" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            <label style={{fontSize:"15px",fontWeight:"500",display:"flex",alignItems:"center",gap:"10px",color:"rgb(0,208,180)",margin:"-2px 0px 0px 0px"}}>4.0</label>
                            <div>
                                <MdOutlineStar/>
                                <MdOutlineStar/>
                                <MdOutlineStar/>
                                <MdOutlineStar/>
                                <MdOutlineStarOutline/>
                            </div>
                        </label>
                        <label style={{display:"flex",color:"rgb(0,208,180)",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input value="3" onChange={(e)=>handleRatings(e.target.value)} type="radio" name="a" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            <label style={{fontSize:"15px",fontWeight:"500",display:"flex",alignItems:"center",gap:"10px",color:"rgb(0,208,180)",margin:"-2px 0px 0px 0px"}}>3.0</label>
                            <div>
                                <MdOutlineStar/>
                                <MdOutlineStar/>
                                <MdOutlineStar/>
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                            </div>
                        </label>
                        <label style={{display:"flex",color:"rgb(0,208,180)",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input value="2" onChange={(e)=>{handleRatings(e.target.value);console.log(e)}} type="radio" name="a" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            <label style={{fontSize:"15px",fontWeight:"500",display:"flex",alignItems:"center",gap:"10px",color:"rgb(0,208,180)",margin:"-2px 0px 0px 0px"}}>2.0</label>
                            <div>
                                <MdOutlineStar/>
                                <MdOutlineStar/>
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                            </div>
                        </label>
                        <label style={{display:"flex",color:"rgb(0,208,180)",alignItems:"start",fontSize:"13px",fontWeight:"500",gap:"5px",marginTop:"5px",cursor:"pointer"}}>
                            <input value="1" onChange={(e)=>{handleRatings(e.target.value);console.log(e)}} type="radio" name="a" id="" style={{marginTop:"4px",width:"15px",border:"1px solid red"}} />
                            <label style={{fontSize:"15px",fontWeight:"500",display:"flex",alignItems:"center",gap:"10px",margin:"-2px 0px 0px 0px"}}>1.0</label>
                            <div>
                                <MdOutlineStar/>
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                            </div>
                        </label>
                    </div>
                
                </div>
            </div>

            {loding ? 

                <div style={{
                    width:"85%",
                    marginTop:'150px',
                    marginRight:"100px"
                }}>
                    <Spinner w={50} h={50}/>
                </div>

                :

                data.length===0 ?
                
                <div style={{
                    width:"85%",
                    marginTop:'150px',
                    marginRight:"100px"
                }}>
                    <h1>Sorry Now Data Found {search.length!==0 ?  `on ${search}` : ""}</h1>
                </div>

                :

                <div style={{
                    width:"85%",
                    marginTop:'10px'
                }}>
                    <div style={{
                        display:"grid",
                        gridTemplateColumns:"repeat(4,1fr)",
                        gap:"20px",
                        width:"95%",
                        margin:"auto"
                    }}>
                        {data.map((e,i)=>
                            <CourseCard key={i+1} {...e}/>
                        )}
                    </div>
                </div>
            }
            
       </div>
       <div style={{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        width:"170px",
        height:"54px",
        margin:"auto",
        // border:"1px solid red"
       }}>
            <button onClick={()=>setPage(page-1)} disabled={page===1 ? true : false} style={{border:"0px",backgroundColor:"transparent",display:"flex",color:theme ? "white" : 'rgb(0,89,80)',cursor:"pointer"}}>
                <MdKeyboardArrowLeft  style={{fontSize:"22px"}} /> 
            </button>
            <h3 style={{
                display:'flex',
                width:"70%",
                justifyContent:"center",
                alignItems:"center"
            }}>
               {page===1 ? 
                <div style={{display:"flex",gap:"10px"}}>
                    <button style={{color:theme ? "white" : "rgb(0,89,80)",marginTop:"2px",textAlign:"center",borderBottom:theme ? "1px solid white" : "2px solid rgb(0,89,80)",fontSize:"14px",fontWeight:"600",borderTop:"0px",borderRight:"0px",borderLeft:"0px",backgroundColor:"transparent",cursor:"pointer"}}  onClick={(e)=>setPage(+e.target.innerText)}>1</button>
                    <button style={{color:theme ? "white" : "rgb(0,89,80)",backgroundColor:"transparent",border:'0px',fontSize:"14px",fontWeight:"600",cursor:'pointer'}} onClick={(e)=>setPage(+e.target.innerText)}>2</button>
                    <button style={{color:theme ? "white" : "rgb(0,89,80)",backgroundColor:"transparent",border:'0px',fontSize:"14px",fontWeight:"600",cursor:'pointer'}} onClick={(e)=>setPage(+e.target.innerText)}>3</button>
                </div>
                :

                page===2 ? 
                <div style={{display:"flex",gap:"10px"}}>
                    <button style={{color:theme ? "white" : "rgb(0,89,80)",backgroundColor:"transparent",border:'0px',fontSize:"14px",fontWeight:"600",cursor:"pointer",}} onClick={(e)=>setPage(+e.target.innerText)}>1</button>
                    <button style={{color:theme ? "white" : "rgb(0,89,80)",marginTop:"2px",textAlign:"center",cursor:"pointer",borderBottom:theme ? "1px solid white" : "2px solid rgb(0,89,80)",fontSize:"14px",fontWeight:"600",borderTop:"0px",borderRight:"0px",borderLeft:"0px",backgroundColor:"transparent"}} onClick={(e)=>setPage(+e.target.innerText)}>2</button>
                    <button style={{color:theme ? "white" : "rgb(0,89,80)",backgroundColor:"transparent",border:'0px',fontSize:"14px",fontWeight:"600",cursor:"pointer",}} onClick={(e)=>setPage(+e.target.innerText)}>3</button>
                </div>

                :

                page===Math.ceil((total/20)-1) ? 
                <div style={{display:"flex",gap:"10px"}}>
                    <button style={{color:theme ? "white" : "rgb(0,89,80)",backgroundColor:"transparent",border:'0px',fontSize:"14px",fontWeight:"600",cursor:"pointer"}} onClick={(e)=>setPage(+e.target.innerText)}>{page-1}</button>
                    <button style={{color:theme ? "white" : "rgb(0,89,80)",cursor:"pointer",marginTop:"2px",textAlign:"center",borderBottom:theme ? "1px solid white" : "2px solid rgb(0,89,80)",fontSize:"14px",fontWeight:"600",borderTop:"0px",borderRight:"0px",borderLeft:"0px",backgroundColor:"transparent"}} onClick={(e)=>setPage(+e.target.innerText)}>{page}</button>
                    <button style={{color:theme ? "white" : "rgb(0,89,80)",backgroundColor:"transparent",border:'0px',fontSize:"14px",fontWeight:"600",cursor:"pointer"}} onClick={(e)=>setPage(+e.target.innerText)}>{page+1}</button>
                </div>

                :

                page===Math.ceil(total/20) ? 
                <div style={{display:"flex",gap:"10px"}}>
                    <button style={{color:theme ? "white" : "rgb(0,89,80)",backgroundColor:"transparent",border:'0px',fontSize:"14px",fontWeight:"600",cursor:"pointer"}} onClick={(e)=>setPage(+e.target.innerText)}>{page-2}</button>
                    <button style={{color:theme ? "white" : "rgb(0,89,80)",backgroundColor:"transparent",border:'0px',fontSize:"14px",fontWeight:"600",cursor:"pointer"}} onClick={(e)=>setPage(+e.target.innerText)}>{page-1}</button>
                    <button style={{color:theme ? "white" : "rgb(0,89,80)",marginTop:"2px",textAlign:"center",cursor:"pointer",borderBottom:theme ? "1px solid white" : "2px solid rgb(0,89,80)",fontSize:"14px",fontWeight:"600",borderTop:"0px",borderRight:"0px",borderLeft:"0px",backgroundColor:"transparent"}} onClick={(e)=>setPage(+e.target.innerText)}>{Math.ceil(total/20)}</button>
                </div>

                :

                <div style={{display:"flex",gap:"10px"}}>
                    <button style={{color:theme ? "white" : "rgb(0,89,80)",backgroundColor:"transparent",border:'0px',fontSize:"14px",fontWeight:"600",cursor:"pointer"}} onClick={(e)=>setPage(+e.target.innerText)}>{page-1}</button>
                    <button style={{color:theme ? "white" : "rgb(0,89,80)",marginTop:"2px",textAlign:"center",cursor:"pointer",borderBottom:theme ? "1px solid white" : "2px solid rgb(0,89,80)",fontSize:"14px",fontWeight:"600",borderTop:"0px",borderRight:"0px",borderLeft:"0px",backgroundColor:"transparent"}} onClick={(e)=>setPage(+e.target.innerText)}>{page}</button>
                    <button style={{color:theme ? "white" : "rgb(0,89,80)",backgroundColor:"transparent",border:'0px',fontSize:"14px",fontWeight:"600",cursor:"pointer"}} onClick={(e)=>setPage(+e.target.innerText)}>{page+1}</button>
                </div>
                }
            </h3>
            <button onClick={()=>setPage(page+1)} disabled={page===Math.ceil(total/20 )? true : false} style={{border:"0px",backgroundColor:"transparent",display:"flex",alignItems:"baseline",marginTop:"0px",color:theme ? "white" : 'rgb(0,89,80)',cursor:"pointer"}}>
                <MdKeyboardArrowRight style={{fontSize:"22px",cursor:"pointer"}} />
            </button>
       </div>
    </div>
}
export default Courses