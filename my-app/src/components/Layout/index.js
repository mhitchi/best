import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Layout = () => {
    gsap.registerPlugin(ScrollTrigger);

    // start scrolltrigger mask svg

    const container = document.querySelector('.containerScroll');
    const sections = gsap.utils.toArray('.containerScroll .parent li');
    const texts = gsap.utils.toArray('.anim');
    const mask = document.querySelector('.mask');

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.parent',
            pin: true,
            scrub: 1,
            end: '+=3000'
        }
    })

    gsap.to(mask, {
        width: "100%",
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top left",
          scrub: 1
        }
      });

    // end scrolltrigger mask svg


    const maskStyle= {
        maskType:"alpha", 
        x:"0", 
        y:"0", 
        width:"900", 
        height:"10"
    }
    const handleScroll = (event) => {
        const container = event.target;
        const scrollAmount = event.deltaY;
        container.scrollTo( {
          top: 0,
          left: container.scrollLeft + scrollAmount,
          behavior: 'smooth',
          markers: true,
        });
      }

    return (
        <>
        <Sidebar/>
        {/* scroll masked svg animation */}
        <svg className="svg" viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
                <mask id="mask0_0_1" style={maskStyle} maskUnits="userSpaceOnUse">
                <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_0_1)">
                <rect class="mask" y="-49" height="99" fill="black"/>
                </g>
            </svg>
        <div className="page layout containerScroll" onWheel={handleScroll}>
            <span className="tags top-tags"></span>
            
            <Outlet />
            
        </div>
        </>
    )
}

export default Layout;