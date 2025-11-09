interface PaymentRow {
  no: string;
  item: string;
  exc_l: string;
  exc_p: string;
  tahfidz_l: string;
  tahfidz_p: string;
  ico_l: string;
  ico_p: string;
}

const data: PaymentRow[] = [
  { no: "1", item: "Infaq Pembangunan (INPEM)", exc_l: "Rp8.000.000", exc_p: "Rp8.000.000", tahfidz_l: "Rp8.000.000", tahfidz_p: "Rp8.000.000", ico_l: "Rp9.000.000", ico_p: "Rp9.000.000" },
  { no: "2", item: "Pembayaran SPP Bulan Juli 2025", exc_l: "Rp650.000", exc_p: "Rp650.000", tahfidz_l: "Rp650.000", tahfidz_p: "Rp650.000", ico_l: "Rp650.000", ico_p: "Rp650.000" },
  { no: "3", item: "Herrigrestrasi", exc_l: "Rp350.000", exc_p: "Rp350.000", tahfidz_l: "Rp350.000", tahfidz_p: "Rp350.000", ico_l: "Rp350.000", ico_p: "Rp350.000" },
  { no: "4", item: "Asesmen Siswa", exc_l: "Rp250.000", exc_p: "Rp250.000", tahfidz_l: "Rp250.000", tahfidz_p: "Rp250.000", ico_l: "Rp250.000", ico_p: "Rp250.000" },
  { no: "5", item: "Uang Infaq Siswa", exc_l: "Rp325.000", exc_p: "Rp325.000", tahfidz_l: "Rp325.000", tahfidz_p: "Rp325.000", ico_l: "Rp325.000", ico_p: "Rp325.000" },
  { no: "6", item: "Kegiatan Vocasi siswa", exc_l: "Rp300.000", exc_p: "Rp300.000", tahfidz_l: "Rp300.000", tahfidz_p: "Rp300.000", ico_l: "Rp300.000", ico_p: "Rp300.000" },
  { no: "7", item: "Kegiatan Pengkaderan Ortom", exc_l: "Rp250.000", exc_p: "Rp250.000", tahfidz_l: "Rp250.000", tahfidz_p: "Rp250.000", ico_l: "Rp250.000", ico_p: "Rp250.000" },
  { no: "8", item: "Kegiatan Fortasi", exc_l: "Rp100.000", exc_p: "Rp100.000", tahfidz_l: "Rp100.000", tahfidz_p: "Rp100.000", ico_l: "Rp100.000", ico_p: "Rp100.000" },
  { no: "9", item: "Kegiatan Siswa Luar Sekolah", exc_l: "Rp350.000", exc_p: "Rp350.000", tahfidz_l: "Rp350.000", tahfidz_p: "Rp350.000", ico_l: "Rp350.000", ico_p: "Rp350.000" },
  { no: "10", item: "Tes Psycology", exc_l: "Rp150.000", exc_p: "Rp150.000", tahfidz_l: "Rp150.000", tahfidz_p: "Rp150.000", ico_l: "Rp150.000", ico_p: "Rp150.000" },
  { no: "11", item: "Kegiatan Darul Arqom", exc_l: "Rp100.000", exc_p: "Rp100.000", tahfidz_l: "Rp100.000", tahfidz_p: "Rp100.000", ico_l: "Rp100.000", ico_p: "Rp100.000" },
  { no: "12", item: "PHBI & PHBN", exc_l: "Rp200.000", exc_p: "Rp200.000", tahfidz_l: "Rp200.000", tahfidz_p: "Rp200.000", ico_l: "Rp200.000", ico_p: "Rp200.000" },
  { no: "13", item: "Penunjang Pembelajaran", exc_l: "Rp450.000", exc_p: "Rp450.000", tahfidz_l: "Rp450.000", tahfidz_p: "Rp450.000", ico_l: "Rp450.000", ico_p: "Rp450.000" },
  { no: "14", item: "Kalender", exc_l: "Rp50.000", exc_p: "Rp50.000", tahfidz_l: "Rp50.000", tahfidz_p: "Rp50.000", ico_l: "Rp50.000", ico_p: "Rp50.000" },
  { no: "15", item: "Percetakaan Raport & Kartu pelajar", exc_l: "Rp125.000", exc_p: "Rp125.000", tahfidz_l: "Rp125.000", tahfidz_p: "Rp125.000", ico_l: "Rp125.000", ico_p: "Rp125.000" },
  { no: "16", item: "Peningkatan BTQ Siswa", exc_l: "Rp250.000", exc_p: "Rp250.000", tahfidz_l: "Rp250.000", tahfidz_p: "Rp250.000", ico_l: "Rp250.000", ico_p: "Rp250.000" },
  { no: "17", item: "Pelaksanaan P5", exc_l: "Rp300.000", exc_p: "Rp300.000", tahfidz_l: "Rp300.000", tahfidz_p: "Rp300.000", ico_l: "Rp300.000", ico_p: "Rp300.000" },
  { no: "18", item: "Qurban", exc_l: "Rp100.000", exc_p: "Rp100.000", tahfidz_l: "Rp100.000", tahfidz_p: "Rp100.000", ico_l: "Rp100.000", ico_p: "Rp100.000" },
  { no: "19", item: "Forsiwa", exc_l: "Rp100.000", exc_p: "Rp100.000", tahfidz_l: "Rp100.000", tahfidz_p: "Rp100.000", ico_l: "Rp100.000", ico_p: "Rp100.000" },
  { no: "20", item: "Biaya Kegiatan Excellent Satu Tahun", exc_l: "", exc_p: "", tahfidz_l: "", tahfidz_p: "", ico_l: "", ico_p: "" },
  { no: "", item: "a. Excellent Science Enterprenur", exc_l: "Rp400.000", exc_p: "Rp400.000", tahfidz_l: "-", tahfidz_p: "-", ico_l: "-", ico_p: "-" },
  { no: "", item: "b. Kompetisi Sains dan Bisnis Plan", exc_l: "Rp200.000", exc_p: "Rp200.000", tahfidz_l: "-", tahfidz_p: "-", ico_l: "-", ico_p: "-" },
  { no: "", item: "c. Excellent visit", exc_l: "Rp300.000", exc_p: "Rp300.000", tahfidz_l: "-", tahfidz_p: "-", ico_l: "-", ico_p: "-" },
  { no: "", item: "d. Excellent Expo", exc_l: "Rp100.000", exc_p: "Rp100.000", tahfidz_l: "-", tahfidz_p: "-", ico_l: "-", ico_p: "-" },
  { no: "", item: "e. Project Presentation", exc_l: "Rp200.000", exc_p: "Rp200.000", tahfidz_l: "-", tahfidz_p: "-", ico_l: "-", ico_p: "-" },
  { no: "21", item: "Biaya Kegiatan M-ICO Satu Tahun", exc_l: "", exc_p: "", tahfidz_l: "", tahfidz_p: "", ico_l: "", ico_p: "" },
  { no: "", item: "a. Heregristrasi ACT", exc_l: "-", exc_p: "-", tahfidz_l: "-", tahfidz_p: "-", ico_l: "Rp2.250.000", ico_p: "Rp2.250.000" },
  { no: "", item: "b. English Proficiency Program (EPP)", exc_l: "-", exc_p: "-", tahfidz_l: "-", tahfidz_p: "-", ico_l: "Rp500.000", ico_p: "Rp500.000" },
  { no: "", item: "c. Students Guide Book", exc_l: "-", exc_p: "-", tahfidz_l: "-", tahfidz_p: "-", ico_l: "Rp260.000", ico_p: "Rp260.000" },
  { no: "", item: "d. English Friendship Camp And Show", exc_l: "-", exc_p: "-", tahfidz_l: "-", tahfidz_p: "-", ico_l: "Rp300.000", ico_p: "Rp300.000" },
  { no: "", item: "e. Creative Literacy Show (CLS)", exc_l: "-", exc_p: "-", tahfidz_l: "-", tahfidz_p: "-", ico_l: "Rp700.000", ico_p: "Rp700.000" },
  { no: "", item: "f. Cross Cultural understanding (CCU)", exc_l: "-", exc_p: "-", tahfidz_l: "-", tahfidz_p: "-", ico_l: "Rp300.000", ico_p: "Rp300.000" },
  { no: "", item: "g. International Competition", exc_l: "-", exc_p: "-", tahfidz_l: "-", tahfidz_p: "-", ico_l: "Rp250.000", ico_p: "Rp250.000" },
  { no: "", item: "h. Literature day", exc_l: "-", exc_p: "-", tahfidz_l: "-", tahfidz_p: "-", ico_l: "Rp90.000", ico_p: "Rp90.000" },
  { no: "22", item: "Biaya Kegiatan Kelas Tahfidz Satu Tahun", exc_l: "", exc_p: "", tahfidz_l: "", tahfidz_p: "", ico_l: "", ico_p: "" },
  { no: "", item: "a. Murojaah dan Ziyadah", exc_l: "-", exc_p: "-", tahfidz_l: "Rp450.000", tahfidz_p: "Rp450.000", ico_l: "-", ico_p: "-" },
  { no: "", item: "b. Tadabbur Alam", exc_l: "-", exc_p: "-", tahfidz_l: "Rp500.000", tahfidz_p: "Rp500.000", ico_l: "-", ico_p: "-" },
  { no: "", item: "c. Dauroh Tahfidz", exc_l: "-", exc_p: "-", tahfidz_l: "Rp800.000", tahfidz_p: "Rp800.000", ico_l: "-", ico_p: "-" },
  { no: "", item: "d. Munaqosah", exc_l: "-", exc_p: "-", tahfidz_l: "Rp125.000", tahfidz_p: "Rp125.000", ico_l: "-", ico_p: "-" },
  { no: "", item: "e. Tasmi`", exc_l: "-", exc_p: "-", tahfidz_l: "Rp250.000", tahfidz_p: "Rp250.000", ico_l: "-", ico_p: "-" },
  { no: "", item: "f. Moeslem Talent Show", exc_l: "-", exc_p: "-", tahfidz_l: "Rp125.000", tahfidz_p: "Rp125.000", ico_l: "-", ico_p: "-" },
  { no: "", item: "g. Quran Hadits dan Khot", exc_l: "-", exc_p: "-", tahfidz_l: "Rp150.000", tahfidz_p: "Rp150.000", ico_l: "-", ico_p: "-" },
  { no: "Total IP & DAFUL", item: "", exc_l: "Rp13.600.000", exc_p: "Rp13.600.000", tahfidz_l: "Rp14.800.000", tahfidz_p: "Rp14.800.000", ico_l: "Rp18.050.000", ico_p: "Rp18.050.000" },
  { no: "23", item: "Koperasi", exc_l: "", exc_p: "", tahfidz_l: "", tahfidz_p: "", ico_l: "", ico_p: "" },
  { no: "", item: "a. Satu Paket Seragam Putra", exc_l: "Rp2.025.000", exc_p: "", tahfidz_l: "Rp2.025.000", tahfidz_p: "", ico_l: "Rp2.025.000", ico_p: "" },
  { no: "", item: "b. Satu Paket Seragam Putri", exc_l: "", exc_p: "Rp2.275.000", tahfidz_l: "", tahfidz_p: "Rp2.275.000", ico_l: "", ico_p: "Rp2.275.000" },
  { no: "", item: "c. LKS", exc_l: "Rp550.000", exc_p: "Rp550.000", tahfidz_l: "Rp550.000", tahfidz_p: "Rp550.000", ico_l: "Rp550.000", ico_p: "Rp550.000" },
  { no: "Total", item: "", exc_l: "Rp16.175.000", exc_p: "Rp16.425.000", tahfidz_l: "Rp17.375.000", tahfidz_p: "Rp17.625.000", ico_l: "Rp20.625.000", ico_p: "Rp20.875.000" },
];

