import '../App.scss';
import starIcon02 from "../assets/icons/star_icon_02.png";
import HomeContent from '../components/Content/Home';
import WhatsBestContent from '../components/Content/WhatsBest';
import BestCaseContent from '../components/Content/BestCase';
import BestFriendsContent from '../components/Content/BestFriends';

const BestFriends = () => {
    return (
        <>
        <ul className="parent">
            <li><BestFriendsContent/></li>
            <li><HomeContent/></li>
            <li><WhatsBestContent/></li>
            <li><BestCaseContent/></li>
        </ul>
            <img className="loader" src={starIcon02} alt="loader star"/>
        </>

    )
}

export default BestFriends;