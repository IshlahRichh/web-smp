import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Included from "./Included";

const AboutArea = () => {
   return (
      <div className="tg-about-area p-relative z-index-1 pt-105 pb-105">
         <img className="tg-about-details-shape p-absolute d-none d-lg-block" src="/assets/img/about/details/shape.png" alt="shape" />
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-4">
                  <div className="tg-chose-thumb-2 wow fadeInRight p-relative mb-65" data-wow-delay=".5s" data-wow-duration=".9s">
                     <img className="w-100 tg-round-15 d-none d-md-block" src="/assets/img/program-kelas/model-8.png" alt="chose" />
                     {/* Gradient putih di bagian bawah */}
                     <div style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        height: '20%',
                        background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%, transparent 100%)',
                        borderRadius: '0 0 15px 15px',
                        pointerEvents: 'none'
                     }}></div>
                  </div>
               </div>
               <div className="col-lg-6 col-11 m-auto">
                  <div className="tg-chose-content mb-35 ml-60">
                     <div className="tg-chose-section-title mb-30">
                        <h5 className="tg-section-subtitle wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".1s">Program Kelas</h5>
                        <h1 className="mb-15 text-capitalize wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">Excellent</h1>
                        <p className="text-capitalize wow fadeInUp mb-35" data-wow-delay=".5s" data-wow-duration=".9s"> Excellent Class merupakan program pengembangan peminatan dan keterampilan siswa melalui kelas talent (Edusains dan Entrepreneur). Program ini memberikan ruang bagi siswa untuk mengeksplorasi bakat akademik maupun non-akademik melalui kegiatan berbasis proyek, eksperimen ilmiah, dan praktik kewirausahaan yang nyata. Siswa dilatih untuk berpikir kritis, memecahkan masalah, berinovasi, serta membangun jiwa kepemimpinan dan kemandirian. Kelas ini menjadi wadah penguatan minat sekaligus pengembangan keterampilan abad 21, sehingga siswa siap berkompetisi dan unggul dalam berbagai bidang yang mereka pilih.</p>
                        <div className="tg-chose-btn wow fadeInUp" data-wow-delay=".8s" data-wow-duration=".9s">
                           <Link to="/tour-details" className="tg-btn tg-btn-switch-animation">
                              <Button text="Daftar Sekarang" />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tg-tour-about-border mb-40"></div>
                  <Included />
            </div>
         </div>
      </div>
   )
}

export default AboutArea
