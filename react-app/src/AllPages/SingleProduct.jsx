import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import courseBackground from "../Images/CourseBackground.jpg"
import { MdGTranslate, MdInfoOutline, MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp, MdMoreVert, MdOndemandVideo, MdOutlineFileDownload, MdOutlineInstallDesktop, MdOutlineLightbulb, MdOutlineMoneyOff, MdOutlineStar, MdOutlineStarHalf, MdOutlineStarOutline, MdOutlineStickyNote2, MdOutlineVideocam, MdWifi } from "react-icons/md";
import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"
import { CiBookmarkCheck } from "react-icons/ci";
import { BiTrophy } from "react-icons/bi";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'


function SingleProduct() {

    const id = useParams()
    const [data, setData] = useState({});
    const { theme } = useContext(ThemeContext);
    const [showMore, SetShowMore] = useState(false)


    useEffect(() => {
        fetch(`http://localhost:8080/products/${id.id}`)
            .then((res) => res.json())
            .then((data1) => {
                setData(data1);
            })
    }, [])

    return <div style={{
        // border:"1px solid red",
        width: "100%",
    }}>
        <div style={{
            backgroundImage: `url(${courseBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // backgroundColor:"black",
            height: "500px",
            width: "100%",
            // marginTop:"40px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",

        }}>
            <div style={{ height: "100%", width: "65%", display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(0,0,0,0.8)" }}>
                <div style={{ width: '80%', marginTop: "-30px" }}>
                    <h1 style={{ fontSize: "40px", textAlign: 'start', marginTop: "60px", color: "white" }}>{data.Title}</h1>
                    <div style={{ width: "98%", margin: "-10px 0px 0px 0px", border: "1px solid rgb(0,208,180" }}></div>
                    <p style={{ marginTop: "10px", fontSize: "20px", textAlign: "start", color: 'white', fontWeight: "500" }}>{data.detials}</p>
                    <label style={{ fontSize: "15px", fontWeight: "500", display: "flex", alignItems: "center", gap: "10px", color: "rgb(0,208,180)", margin: "-10px 0px -20px 0px" }}>
                        {data.ratings}
                        <div style={{ marginTop: '4px' }}>
                            {
                                (+data.ratings) === 5 ?
                                    <>
                                        {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                    </> :
                                    (+Math.floor(data.ratings)) === 4 ?
                                        <>
                                            {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                            <MdOutlineStarHalf />
                                        </> :
                                        (+Math.floor(data.ratings)) === 3 ?
                                            <>
                                                {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                <MdOutlineStarHalf />
                                                <MdOutlineStarOutline />
                                            </> :
                                            (+Math.floor(data.ratings)) === 2 ?
                                                <>
                                                    {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                    <MdOutlineStarHalf />
                                                    <MdOutlineStarOutline />
                                                    <MdOutlineStarOutline />
                                                </> :
                                                (+Math.floor(data.ratings)) === 1 ?
                                                    <>
                                                        {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                        <MdOutlineStarHalf />
                                                        <MdOutlineStarOutline />
                                                        <MdOutlineStarOutline />
                                                        <MdOutlineStarOutline />
                                                    </> :
                                                    <>
                                                        <MdOutlineStarOutline />
                                                        <MdOutlineStarOutline />
                                                        <MdOutlineStarOutline />
                                                        <MdOutlineStarOutline />
                                                        <MdOutlineStarOutline />
                                                    </>
                            }

                        </div>
                        <p style={{ fontSize: "14px", color: "white" }}>
                            {data.ratingCount}
                        </p>
                    </label>
                    <p style={{ fontSize: "14px", textAlign: "start", color: "rgba(230,230,230,0.7)" }}>
                        {data.duration} | {data.lecture} | {data.level}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "20px", color: "white" }}>
                        <p style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "14px", marginTop: "30px", textAlign: "start" }}>
                            <MdInfoOutline />
                            <label >Last updated 12/2021</label>
                        </p>
                        <p style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "14px", marginTop: "25px", textAlign: "start" }}>|</p>
                        <p style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "14px", marginTop: "30px", textAlign: "start" }}>
                            <MdGTranslate />
                            <label >English</label>
                        </p>
                    </div>
                    <div style={{ height: "80px", display: 'flex', alignItems: 'end', gap: "35px" }}>
                        <button style={{cursor:"pointer",padding: "15px 20px", backgroundColor: theme ? "rgb(0,208,180)" : 'rgb(0,89,80)', color: theme ? "rgb(0,89,80) " : "white", borderRadius: "15px", border: "0px", fontWeight: "600" }}>
                            Buy Course
                        </button>
                        <div style={{ display: "flex", alignItems: 'center', gap: "15px", color: "white" }}>
                            <h3 style={{ marginBottom: "13px" }}>
                                ₹529
                            </h3>
                            <p style={{ marginBottom: "12px", }}>
                                <del style={{ color: "rgba(255,255,255,0.8)" }}>₹3,399</del>
                            </p>
                            <p style={{ marginBottom: "12px" }}>
                                84% off
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ height: "100%", width: "35%", backgroundColor: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                <div style={{ width: "80%" }}>
                    <iframe width="450" height="255" src="https://www.youtube.com/embed/wgYbksLbaqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

                    </iframe>
                </div>
            </div>
        </div>
        <div style={{
            height: "400px",
            width: "60%",
            // border:"1px solid red",
            margin: "auto"

        }}>
            <h1 style={{ textAlign: 'start', marginTop: "50px" }}>What you'll learn</h1>
            <div style={{ width: "30%", margin: "-20px 0px 0px 0px", border: "1px solid rgb(0,208,180" }}></div>
            <div style={{ height: "73%", display: "flex", justifyContent: "space-between" }}>
                <div style={{ marginTop: "15px" }}>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <CiBookmarkCheck />
                        Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.
                    </p>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <CiBookmarkCheck />
                        After the course you will be able to build ANY website you want.
                    </p>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <CiBookmarkCheck />
                        Work as a freelance web developer.                    </p>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <CiBookmarkCheck />
                        Master backend development with Node
                    </p>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <CiBookmarkCheck />
                        Learn the latest technologies, including Javascript, React, Node and even Web3 development.
                    </p>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <CiBookmarkCheck />
                        Build fully-fledged websites and web apps for your startup or business.
                    </p>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <CiBookmarkCheck />
                        Master frontend development with React
                    </p>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <CiBookmarkCheck />
                        Learn professional developer best practices.
                    </p>
                </div>
            </div>
        </div>
        <div style={{
            height: "350px",
            width: "60%",
            // border:"1px solid red",
            margin: "auto"

        }}>
            <h1 style={{ textAlign: 'start', marginTop: "50px" }}>This course includes</h1>
            <div style={{ width: "35%", margin: "-20px 0px 0px 0px", border: "1px solid rgb(0,208,180" }}></div>
            <div style={{ height: "73%", display: "flex", justifyContent: "space-between" }}>
                <div style={{ marginTop: "15px" }}>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <MdOutlineVideocam />
                        65 hours on-demand video
                    </p>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <MdOutlineFileDownload />
                        81 downloadable resources
                    </p>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <MdOndemandVideo />
                        Access on mobile and TV
                    </p>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <MdOutlineStickyNote2 />
                        74 articles
                    </p>
                    <p style={{ display: "flex", alignItems: 'center', gap: "5px" }}>
                        <MdKeyboardArrowLeft style={{ marginLeft: "-3px" }} />
                        <MdKeyboardArrowRight style={{ marginLeft: "-12px" }} />
                        7 coding exercises
                    </p>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <BiTrophy />
                        Certificate of completion
                    </p>
                </div>
            </div>
        </div>
        <div style={{
            height: "280px",
            width: "60%",
            margin: "auto",
            // border:"1px solid red"

        }}>
            <h1 style={{ textAlign: 'start' }}>Requirements</h1>
            <div style={{ width: "25%", margin: "-20px 0px 0px 0px", border: "1px solid rgb(0,208,180" }}></div>
            <div style={{ height: "73%", display: "flex", justifyContent: "space-between" }}>
                <div style={{ marginTop: "15px" }}>
                    <p style={{ display: "flex", alignItems: 'center', gap: "5px" }}>
                        <MdKeyboardArrowLeft style={{ marginLeft: "-3px" }} />
                        <MdKeyboardArrowRight style={{ marginLeft: "-12px" }} />
                        No programming experience needed - I'll teach you everything you need to know
                    </p>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <MdWifi />
                        A computer with access to the internet
                    </p>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <MdOutlineMoneyOff />
                        No paid software required
                    </p>
                    <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                        <MdOutlineInstallDesktop />
                        I'll walk you through, step-by-step how to get all the software installed and set up
                    </p>
                </div>
            </div>
        </div>
        <div style={{
            // height:"500px",
            width: "60%",
            margin: "auto",
            // border:"1px solid red",
            marginTop: "-20px",

        }}>
            <h1 style={{ textAlign: 'start' }}>Course Content</h1>
            <div style={{ width: "28%", margin: "-20px 0px 0px 0px", border: "1px solid rgb(0,208,180" }}></div>
            <p style={{ fontSize: "14px", textAlign: "start" }}>
                {data.duration} | {data.lecture} | {data.level}
            </p>
            <div>
                <Accordion defaultIndex={[0]} allowMultiple style={{ textAlign: "start" }}>
                    <AccordionItem style={{ border: theme ? "1px solid rgba(0,208,180,0.3)" : "1px solid rgba(200,200,200,0.8)", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}>
                        <h2>
                            <AccordionButton style={{ border: "0px", gap: "10px", backgroundColor: "transparent" }}>
                                <AccordionIcon style={{ fontSize: "20px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }} />
                                <Box textAlign='left' flex={1} style={{ fontSize: "15px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }}>
                                    Front-End Web Development
                                </Box>
                                <p style={{ color: theme ? "white" : "rgb(150,150,150,0.9)", marginRight: "10px" }}>
                                    9 lectures | 37min
                                </p>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={20} ml={30}>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    What You'll Get in The Course
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    03:08
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOutlineStickyNote2 />
                                    Download the Course Syllabus
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    00:12
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOutlineStickyNote2 />
                                    Download the 12 Rules to Learn to Code eBook [Latest Edition]
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    00:42
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOutlineStickyNote2 />
                                    Download the Required Software
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    00:43
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    How Does the Internet Actully Work ?
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    05:27
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    How Do Websites Actully Work ?
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    08:22
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    How to Get the Most Out of the Course
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    09:33
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    How to Get Help When You're Stuck
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    06:39
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOutlineStickyNote2 />
                                    Pathfinder
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    02:20
                                </p>
                            </p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem style={{ border: theme ? "1px solid rgba(0,208,180,0.3)" : "1px solid rgba(200,200,200,0.8)" }}>
                        <h2>
                            <AccordionButton style={{ border: "0px", gap: "10px", backgroundColor: "transparent" }}>
                                <AccordionIcon style={{ fontSize: "20px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }} />
                                <Box textAlign='left' flex={1} style={{ fontSize: "15px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }}>
                                    Introduction to HTML
                                </Box>
                                <p style={{ color: theme ? "white" : "rgb(150,150,150,0.9)", marginRight: "10px" }}>
                                    8 lectures | 51min
                                </p>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={20} ml={30}>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOutlineStickyNote2 />
                                    A Note About 2023 Course Updates
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    01:56
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    What is HTML
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    04:18
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    How to Download the Course Resources
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    02:43
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    HTML Heading Elements
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    14:24
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    HTML Paragraph Elements
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    08:40
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    Self Closing Tags
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    11:40
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    [Project] Movie Ranking
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    05:43
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                </div>
                                How to Ace this Course
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    01:24
                                </p>


                            </p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem style={{ border: theme ? "1px solid rgba(0,208,180,0.3)" : "1px solid rgba(200,200,200,0.8)" }}>
                        <h2>
                            <AccordionButton style={{ border: "0px", gap: "10px", backgroundColor: "transparent" }}>
                                <AccordionIcon style={{ fontSize: "20px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }} />
                                <Box textAlign='left' flex={1} style={{ fontSize: "15px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }}>
                                    Intermediate HTML
                                </Box>
                                <p style={{ color: theme ? "white" : "rgb(150,150,150,0.9)", marginRight: "10px" }}>
                                    7 lectures | 51min
                                </p>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={20} ml={30}>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    The List Element
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    10:32
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    Nesting and Indentation
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    14:09
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    Anchor Elements
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    10:45
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    Image Elements
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    08:17
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    [Project] Birthday Invite
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    04:01
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOndemandVideo />
                                    Tip from Angela - Habit Building with the Calendar Trick
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    02:52
                                </p>
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                                    <MdOutlineStickyNote2 />
                                    Get Monthly Tips and Tools to Level Up as a Developer
                                </div>
                                <p style={{ fontSize: "13px", color: "rgba(150, 150, 150, 0.9)", marginRight: "15px" }}>
                                    00:35
                                </p>
                            </p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem style={{ border: theme ? "1px solid rgba(0,208,180,0.3)" : "1px solid rgba(200,200,200,0.8)" }}>
                        <h2>
                            <AccordionButton style={{ border: "0px", gap: "10px", backgroundColor: "transparent" }}>
                                <AccordionIcon style={{ fontSize: "20px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }} />
                                <Box textAlign='left' flex={1} style={{ fontSize: "15px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }}>
                                    Multi-Page Websites
                                </Box>
                                <p style={{ color: theme ? "white" : "rgb(150,150,150,0.9)", marginRight: "10px" }}>
                                    7 lectures | 1hr 10min
                                </p>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={20} ml={30}>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Computer File Paths
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                What are Webpages?
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                The HTML Boilerplate
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                [Project] Portfolio Website
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                How to Host Your Website for Free with GitHub
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Introduction to Capstone Projects
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOutlineStickyNote2 />
                                Instructions for Capstone Project 1 - Online Resume
                            </p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem style={{ border: theme ? "1px solid rgba(0,208,180,0.3)" : "1px solid rgba(200,200,200,0.8)" }}>
                        <h2>
                            <AccordionButton style={{ border: "0px", gap: "10px", backgroundColor: "transparent" }}>
                                <AccordionIcon style={{ fontSize: "20px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }} />
                                <Box textAlign='left' flex={1} style={{ fontSize: "15px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }}>
                                    Introduction to CSS
                                </Box>
                                <p style={{ color: theme ? "white" : "rgb(150,150,150,0.9)", marginRight: "10px" }}>
                                    6 lectures | 59min
                                </p>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={20} ml={30}>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Why do we need CSS ?
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                How to add CSS
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOutlineLightbulb />
                                CSS Quiz
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                CSS Selectors
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                [Project] Colour Vocab Website
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Tip from Angela - Dealing with Distractions
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOutlineStickyNote2 />
                                Join the Student Community
                            </p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem style={{ border: theme ? "1px solid rgba(0,208,180,0.3)" : "1px solid rgba(200,200,200,0.8)" }}>
                        <h2>
                            <AccordionButton style={{ border: "0px", gap: "10px", backgroundColor: "transparent" }}>
                                <AccordionIcon style={{ fontSize: "20px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }} />
                                <Box textAlign='left' flex={1} style={{ fontSize: "15px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }}>
                                    CSS Properties
                                </Box>
                                <p style={{ color: theme ? "white" : "rgb(150,150,150,0.9)", marginRight: "10px" }}>
                                    5 lectures | 1hr 9min
                                </p>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={20} ml={30}>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                CSS Colours
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Font Properties
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Inspecting CSS
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                The CSS Box Model - Margin, Padding and Border
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                [Project] Motivational Poster Website
                            </p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem style={{ border: theme ? "1px solid rgba(0,208,180,0.3)" : "1px solid rgba(200,200,200,0.8)" }}>
                        <h2>
                            <AccordionButton style={{ border: "0px", gap: "10px", backgroundColor: "transparent" }}>
                                <AccordionIcon style={{ fontSize: "20px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }} />
                                <Box textAlign='left' flex={1} style={{ fontSize: "15px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }}>
                                    Intermediate CSS
                                </Box>
                                <p style={{ color: theme ? "white" : "rgb(150,150,150,0.9)", marginRight: "10px" }}>
                                    5 lectures | 1hr 33min
                                </p>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={20} ml={30}>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                The Cascade - Specificity and Inheritance
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Combining CSS Selectors
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                CSS Positioning
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                [Project] CSS Flag
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Tip from Angela - Nothing Easy is Worth Doing!
                            </p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem style={{ border: theme ? "1px solid rgba(0,208,180,0.3)" : "1px solid rgba(200,200,200,0.8)" }}>
                        <h2>
                            <AccordionButton style={{ border: "0px", gap: "10px", backgroundColor: "transparent" }}>
                                <AccordionIcon style={{ fontSize: "20px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }} />
                                <Box textAlign='left' flex={1} style={{ fontSize: "15px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }}>
                                    Advanced CSS
                                </Box>
                                <p style={{ color: theme ? "white" : "rgb(150,150,150,0.9)", marginRight: "10px" }}>
                                    6 lectures | 1hr 4min
                                </p>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={20} ml={30}>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                CSS Display
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                CSS Float
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                How to Create Responsive Websites
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Media Queries
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                [Project] Web Design Agency Website
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Tip from Angela - How to Deal with Procrastination
                            </p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem style={{ border: theme ? "1px solid rgba(0,208,180,0.3)" : "1px solid rgba(200,200,200,0.8)" }}>
                        <h2>
                            <AccordionButton style={{ border: "0px", gap: "10px", backgroundColor: "transparent" }}>
                                <AccordionIcon style={{ fontSize: "20px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }} />
                                <Box textAlign='left' flex={1} style={{ fontSize: "15px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }}>
                                    Flexbox
                                </Box>
                                <p style={{ color: theme ? "white" : "rgb(150,150,150,0.9)", marginRight: "10px" }}>
                                    6 lectures | 1hr 25min
                                </p>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={20} ml={30}>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Display: Flex
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Flex Direction
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Flex Layout
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Flex Sizing
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                [Project] Pricing Table
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Tip from Angela - Building a Programming Habit
                            </p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem style={{ border: theme ? "1px solid rgba(0,208,180,0.3)" : "1px solid rgba(200,200,200,0.8)", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px" }}>
                        <h2>
                            <AccordionButton style={{ border: "0px", gap: "10px", backgroundColor: "transparent" }}>
                                <AccordionIcon style={{ fontSize: "20px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }} />
                                <Box textAlign='left' flex={1} style={{ fontSize: "15px", fontWeight: "600", color: theme ? "white" : "rgb(0,89,80)" }}>
                                    Grid
                                </Box>
                                <p style={{ color: theme ? "white" : "rgb(150,150,150,0.9)", marginRight: "10px" }}>
                                    4 lectures | 1hr 11min
                                </p>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={20} ml={30}>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Display: Grid
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Grid Sizing
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                Grid Placement
                            </p>
                            <p style={{ display: "flex", alignItems: 'center', gap: "10px" }}>
                                <MdOndemandVideo />
                                [Project] Mondrian Painting
                            </p>
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>

                <button style={{ fontSize: "15px", marginTop: "30px", padding: '15px 50px', fontWeight: "600", color: theme ? "rgb(0,89,80)" : "white", backgroundColor: theme ? "rgb(0,208,180)" : "rgb(0,89,80)", borderRadius: "15px", border: "0px" }}>
                    More Sections
                </button>
            </div>
        </div>
        <div style={{
            height: showMore ? "1250px" : "190px",
            width: "60%",
            margin: "auto",
            // border:"1px solid red",
            transition: "height 0.6s",
            marginTop: "70px"

        }}>
            <h1 style={{ textAlign: 'start' }}>Description</h1>
            <div style={{ width: "21%", margin: "-20px 0px 0px 0px", border: "1px solid rgb(0,208,180" }}></div>
            <div style={{ height: "73%", textAlign: "start" }}>
                <p>
                    Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of Udemy! At 65+ hours, this Web Development course is without a doubt the most comprehensive web development course available online.
                    Even if you have zero programming experience, this course will take you from beginner to mastery{showMore ? `. Here's why:` : `...`}
                </p>
                <p style={{ display: showMore ? "flex" : "none", transition: "display 5s" }}>
                    At 65+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery. Here's why:

                    The course is taught by the lead instructor at the App Brewery, London's leading in-person programming bootcamp.

                    The course has been updated to be 2023 ready and you'll be learning the latest tools and technologies used at large companies such as Apple, Google and Netflix.

                    This course doesn't cut any corners, there are beautiful animated explanation videos and tens of real-world projects which you will get to build.

                    The curriculum was developed over a period of four years, with comprehensive student testing and feedback.

                    We've taught over a million students how to code and many have gone on to change their lives by becoming professional developers or starting their own tech startup.

                    You'll save yourself over $12,000 by enrolling, but still get access to the same teaching materials and learn from the same instructor and curriculum as our in-person programming bootcamp.

                    The course is constantly updated with new content, with new projects and modules determined by students - that's you!



                    We'll take you step-by-step through engaging video tutorials and teach you everything you need to know to succeed as a web developer.

                    The course includes over 65 hours of HD video tutorials and builds your programming knowledge while making real-world websites and web apps.



                    Throughout this comprehensive course, we cover a massive amount of tools and technologies, including:

                    Front-End Web Development

                    HTML 5

                    CSS 3

                    Flexbox

                    Grid

                    Bootstrap 5

                    Javascript ES6

                    DOM Manipulation

                    jQuery

                    Bash Command Line

                    Git, GitHub and Version Control

                    Backend Web Development

                    Node.js

                    NPM

                    Express.js

                    EJS

                    REST

                    APIs

                    Databases

                    SQL

                    MongoDB

                    Mongoose

                    Authentication

                    Firebase

                    React.js

                    React Hooks

                    Web Design

                    Deployment with GitHub Pages, Heroku and MongoDB Atlas

                    Web3 Development on the Internet Computer

                    Blockchain technology

                    Token contract development

                    NFT minting, buying and selling logic

                    By the end of this course, you will be fluently programming and be ready to make any website you can dream of.

                    You'll also build a portfolio of over 32+ websites that you can show off to any potential employer.

                    Sign up today, and look forward to:

                    Animated Video Lectures

                    Code Challenges and Coding Exercises

                    Beautiful Real-World Projects

                    Quizzes & Practice Tests

                    Downloadable Programming Resources and Cheatsheets

                    Our best selling 12 Rules to Learn to Code eBook

                    $12,000+ worth of web development bootcamp course materials and course curriculum



                    Don't just take my word for it, check out what existing students have to say about the course:

                    "Angela is just incredible, awesome and just fantastic in this course. I've never had such an instructor; detailed in every aspect of the course, gives precise explanations, gives you the anxiety to learn etc. She's got that ability to make fun while explaining things for better understanding. I really love this course." - Ekeu MonkamUlrich

                    "Angela is very thorough without ever being boring. I've taken MANY online courses in my life including my Bachelors and Masters degrees. She is by far the best instructor I've ever had. This course is packed with thousands of dollars worth of great instruction, and paced well enough for anyone to pick coding up and run with it- Thank you!" - J Carlucci

                    "Love the way Angela explains things. Easy to follow and full of logic. I can say she must have spent a lot of energy creating this great course. Thank you and I recommend it to all who's interested in coding!" - Yiqing Zheng

                    "So far (on my third day) this course has taught me more than I was able to learn in multiple other programming courses. This course is clearly outlined and builds upon itself gradually in an easy to understand way." - Normal Ramsey

                    "This course will take you from beginner to intermediate level for real. If you don't know how to put together the pieces of web development this is what you're looking for. Angela explains in an amazing way by creating projects all the way during this course, explaining the concepts in real practice. Thank you very much, Angela. I will always consider you my mentor. Look forward to taking more courses with you." - Moises Dionisio Cruz

                    "An amazing course, perfect for absolute beginners at the start of their coding journey! Angela is an amazing tutor and can explain in the most simple and comprehensible way even complex coding notions. Learning web development cannot get any more fun!" - Zoe Moyssoglou

                    "It's a different approach to teaching Web Development. I like that you are given everything possible to succeed from the onset." - Ronick Thomas

                    The tutor is simply AMAZING, by far the best tutor I have ever had. I would give her 10 stars out of 5. She is not just punching the code and talking to herself, but she is actually explaining things. She keeps on giving really useful hints and she will give you a great load of other references. I always knew what I was doing and why I was doing it. All the extra challenges have just made me remember and understand things better. - Peter Dlugos





                    REMEMBER… I'm so confident that you'll love this course that we're offering a FULL money-back guarantee for 30 days! So it's a complete no-brainer, sign up today with ZERO risk and EVERYTHING to gain.

                    So what are you waiting for? Click the buy now button and join the world's highest-rated web development course.

                    Who this course is for:
                    If you want to learn to code through building fun and useful projects, then take this course.
                    If you want to start your own startup by building your own websites and web apps.
                    If you are a seasoned programmer, then take this course to to get up to speed quickly with the latest frameworks and NodeJS
                    If you want to take ONE COURSE and learn everything you need to know about web development, take this course
                </p>
                <div style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                    {showMore ?
                        <button style={{ backgroundColor: "transparent", border: "0px", fontSize: "15px", fontWeight: "600", color: "rgb(0,208,180)", cursor: "pointer" }} onClick={() => SetShowMore(!showMore)}>
                            Show Less <MdKeyboardArrowUp style={{ marginBottom: "-5px", fontSize: "20px", fontWeight: "600" }} />
                        </button>
                        :
                        <button style={{ backgroundColor: "transparent", border: "0px", fontSize: "15px", fontWeight: "600", color: "rgb(0,208,180)", cursor: "pointer" }} onClick={() => SetShowMore(!showMore)}>
                            Show more <MdKeyboardArrowDown style={{ marginBottom: "-5px", fontSize: "20px", fontWeight: "600" }} />
                        </button>
                    }
                </div>
            </div>
        </div>
        <div style={{
            height: "550px",
            width: "60%",
            margin: "auto",
            // border:"1px solid red",
            marginTop: "50px"

        }}>
            <h1 style={{ textAlign: 'start' }}>Course Reviews</h1>
            <div style={{ width: "28%", margin: "-20px 0px 0px 0px", border: "1px solid rgb(0,208,180" }}></div>
            <div style={{ height: "73%", textAlign: "start" }}>
                <label style={{ fontSize: "15px", fontWeight: "500", display: "flex", alignItems: "center", gap: "10px", color: "rgb(0,208,180)", margin: "-10px 0px 0px 0px" }}>
                    {data.ratings}
                    <div style={{ marginTop: '4px' }}>
                        {
                            (+data.ratings) === 5 ?
                                <>
                                    {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                </> :
                                (+Math.floor(data.ratings)) === 4 ?
                                    <>
                                        {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                        <MdOutlineStarHalf />
                                    </> :
                                    (+Math.floor(data.ratings)) === 3 ?
                                        <>
                                            {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                            <MdOutlineStarHalf />
                                            <MdOutlineStarOutline />
                                        </> :
                                        (+Math.floor(data.ratings)) === 2 ?
                                            <>
                                                {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                <MdOutlineStarHalf />
                                                <MdOutlineStarOutline />
                                                <MdOutlineStarOutline />
                                            </> :
                                            (+Math.floor(data.ratings)) === 1 ?
                                                <>
                                                    {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                    <MdOutlineStarHalf />
                                                    <MdOutlineStarOutline />
                                                    <MdOutlineStarOutline />
                                                    <MdOutlineStarOutline />
                                                </> :
                                                <>
                                                    <MdOutlineStarOutline />
                                                    <MdOutlineStarOutline />
                                                    <MdOutlineStarOutline />
                                                    <MdOutlineStarOutline />
                                                    <MdOutlineStarOutline />
                                                </>
                        }

                    </div>
                    <p style={{ fontSize: "14px", color:"rgb(0,208,180)" }}>
                        {data.ratingCount}
                    </p>
                </label>
                <div style={{
                    display: "grid",
                    // border:"1px solid red",
                    height: "100%",
                    gridTemplateColumns: "repeat(2,1fr)",
                    gap: "20px",
                    marginTop: "25px",
                    width: "80%"
                }}>
                    <div style={{
                        border: "2px solid rgb(0,208,180)",
                        height: "100%",
                        borderRadius: "15px"
                    }}>
                        <div style={{ width: "100%", height: "30%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "20%", height: "100%" }}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: theme ? "rgb(0,89,80)" : "white", fontWeight: "600", paddingBottom: "1px", width: "40px", borderRadius: "20px", backgroundColor: theme ? "rgb(0,208,180)" : "rgb(0,89,80)", height: "40px" }}>
                                    RP
                                </div>
                            </div>
                            <div style={{ width: "70%", height: "100%" }}>
                                <h4 style={{ marginTop: "8px" }}>Rahul Rambahaddur P.</h4>
                                <label style={{ fontSize: "12px", fontWeight: "500", display: "flex", alignItems: "center", gap: "5px", color: "rgb(0,208,180)", margin: "-21px 0px 0px 0px" }}>
                                    {data.ratings}
                                    <div style={{ marginTop: '4px' }}>
                                        {
                                            (+data.ratings) === 5 ?
                                                <>
                                                    {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                </> :
                                                (+Math.floor(data.ratings)) === 4 ?
                                                    <>
                                                        {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                        <MdOutlineStarHalf />
                                                    </> :
                                                    (+Math.floor(data.ratings)) === 3 ?
                                                        <>
                                                            {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                            <MdOutlineStarHalf />
                                                            <MdOutlineStarOutline />
                                                        </> :
                                                        (+Math.floor(data.ratings)) === 2 ?
                                                            <>
                                                                {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                                <MdOutlineStarHalf />
                                                                <MdOutlineStarOutline />
                                                                <MdOutlineStarOutline />
                                                            </> :
                                                            (+Math.floor(data.ratings)) === 1 ?
                                                                <>
                                                                    {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                                    <MdOutlineStarHalf />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                </> :
                                                                <>
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                </>
                                        }

                                    </div>
                                </label>

                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "10%", height: "100%", fontSize: "25px" }}>
                                <MdMoreVert cursor={"pointer"} />
                            </div>
                        </div>
                        <div style={{ width: "95%", margin: "auto", border: "1px solid rgb(0,208,180" }}></div>
                        <div style={{ height: '50%', width: "90%", margin: "auto", fontSize: "14px", display: "flex", alignItems: "center" }}>

                            The whole journey was great I almost took around 4-5 months to complete the course She is really a great Instructor I love her courses Experience was great

                        </div>
                        <div style={{ fontSize: "12px", fontWeight: "600", height: "20%", width: "60%", display: "flex", justifyContent: 'center', alignItems: "center", gap: "10px" }}>
                            Helpful ?
                            <BsHandThumbsUp style={{ fontSize: "15px" }} />
                            <BsHandThumbsDown style={{ textTransform: "scaleX(-1)", "webkitTransform": "scaleX(-1)", fontSize: "15px" }} />
                        </div>

                    </div>
                    <div style={{
                        border: "2px solid rgb(0,208,180)",
                        height: "100%",
                        borderRadius: "15px"
                    }}>
                        <div style={{ width: "100%", height: "30%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "20%", height: "100%" }}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: theme ? "rgb(0,89,80)" : "white", fontWeight: "600", paddingBottom: "1px", width: "40px", borderRadius: "20px", backgroundColor: theme ? "rgb(0,208,180)" : "rgb(0,89,80)", height: "40px", }}>
                                    AA
                                </div>
                            </div>
                            <div style={{ width: "70%", height: "100%" }}>
                                <h4 style={{ marginTop: "8px" }}>Abdurashid A.</h4>
                                <label style={{ fontSize: "12px", fontWeight: "500", display: "flex", alignItems: "center", gap: "5px", color: "rgb(0,208,180)", margin: "-21px 0px 0px 0px" }}>
                                    {data.ratings}
                                    <div style={{ marginTop: '4px' }}>
                                        {
                                            (+data.ratings) === 5 ?
                                                <>
                                                    {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                </> :
                                                (+Math.floor(data.ratings)) === 4 ?
                                                    <>
                                                        {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                        <MdOutlineStarHalf />
                                                    </> :
                                                    (+Math.floor(data.ratings)) === 3 ?
                                                        <>
                                                            {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                            <MdOutlineStarHalf />
                                                            <MdOutlineStarOutline />
                                                        </> :
                                                        (+Math.floor(data.ratings)) === 2 ?
                                                            <>
                                                                {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                                <MdOutlineStarHalf />
                                                                <MdOutlineStarOutline />
                                                                <MdOutlineStarOutline />
                                                            </> :
                                                            (+Math.floor(data.ratings)) === 1 ?
                                                                <>
                                                                    {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                                    <MdOutlineStarHalf />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                </> :
                                                                <>
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                </>
                                        }

                                    </div>
                                </label>

                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "10%", height: "100%", fontSize: "25px" }}>
                                <MdMoreVert cursor={"pointer"} />
                            </div>
                        </div>
                        <div style={{ width: "95%", margin: "auto", border: "1px solid rgb(0,208,180" }}></div>
                        <div style={{ height: '50%', width: "90%", margin: "auto", fontSize: "14px", display: "flex", alignItems: "center" }}>

                            the best course ever. the way she explain things is completely comprehensible. only minus would be some outdated content in react part, it is happening in every courses by time.
                        </div>
                        <div style={{ fontSize: "12px", fontWeight: "600", height: "20%", width: "60%", display: "flex", justifyContent: 'center', alignItems: "center", gap: "10px" }}>
                            Helpful ?
                            <BsHandThumbsUp style={{ fontSize: "15px" }} />
                            <BsHandThumbsDown style={{ textTransform: "scaleX(-1)", "webkitTransform": "scaleX(-1)", fontSize: "15px" }} />
                        </div>
                    </div>
                    <div style={{
                        border: "2px solid rgb(0,208,180)",
                        height: "100%",
                        borderRadius: "15px"
                    }}>
                        <div style={{ width: "100%", height: "30%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "20%", height: "100%" }}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: theme ? "rgb(0,89,80)" : "white", fontWeight: "600", paddingBottom: "1px", width: "40px", borderRadius: "20px", backgroundColor: theme ? "rgb(0,208,180)" : "rgb(0,89,80)", height: "40px" }}>
                                    ZB
                                </div>
                            </div>
                            <div style={{ width: "70%", height: "100%" }}>
                                <h4 style={{ marginTop: "8px" }}>Zaid B.</h4>
                                <label style={{ fontSize: "12px", fontWeight: "500", display: "flex", alignItems: "center", gap: "5px", color: "rgb(0,208,180)", margin: "-21px 0px 0px 0px" }}>
                                    {data.ratings}
                                    <div style={{ marginTop: '4px' }}>
                                        {
                                            (+data.ratings) === 5 ?
                                                <>
                                                    {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                </> :
                                                (+Math.floor(data.ratings)) === 4 ?
                                                    <>
                                                        {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                        <MdOutlineStarHalf />
                                                    </> :
                                                    (+Math.floor(data.ratings)) === 3 ?
                                                        <>
                                                            {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                            <MdOutlineStarHalf />
                                                            <MdOutlineStarOutline />
                                                        </> :
                                                        (+Math.floor(data.ratings)) === 2 ?
                                                            <>
                                                                {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                                <MdOutlineStarHalf />
                                                                <MdOutlineStarOutline />
                                                                <MdOutlineStarOutline />
                                                            </> :
                                                            (+Math.floor(data.ratings)) === 1 ?
                                                                <>
                                                                    {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                                    <MdOutlineStarHalf />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                </> :
                                                                <>
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                </>
                                        }

                                    </div>
                                </label>

                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "10%", height: "100%", fontSize: "25px" }}>
                                <MdMoreVert cursor={"pointer"} />
                            </div>
                        </div>
                        <div style={{ width: "95%", margin: "auto", border: "1px solid rgb(0,208,180" }}></div>
                        <div style={{ height: '50%', width: "90%", margin: "auto", fontSize: "14px", display: "flex", alignItems: "center" }}>

                            Had an Amazing Experience with Angela Mam,she's a great teacher and has an unique thinking how to deliver the subject in an interesting manner.
                        </div>
                        <div style={{ fontSize: "12px", fontWeight: "600", height: "20%", width: "60%", display: "flex", justifyContent: 'center', alignItems: "center", gap: "10px" }}>
                            Helpful ?
                            <BsHandThumbsUp style={{ fontSize: "15px" }} />
                            <BsHandThumbsDown style={{ textTransform: "scaleX(-1)", "webkitTransform": "scaleX(-1)", fontSize: "15px" }} />
                        </div>
                    </div>
                    <div style={{
                        border: "2px solid rgb(0,208,180)",
                        height: "100%",
                        borderRadius: "15px"
                    }}>
                        <div style={{ width: "100%", height: "30%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "20%", height: "100%" }}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: theme ? "rgb(0,89,80)" : "white", fontWeight: "600", paddingBottom: "1px", width: "40px", borderRadius: "20px", backgroundColor: theme ? "rgb(0,208,180)" : "rgb(0,89,80)", height: "40px" }}>
                                    AD
                                </div>
                            </div>
                            <div style={{ width: "70%", height: "100%" }}>
                                <h4 style={{ marginTop: "8px" }}>Ajay Singh D.</h4>
                                <label style={{ fontSize: "12px", fontWeight: "500", display: "flex", alignItems: "center", gap: "5px", color: "rgb(0,208,180)", margin: "-21px 0px 0px 0px" }}>
                                    {data.ratings}
                                    <div style={{ marginTop: '4px' }}>
                                        {
                                            (+data.ratings) === 5 ?
                                                <>
                                                    {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                </> :
                                                (+Math.floor(data.ratings)) === 4 ?
                                                    <>
                                                        {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                        <MdOutlineStarHalf />
                                                    </> :
                                                    (+Math.floor(data.ratings)) === 3 ?
                                                        <>
                                                            {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                            <MdOutlineStarHalf />
                                                            <MdOutlineStarOutline />
                                                        </> :
                                                        (+Math.floor(data.ratings)) === 2 ?
                                                            <>
                                                                {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                                <MdOutlineStarHalf />
                                                                <MdOutlineStarOutline />
                                                                <MdOutlineStarOutline />
                                                            </> :
                                                            (+Math.floor(data.ratings)) === 1 ?
                                                                <>
                                                                    {new Array(+data.ratings.trim().split(".")[0]).fill().map(() => <MdOutlineStar />)}
                                                                    <MdOutlineStarHalf />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                </> :
                                                                <>
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                    <MdOutlineStarOutline />
                                                                </>
                                        }

                                    </div>
                                </label>

                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "10%", height: "100%", fontSize: "25px" }}>
                                <MdMoreVert cursor={"pointer"} />
                            </div>
                        </div>
                        <div style={{ width: "95%", margin: "auto", border: "1px solid rgb(0,208,180" }}></div>
                        <div style={{ height: '50%', width: "90%", margin: "auto", fontSize: "14px", display: "flex", alignItems: "center" }}>

                            If it included a MERN stack project at the end or atleast some videos about how to link React with MongoDB, NodeJs it would be helpful.
                        </div>
                        <div style={{ fontSize: "12px", fontWeight: "600", height: "20%", width: "60%", display: "flex", justifyContent: 'center', alignItems: "center", gap: "10px" }}>
                            Helpful ?
                            <BsHandThumbsUp style={{ fontSize: "15px" }} />
                            <BsHandThumbsDown style={{ textTransform: "scaleX(-1)", "webkitTransform": "scaleX(-1)", fontSize: "15px" }} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div style={{textAlign:"start",height:"40px",width:"58%",margin:"auto"}}>
            <button style={{fontSize:"14px",fontWeight:"600",cursor:"pointer",padding:"10px 20px",borderRadius:"15px",backgroundColor:theme ? "rgb(0,200,180)" : "rgb(0,89,80)" ,color:theme?"rgb(0,89,80)":"white",border:"0px"}}>
                    Show All Reviews
            </button>
        </div>
    </div>
}

export default SingleProduct;