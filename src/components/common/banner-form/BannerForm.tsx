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
                  <div className="tg-booking-form-wrap">
                     {/* Countdown Gelombang */}
                     <div className="p-2 rounded text-center">
                        {/* Nama Gelombang  bg-light border*/}
                        <h3
                           className="fw-bold mb-2"
                           style={{ color: "#000" }}
                        >
                           {gelombangAktif.nama}
                        </h3>

                        {/* Periode */}
                        <div className="mb-2">
                           <span>Periode:</span>{" "}
                           <span className="fw-bold" style={{ color: "#006cff" }}>
                              {gelombangAktif.periode}
                           </span>
                        </div>
                        {/* Potongan */}
                        <div className="mb-3">
                           {gelombangAktif.potongan !== "-" ? (
                              <span
                                 className="px-3 py-1 rounded-pill fw-semibold"
                                 style={{
                                    background: "#006cff",
                                    color: "#fff",
                                    fontSize: "0.95rem",
                                 }}
                              >
                                 Promo: {gelombangAktif.potongan}
                              </span>
                           ) : (
                              <span className="text-muted">
                                 Tanpa potongan khusus
                              </span>
                           )}
                        </div>
                        <div
                           className="p-1 rounded-3"
                        >
                           <span>Berakhir dalam:</span>{" "}
                           <span className="fw-bold" style={{ fontSize: "1.1rem", color: "#e81f25" }}>
                              {countdown.days}h {countdown.hours}j{" "}
                              {countdown.minutes}m {countdown.seconds}d
                           </span>
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