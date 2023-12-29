import { Link } from "react-router-dom";
import "./index.scss";
import LogoSquare from "../../assets/img/logoSquare.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
 import chairIcon from "../../assets/icons/chair_icon.png";
 import eyesIcon from "../../assets/icons/eyes_icon.png";
 import thumbsUpIcon from "../../assets/icons/thumbs_up_icon.png"
gsap.registerPlugin(ScrollTrigger);

const Sidebar = () => {

    const [position, setPosition] = useState('0,0')

    const handleClick = () => {
        window.scrollTo(position)
    }

    const imgRef = useRef(null);
    useEffect( () => {
        const el = imgRef.current;
        gsap.fromTo(el, { rotation: 0 }, { rotation: 0, duration: 10, scrollTrigger: {
            trigger: el
        } })
    }, []);
    return (
        <>
        <div className="nav-daddy">
            <div className='nav-bar'>
                <Link className='logo' to='/'>
                    {/* <img src={LogoSquare} alt="click to go home"/> */}
                    
                    <div className="stage-cube-cont" ref={imgRef} onClick={handleClick}>
                        <div className="cube-spinner">
                            <div className="face face1">
                                <img src={LogoSquare} alt="Best studio logo"/> 
                            </div>
                            <div className="face face2">
                                <img src={eyesIcon} alt="Best studio logo"/>  
                            </div>
                            <div className="face face3">
                            <img src={LogoSquare} alt="Best studio logo"/>  
                            </div>
                            <div className="face face4">
                                <img src={LogoSquare} alt="Best studio logo"/>  
                            </div>
                            <div className="face face5">
                                <img src={thumbsUpIcon} alt="Best studio logo"/>  
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
                        <Link exact="true" activeclassname="active" className='nav-link about' to="/WhatsBest" onClick={handleClick}>
                            <img className="nav-icon" src={chairIcon} alt="find out what's best"/>
                            <p>What's <br></br>Best</p>
                        </Link>
                    </li>
                    <li>
                        <Link exact="true" activeclassname="active" className='nav-link cases' to="/BestCase" onClick={handleClick}>
                            <img className="nav-icon" src={thumbsUpIcon} alt="view case studies"/>
                            <p>Best Case Scenarios</p>
                        </Link>
                    </li>
                    <li>
                        <Link exact="true" activeclassname="active" className='nav-link friends' to="/BestFriends" onClick={handleClick}>
                            <img className="nav-icon" src={eyesIcon} alt="read testimonials"/>
                            <p>Best Friends</p>
                        </Link>
                    </li>
                </ul>
            </div>
           
            <ul className="social">
                
                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><FontAwesomeIcon icon={faSquareInstagram}/></a></li>
                <li><a target="_blank" rel="noreferrer" href="mailto:placeholder@gmail.com"><FontAwesomeIcon icon={faSquareEnvelope}/></a></li>
                {/* mailto: whatsbestdesign@gmail.com */}
                {/* insta link */}
            </ul>
        </div>
        </>
    )
}

export default Sidebar