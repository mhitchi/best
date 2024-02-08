import './index.scss';
import Sidebar from '../Sidebar';
import { useRef, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactContent from '../Content/Contact';

import chair02 from "../../assets/img/AnotherChairSketch02.png";
import beamChair from "../../assets/img/BeamChair.png";
import beamChairSketch from "../../assets/img/BeamChairSketch.png";



gsap.registerPlugin(ScrollTrigger);


const Layout = () => {
  
    const [position, setPosition] = useState('0,0')
    //start hybrid scroll
    const st = ScrollTrigger.create({
      trigger: ".wrapper",
      start: "top top",
      end: "+=400%",
      pin: true,
      markers: {
        indent: 200
      },
      id: "pin"
    });
    const t = gsap.to(".content", {
      x: () => -(window.innerWidth * 3),
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".wrapper",
        start: st.start,
        end: "+=300%",
        scrub: true,
        markers: true,
        id: "t"
      }
    });
    
    const circleTween = gsap.to(".final", {
      clipPath: "circle(71% at 50% 50%)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".wrapper",
        start: t.scrollTrigger.end,
        end: st.end,
        scrub: true,
        markers: { indent: 400 },
        id: "final"
      }
    });
    

    //end hybrid scroll

    //start random img 

    //place images randomly on page within legible areas
    //get array of image elements
    const productImgArr = [...document.querySelectorAll(".product")]
    console.log(productImgArr)

    //get array of src files
    const imgFilesArr = ["../../assets/img/AnotherChairSketch02.png", "../../assets/img/BeamChair.png", "../../assets/img/BeamChairSketch.png"]
    //console.log(imgFilesArr)

    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      // console.log("shuffling: " + array)

       //for each image, apply random src
    //for each image, apply random coordinates

      for ( let i = 0; i < productImgArr.length; i++ ) {
        productImgArr[i].src= array[i]
        console.log("product source: " + productImgArr[i].src)
    }
      return array;
    }

    shuffle(imgFilesArr);

   
    //end random img

  
    
    return (
        <>
        <div ><Sidebar/></div>
        
        <div className="page layout" >
          <div className="wrapper">
              <div className="content">
                <Outlet />
              </div>
          </div>
          <div className="final"></div>
          <div className="contact"><ContactContent/></div>
        </div>

        
        </>
    )
}

export default Layout;