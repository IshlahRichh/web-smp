import { Link } from "react-router-dom";

interface SidebarProps {
   sidebar: boolean;
   setSidebar: (offCanvas: boolean) => void;
}

const Sidebar = ({ sidebar, setSidebar }: SidebarProps) => {
   return (
      <>
         <div className={`offCanvas__info ${sidebar ? "active" : ""}`}>
            <div className="offCanvas__close-icon menu-close">
               <button onClick={() => setSidebar(false)}><i className="fa-sharp fa-regular fa-xmark"></i></button>
            </div>
            <div className="offCanvas__logo mb-30">
               <Link to="/"><img src="/assets/img/logo/logo-blue.png" alt="Logo" /></Link>
            </div>
            <div className="offCanvas__side-info mb-30">
               <div className="contact-list mb-30">
                  <h4>Alamat Sekolah</h4>
                  <p>Jl. Belakang Pasar Lama No. 135 <br /> Sidoarjo, Indonesia</p>
               </div>
               <div className="contact-list mb-30">
                  <h4>Phone Number</h4>
                  <p>+62 812 3233 1554</p>
               </div>
               <div className="contact-list mb-30">
                  <h4>Email Address</h4>
                  <p>info@example.com</p>
                  <p>example.mail@hum.com</p>
               </div>
            </div>
            <div className="offCanvas__social-icon mt-30">
               <Link to="https://www.instagram.com/spemduta"><i className="fab fa-instagram"></i></Link>
               <Link to="https://www.tiktok.com/@spemduta"><i className="fab fa-tiktok"></i></Link>
               <Link to="https://www.toutube.com/@spemduta"><i className="fab fa-youtube"></i></Link>
               <Link to="https://www.facebook.com/spemduta"><i className="fab fa-facebook-f"></i></Link>
            </div>
         </div>
         <div onClick={() => setSidebar(false)} className={`offCanvas__overly ${sidebar ? "active" : ""}`}></div>
      </>
   )
}

export default Sidebar
