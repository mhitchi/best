import { Link } from "react-router-dom";
import "./index.scss";
import LogoSquare from "../../assets/img/logoSquare.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import Logo from "../../assets/img/logo.png";
 import chairIcon from "../../assets/icons/chair_icon.png";
 import eyesIcon from "../../assets/icons/eyes_icon.png";
 import thumbsUpIcon from "../../assets/icons/thumbs_up_icon.png";
 import chair2Icon from "../../assets/icons/chair_02_icon.png";
import cubeIcon from "../../assets/icons/cube_icon.png";
import starIcon from "../../assets/icons/star_icon.png";
import star2Icon from "../../assets/icons/star_icon_02.png";
gsap.registerPlugin(ScrollTrigger);

const Sidebar = () => {

    //start besttest
const [ scrollPercentage, setScrollPercentage ] = useState(0);

//spin faster if scrolling
window.addEventListener('wheel', (e) => {
    document.querySelector(".cube-spinner").style.animationName = "spincube"
    
  })

// //orange pink yellow black
// window.addEventListener('scroll', (e) => {
//   // document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
//   // console.log("scrolling")
//   // const el = document.querySelector("#spinCube");
//   // gsap.fromTo(el, { rotation: 0 }, { rotation: 0, duration: 10, scrollTrigger: {
//   //     trigger: el
//   // } })
//   //create loop to apply transform to all sticky sections
//   for(let i = 0; i < stickySections.length; i++){
//     transform(stickySections[i])
//   }
// })

// function transform(section) {

//   const offsetTop = section.parentElement.offsetTop;

//   const scrollSection = section.querySelector('.horizontal_scroll')

//   let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

//   percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;
//   // note: 130-210 = scenario/orange
//   // console.log(percentage)
  
//   //move horizontally depending on vertical scroll depth
//   scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
//   scrollSection.style.webkitTransform = `-webkit-translate3d(${-(percentage)}vw, 0, 0); `
  
  
//   // document.querySelector(".insta").style.animation = "rainbow01 20s 1";
//   // document.querySelector(".email").style.animation = "rainbow02 20s 1";
//   // //change svg color
  
  
//   const colorTxt = [...document.querySelectorAll('.color-text')]
//   const colorArr = ["#009c73", "#2b93d1", "#ffd800", "#e65925","#edaac6"]
  
  
//   for (let i = 0; i< colorTxt.length; i++) {
//     var rand = colorArr[(Math.random() * colorArr.length) | 0]
//     colorTxt[i].style.color = rand
//   }
  

    //end besttest

    //adding scroll trigger for css for horizontal scroll
    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        const currentPosition = window.scrollY;

        const scrollPercentage = (currentPosition / (fullHeight - windowHeight)) * 100;
        // console.log(scrollPercentage)
        setScrollPercentage(scrollPercentage)
    }
    // window.addEventListener('scroll', () => {
    //      document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    //      const stickySections = [...document.querySelectorAll('.sticky_wrap')]
    //     const scrollContents = [...document.querySelectorAll('.scroll_contents')]

    //      const offsetTop = section.parentElement.offsetTop;
    //      //  document.body.style.setProperty('--scroll', window.pageXOffset / (document.body.offsetWidth - window.innerWidth));
    //     // let cube = document.querySelector("#spinCube");
    //     // // console.log(cube)
    //     // cube.style={animationDuration: '4s' }
    //     let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    //     console.log(percentage)
    //     percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;
    //   }, false);

    const [position, setPosition] = useState('0,0')

    const handleClick = () => {
        window.scrollTo(position)
    }

    const imgRef = useRef(null);
    useEffect( () => {
        //spin the cube

        // const el = imgRef.current;
        // gsap.fromTo(el, { rotation: 0 }, { rotation: 20, duration: 10, scrollTrigger: {
        //     trigger: el,
        //     horizontal: true
        // } })
        //scroll the scroll
        window.addEventListener('scroll', handleScroll);

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, []);
    return (
        <>
        <div className="nav">
            <div className="nav-col">
                <a className="logo" href="#"><img src={Logo} alt="go home"/></a>
            </div>
            <div className="nav-col">
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><svg className="insta icon"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
          <path d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65626 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z" />
          </svg></a>
          <a target="_blank" rel="noreferrer" href="mailto:placeholder@gmail.com"><svg className="email icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
            <path d="M21.9 7.9C21.9 7.1 21.7 6.2 21.4 5.5C21.1 4.8 20.7 4.2 20.2 3.7C19.7 3.2 19.1 2.8 18.4 2.5C17.6 2.2 16.8 2 16 2C15.1 2 14.7 2 12 2C9.3 2 8.9 2 7.9 2.1C7 2.1 6.2 2.2 5.4 2.5C4.8 2.8 4.2 3.2 3.7 3.7C3.2 4.2 2.8 4.8 2.5 5.4C2.2 6.2 2.1 7 2.1 7.9C2 8.9 2 9.3 2 12C2 14.7 2 15.1 2.1 16.1C2.1 16.9 2.3 17.8 2.6 18.5C2.8 19.2 3.2 19.8 3.7 20.3C4.2 20.8 4.8 21.2 5.5 21.4C6.3 21.7 7.1 21.9 7.9 21.9C8.9 22 9.3 22 12 22C14.7 22 15.1 22 16.1 21.9C16.9 21.9 17.8 21.7 18.5 21.4C19.2 21.2 19.8 20.8 20.3 20.3C20.8 19.8 21.2 19.2 21.5 18.5C21.8 17.7 21.9 16.9 22 16.1C22 15 22.1 14.7 22.1 12C22.1 9.3 22 8.9 21.9 7.9ZM20.1 16C20.1 16.6 20 17.3 19.8 17.9C19.6 18.3 19.4 18.7 19 19C18.7 19.3 18.3 19.6 17.9 19.8C17.3 20 16.7 20.1 16 20.1C15 20.1 14.6 20.2 12 20.2C9.4 20.2 9 20.2 8 20.1C7.3 20.1 6.7 20 6.1 19.8C5.7 19.6 5.3 19.4 5 19C4.7 18.7 4.4 18.3 4.3 17.9C4 17.3 3.9 16.7 3.9 16C3.9 15 3.8 14.6 3.8 12C3.8 9.4 3.8 9 3.9 8C3.9 7.4 4 6.7 4.3 6.1C4.4 5.7 4.7 5.3 5 5C5.3 4.7 5.7 4.4 6.1 4.2C6.7 4 7.4 3.9 8 3.9C9 3.9 9.4 3.8 12 3.8C14.6 3.8 15 3.8 16 3.9C16.6 3.9 17.3 4 17.9 4.2C18.3 4.4 18.7 4.6 19 5C19.3 5.3 19.6 5.7 19.8 6.1C20 6.7 20.1 7.4 20.1 8C20.1 9 20.2 9.4 20.2 12C20.2 14.6 20.2 15 20.1 16Z" />
            <path d="M3.79999 6.9C7.39999 10.6 9.99999 13.1 10.6 13.8C10.8 14 11.1 14.5 11.8 14.7C12.1 14.8 12.3 14.7 12.6 14.8C13.1 15.1 13.3 16.3 12.8 16.9C12.4 17.4 11.2 17.2 9.99999 16.2C7.59999 13.8 5.19999 11.3 2.79999 8.8C2.79999 8.2 2.79999 7.6 2.79999 7.1C3.19999 7 3.49999 7 3.79999 6.9Z" />
            <path d="M20.2 6.9C16.6 10.6 14 13.1 13.4 13.8C13.2 14 12.9 14.5 12.2 14.7C11.9 14.8 11.7 14.7 11.4 14.8C10.9 15.1 10.7 16.3 11.2 16.9C11.6 17.4 12.8 17.2 14 16.3C16.4 13.9 18.8 11.4 21.2 8.9C21.2 8.3 21.2 7.7 21.2 7.2C20.8 7 20.5 7 20.2 6.9Z" />
            </svg></a>
            
            <svg className="burger icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <mask id="mask0_207_13" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="1" width="23" height="9">
                <path d="M22.8 1.10001H0.900024V9.20001H22.8V1.10001Z" fill="white"/>
              </mask>
              <g mask="url(#mask0_207_13)">
                <mask id="mask1_207_13" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="1" width="12" height="23">
                  <path d="M12 1.10001H0V23.9H12V1.10001Z" fill="white"/>
                </mask>
                <g mask="url(#mask1_207_13)">
                  <path d="M21.7 7.8C21.5 6.5 20.9 5.5 20.9 5.5C20.5 4.9 19.8 3.8 18.5 3C17.6 2.5 16.7 2.3 16.1 2.3H7.4C6.9 2.4 6.2 2.6 5.5 3C4.2 3.7 3.5 4.8 3.1 5.4C2.9 5.6 2.2 6.8 2.3 7.8C2.3 8 2.4 8.1 2.4 8.2C2.7 8.7 3.3 8.6 3.5 8.6C4.5 8.6 19.8 8.4 20.9 8.6C21 8.6 21.5 8.7 21.7 8.3C21.7 8.1 21.7 7.9 21.7 7.8ZM7.9 6.2C7.5 6.2 7.2 5.9 7.2 5.5C7.2 5.1 7.5 4.8 7.9 4.8C8.3 4.8 8.6 5.1 8.6 5.5C8.6 5.9 8.3 6.2 7.9 6.2ZM12 4.8C11.6 4.8 11.3 4.5 11.3 4.1C11.3 3.7 11.6 3.4 12 3.4C12.4 3.4 12.7 3.7 12.7 4.1C12.7 4.5 12.4 4.8 12 4.8Z" />
                </g>
                <mask id="mask2_207_13" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="11" y="1" width="13" height="23">
                  <path d="M11.9615 23.866L23.9615 23.866L23.9615 1.06601L11.9615 1.06601L11.9615 23.866Z" fill="white"/>
                </mask>
                <g mask="url(#mask2_207_13)">
                  <path d="M2.29994 8.3C2.49994 8.6 2.99994 8.6 3.09994 8.5C4.19994 8.4 19.4999 8.5 20.4999 8.5C20.6999 8.5 21.2999 8.6 21.5999 8.1C21.5999 8.1 21.6999 7.9 21.6999 7.7C21.7999 6.8 21.0999 5.5 20.8999 5.3C20.4999 4.7 19.7999 3.6 18.4999 2.9C17.6999 2.5 17.0999 2.3 16.5999 2.3H7.89994C7.29994 2.3 6.39994 2.5 5.49994 3C4.19994 3.7 3.39994 4.9 3.09994 5.5C3.09994 5.5 2.49994 6.5 2.29994 7.8C2.29994 7.9 2.19994 8.1 2.29994 8.3ZM15.2999 5.5C15.2999 5.1 15.5999 4.8 15.9999 4.8C16.3999 4.8 16.6999 5.1 16.6999 5.5C16.6999 5.9 16.3999 6.2 15.9999 6.2C15.6999 6.2 15.2999 5.9 15.2999 5.5ZM11.2999 4.1C11.2999 3.7 11.5999 3.4 11.9999 3.4C12.3999 3.4 12.6999 3.7 12.6999 4.1C12.6999 4.5 12.3999 4.8 11.9999 4.8C11.5999 4.8 11.2999 4.5 11.2999 4.1Z" />
                </g>
                <path d="M6 2.70001C9.9 2.70001 13.9 2.70001 17.8 2.70001C16.5 2.20001 14.5 1.70001 11.9 1.70001C9.4 1.70001 7.3 2.30001 6 2.70001Z" />
              </g>
              <mask id="mask3_207_13" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="1" y="8" width="23" height="15">
                <path d="M23.2001 8.8H1.30005V22.7H23.2001V8.8Z" fill="white"/>
              </mask>
              <g mask="url(#mask3_207_13)">
                <mask id="mask4_207_13" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="24">
                  <path d="M12.1001 0.400009H0.100098V23.2H12.1001V0.400009Z" fill="white"/>
                </mask>
                <g mask="url(#mask4_207_13)">
                  <path d="M3.00015 12.5C3.30015 12.3 3.90015 12.1 4.50015 12C6.00015 11.8 6.80015 12.2 8.40015 12.4C10.0002 12.6 9.90015 12.1 12.1002 12.1C14.5002 12.1 14.4002 12.6 16.0002 12.4C17.5002 12.2 18.3002 11.6 19.8002 11.9C20.4002 12 20.9002 12.2 21.2002 12.3C21.7002 12.2 22.0002 11.8 22.1002 11.3C22.2002 10.8 21.8002 10.2 21.3002 10C21.0002 9.90001 20.4002 9.70001 19.8002 9.70001C18.2002 9.50001 17.5002 10 16.1002 10.2C14.4002 10.4 14.6002 9.80001 12.2002 9.80001C10.0002 9.80001 10.1002 10.3 8.40015 10.1C6.90015 10 6.10015 9.60001 4.60015 9.80001C4.00015 9.90001 3.50015 10 3.10015 10.1C2.60015 10.2 2.20015 10.6 2.10015 11C2.00015 11.6 2.40015 12.3 3.00015 12.5Z" />
                  <path d="M2.5002 18C2.8002 17.7 3.4002 17.7 3.6002 17.7C4.6002 17.7 19.9002 17.8 21.0002 17.7C21.1002 17.7 21.6002 17.6 21.8002 17.9C21.9002 18 21.9002 18.1 21.9002 18.2C21.7002 19 21.1002 19.6 21.1002 19.6C20.7002 20 20.0002 20.7 18.7002 21.1C17.8002 21.4 16.9002 21.5 16.3002 21.5H7.6002C7.2002 21.5 6.5002 21.4 5.7002 21.1C4.4002 20.7 3.7002 20 3.3002 19.6C3.1002 19.5 2.4002 18.7 2.5002 18.1V18Z" />
                  <path d="M21.2001 13.7C20.6001 13.7 20.0001 13.7 19.3001 13.7C19.4001 13.7 19.6001 13.7 19.7001 13.7C15.9001 14.5 13.2001 15 12.7001 15.1C12.4001 15.1 12.1001 15.1 12.1001 15.1C11.9001 15.1 11.7001 15.1 11.4001 15C10.9001 14.9 8.2001 14.4 4.6001 13.6C4.1001 13.6 3.5001 13.6 3.0001 13.6C2.4001 13.9 2.0001 14.5 2.2001 15.1C2.3001 15.5 2.7001 15.9 3.2001 16H21.3001C21.9001 15.8 22.2001 15.2 22.1001 14.7C22.0001 14.3 21.7001 13.9 21.2001 13.7Z" />
                </g>
                <mask id="mask5_207_13" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="12" y="0" width="13" height="24">
                  <path d="M12.0717 23.2485L24.0717 23.2485L24.0717 0.448503L12.0717 0.448503L12.0717 23.2485Z" fill="white"/>
                </mask>
                <g mask="url(#mask5_207_13)">
                  <path d="M21.2 12.5C20.9 12.3 20.3 12.1 19.7 12C18.2 11.8 17.4 12.2 15.8 12.4C14.2 12.6 14.3 12.1 12.1 12.1C9.70002 12.1 9.80002 12.6 8.20002 12.4C6.70002 12.2 5.90002 11.6 4.40002 11.9C3.80002 12 3.30002 12.2 3.00002 12.3C2.50002 12.2 2.20002 11.8 2.10002 11.3C2.00002 10.8 2.40002 10.2 2.90002 9.99999C3.30002 9.99999 3.80002 9.79999 4.40002 9.79999C6.00002 9.59999 6.70002 10.1 8.10002 10.3C9.80002 10.5 9.60002 9.89999 12 9.89999C14.2 9.89999 14.1 10.4 15.8 10.2C17.2 9.99999 18 9.59999 19.5 9.79999C20.1 9.89999 20.6 9.99999 21 10.1C21.5 10.2 21.9 10.6 22 11C22.2 11.6 21.8 12.3 21.2 12.5Z" />
                  <path d="M21.6 18C21.3 17.7 20.7 17.7 20.5 17.7C19.5 17.7 4.19995 17.8 3.09995 17.7C2.99995 17.7 2.49995 17.6 2.29995 17.9C2.19995 18 2.19995 18.1 2.19995 18.2C2.39995 19 2.99995 19.6 2.99995 19.6C3.39995 20 4.09995 20.7 5.39995 21.1C6.29995 21.4 7.19995 21.5 7.79995 21.5H16.5C16.9 21.5 17.6 21.4 18.4 21.1C19.6999 20.7 20.3999 20 20.7999 19.6C20.9999 19.5 21.7 18.7 21.6 18.1C21.7 18.1 21.7 18 21.6 18Z" />
                  <path d="M3 13.7C3.6 13.7 4.2 13.7 4.9 13.7C4.8 13.7 4.6 13.7 4.5 13.7C8.3 14.5 11 15 11.5 15.1C11.8 15.1 12.1 15.1 12.1 15.1C12.3 15.1 12.5 15.1 12.8 15C13.3 14.9 16 14.4 19.6 13.6C20.1 13.6 20.7 13.6 21.2 13.6C21.8 13.9 22.2 14.5 22 15.1C21.9 15.5 21.5 15.9 21 16H2.9C2.3 15.8 2 15.2 2.1 14.7C2.2 14.3 2.5 13.9 3 13.7Z" />
                </g>
              </g>
            </svg>
          
            </div>
            <div id="cube">
                <Link className='logo' to='/'>
                        {/* <img src={LogoSquare} alt="click to go home"/> */}
                        
                        <div className="stage-cube-cont" ref={imgRef} onClick={handleClick}>
                            <div className="cube-spinner" id="spinCube">
                                <div className="face face1">
                                    <img src={chair2Icon} alt="Click icon to go home"/> 
                                </div>
                                <div className="face face2">
                                    <img src={eyesIcon} alt="Click icon to go home"/>  
                                </div>
                                <div className="face face3">
                                <img src={star2Icon} alt="Click icon to go home"/>  
                                </div>
                                <div className="face face4">
                                    <img src={cubeIcon} alt="Click icon to go home"/>  
                                </div>
                                <div className="face face5">
                                    <img src={thumbsUpIcon} alt="Click icon to go home"/>  
                                </div>
                                <div className="face face6">
                                    <img src={starIcon} alt="Click icon to go home"/>  
                                </div>
                                
                            </div>
                        </div>
                    </Link>
            </div>
            </div>
        </>
    )
}

export default Sidebar