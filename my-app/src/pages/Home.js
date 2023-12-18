import '../App.scss';
import starIcon from "../assets/icons/star_icon.png";
import HomeContent from '../components/Content/Home';
import WhatsBestContent from '../components/Content/WhatsBest';
import BestCaseContent from '../components/Content/BestCase';
import BestFriendsContent from '../components/Content/BestFriends';

const Home = () => {
    return (
        <>
        <ul className="parent">
            <li><HomeContent/></li>
            <li><WhatsBestContent/></li>
            <li><BestCaseContent/></li>
            <li><BestFriendsContent/></li>
        </ul>
            <img className="loader" src={starIcon} alt="loader star"/>
        </>
    )
}

export default Home;