const BiayaArea = () => {
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#0d6efd",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "14px",
        textAlign: "center" as const,
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        padding: "12px",
      },
    },
    rows: {
      style: {
        borderBottom: "1px solid #ddd",
      },
    },
  };

  return (
    <div className="container py-5">
      <div className="col-12">
        <div className="tg-listing-section-title text-center mb-35">
          <h2
            className="mb-15 wow fadeInUp"
            data-wow-delay=".4s"
            data-wow-duration=".6s"
          >
            Biaya Pendaftaran Murid Baru
          </h2>
          <h5
            className="tg-section-subtitle wow fadeInUp"
            data-wow-delay=".3s"
            data-wow-duration=".5s"
          >
            Tahun Ajaran 2026/2027
          </h5>
        </div>
      </div>

      <div className="table-responsive">
        <table
          className="table table-bordered text-center align-middle biaya-table"
          style={{ fontSize: customStyles.cells.style.fontSize }}
        >
          <thead>
            <tr className="biaya-header-1">
              <th rowSpan={2}>NO</th>
              <th rowSpan={2}>ITEM PEMBAYARAN</th>
              <th colSpan={2}>
                <a href="/angsuran-excellent" style={{ color: "#fff" }}>
                  EXCELLENT
                </a>
              </th>
              <th colSpan={2}>
                <a href="/angsuran-tahfidz" style={{ color: "#fff" }}>
                  TAHFIDZ
                </a>
              </th>
              <th colSpan={2}>
                <a href="/angsuran-mico" style={{ color: "#fff" }}>
                  M-ICO
                </a>
              </th>
            </tr>
            <tr className="biaya-header-1">
              <th>LAKI-LAKI</th>
              <th>PEREMPUAN</th>
              <th>LAKI-LAKI</th>
              <th>PEREMPUAN</th>
              <th>LAKI-LAKI</th>
              <th>PEREMPUAN</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => {
              const isTotal =
                row.no === "Total" || row.no === "Total IP & DAFUL";

              return (
                <tr
                  key={idx}
                  className={
                    isTotal
                      ? "biaya-total-row"
                      : idx % 2 === 0
                      ? "biaya-even-row"
                      : "biaya-odd-row"
                  }
                >
                  <td>{row.no}</td>
                  <td className="text-start">{row.item}</td>
                  <td>{row.exc_l}</td>
                  <td>{row.exc_p}</td>
                  <td>{row.tahfidz_l}</td>
                  <td>{row.tahfidz_p}</td>
                  <td>{row.ico_l}</td>
                  <td>{row.ico_p}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <style>{`
        /* === Header Style === */
        .biaya-table thead tr.biaya-header-1 th {
          background: ${customStyles.headCells.style.backgroundColor};
          color: ${customStyles.headCells.style.color};
          font-weight: ${customStyles.headCells.style.fontWeight};
          font-size: ${customStyles.headCells.style.fontSize};
          text-align: ${customStyles.headCells.style.textAlign};
        }

        .biaya-table thead tr.biaya-header-2 th {
          background: #e9ecef;
          color: #222;
          font-size: 14px;
        }

        /* === Cell and Row Base Style === */
        .biaya-table tbody td {
          font-size: ${customStyles.cells.style.fontSize};
          padding: ${customStyles.cells.style.padding};
          border-bottom: ${customStyles.rows.style.borderBottom};
          vertical-align: middle !important;
        }

        /* === Ganjil / Genap Background === */
        .biaya-table tbody tr.biaya-odd-row {
          background: #f8f9fa; /* abu muda */
        }

        .biaya-table tbody tr.biaya-even-row {
          background: #ffffff; /* putih */
        }

        /* === TOTAL Row === */
        .biaya-table tbody tr.biaya-total-row {
          background: ${customStyles.headCells.style.backgroundColor} !important;
          color: ${customStyles.headCells.style.color} !important;
          font-weight: bold;
        }

        .biaya-table tbody tr.biaya-total-row td {
          background: ${customStyles.headCells.style.backgroundColor} !important;
          color: ${customStyles.headCells.style.color} !important;
        }

        .biaya-table th, .biaya-table td {
          vertical-align: middle !important;
        }
      `}</style>
    </div>
  );
};

export default BiayaArea;