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

    const handleClick = () => {
        window.scrollTo(position)
    }

    //start random img 

    //place images randomly on page within legible areas
    //get array of image elements
    const productImgArr = [...document.querySelectorAll(".product")]
    console.log(productImgArr)

    //get array of src files
    const imgFilesArr = ["../../assets/img/AnotherChairSketch02.png", "../../assets/img/BeamChair.png", "../../assets/img/BeamChairSketch.png"]
    console.log(imgFilesArr)

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
        console.log("product source: " + array[i])
    }
      return array;
    }

    shuffle(imgFilesArr);

   
    //end random img

      //start test

      const firstRef = useRef();
      const secondRef = useRef();
      const wrapperRef = useRef();
      
    useEffect(() => {

    
        const ctx = gsap.context((self) => {  
        const sections = self.selector("li");
       
    
        const horizontalTween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            pin: true,
            // markers: true,
            scrub: 1,
            end: () => "+=" + document.querySelector(".page").offsetWidth
          }
        })
    
          gsap.to(firstRef.current, {
          rotate: 90,
          scale:3,
            scrollTrigger: {
              trigger:firstRef.current,
              containerAnimation: horizontalTween,
            //   markers:true,
              start: "center center"
            }
        })
          
           gsap.to(secondRef.current, {
          rotate: -90,
             scale:3,
            scrollTrigger: {
              trigger:secondRef.current,
               containerAnimation: horizontalTween,
            //   markers:true,
              start: "center center"
            }
        })

          
          }, wrapperRef);
          return () => ctx.revert();
          
      }, []);


      //end test

    // end scrolltrigger mask svg


    // const maskStyle= {
    //     maskType:"alpha", 
    //     x:"0", 
    //     y:"0", 
    //     width:"900", 
    //     height:"10"
    // }
    const handleScroll = (event) => {
        const container = event.target;
        const scrollAmount = event.deltaY;
        container.scrollTo( {
          top: 0,
          left: container.scrollLeft + scrollAmount,
          behavior: 'smooth',
        //   markers: true,
        });
        
      }
    
    return (
        <>
        <div onClick={handleClick}><Sidebar/></div>
        
        <div className="page layout containerScroll" onWheel={handleScroll} ref={wrapperRef}>
            <span className="tags top-tags"></span>


{/* start */}
{/* <div className="wrapper" ref={wrapperRef}>
      <section className="header"> <h1>HEADER</h1></section>
        <section className="first"><h2 ref={firstRef}>FIRST</h2></section>
        <section className="second"><h2 ref={secondRef}>SECOND</h2></section>
      </div> */}

{/* end */}
            <div className="scroll_container">
                <div className="sticky_wrap">
                  <Outlet />
                </div>
            </div>
            
          </div>
          <div className="contact"><ContactContent/></div>
        
        </>
    )
}

export default Layout;