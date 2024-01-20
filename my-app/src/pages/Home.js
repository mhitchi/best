import '../App.scss';
import starIcon from "../assets/icons/star_icon.png";
import HomeContent from '../components/Content/Home';
import WhatsBestContent from '../components/Content/WhatsBest';
import BestCaseContent from '../components/Content/BestCase';
import BestFriendsContent from '../components/Content/BestFriends';
import ContactContent from '../components/Content/Contact';

const Home = () => {
    return (
        <>
        <ul className="parent horizontal_scroll">
            <li className="kids home"><HomeContent/></li>
            <li className="kids what"><WhatsBestContent/></li>
            <li className="kids case"><BestCaseContent/></li>
            <li className="kids friends"><BestFriendsContent/></li>
        </ul>
            <img className="loader" src={starIcon} alt="loader star"/>
        </>
    )
}

export default Home;