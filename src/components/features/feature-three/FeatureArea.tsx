const processFlow = [
  {
    title: "Isi Formulir Pendaftaran",
    desc: "Lakukan Pengisian Formulir pendaftaran sesuai dengan formulir yang disediakan",
    color: "#006cff",
    icon: "📝",
    button: "Daftar",
  },
  {
    title: "Masuk ke Dashboard",
    desc: "Setelah registrasi akan mendapatkan virtual Account yang dapat digunakan sebagai Username & Tanggal Lahir sebagai password, kemudian tekan tombol dashboard untuk melanjutkan proses",
    color: "#006cff",
    icon: "📂",
  },
  {
    title: "Mengisi Formulir",
    desc: "Mengisi formulir dari pembelian",
    color: "#006cff",
    icon: "📈",
  },
  {
    title: "Melakukan Pembayaran Formulir",
    desc: "Melakukan Pembayaran Formulir dengan Virtual Account yang didapat pada Bank Muamalat.",
    color: "#006cff",
    icon: "💳",
  },
  {
    title: "Melengkapi Biodata",
    desc: "Lengkapi isian biodata yang telah disediakan oleh sistem. Pastikan NISN tidak boleh kosong & tidak terdaftar sebelumnya",
    color: "#006cff",
    icon: "🗂️",
  },
  {
    title: "Melakukan Daftar Ulang",
    desc: "Melakukan pembayaran Daftar Ulang pada Bank Muamalat dengan No.Rek : 775-00-110-68 A.N. SMA Muhammadiyah 1 Taman.",
    color: "#006cff",
    icon: "🏦",
  },
  {
    title: "Melakukan Tes Penalaran",
    desc: "Tes Penalaran terdiri dari Pengetahuan kognitif, penalaran Matematika, Literasi Bahasa Indonesia, Literasi Bahasa Inggris",
    color: "#006cff",
    icon: "📝",
  },
  {
    title: "Menunggu Pengumuman",
    desc: "Pengumuman akan dilaksanakan pada Sistem PPDB Online dalam kurun waktu 1 minggu setelah tes peminatan",
    color: "#006cff",
    icon: "📢",
  },
];

const Listing = () => {
  return (
    <div className="tg-listing-area tg-grey-bg pt-80 pb-110 p-relative z-index-9">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="tg-listing-section-title text-center mb-35">
              <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".6s">
                Alur Pendaftaran Murid Baru
              </h2>
              <h5 className="tg-section-subtitle wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".5s">
                Tahun Ajaran 2026/2027
              </h5>
            </div>
            <div className="process-flow-wrapper" style={{ position: "relative", margin: "0 auto", maxWidth: 700 }}>
              {/* Vertical line */}
              <div
                className="process-flow-line"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: 6,
                  background: "linear-gradient(to bottom, #e0e0e0 0%, #fff 100%)",
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
                      <div
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
                              className="tg-location-time"
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
                              transition: "background 0.2s",
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
            margin-left: 20px !important;
          }
          .process-flow-line {
            left: 0 !important;
            transform: none !important;
            margin-left: 15px !important;
          }
          .process-flow-wrapper > ul > li .process-flow-card {
            width: 90% !important;
            min-width: 0 !important;
            padding: 18px 25px !important;
            border-left: none !important;
            border-right: 8px solid var(--step-color, #006cff) !important;
            margin-left: 30px;
          }
          .process-flow-wrapper > ul > li .process-flow-number {
            left: 0 !important;
            right: auto !important;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Listing;