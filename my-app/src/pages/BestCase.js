import '../App.scss';
import Sidebar from '../components/Sidebar';
import starIcon04 from "../assets/icons/star_icon_04.png";
import StickersContent from '../components/Content/Stickers';
import WhatsBestContent from '../components/Content/WhatsBest';
import BestCaseContent from '../components/Content/BestCase';
import BestFriendsContent from '../components/Content/BestFriends';
import ContactContent from '../components/Content/Contact';

const BestCase = () => {
    return (
        <>
        <ul className="parent horizontal_scroll">
            <li className="kids case"><BestCaseContent/></li>
            <li className="kids friends"><BestFriendsContent/></li>
            <li className="kids stickers"><StickersContent/></li>
            <li className="kids what"><WhatsBestContent/></li>
        </ul>
            <img className="loader" src={starIcon04} alt="loader star"/>
            
        </>
    )
}

export default BestCase;