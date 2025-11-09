import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import VideoPopup from "../../../modals/VideoPopup";
import location_data from "../../../data/LocationData";

const AboutUsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Ambil data gambar dari location_data
  const galleryData = location_data.filter((item) => item.page === "about");

  // Pisahkan data untuk layout besar dan kecil
  const largeImageData = galleryData.slice(0);
  const smallImageData = [...galleryData.slice(1), galleryData[0]];

  // Setting Swiper
  const swiperSetting = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    effect: "fade" as const,
    modules: [Autoplay, EffectFade],
  };

  return (
    <>
      <div className="tg-tour-details-area pt-35 pb-25">
        <div className="container">
          <div className="row align-items-end mb-35">
            <div className="col-lg-12 col-11 mx-auto">
              <div className="tg-tour-details-video-title-wrap">
                <h2 className="tg-tour-details-video-title mb-15 text-center">
                  SMP Muhammadiyah 2 Taman
                </h2>
              </div>
            </div>
          </div>

          <div className="row gx-15 mb-25">
            {/* === GALERI KIRI === */}
            <div className="col-lg-7 col-11 mx-auto">
              <Swiper {...swiperSetting} className="tg-gallery-left-swiper">
                {largeImageData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className="tg-tour-details-video-thumb mb-15 p-relative overflow-hidden"
                      onClick={() => {
                        setPreviewImage(item.thumb);
                        setIsImageOpen(true);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        className="w-100 gallery-left-image"
                        src={item.thumb}
                        alt={item.title}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* === GALERI KANAN === */}
            <div className="col-lg-5">
              <div className="row gx-15">
                <div className="col-lg-12 col-11 mx-auto">
                  <div className="tg-tour-details-video-thumb p-relative mb-15">
                    <img
                      className="w-100 gallery-image"
                      src="/assets/img/about/thumb/thumb.jpg"
                      alt="Video"
                    />
                    <div className="tg-tour-details-video-inner text-center">
                      <a
                        onClick={() => setIsVideoOpen(true)}
                        style={{ cursor: "pointer" }}
                        className="tg-video-play popup-video tg-pulse-border"
                      >
                        <span className="p-relative z-index-11">
                          <svg
                            width="19"
                            height="21"
                            viewBox="0 0 19 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.3616 8.34455C19.0412 9.31425 19.0412 11.7385 17.3616 12.7082L4.13504 20.3445C2.45548 21.3142 0.356021 20.1021 0.356021 18.1627L0.356022 2.89C0.356022 0.950609 2.45548 -0.261512 4.13504 0.708185L17.3616 8.34455Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <Swiper {...swiperSetting} className="tg-gallery-right-swiper d-none d-lg-block">
                  {smallImageData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="row gx-15">
                        <div className="col-lg-6 col-md-6">
                          <div
                            className="tg-tour-details-video-thumb mb-15 p-relative overflow-hidden"
                            onClick={() => {
                              setPreviewImage(item.thumb);
                              setIsImageOpen(true);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              className="w-100 gallery-right-image"
                              src={item.thumb}
                              alt={item.title}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div
                            className="tg-tour-details-video-thumb mb-15 p-relative overflow-hidden"
                            onClick={() => {
                              const nextImg =
                                smallImageData[(index + 1) % smallImageData.length].thumb;
                              setPreviewImage(nextImg);
                              setIsImageOpen(true);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              className="w-100 gallery-right-image"
                              src={
                                smallImageData[(index + 1) % smallImageData.length].thumb
                              }
                              alt={item.title}
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId="SkuYAXxuolw"
      />

      {/* Image Preview Modal */}
      {isImageOpen && previewImage && (
        <div
          className="tg-image-popup d-flex align-items-center justify-content-center"
          onClick={() => setIsImageOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
        >
          <img
            src={previewImage}
            alt="Preview"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              animation: "fadeIn 0.3s ease-in-out",
            }}
          />
        </div>
      )}

      {/* === STYLE SECTION === */}
      <style>{`
        .tg-gallery-left-swiper,
        .tg-gallery-right-swiper,
        .swiper,
        .swiper-wrapper,
        .swiper-slide {
          overflow: visible !important;
          isolation: isolate;
        }
        .swiper-slide {
          position: relative;
          z-index: 1;
        }
        .swiper-slide:hover {
          z-index: 10; /* Saat hover naik ke atas slide lain */
        } 

        .tg-tour-details-video-thumb {
          position: relative;
          overflow: visible !important; /* Izinkan efek keluar */
          border-radius: 15px;
          cursor: pointer;
          z-index: 2;
        }
        .gallery-left-image {
          width: 100%;
          height: auto;
          border-radius: 15px;
          object-fit: cover;
          transition: transform 0.3s ease-in-out;
        }
        .gallery-left-image:hover {
          transform: scale(1.03);
        }

        /* === GALERI KANAN === */
        .gallery-right-image {
          width: 100%;
          height: auto;
          border-radius: 15px;
          object-fit: cover;
          transition: transform 0.3s ease-in-out;
        }
        .gallery-right-image:hover {
          transform: scale(1.08);
        }
        .gallery-image:hover {
          transform: scale(1.04);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default AboutUsArea;
