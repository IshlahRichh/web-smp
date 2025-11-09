const FeatureSidebar = () => {
  return (
    <div className="tg-tour-about-widget">
      <h4 className="tg-tour-about-title title-2 mb-15">Informasi Sekolah</h4>

      <div className="tg-tour-about-border-doted mb-15"></div>

      {/* Alamat Sekolah */}
      <div className="media contact-info mb-15 d-flex align-items-start">
        <span className="contact-info__icon me-3 text-muted">
          <i className="fa-solid fa-location-dot fa-lg"></i>
        </span>
        <div className="media-body">
          <h5 className="fw-semibold mb-1">Jl. Belakang Pasar Lama No.135</h5>
          <p className="mb-0 text-muted">Sidoarjo, Jawa Timur</p>
        </div>
      </div>

      {/* Telepon Sekolah */}
      <div className="media contact-info mb-15 d-flex align-items-start">
        <span className="contact-info__icon me-3 text-muted">
          <i className="fa-solid fa-phone fa-lg"></i>
        </span>
        <div className="media-body">
          <a href="tel:0317881554" target="_blank" rel="noreferrer">
            <h5 className="fw-semibold mb-1">031-7881554</h5>
          </a>
          <p className="mb-0 text-muted">Telepon Resmi SMP Muhammadiyah 2 Taman</p>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="media contact-info mb-15 d-flex align-items-start">
        <span className="contact-info__icon me-3 text-muted">
          <i className="fa-brands fa-whatsapp fa-lg"></i>
        </span>
        <div className="media-body">
          <a
            href="https://api.whatsapp.com/send?phone=628133813900&text=Assalamualaikum%20Admin%20SPEMDUTA,%20saya%20ingin%20bertanya%20tentang%20administrasi%20surat%20menyurat%20sekolah"
            target="_blank"
            rel="noreferrer"
          >
            <h5 className="fw-semibold mb-1">0813-3381-3900</h5>
          </a>
          <p className="mb-0 text-muted">Administrasi SMP Muhammadiyah 2 Taman</p>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="media contact-info mb-15 d-flex align-items-start">
        <span className="contact-info__icon me-3 text-muted">
          <i className="fa-brands fa-whatsapp fa-lg"></i>
        </span>
        <div className="media-body">
          <a
            href="https://api.whatsapp.com/send?phone=6281232331554&text=Assalamualaikum%20Admin%20SPEMDUTA,%20saya%20ingin%20bertanya%20tentang%20PPDB"
            target="_blank"
            rel="noreferrer"
          >
            <h5 className="fw-semibold mb-1">0812-3233-1554</h5>
          </a>
          <p className="mb-0 text-muted">Official PPDB WhatsApp</p>
        </div>
      </div>

      {/* Instagram */}
      <div className="media contact-info mb-15 d-flex align-items-start">
        <span className="contact-info__icon me-3 text-muted">
          <i className="fa-brands fa-instagram fa-lg"></i>
        </span>
        <div className="media-body">
          <a
            href="https://www.instagram.com/spemduta/"
            target="_blank"
            rel="noreferrer"
          >
            <h5 className="fw-semibold mb-1">@spemduta</h5>
          </a>
          <p className="mb-0 text-muted">Official Instagram SPEMDUTA</p>
        </div>
      </div>

      {/* YouTube */}
      <div className="media contact-info mb-15 d-flex align-items-start">
        <span className="contact-info__icon me-3 text-muted">
          <i className="fa-brands fa-youtube fa-lg"></i>
        </span>
        <div className="media-body">
          <a
            href="https://www.youtube.com/@spemduta135"
            target="_blank"
            rel="noreferrer"
          >
            <h5 className="fw-semibold mb-1">SPEMDUTA</h5>
          </a>
          <p className="mb-0 text-muted">Official YouTube Channel</p>
        </div>
      </div>

      {/* Website */}
      <div className="media contact-info mb-15 d-flex align-items-start">
        <span className="contact-info__icon me-3 text-muted">
          <i className="fa-solid fa-globe fa-lg"></i>
        </span>
        <div className="media-body">
          <a
            href="https://spemduta.sch.id/"
            target="_blank"
            rel="noreferrer"
          >
            <h5 className="fw-semibold mb-1">spemduta.sch.id</h5>
          </a>
          <p className="mb-0 text-muted">Official Website SPEMDUTA</p>
        </div>
      </div>

      {/* Email */}
      <div className="media contact-info mb-15 d-flex align-items-start">
        <span className="contact-info__icon me-3 text-muted">
          <i className="fa-solid fa-envelope fa-lg"></i>
        </span>
        <div className="media-body">
          <a
            href="mailto:info@spemduta.sch.id"
            target="_blank"
            rel="noreferrer"
          >
            <h5 className="fw-semibold mb-1" style={{ fontSize: "14px" }}>
              info@spemduta.sch.id
            </h5>
          </a>
          <p className="mb-0 text-muted">Official Email SPEMDUTA</p>
        </div>
      </div>

      <div className="tg-tour-about-border-doted mb-15"></div>
    </div>
  );
};

export default FeatureSidebar;