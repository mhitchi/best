import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const handleScroll = (event) => {
        const container = event.target;
        const scrollAmount = event.deltaY;
        container.scrollTo( {
          top: 0,
          left: container.scrollLeft + scrollAmount,
          behavior: 'smooth'
        });
      }

    return (
        <>
        <Sidebar/>
        <div className="page layout container" onWheel={handleScroll}>
            <span className="tags top-tags">&lt;body&gt;</span>
            <Outlet />
            <span className="tags bottom-tags">
                &lt;body&gt;
                <br/>
            <span className="bottom-html-tag">&lt;/html&gt;</span>
            </span>
        </div>
        </>
    )
}

export default Layout;