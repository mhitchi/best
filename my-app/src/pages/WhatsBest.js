import '../App.scss';
import starIcon03 from "../assets/icons/star_icon_03.png";
import HomeContent from '../components/Content/Home';
import WhatsBestContent from '../components/Content/WhatsBest';
import BestCaseContent from '../components/Content/BestCase';
import BestFriendsContent from '../components/Content/BestFriends';
import ContactContent from '../components/Content/Contact';

const WhatsBest = () => {
    return (
        <>
        <ul className="parent">
            <li className="kids what"><WhatsBestContent/></li>
            <li className="kids case"><BestCaseContent/></li>
            <li className="kids friends"><BestFriendsContent/></li>
            <li className="kids home"><HomeContent/></li>
        </ul>
            <img className="loader" src={starIcon03} alt="loader"/>
            <div className="contact"><ContactContent/></div>
        </>
    )
}

export default WhatsBest;