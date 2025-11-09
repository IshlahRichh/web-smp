import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const processFlow = [
  {
    title: "Membuat Akun Calon Murid Baru",
    desc: "Calon siswa membuat akun melalui sistem SPMB Online dengan data yang valid.",
    color: "#006cff",
    icon: "🧾",
    button: "Buat Akun",
  },
  {
    title: "Pembayaran Formulir Pendaftaran",
    desc: "Setelah mendaftar, calon siswa menerima pesan WhatsApp untuk membayar formulir sebesar Rp250.000,- dan mendapatkan akun resmi.",
    color: "#006cff",
    icon: "💳",
  },
  {
    title: "Login dan Pengisian Data Siswa",
    desc: "Login menggunakan akun yang diterima, lalu isi data siswa sesuai dokumen resmi.",
    color: "#006cff",
    icon: "📝",
  },
  {
    title: "Daftar Ulang dan Pemilihan Kelas Peminatan",
    desc: "Lakukan daftar ulang dan pilih kelas peminatan sesuai minat dan kemampuan.",
    color: "#006cff",
    icon: "🏫",
  },
  {
    title: "Interview Calon Peserta Didik",
    desc: "Ikuti sesi interview untuk mengenal karakter dan motivasi calon siswa.",
    color: "#006cff",
    icon: "🎤",
  },
  {
    title: "Pembelian Seragam Sekolah",
    desc: "Peserta didik baru melakukan pembelian seragam sesuai jadwal yang ditentukan.",
    color: "#006cff",
    icon: "🥼",
  },
  {
    title: "Pelaksanaan FORTASI",
    desc: "Peserta didik mengikuti kegiatan FORTASI sebagai tahap orientasi dan pengenalan sekolah.",
    color: "#006cff",
    icon: "🎓",
  },
];

const Alur = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 250,
      onabort: function() { AOS.refresh(); },
    });
  }, []); 

  return (
    <div className="tg-listing-area tg-grey-bg pt-80 pb-110 p-relative z-index-9">
      <div className="container">
        <div className="row justify-content-center">
          <img className="tg-chose-shape p-absolute pb-200" style={{ marginLeft: '-120px', width: '500px' }} src="/assets/img/chose/asset.png" alt="shape" />
          <div className="col-lg-12">
            <div className="tg-listing-section-title text-center mb-35">
              <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".6s">
                Alur Pendaftaran Murid Baru
              </h2>
              <h5 className="tg-section-subtitle wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".5s">
                Tahun Ajaran 2026/2027
              </h5>
            </div>

            <div className="process-flow-wrapper" style={{ position: "relative", margin: "0 auto", maxWidth: 900 }}>
              {/* Vertical line */}
              <div
                className="process-flow-line"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: 6,
                  background: "#e0e0e0",
                  transform: "translateX(-50%)",
                  zIndex: 0,
                  borderRadius: 8,
                }}
              />

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {processFlow.map((step, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <li
                      key={idx}
                      className="process-flow-item"
                      style={{
                        display: "flex",
                        justifyContent: isLeft ? "flex-start" : "flex-end",
                        position: "relative",
                        marginBottom: 50,
                        zIndex: 1,
                      }}
                    >
                      {/* Number circle */}
                      <span
                        className="process-flow-number"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          zIndex: 2,
                          background: step.color,
                          color: "#fff",
                          fontWeight: 700,
                          borderRadius: "50%",
                          width: 38,
                          height: 38,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 18,
                          boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                          border: "3px solid #fff",
                          transition: "left 0.3s, right 0.3s",
                        }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      {/* Card (dengan AOS animation) */}
                      <div
                        data-aos={isLeft ? "fade-right" : "fade-left"}
                        className={`process-flow-card ${isLeft ? "left" : "right"}`}
                        style={{
                          width: "48%",
                          minWidth: 260,
                          background: "#fff",
                          borderRadius: 24,
                          boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                          padding: "24px 32px",
                          position: "relative",
                          textAlign: "left",
                          borderLeft: isLeft ? `8px solid ${step.color}` : "none",
                          borderRight: !isLeft ? `8px solid ${step.color}` : "none",
                          transition: "all 0.3s",
                          marginLeft: isLeft ? -15 : 0,
                          marginRight: isLeft ? 0 : -15,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                          <span
                            style={{
                              fontSize: 28,
                              marginRight: 14,
                              color: step.color,
                              flexShrink: 0,
                            }}
                          >
                            {step.icon}
                          </span>
                          <span style={{ fontWeight: 700, fontSize: 20, color: "#000" }}>{step.title}</span>
                        </div>
                        <div style={{ color: "#333", fontSize: 15 }}>{step.desc}</div>
                        {step.button && (
                          <div style={{ marginTop: 18 }}>
                            <a
                              className="tg-location-time p-btn"
                              href="https://smpmduta-ppdb.madinapay.id"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: "inline-block",
                                background: step.color,
                                color: "#fff",
                                fontWeight: 600,
                                borderRadius: 8,
                                padding: "10px 28px",
                                fontSize: 16,
                                textDecoration: "none",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                border: `2px solid ${step.color}`,
                                transition: "all 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = step.color;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = step.color;
                                e.currentTarget.style.color = "#fff";
                              }}
                            >
                              {step.button}
                            </a>
                          </div>
                        )}

                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Inline style for responsive */}
      <style>{`
        @media (max-width: 991px) {
          .process-flow-wrapper > ul > li {
            justify-content: flex-start !important;
            margin-left: 0 !important;
          }
          .process-flow-line {
            left: 0 !important;
            transform: none !important;
            margin-left: 12px !important;
          }
          .process-flow-wrapper > ul > li .process-flow-card {
            width: 90% !important;
            min-width: 0 !important;
            padding: 18px 25px !important;
            border-left: none !important;
            border-right: 8px solid var(--step-color, #006cff) !important;
            margin-left: 48px !important;
            margin-right: 0 !important;
          }
          .process-flow-wrapper > ul > li .process-flow-number {
            left: 0 !important;
            right: auto !important;
            transform: translate(-50%, -50%);
            margin-left: 15px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Alur;
