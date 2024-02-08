import '../App.scss';
import starIcon03 from "../assets/icons/star_icon_03.png";
import StickersContent from '../components/Content/Stickers';
import WhatsBestContent from '../components/Content/WhatsBest';
import BestCaseContent from '../components/Content/BestCase';
import BestFriendsContent from '../components/Content/BestFriends';
import ContactContent from '../components/Content/Contact';

const WhatsBest = () => {
    return (
        <>
            <div className="what"><WhatsBestContent/></div>
            <div className="case"><BestCaseContent/></div>
            <div className="friends"><BestFriendsContent/></div>
            <div className="stickers"><StickersContent/></div>
        
            <img className="loader" src={starIcon03} alt="loader"/>
        </>
    )
}

export default WhatsBest;