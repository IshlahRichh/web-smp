interface DataType {
   id: number;
   page:string;
   avatar: string;
   name: string;
   designation: string;
   desc: string;
}

const testi_data: DataType[] = [
   {
      id: 1,
      page:"home_2",
      avatar: "/assets/img/testimonial/avatar-1.png",
      name: "Prof. Dr. Haedar Nashir, M.Si.",
      designation: "Ketua Umum PP Muhammadiyah",
      desc: "SMP Muhammadiyah 2 Taman kebanggan Pimpinan Pusat & warga persyarikatan.",
   },
   {
      id: 2,
      page:"home_2",
      avatar: "/assets/img/testimonial/avatar-2.png",
      name: "DR. KH. Saad Ibrahim, M.A.",
      designation: "Ketua PP Muhammadiyah",
      desc: "Gedung yang bagus ini bagian dari urusan keduniawian dan saya selalu merasa bangga ketika lewat di jalan tol, lalu tampaklah SMP Muhammadiyah 2 Taman!.",
   },
   {
      id: 3,
      page:"home_2",
      avatar: "/assets/img/testimonial/avatar-3.png",
      name: "Dr. M. Sholihin Fanani,M.PSDM",
      designation: "Wakil Ketua PWM Jatim",
      desc: "Agama, akhlak, akademis menjadi atmosfer di sekolah ini. Hal ini sangat penting bagi anak-anak kita agar kelak menjadi orang yang sukses dunia akhirat.",
   },
   // {
   //    id: 4,
   //    page:"home_2",
   //    avatar: "/assets/img/testimonial/avatar-2.png",
   //    name: "Floyd Miles",
   //    designation: "CEO, Traveller",
   //    desc: "Morem ipsum dolor siterey amet mean earty areaeey consec taetur adipisrvice ollwing  ipsum dolor consectetur.",
   // },
];

export default testi_data;