import '../App.scss';
import starIcon03 from "../assets/icons/star_icon_03.png";
import HomeContent from '../components/Content/Home';
import WhatsBestContent from '../components/Content/WhatsBest';
import BestCaseContent from '../components/Content/BestCase';
import BestFriendsContent from '../components/Content/BestFriends';

const WhatsBest = () => {
    return (
        <>
        <ul className="parent">
            <li className="kids"><WhatsBestContent/></li>
            <li className="kids"><BestCaseContent/></li>
            <li className="kids"><BestFriendsContent/></li>
            <li className="kids"><HomeContent/></li>
        </ul>
            <img className="loader" src={starIcon03} alt="loader"/>
        </>
    )
}

export default WhatsBest;