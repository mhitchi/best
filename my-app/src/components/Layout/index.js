import './index.scss';
import Sidebar from '../Sidebar';
import { useRef, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Layout = () => {
    const [position, setPosition] = useState('0,0')

    const handleClick = () => {
        window.scrollTo(position)
    }

    // let nav = document.querySelector('nav-daddy');
    // nav.addEventListener('click', () => {
    //     window.scrollTo(0, 0);
    // })

    // start scrolltrigger mask svg

    // const container = document.querySelector('.containerScroll');
    // const sections = gsap.utils.toArray('.containerScroll .parent li');
    // const texts = gsap.utils.toArray('.anim');
    // const mask = document.querySelector('.mask');

    //tween to move mask
    // gsap.to(mask, {
    //     width: "100%",
    //     scrollTrigger: {
    //       trigger: ".page",
    //       start: "top left",
    //       scrub: 1,
    //       pinReparent: true
    //     }
    //   });
      
      //start test

      const firstRef = useRef();
      const secondRef = useRef();
      const wrapperRef = useRef();
      
    useEffect(() => {

    //     let roughKids= document.getElementsByClassName('kids');
    // let kids = Array.from(roughKids);
    // let colors = ["#009c73", "#ffd800", "#e65925", "#2b93d1"]
    // //kids logging undefined
    // console.log(roughKids)
    // console.log(kids)
    // console.log(colors)
    

    // for (let i = 0; i < kids.length; i++) {
       
    //     kids[i].style={backgroundColor: `${colors[i]}`}
    // }
    
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
            <Outlet />
            
        </div>
        
        </>
    )
}

export default Layout;