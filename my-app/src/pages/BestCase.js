import '../App.scss';
import starIcon04 from "../assets/icons/star_icon_04.png";
import HomeContent from '../components/Content/Home';
import WhatsBestContent from '../components/Content/WhatsBest';
import BestCaseContent from '../components/Content/BestCase';
import BestFriendsContent from '../components/Content/BestFriends';

const BestCase = () => {
    return (
        <>
        <ul className="parent">
            <li className="kids case"><BestCaseContent/></li>
            <li className="kids friends"><BestFriendsContent/></li>
            <li className="kids home"><HomeContent/></li>
            <li className="kids what"><WhatsBestContent/></li>
        </ul>
            <img className="loader" src={starIcon04} alt="loader star"/>
        </>
    )
}

export default BestCase;