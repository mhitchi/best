import { Link } from "react-router-dom";
import "./index.scss";
import LogoSquare from "../../assets/img/logoSquare.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBookmark, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
    return (
        <>
        <div className="nav-daddy">
            <div className='nav-bar'>
                <Link className='logo' to='/'>
                    <img src={LogoSquare} alt="click to go home"/>
                </Link>
                <Link exact="true" activeclassname="active" className='nav-link about' to="/WhatsBest">
                    <FontAwesomeIcon icon={faHome}/>
                    <p>What's Best</p>
                </Link>
                <Link exact="true" activeclassname="active" className='nav-link cases' to="/BestCase">
                    <FontAwesomeIcon icon={faBookmark}/>
                    <p>Best Case Scenarios</p>
                </Link>
                <Link exact="true" activeclassname="active" className='nav-link friends' to="/BestFriends">
                    <FontAwesomeIcon icon={faUser}/>
                    <p>Best Friends</p>
                </Link>
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