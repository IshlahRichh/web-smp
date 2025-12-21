import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
interface MobileSidebarProps {
   offCanvas: boolean;
   setOffCanvas: (offCanvas: boolean) => void;
}

const Offcanvas = ({ offCanvas, setOffCanvas }: MobileSidebarProps) => {
   return (
      <div className={offCanvas ? "mobile-menu-visible" : ""}>
         <div className="tgmobile__menu">
            <nav className="tgmobile__menu-box">
               <div onClick={() => setOffCanvas(false)} className="close-btn"><i className="fa-solid fa-xmark"></i></div>
               <div className="nav-logo">
                  <Link to="/"><img src="/assets/img/logo/logo-blue.png" alt="logo" /></Link>
               </div>
               <div className="tgmobile__menu-outer">
                  <MobileMenu />
               </div>
               <div className="offCanvas__social-icon mt-30 text-center">
                     <Link to="https://www.instagram.com/spemduta"><i className="fab fa-instagram"></i></Link>
                     <Link to="https://www.tiktok.com/@spemduta"><i className="fab fa-tiktok"></i></Link>
                     <Link to="https://www.youtube.com/@spemduta135"><i className="fab fa-youtube"></i></Link>
                     <Link to="https://www.facebook.com/spemduta"><i className="fab fa-facebook-f"></i></Link>
               </div>
            </nav>
         </div>
         <div onClick={() => setOffCanvas(false)} className="tgmobile__menu-backdrop"></div>
      </div>
   )
}

export default Offcanvas
