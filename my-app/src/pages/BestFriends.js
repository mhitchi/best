import '../App.scss';
import starIcon02 from "../assets/icons/star_icon_02.png";
import StickersContent from '../components/Content/Stickers';
import WhatsBestContent from '../components/Content/WhatsBest';
import BestCaseContent from '../components/Content/BestCase';
import BestFriendsContent from '../components/Content/BestFriends';
import ContactContent from '../components/Content/Contact';

const BestFriends = () => {
    return (
        <>
        <ul className="parent horizontal_scroll">
            <li className="kids friends"><BestFriendsContent/></li>
            <li className="kids stickers"><StickersContent/></li>
            <li className="kids what"><WhatsBestContent/></li>
            <li className="kids case"><BestCaseContent/></li>
        </ul>
            <img className="loader" src={starIcon02} alt="loader star"/>
        </>

    )
}

export default BestFriends;