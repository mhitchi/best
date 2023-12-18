import '../App.scss';
import starIcon from "../assets/icons/star_icon.png";



const Home = () => {
    return (
        <>
        <div className= "container home-page">
            <div className="text-zone">
                <h1>BEST home</h1>
            </div>
            
        </div>
        <img className="loader" src={starIcon} alt="loader star"/>
        </>
    )
}

export default Home;