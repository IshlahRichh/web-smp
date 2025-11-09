import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';;
import location_data from "../../data/LocationData";

// interface LocationType {
//    id: number;
//    page: string;
//    thumb: string;
//    title: string;
//    total?: string;
//    class?: string;
// }

const setting = {
   slidesPerView: 4,
   loop: true,
   spaceBetween: 30,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: true,
   navigation: {
      prevEl: ".tg-listing-5-slide-prev",
      nextEl: ".tg-listing-5-slide-next",
   },
   breakpoints: {
      '1400': {
         slidesPerView: 4,
      },
      '1200': {
         slidesPerView: 3,
      },
      '768': {
         slidesPerView: 2,
      },
      '0': {
         slidesPerView: 1,
      },
   },
};

const Location = () => {
   return (
      <div className="tg-location-area p-relative pb-40 tg-grey-bg pt-140">
         <img className="tg-location-shape d-none d-lg-block" src="/assets/img/location/paper-plane.png" alt="shape" />
         <div className="container">
            <div className="row">
               <div className="col-lg-10 col-11 mx-auto">
                  <div className="tg-location-section-title text-center mb-30">
                     <h5 className="tg-section-subtitle mb-15 wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">Leadership & Talent</h5>
                     <h2 className="mb-15 text-capitalize wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".9s">Organisasi Otonom & <br />Ekstrakurikuler Spemduta</h2>
                     <p className="text wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".9s">Kegiatan keortoman dan ekstrakurikuler di SMP Muhammadiyah 2 Taman menjadi wadah pengembangan diri siswa dalam kepemimpinan, kerja sama, dan berkarya. Melalui beragam aktivitas organisasi, seni, olahraga, dan sosial, Spemduta membentuk generasi berkarakter, percaya diri, dan berjiwa Islami.</p>
                  </div>
               </div>
               <div className="col-lg-12 col-10 mx-auto">
                  <Swiper {...setting} modules={[Autoplay, Navigation]} className="swiper-container tg-location-su-slider">
                     {location_data.filter((items) => items.page === "home").map((item) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                           <div className="bg-white tg-round-25 p-relative z-index-1">
                              <div className="tg-location-wrap p-relative mb-30">
                                 <div className="tg-location-thumb">
                                    <img className="w-100" src={item.thumb} alt="location" />
                                 </div>
                                 <div className="tg-location-content text-center">
                                    <span className="tg-location-time">{item.total}</span>
                                    <h3 className="tg-location-title mb-0">
                                       <Link to="/nonakademik">{item.title}</Link>
                                    </h3>
                                 </div>
                                 <div className="tg-location-border one"></div>
                                 <div className="tg-location-border two"></div>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Location