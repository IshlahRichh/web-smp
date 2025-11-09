import { useState } from "react";
import location_data from "../../../data/LocationData";

const Galery = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Filter hanya data untuk halaman galeri
  const galeryData = location_data.filter((items) => items.page === "tahfidz");

  return (
    <div className="tg-location-area p-relative pb-90 tg-grey-bg pt-40">
      <img
        className="tg-location-shape d-none d-lg-block"
        src="/assets/img/location/paper-plane.png"
        alt="shape"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tg-location-section-title text-center mb-30">
              <h5
                className="tg-section-subtitle mb-15 wow fadeInUp"
                data-wow-delay=".4s"
                data-wow-duration=".9s"
              >
                Next Adventure Destination
              </h5>
              <h2
                className="mb-15 text-capitalize wow fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration=".9s"
              >
                Popular Travel Destinations <br /> Available Worldwide
              </h2>
              <p
                className="text-capitalize wow fadeInUp"
                data-wow-delay=".6s"
                data-wow-duration=".9s"
              >
                Are you tired of the typical tourist destinations and looking
                <br />
                to step out of your comfort zone travel
              </p>
            </div>
          </div>
          <div className="col-lg-12 col-10 mx-auto">
            <div className="infinite-scroll-container">
              <div className="infinite-scroll-track">
                {[...galeryData, ...galeryData].map((item, i) => (
                  <div
                    className="scroll-item"
                    key={i}
                    onClick={() => setPreviewImage(item.thumb)}
                  >
                    <img
                      src={item.thumb}
                      alt="gallery"
                      className="scroll-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Preview */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "pointer",
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

      {/* CSS Internal */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .infinite-scroll-container {
          width: 100%;
          height: 270px;
          overflow: hidden;
          position: relative;
         //  mask: linear-gradient(
         //    90deg,
         //    transparent,
         //    white 20%,
         //    white 80%,
         //    transparent
         //  );
         //  -webkit-mask: linear-gradient(
         //    90deg,
         //    transparent,
         //    white 20%,
         //    white 80%,
         //    transparent
         //  );
        }

        .infinite-scroll-track {
          display: flex;
          height: 100%;
          align-items: center;
          animation: infiniteScroll 30s linear infinite;
          width: max-content;
        }

        .scroll-item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
        }

        .scroll-image {
          width: 380px;
          height: 240px;
          object-fit: cover;
          border-radius: 15px;
          margin: 0 15px;
          cursor: pointer;
          transition: transform 0.3s ease-in-out;
        }

        .scroll-image:hover {
          transform: scale(1.1);
        }

        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-380px * ${galeryData.length} - 30px * ${galeryData.length}));
          }
        }

        /* Pause animasi ketika hover */
        .infinite-scroll-container:hover .infinite-scroll-track {
          animation-play-state: paused;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .infinite-scroll-container {
            height: 200px;
          }
          
          .scroll-image {
            width: 280px;
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
};

export default Galery;