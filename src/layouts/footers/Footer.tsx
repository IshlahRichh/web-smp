import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer>
         <div className="tg-footer-area pt-130 include-bg" 
         style={{ backgroundImage: `url(/assets/img/footer/footer.jpg)` }}
         >
            <div className="container">
               <div className="tg-footer-top pb-40">
                  <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="tg-footer-widget mb-40">
                           <div className="tg-footer-logo mb-20">
                              <Link to="/"><img src="/assets/img/logo/logo-white.png" alt="" /></Link>
                           </div>
                           <p className="mb-20">Sekolah Islam yang Humanis dan Futuris.</p>
                           {/* <div className="tg-footer-form mb-30">
                              <form onSubmit={(e) => e.preventDefault()}>
                                 <input type="email" placeholder="Enter your mail" />
                                 <button className="tg-footer-form-btn" type="submit">
                                    <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M1.52514 8.47486H20.4749M20.4749 8.47486L13.5 1.5M20.4749 8.47486L13.5 15.4497" stroke="white" strokeWidth="1.77778" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </button>
                              </form>
                           </div> */}
                           <div className="tg-footer-social">
                              <Link to="https://www.instagram.com/spemduta"><i className="fab fa-instagram"></i></Link>
                              <Link to="https://www.tiktok.com/@spemduta"><i className="fab fa-tiktok"></i></Link>
                              <Link to="https://www.toutube.com/@spemduta"><i className="fab fa-youtube"></i></Link>
                              <Link to="https://www.facebook.com/spemduta"><i className="fab fa-facebook-f"></i></Link>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="tg-footer-widget tg-footer-link ml-80 mb-40">
                           <h3 className="tg-footer-widget-title mb-25">Quick Links</h3>
                           <ul>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/alur-pendaftaran">Alur Pendaftaran</Link></li>
                              <li><Link to="/nonakademik">Nonakademik</Link></li>
                              <li><Link to="/about-us">About Us</Link></li>
                              <li><Link to="https://spemduta.sch.id">Spemduta</Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="tg-footer-widget tg-footer-link mb-40">
                           <h3 className="tg-footer-widget-title mb-25">Program Kelas</h3>
                           <ul>
                              <li><Link to="/excellent">Excellent</Link></li>
                              <li><Link to="/tahfidz">Tahfidz</Link></li>
                              <li><Link to="/m-ico">M-ICO</Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="tg-footer-widget tg-footer-info mb-40">
                           <h3 className="tg-footer-widget-title mb-25">Information</h3>
                           <ul>
                              <li>
                                 <Link className="d-flex" to="https://maps.app.goo.gl/eoqpWbDzttLHnuFd7">
                                    <span className="mr-15">
                                       <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M19.0013 10.0608C19.0013 16.8486 10.3346 22.6668 10.3346 22.6668C10.3346 22.6668 1.66797 16.8486 1.66797 10.0608C1.66797 7.74615 2.58106 5.52634 4.20638 3.88965C5.83169 2.25297 8.03609 1.3335 10.3346 1.3335C12.6332 1.3335 14.8376 2.25297 16.4629 3.88965C18.0882 5.52634 19.0013 7.74615 19.0013 10.0608Z" stroke="white" strokeWidth="1.73333" strokeLinecap="round" strokeLinejoin="round" />
                                          <path d="M10.3346 12.9699C11.9301 12.9699 13.2235 11.6674 13.2235 10.0608C13.2235 8.45412 11.9301 7.15168 10.3346 7.15168C8.73915 7.15168 7.44575 8.45412 7.44575 10.0608C7.44575 11.6674 8.73915 12.9699 10.3346 12.9699Z" stroke="white" strokeWidth="1.73333" strokeLinecap="round" strokeLinejoin="round" />
                                       </svg>
                                    </span>
                                    Jl. Belakang Pasar Lama No. 135<br /> Sidoarjo, Indonesia
                                 </Link>
                              </li>
                              <li>
                                 <Link className="d-flex" to="https://api.whatsapp.com/send?phone=6281232331554&text=Assalamualaikum,%20Saya%20ingin%20bertanya%20tentang%20PPDB%20SPEMDUTA.">
                                    <span className="mr-15">
                                       <i className="fa-sharp text-white fa-solid fa-phone"></i>
                                    </span>
                                    +62 812 3233 1554
                                 </Link>
                              </li>
                              <li className="d-flex">
                                 <span className="mr-15">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M11.9987 5.60006V12.0001L16.2654 14.1334M22.6654 12.0002C22.6654 17.8912 17.8897 22.6668 11.9987 22.6668C6.10766 22.6668 1.33203 17.8912 1.33203 12.0002C1.33203 6.10912 6.10766 1.3335 11.9987 1.3335C17.8897 1.3335 22.6654 6.10912 22.6654 12.0002Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </span>
                                 <p className="mb-0">
                                    Sen – Kam: 07.00 – 15.00,<br />
                                    Sab: 07.00 – 12.00,<br />
                                    Minggu: <span className="text-white d-inline-block">CLOSED</span>
                                 </p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tg-footer-copyright text-center">
               <span>
                  Copyright © made with 🤎 by <Link to="/">IshlahYT</Link>
               </span>
            </div>
         </div>
      </footer>
   )
}

export default Footer
