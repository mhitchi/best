import '../App.scss';
import starIcon02 from "../assets/icons/star_icon_02.png";
import HomeContent from '../components/Content/Home';
import WhatsBestContent from '../components/Content/WhatsBest';
import BestCaseContent from '../components/Content/BestCase';
import BestFriendsContent from '../components/Content/BestFriends';
import ContactContent from '../components/Content/Contact';

const BestFriends = () => {
    return (
        <>
        <ul className="parent">
            <li className="kids friends"><BestFriendsContent/></li>
            <li className="kids home"><HomeContent/></li>
            <li className="kids what"><WhatsBestContent/></li>
            <li className="kids case"><BestCaseContent/></li>
        </ul>
            <img className="loader" src={starIcon02} alt="loader star"/>
            <div className="contact"><ContactContent/></div>
        </>

    )
}

export default BestFriends;