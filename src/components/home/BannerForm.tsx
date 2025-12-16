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
               <div className="col-lg-6 col-md-8">
                  <div className="">
                     {/* Countdown Gelombang - Flash Sale Style */}
                     <div 
                        className="p-4 text-center position-relative"
                        style={{
                           background: 'white',
                           boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                           borderRadius: '20px',
                           border: '1px solid rgba(0,0,0,0.05)',
                           marginTop: '40px'
                        }}
                     >
                        {/* Header */}
                        <div style={{ marginBottom: '20px' }}>
                           {/* Nama Gelombang - Main Title */}
                           <h2
                              className="fw-bold mb-2"
                              style={{ 
                                 color: "#1a1a1a",
                                 fontSize: 'clamp(20px, 5vw, 26px)',
                                 letterSpacing: '-0.5px',
                                 marginBottom: '8px'
                              }}
                           >
                              {gelombangAktif.nama}
                           </h2>

                           {/* Subtitle - Small Info */}
                           <div style={{ fontSize: '12px', color: '#999', lineHeight: '1.6' }}>
                              <div>Tahun Ajaran 2025/2026</div>
                              <div>Periode: <span style={{ color: '#006cff', fontWeight: '600' }}>{gelombangAktif.periode}</span></div>
                           </div>
                        </div>
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
                                    Promo: {gelombangAktif.potongan}
                                 </div>
                              ) : (
                                 <span className="text-muted">
                                    Tanpa potongan khusus
                                 </span>
                              )}
                        </div>
                        {/* Countdown Timer Boxes */}
                        <div className="d-flex justify-content-center align-items-center gap-2 mb-4" style={{ maxWidth: '380px', margin: '0 auto 24px' }}>
                           {/* Days */}
                           <div style={{
                              background: '#f5f5f5',
                              borderRadius: '10px',
                              padding: '16px 12px',
                              flex: '1',
                              textAlign: 'center',
                              minWidth: '65px'
                           }}>
                              <div style={{ 
                                 fontSize: 'clamp(24px, 5vw, 32px)', 
                                 fontWeight: '700', 
                                 color: '#1a1a1a',
                                 lineHeight: '1',
                                 marginBottom: '6px'
                              }}>
                                 {String(countdown.days).padStart(2, '0')}
                              </div>
                              <div style={{ fontSize: '10px', color: '#999', textTransform: 'capitalize', fontWeight: '500' }}>
                                 Days
                              </div>
                           </div>

                           {/* Separator */}
                           <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ddd', margin: '0 -4px' }}>:</div>

                           {/* Hours */}
                           <div style={{
                              background: '#f5f5f5',
                              borderRadius: '10px',
                              padding: '16px 12px',
                              flex: '1',
                              textAlign: 'center',
                              minWidth: '65px'
                           }}>
                              <div style={{ 
                                 fontSize: 'clamp(24px, 5vw, 32px)', 
                                 fontWeight: '700', 
                                 color: '#1a1a1a',
                                 lineHeight: '1',
                                 marginBottom: '6px'
                              }}>
                                 {String(countdown.hours).padStart(2, '0')}
                              </div>
                              <div style={{ fontSize: '10px', color: '#999', textTransform: 'capitalize', fontWeight: '500' }}>
                                 Hours
                              </div>
                           </div>

                           {/* Separator */}
                           <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ddd', margin: '0 -4px' }}>:</div>

                           {/* Minutes */}
                           <div style={{
                              background: '#f5f5f5',
                              borderRadius: '10px',
                              padding: '16px 12px',
                              flex: '1',
                              textAlign: 'center',
                              minWidth: '65px'
                           }}>
                              <div style={{ 
                                 fontSize: 'clamp(24px, 5vw, 32px)', 
                                 fontWeight: '700', 
                                 color: '#1a1a1a',
                                 lineHeight: '1',
                                 marginBottom: '6px'
                              }}>
                                 {String(countdown.minutes).padStart(2, '0')}
                              </div>
                              <div style={{ fontSize: '10px', color: '#999', textTransform: 'capitalize', fontWeight: '500' }}>
                                 Minutes
                              </div>
                           </div>

                           {/* Separator */}
                           <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ddd', margin: '0 -4px' }}>:</div>

                           {/* Seconds */}
                           <div style={{
                              background: '#f5f5f5',
                              borderRadius: '10px',
                              padding: '16px 12px',
                              flex: '1',
                              textAlign: 'center',
                              minWidth: '65px'
                           }}>
                              <div style={{ 
                                 fontSize: 'clamp(24px, 5vw, 32px)', 
                                 fontWeight: '700', 
                                 color: '#1a1a1a',
                                 lineHeight: '1',
                                 
                                 marginBottom: '6px'
                              }}>
                                 {String(countdown.seconds).padStart(2, '0')}
                              </div>
                              <div style={{ fontSize: '10px', color: '#999', textTransform: 'capitalize', fontWeight: '500' }}>
                                 Seconds
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