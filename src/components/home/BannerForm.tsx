import { useState, useEffect } from "react";

// Data gelombang
interface Gelombang {
   nama: string;
   potongan: string;
   periode: string;
   tanggalAkhir: Date;
}

const gelombangList: Gelombang[] = [
   {
      nama: "Gelombang Inden Istimewa",
      potongan: "Potongan 50%",
      periode: "Juli - September",
      tanggalAkhir: new Date("2025-09-30T23:59:59"),
   },
   {
      nama: "Gelombang Inden",
      potongan: "Potongan 40%",
      periode: "Oktober - Desember",
      tanggalAkhir: new Date("2025-12-31T23:59:59"),
   },
   {
      nama: "Gelombang 1",
      potongan: "Potongan Rp1.750.000",
      periode: "Januari - Maret",
      tanggalAkhir: new Date("2026-03-31T23:59:59"),
   },
   {
      nama: "Gelombang 2",
      potongan: "-",
      periode: "April - Kuota Terpenuhi",
      tanggalAkhir: new Date("2026-06-30T23:59:59"),
   },
];

// Fungsi untuk menentukan gelombang aktif
function getGelombangAktif(): Gelombang {
   const now = new Date();
   for (const g of gelombangList) {
      if (now <= g.tanggalAkhir) return g;
   }
   return gelombangList[gelombangList.length - 1];
}

// Fungsi countdown
function useCountdown(targetDate: Date) {
   const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
   useEffect(() => {
      const timer = setInterval(() => {
         setTimeLeft(getTimeLeft(targetDate));
      }, 1000);
      return () => clearInterval(timer);
   }, [targetDate]);
   return timeLeft;
}

function getTimeLeft(targetDate: Date) {
   const now = new Date().getTime();
   const distance = targetDate.getTime() - now;
   if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
   const minutes = Math.floor((distance / (1000 * 60)) % 60);
   const seconds = Math.floor((distance / 1000) % 60);
   return { days, hours, minutes, seconds };
}

const BannerForm = () => {
   const gelombangAktif = getGelombangAktif();
   const countdown = useCountdown(gelombangAktif.tanggalAkhir);

   return (
      <div className="tg-booking-form-area tg-booking-form-space pb-105">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-7">
                  <div className="">
                     {/* Countdown Gelombang */}
                     <div 
                        className="p-4 rounded text-center position-relative"
                        style={{
                           background: 'white',
                           boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                           borderRadius: '20px',
                           border: '1px solid rgba(0,0,0,0.05)'
                        }}
                     >
                        {/* Avatar Circle */}
                        <div style={{
                           position: 'absolute',
                           top: '-30px',
                           left: '50%',
                           transform: 'translateX(-50%)',
                           width: '60px',
                           height: '60px',
                           borderRadius: '50%',
                           overflow: 'hidden',
                           border: '4px solid white',
                           boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                           background: 'linear-gradient(135deg, #006cff 0%, #0052cc 100%)',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           fontSize: '28px',
                           color: 'white'
                        }}>
                           🎓
                        </div>

                        {/* Header dengan spacing untuk avatar */}
                        <div style={{ marginTop: '20px' }}>
                           {/* Badge Info */}
                           <div style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              background: '#f0f9ff',
                              padding: '6px 16px',
                              borderRadius: '20px',
                              marginBottom: '12px',
                              border: '1px solid #bae6fd'
                           }}>
                              <span style={{
                                 width: '8px',
                                 height: '8px',
                                 background: '#0ea5e9',
                                 borderRadius: '50%',
                                 display: 'inline-block'
                              }}></span>
                              <span style={{ fontSize: '13px', color: '#0369a1', fontWeight: '600' }}>
                                 SPMB Tahun Ajaran 2025/2026
                              </span>
                           </div>

                           {/* Nama Gelombang */}
                           <h3
                              className="fw-bold mb-2"
                              style={{ 
                                 color: "#1a1a1a",
                                 fontSize: '24px',
                                 marginTop: '8px'
                              }}
                           >
                              {gelombangAktif.nama}
                           </h3>

                           {/* Periode */}
                           <div className="mb-3" style={{ fontSize: '15px', color: '#666' }}>
                              <span>Periode:</span>{" "}
                              <span className="fw-bold" style={{ color: "#006cff" }}>
                                 {gelombangAktif.periode}
                              </span>
                           </div>

                           {/* Potongan - Badge Style */}
                           <div className="mb-4">
                              {gelombangAktif.potongan !== "-" ? (
                                 <div style={{
                                    background: 'linear-gradient(135deg, #006cff 0%, #0052cc 100%)',
                                    color: '#fff',
                                    padding: '12px 24px',
                                    borderRadius: '12px',
                                    display: 'inline-block',
                                    boxShadow: '0 4px 15px rgba(0, 108, 255, 0.3)',
                                    fontSize: '16px',
                                    fontWeight: '600'
                                 }}>
                                    🎉 Promo: {gelombangAktif.potongan}
                                 </div>
                              ) : (
                                 <span className="text-muted">
                                    Tanpa potongan khusus
                                 </span>
                              )}
                           </div>

                           {/* Countdown Box */}
                           <div
                              className="p-3 rounded-3"
                              style={{
                                 background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
                                 border: '1px solid #fecaca',
                                 marginTop: '16px'
                              }}
                           >
                              <div style={{ fontSize: '14px', color: '#991b1b', marginBottom: '8px', fontWeight: '500' }}>
                                 ⏰ Berakhir dalam:
                              </div>
                              <div style={{
                                 fontSize: '20px',
                                 fontWeight: 'bold',
                                 color: '#dc2626',
                                 fontFamily: 'monospace',
                                 letterSpacing: '1px'
                              }}>
                                 {countdown.days}h {countdown.hours}j{" "}
                                 {countdown.minutes}m {countdown.seconds}d
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default BannerForm;