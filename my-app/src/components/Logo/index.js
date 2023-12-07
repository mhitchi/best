import '../../App.scss';
import logo from "../../assets/img/logo.png"

const Logo = () => {
    return (
        <>
        <div className="logo-container">
            <img className="logo" src={logo} alt="BEST studio + workshop logo"/>
        </div>
        </>
    )
}

export default Logo;