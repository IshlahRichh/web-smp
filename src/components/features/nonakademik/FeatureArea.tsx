import location_data from "../../../data/LocationData";

const TeamDetailsArea = () => {
  const nonakademikData = location_data.filter(item => item.page === "nonakademik");

  return (
    <div className="tg-team-details-area pt-60 p-relative z-index-1 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tg-location-section-title text-center mb-30">
                <h5 className="tg-section-subtitle mb-15 wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">Leadership & Talent</h5>
                <h2 className="mb-15 text-capitalize wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".9s">Organisasi Otonom & <br />Ekstrakurikuler Spemduta</h2>
                <p className="text-capitalize wow fadeInUp" data-wow-delay=".6s" data-wow-duration=".9s">Kegiatan keortoman dan ekstrakurikuler di SMP Muhammadiyah 2 Taman menjadi wadah pengembangan diri siswa dalam kepemimpinan, kerja sama, dan berkarya. Melalui beragam aktivitas organisasi, seni, olahraga, dan sosial, Spemduta membentuk generasi berkarakter, percaya diri, dan berjiwa Islami.</p>
            </div>
          </div>
          {nonakademikData.map((item) => (
            <div key={item.id} className="col-lg-6 col-11 mb-30 pt-30 mx-auto">
              <div className="tg-listing-card-item tg-listing-4-card-item d-flex flex-column flex-md-row align-items-start">
                <div className="tg-listing-2-card-thumb gambar mr-20" style={{ flex: "0 0 40%" }}>
                  <img className="tg-card-border w-100" src={item.thumb} alt={item.title} />
                </div>
                <div className="tg-listing-card-content tg-listing-map-list-item mt-30">
                  <h4 className="tg-listing-card-title mb-5">{item.title}</h4>
                  <span className="tg-listing-map-list-border mb-15" />
                  <p className="tg-listing-map-list-para mb-15">{item.deskripsi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsArea;