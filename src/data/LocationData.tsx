interface DataType {
   id: number;
   page: string;
   thumb: string;
   title: string;
   total?: string;
   deskripsi?: string;
   class?: string;
}

const location_data: DataType[] = [
   {
      id: 1,
      page: "home",
      thumb: "/assets/img/nonakademik/hawai.jpg",
      title: "Hizbul Wathan",
      total: "Ortom",
   },
   {
      id: 2,
      page: "home",
      thumb: "/assets/img/nonakademik/ipeem.jpg",
      title: "IPM",
      total: "Ortom",
   },
   {
      id: 3,
      page: "home",
      thumb: "/assets/img/nonakademik/ts.jpg",
      title: "Tapak Suci",
      total: "Ortom",
   },
   {
      id: 4,
      page: "home",
      thumb: "/assets/img/nonakademik/band.jpg",
      title: "Band",
      total: "Seni",
   },
   {
      id: 5,
      page: "home",
      thumb: "/assets/img/nonakademik/lukis.jpg",
      title: "Lukis",
      total: "Seni",
   },
   {
      id: 6,
      page: "home",
      thumb: "/assets/img/nonakademik/tari.jpg",
      title: "Tari",
      total: "Seni",
   },
   {
      id: 7,
      page: "home",
      thumb: "/assets/img/nonakademik/pmr.jpg",
      title: "PMR",
      total: "Seni",
   },
   {
      id: 8,
      page: "home",
      thumb: "/assets/img/nonakademik/basket.jpg",
      title: "Basket",
      total: "Sport",
   },
   {
      id: 9,
      page: "home",
      thumb: "/assets/img/nonakademik/e-sport.jpg",
      title: "E-Sport",
      total: "Sport",
   },
   {
      id: 10,
      page: "home",
      thumb: "/assets/img/nonakademik/futsal.jpg",
      title: "Futsal",
      total: "Sport",
   },
   {
      id: 11,
      page: "home",
      thumb: "/assets/img/nonakademik/voli.jpg",
      title: "Voli",
      total: "Sport",
   },

   // nonakademik
   {
      id: 1,
      page: "nonakademik",
      thumb: "/assets/img/nonakademik/hawai.jpg",
      title: "Hizbul Wathan",
      deskripsi: "Gerakan kepanduan khas Muhammadiyah yang membentuk karakter disiplin, mandiri, dan berjiwa kepemimpinan. Siswa dilatih untuk tangguh, bertanggung jawab, dan cinta alam.",
   },
   {
      id: 2,
      page: "nonakademik",
      thumb: "/assets/img/nonakademik/ipeem.jpg",
      title: "Ikatan Pelajar Muhammadiyah",
      deskripsi: "Organisasi pelajar yang melatih siswa menjadi pemimpin muda yang aktif, berjiwa sosial, dan berakhlak Islami. Melalui IPM, siswa belajar manajemen organisasi dan kepemimpinan.",
   },
   {
      id: 3,
      page: "nonakademik",
      thumb: "/assets/img/nonakademik/ts.jpg",
      title: "Tapak Suci",
      deskripsi: "Unit bela diri yang mengajarkan kedisiplinan, keberanian, dan sportivitas. Tapak Suci juga menanamkan nilai-nilai keislaman dalam setiap latihan dan pertandingannya.",
   },
   {
      id: 4,
      page: "nonakademik",
      thumb: "/assets/img/nonakademik/band.jpg",
      title: "Band",
      deskripsi: "Wadah bagi siswa yang memiliki minat di bidang musik untuk menyalurkan kreativitas dan bakat bermusik. Siswa berlatih komposisi, teknik, serta tampil di berbagai acara sekolah.",
   },
   {
      id: 5,
      page: "nonakademik",
      thumb: "/assets/img/nonakademik/lukis.jpg",
      title: "Lukis",
      deskripsi: "Ekstrakurikuler yang menumbuhkan imajinasi dan kreativitas melalui seni rupa. Siswa diajak berekspresi lewat warna dan bentuk, mengasah kepekaan estetika.",
   },
   {
      id: 6,
      page: "nonakademik",
      thumb: "/assets/img/nonakademik/tari.jpg",
      title: "Tari",
      deskripsi: "Kegiatan seni tari yang mengembangkan bakat siswa dalam mengekspresikan diri melalui gerak. Siswa juga belajar mengenal dan melestarikan budaya Indonesia.",
   },
   {
      id: 7,
      page: "nonakademik",
      thumb: "/assets/img/nonakademik/pmr.jpg",
      title: "PMR",
      deskripsi: "Ekstrakurikuler yang menanamkan nilai kepedulian sosial dan kemanusiaan. Anggota PMR dilatih dasar pertolongan pertama dan kegiatan sosial di lingkungan sekolah.",
   },
   {
      id: 8,
      page: "nonakademik",
      thumb: "/assets/img/nonakademik/basket.jpg",
      title: "Basket",
      deskripsi: "Ekstrakurikuler olahraga yang mengajarkan kerja sama tim, kedisiplinan, dan semangat kompetitif. Siswa berlatih teknik dasar hingga strategi permainan.",
   },
   {
      id: 9,
      page: "nonakademik",
      thumb: "/assets/img/nonakademik/e-sport.jpg",
      title: "E-Sport",
      deskripsi: "Wadah bagi siswa yang memiliki minat pada dunia digital kompetitif. Melalui E-Sport, siswa belajar strategi, kerja tim, serta etika bermain yang sehat dan bertanggung jawab.",
   },
   {
      id: 10,
      page: "nonakademik",
      thumb: "/assets/img/nonakademik/futsal.jpg",
      title: "Futsal",
      deskripsi: "Kegiatan olahraga yang populer di kalangan siswa. Selain melatih fisik dan teknik, futsal juga membentuk semangat sportivitas dan solidaritas tim.",
   },
   {
      id: 11,
      page: "nonakademik",
      thumb: "/assets/img/nonakademik/voli.jpg",
      title: "Voli",
      deskripsi: "Ekstrakurikuler yang menumbuhkan kekompakan dan ketahanan fisik. Melalui latihan rutin, siswa belajar pentingnya koordinasi, kerja sama, dan semangat juang.",
   },

   // program kelas
   // excellent
   {
      id: 1,
      page: "excellent",
      thumb: "/assets/img/program-kelas/excellent/img-1.png",
      title: "excellent-1",
   },
   {
      id: 2,
      page: "excellent",
      thumb: "/assets/img/program-kelas/excellent/img-2.png",
      title: "excellent-2",
   },
   {
      id: 3,
      page: "excellent",
      thumb: "/assets/img/program-kelas/excellent/img-3.jpg",
      title: "excellent-3",
   },
   // tahfidz
   {
      id: 1,
      page: "tahfidz",
      thumb: "/assets/img/program-kelas/tahfidz/img-1.JPG",
      title: "tahfidz-1",
   },
   {
      id: 2,
      page: "tahfidz",
      thumb: "/assets/img/program-kelas/tahfidz/img-2.png",
      title: "tahfidz-2",
   },
   {
      id: 3,
      page: "tahfidz",
      thumb: "/assets/img/program-kelas/tahfidz/img-3.JPG",
      title: "tahfidz-3",
   },
   {
      id: 4,
      page: "tahfidz",
      thumb: "/assets/img/program-kelas/tahfidz/img-4.jpg",
      title: "tahfidz-4",
   },
   // mico
   {
      id: 1,
      page: "mico",
      thumb: "/assets/img/program-kelas/m-ico/img-1.png",
      title: "mico-1",
   },
   {
      id: 2,
      page: "mico",
      thumb: "/assets/img/program-kelas/m-ico/img-2.png",
      title: "mico-2",
   },
   {
      id: 3,
      page: "mico",
      thumb: "/assets/img/program-kelas/m-ico/img-3.JPG",
      title: "mico-3",
   },
   {
      id: 4,
      page: "mico",
      thumb: "/assets/img/program-kelas/m-ico/img-4.JPG",
      title: "mico-4",
   },


   // about
   { 
      id: 1, 
      page: "about", 
      thumb: "/assets/img/about/thumb/img-1.png", 
      title: "Paris" 
   },

   { 
      id: 2, 
      page: "about", 
      thumb: "/assets/img/about/thumb/img-2.png", 
      title: "London" 
   },

   { 
      id: 3, 
      page: "about", 
      thumb: "/assets/img/about/thumb/img-3.png", 
      title: "New York" 
   },

   { 
      id: 4, 
      page: "about", 
      thumb: "/assets/img/about/thumb/img-4.png", 
      title: "Tokyo" 
   },

   { 
      id: 5, 
      page: "about", 
      thumb: "/assets/img/about/thumb/img-5.jpg", 
      title: "Rome" 
   },

   { 
      id: 6, 
      page: "about", 
      thumb: "/assets/img/about/thumb/img-6.jpg", 
      title: "Berlin" 
   },

   { 
      id: 7, 
      page: "about", 
      thumb: "/assets/img/about/thumb/img-7.JPG", 
      title: "Barcelona" 
   },

   { 
      id: 8, 
      page: "about", 
      thumb: "/assets/img/about/thumb/img-8.JPG", 
      title: "Amsterdam" 
   },

   { 
      id: 9, 
      page: "about", 
      thumb: "/assets/img/about/thumb/img-9.JPG", 
      title: "Seoul" 
   },

   { 
      id: 10, 
      page: "about", 
      thumb: "/assets/img/about/thumb/img-10.png", 
      title: "Dubai" 
   },

   { 
      id: 11, 
      page: "about", 
      thumb: "/assets/img/about/thumb/img-11.png", 
      title: "Sydney" 
   },

   //Galery
   {
      id: 1,
      page: "galery",
      thumb: "/assets/img/about/thumb/img-1.png",
      title: "Galery 1",
   },
   {
      id: 2,
      page: "galery",
      thumb: "/assets/img/about/thumb/img-2.png",
      title: "Galery 1",
   },
   {
      id: 3,
      page: "galery",  
      thumb: "/assets/img/about/thumb/img-3.png",
      title: "Galery 1",
   },
   {
      id: 4,
      page: "galery",  
      thumb: "/assets/img/about/thumb/img-4.png",
      title: "Galery 1",
   },
   {
      id: 5,
      page: "galery",
      thumb: "/assets/img/about/thumb/img-5.png",
      title: "Galery 1",
   },


   // home_2

   {
      id: 1,
      page: "home_2",
      thumb: "/assets/img/location/su/destination.jpg",
      title: "New York City",
      class: "col-xl-3"
   },
   {
      id: 2,
      page: "home_2",
      thumb: "/assets/img/location/su/destination-2.jpg",
      title: "Australia",
      class: "col-xl-3"
   },
   {
      id: 3,
      page: "home_2",
      thumb: "/assets/img/location/su/destination-3.jpg",
      title: "California City",
      class: "col-xl-6"
   },
   {
      id: 4,
      page: "home_2",
      thumb: "/assets/img/location/su/destination-4.jpg",
      title: "Japam",
      class: "col-xl-6"
   },
   {
      id: 5,
      page: "home_2",
      thumb: "/assets/img/location/su/destination-5.jpg",
      title: "Spain City",
      class: "col-xl-3"
   },
   {
      id: 6,
      page: "home_2",
      thumb: "/assets/img/location/su/destination-6.jpg",
      title: "Paris",
      class: "col-xl-3"
   },

   {
      id: 1,
      page: "home_5",
      thumb: "/assets/img/location/location-2/thumb.jpg",
      title: "Paris",
      total: "05 ",
   },
   {
      id: 2,
      page: "home_5",
      thumb: "/assets/img/location/location-2/thumb-2.jpg",
      title: "Australia",
      total: "08",
   },
   {
      id: 3,
      page: "home_5",
      thumb: "/assets/img/location/location-2/thumb-3.jpg",
      title: "New York",
      total: "06",
   },
   {
      id: 4,
      page: "home_5",
      thumb: "/assets/img/location/location-2/thumb-4.jpg",
      title: "Spain City",
      total: "07",
   },

   // home_6

   {
      id: 1,
      page: "home_6",
      thumb: "/assets/img/location/location.jpg",
      title: "Paris",
      total: "05 ",
   },
   {
      id: 2,
      page: "home_6",
      thumb: "/assets/img/location/location-2.jpg",
      title: "Australia",
      total: "08",
   },
   {
      id: 3,
      page: "home_6",
      thumb: "/assets/img/location/location-3.jpg",
      title: "New York",
      total: "06",
   },
   {
      id: 4,
      page: "home_6",
      thumb: "/assets/img/location/location-4.jpg",
      title: "Spain City",
      total: "07",
   },

   // home_7

   {
      id: 1,
      page: "home_7",
      thumb: "/assets/img/foods/food-1.jpg",
      title: "American",
      total: "05",
   },
   {
      id: 2,
      page: "home_7",
      thumb: "/assets/img/foods/food-2.jpg",
      title: "Mexican",
      total: "12",
   },
   {
      id: 3,
      page: "home_7",
      thumb: "/assets/img/foods/food-3.jpg",
      title: "Italian",
      total: "11",
   },
   {
      id: 4,
      page: "home_7",
      thumb: "/assets/img/foods/food-4.jpg",
      title: "Vegetarians",
      total: "04",
   },
   {
      id: 5,
      page: "home_7",
      thumb: "/assets/img/foods/food-5.jpg",
      title: "Japanese",
      total: "13",
   },

   // home_7_2
   {
      id: 1,
      page: "home_7_2",
      thumb: "/assets/img/location/location-5/location.jpg",
      title: "New york City",
      total: "05",
   },
   {
      id: 2,
      page: "home_7_2",
      thumb: "/assets/img/location/location-5/location-2.jpg",
      title: "Australia",
      total: "07",
   },
   {
      id: 3,
      page: "home_7_2",
      thumb: "/assets/img/location/location-5/location-3.jpg",
      title: "Switzerland",
      total: "12",
   },
   {
      id: 4,
      page: "home_7_2",
      thumb: "/assets/img/location/location-5/location-4.jpg",
      title: "Japan City",
      total: "03",
   },
   {
      id: 5,
      page: "home_7_2",
      thumb: "/assets/img/location/location-5/location-2.jpg",
      title: "Australia",
      total: "07",
   },
   {
      id: 6,
      page: "home_7_2",
      thumb: "/assets/img/location/location-5/location-3.jpg",
      title: "Switzerland",
      total: "12",
   },
];

export default location_data;