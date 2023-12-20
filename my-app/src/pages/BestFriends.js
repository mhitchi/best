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
            <li className="kids"><BestFriendsContent/></li>
            <li className="kids"><HomeContent/></li>
            <li className="kids"><WhatsBestContent/></li>
            <li className="kids"><BestCaseContent/></li>
        </ul>
            <img className="loader" src={starIcon02} alt="loader star"/>
        </>

    )
}

export default BestFriends;