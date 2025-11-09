import AboutText from "./about/AboutText"
import Faq from "./about/Faq"
// import Included from "./about/Included"
// import Review from "./about/Review"
// import ReviewDetails from "./about/ReviewDetails"
// import ReviewFormArea from "./about/ReviewFormArea"
import FeatureSidebar from "./FeatureSidebar"

const FeatureAboutArea = () => {
   return (
      <div className="tg-tour-about-area tg-tour-about-border pt-40 pb-70">
         <div className="container">
            <div className="row">
               <div className="col-xl-9 col-lg-8 col-11 mx-auto">
                  <div className="tg-tour-about-wrap mr-55">
                     <div className="tg-tour-about-content">
                        <AboutText />
                        <div className="tg-tour-about-border mb-40"></div>
                        <Faq />
                        <div className="tg-tour-about-border mb-45"></div>
                        <div className="tg-tour-about-map mb-40">
                           <h4 className="tg-tour-about-title mb-15">Location</h4>
                           <p className="text-capitalize lh-28">SMP Muhammadiyah 2 Taman terletak di Jl. Belakang Pasar Lama No. 135, Sepanjang, Kabupaten Sidoarjo. Sekolah ini berada di kawasan strategis yang mudah dijangkau dari berbagai arah, dekat dengan area permukiman, pusat perdagangan, serta akses transportasi umum seperti angkutan kota dan stasiun Sepanjang. 
                              </p>
                           <div className="tg-tour-about-map h-100">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0863358886127!2d112.69400171073126!3d-7.344201672216208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fcb6ba9e3181%3A0xd019f183504ca26d!2sSMP%20Muhammadiyah%202%20Taman%20%7C%20Sekolah%20SMP%20Swasta%20Islami%20Terbaik%2C%20Favorit%2C%20Unggulan%20di%20Sidoarjo%2C%20Surabaya%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1759822464662!5m2!1sen!2sid" width="600" height="450" style={{ border: "0" }} loading="lazy"></iframe>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-4">
                  <div className="tg-tour-about-sidebar top-sticky mb-50">
                     <FeatureSidebar />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FeatureAboutArea
