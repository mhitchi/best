import '../App.scss';
import chairIcon from "../assets/icons/chair_icon.png";
import chair02Icon from "../assets/icons/chair_02_icon.png";
import cubeIcon from "../assets/icons/cube_icon.png";
import eyesIcon from "../assets/icons/eyes_icon.png";
import starIcon from "../assets/icons/star_icon.png";
import thumbsUpIcon from "../assets/icons/thumbs_up_icon.png"
import Loader from "react-loaders";

const Home = () => {
    return (
        <>
        <div className= "container home-page">
            <div className="text-zone">
                <h1>BEST home</h1>
            </div>
            <div className="stage-cube-cont">
                <div className="cube-spinner">
                    <div className="face1">
                           <img src={chair02Icon} alt="chair icon"/> 
                    </div>
                    <div className="face2">
                           <img src={chairIcon} alt="chair icon"/> 
                    </div>
                    <div className="face3">
                           <img src={cubeIcon} alt="cube icon"/> 
                    </div>
                    <div className="face4">
                           <img src={eyesIcon} alt="eyes icon"/> 
                    </div>
                    <div className="face5">
                           <img src={thumbsUpIcon} alt="thumbs up icon"/> 
                    </div>
                    <div className="face6">
                           <img src={starIcon} alt="star icon"/> 
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Home;