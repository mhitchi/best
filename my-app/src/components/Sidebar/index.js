import { Link } from "react-router-dom";
import "./index.scss";
import LogoSquare from "../../assets/img/logoSquare.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBookmark, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

import gsap from "gsap";
import { useRef, useEffect } from "react";
import chairIcon from "../../assets/icons/chair_icon.png";
import chair02Icon from "../../assets/icons/chair_02_icon.png";
import cubeIcon from "../../assets/icons/cube_icon.png";
import eyesIcon from "../../assets/icons/eyes_icon.png";
import starIcon from "../../assets/icons/star_icon.png";
import thumbsUpIcon from "../../assets/icons/thumbs_up_icon.png"

const Sidebar = () => {
    return (
        <>
        <div className="nav-daddy">
            <div className='nav-bar'>
                <Link className='logo' to='/'>
                    {/* <img src={LogoSquare} alt="click to go home"/> */}
                    <div className="stage-cube-cont">
                        <div className="cube-spinner">
                            <div className="face face1">
                                <img src={LogoSquare} alt="Best studio logo"/> 
                            </div>
                            <div className="face face2">
                                <img src={LogoSquare} alt="Best studio logo"/>  
                            </div>
                            <div className="face face3">
                            <img src={LogoSquare} alt="Best studio logo"/>  
                            </div>
                            <div className="face face4">
                                <img src={LogoSquare} alt="Best studio logo"/>  
                            </div>
                            <div className="face face5">
                                <img src={LogoSquare} alt="Best studio logo"/>  
                            </div>
                            <div className="face face6">
                                <img src={LogoSquare} alt="Best studio logo"/>  
                            </div>
                            {/* <div className="face face1">
                                <img src={chair02Icon} alt="chair icon"/> 
                            </div>
                            <div className="face face2">
                                <img src={chairIcon} alt="chair icon"/> 
                            </div>
                            <div className="face face3">
                                <img src={cubeIcon} alt="cube icon"/> 
                            </div>
                            <div className="face face4">
                                <img src={eyesIcon} alt="eyes icon"/> 
                            </div>
                            <div className="face face5">
                                <img src={thumbsUpIcon} alt="thumbs up icon"/> 
                            </div>
                            <div className="face face6">
                                <img src={starIcon} alt="star icon"/> 
                            </div> */}
                        </div>
                    </div>
                </Link>
                <ul className="link-tree">
                    <li>
                        <Link exact="true" activeclassname="active" className='nav-link about' to="/WhatsBest">
                            <FontAwesomeIcon icon={faHome}/>
                            <p>What's Best</p>
                        </Link>
                    </li>
                    <li>
                        <Link exact="true" activeclassname="active" className='nav-link cases' to="/BestCase">
                            <FontAwesomeIcon icon={faBookmark}/>
                            <p>Best Case Scenarios</p>
                        </Link>
                    </li>
                    <li>
                        <Link exact="true" activeclassname="active" className='nav-link friends' to="/BestFriends">
                            <FontAwesomeIcon icon={faUser}/>
                            <p>Best Friends</p>
                        </Link>
                    </li>
                </ul>
            </div>
           
            <ul className="social">
                
                <li><a target="_blank" rel="noreferrer" href="#"><FontAwesomeIcon icon={faSquareInstagram}/></a></li>
                <li><a target="_blank" rel="noreferrer" href="#"><FontAwesomeIcon icon={faSquareEnvelope}/></a></li>
                {/* mailto: whatsbestdesign@gmail.com */}
                {/* insta link */}
            </ul>
        </div>
        </>
    )
}

export default Sidebar