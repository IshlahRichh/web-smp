interface AngsuranRow {
  no: string;
  beasiswa: string;
  inpen: string;
  rincian_potongan: string;
  angsuran1: string;
  angsuran2: string;
  angsuran3: string;
  angsuran4: string;
  angsuran5: string;
  total: string;
  highlight?: boolean;
}

const data: AngsuranRow[] = [
  // 1
  {
    no: "1",
    beasiswa: "Anak Marbot PCM Sepanjang\n**SPP dan INPEM Pot 100%**",
    inpen: "Rp8.000.000",
    rincian_potongan: "INPEM",
    angsuran1: "Rp0",
    angsuran2: "Rp0",
    angsuran3: "Rp0",
    angsuran4: "Rp0",
    angsuran5: "",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "SPP JULI & UANG KEGIATAN",
    angsuran1: "Rp3.750.000",
    angsuran2: "Rp2.075.000",
    angsuran3: "Rp1.675.000",
    angsuran4: "",
    angsuran5: "",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "BIAYA KEGIATAN EXCELLENT",
    angsuran1: "Rp1.200.000",
    angsuran2: "Rp600.000",
    angsuran3: "Rp600.000",
    angsuran4: "",
    angsuran5: "",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "TOTAL PEMBAYARAN",
    angsuran1: "Rp4.950.000",
    angsuran2: "Rp2.675.000",
    angsuran3: "Rp2.275.000",
    angsuran4: "",
    angsuran5: "",
    total: "",
    highlight: true,
  },
  // 2
  {
    no: "2",
    beasiswa: "INDEN Istimewa\n**Potongan INPEM 50%**",
    inpen: "Rp8.000.000",
    rincian_potongan: "INPEM",
    angsuran1: "Rp4.000.000",
    angsuran2: "Rp1.600.000",
    angsuran3: "Rp1.200.000",
    angsuran4: "Rp800.000",
    angsuran5: "Rp400.000",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "SPP JULI & UANG KEGIATAN",
    angsuran1: "Rp4.400.000",
    angsuran2: "Rp1.625.000",
    angsuran3: "Rp1.100.000",
    angsuran4: "Rp1.250.000",
    angsuran5: "Rp425.000",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "BIAYA KEGIATAN EXCELLENT",
    angsuran1: "Rp1.200.000",
    angsuran2: "Rp600.000",
    angsuran3: "Rp600.000",
    angsuran4: "",
    angsuran5: "",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "TOTAL PEMBAYARAN",
    angsuran1: "Rp9.600.000",
    angsuran2: "Rp3.825.000",
    angsuran3: "Rp2.900.000",
    angsuran4: "Rp2.050.000",
    angsuran5: "Rp825.000",
    total: "",
    highlight: true,
  },
  // 3
  {
    no: "3",
    beasiswa: "PRESTASI GEL. INDEN\n**Potongan INPEM Rp3.250.000**",
    inpen: "Rp8.000.000",
    rincian_potongan: "INPEM",
    angsuran1: "Rp4.750.000",
    angsuran2: "Rp1.900.000",
    angsuran3: "Rp1.425.000",
    angsuran4: "Rp950.000",
    angsuran5: "Rp475.000",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "SPP JULI & UANG KEGIATAN",
    angsuran1: "Rp4.400.000",
    angsuran2: "Rp1.625.000",
    angsuran3: "Rp1.100.000",
    angsuran4: "Rp1.250.000",
    angsuran5: "Rp425.000",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "BIAYA KEGIATAN EXCELLENT",
    angsuran1: "Rp1.200.000",
    angsuran2: "Rp600.000",
    angsuran3: "Rp600.000",
    angsuran4: "",
    angsuran5: "",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "TOTAL PEMBAYARAN",
    angsuran1: "Rp10.350.000",
    angsuran2: "Rp4.125.000",
    angsuran3: "Rp3.125.000",
    angsuran4: "Rp2.200.000",
    angsuran5: "Rp900.000",
    total: "",
    highlight: true,
  },
  // 4
  {
    no: "4",
    beasiswa: "Gelombang INDEN\nPRESTASI SDM Gel 1\n**POT INPEM Rp2.500.000**",
    inpen: "Rp8.000.000",
    rincian_potongan: "INPEM",
    angsuran1: "Rp5.500.000",
    angsuran2: "Rp2.200.000",
    angsuran3: "Rp1.650.000",
    angsuran4: "Rp1.100.000",
    angsuran5: "Rp550.000",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "SPP JULI & UANG KEGIATAN",
    angsuran1: "Rp4.400.000",
    angsuran2: "Rp1.625.000",
    angsuran3: "Rp1.100.000",
    angsuran4: "Rp1.250.000",
    angsuran5: "Rp425.000",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "BIAYA KEGIATAN EXCELLENT",
    angsuran1: "Rp1.200.000",
    angsuran2: "Rp600.000",
    angsuran3: "Rp600.000",
    angsuran4: "",
    angsuran5: "",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "TOTAL PEMBAYARAN",
    angsuran1: "Rp11.100.000",
    angsuran2: "Rp4.425.000",
    angsuran3: "Rp3.350.000",
    angsuran4: "Rp2.350.000",
    angsuran5: "Rp975.000",
    total: "",
    highlight: true,
  },
  // 5
  {
    no: "5",
    beasiswa: "SDM GEL. 1\nPrestasi SD Umum Gel 1\n**POT INPEM Rp1.750.000**",
    inpen: "Rp8.000.000",
    rincian_potongan: "INPEM",
    angsuran1: "Rp6.250.000",
    angsuran2: "Rp2.500.000",
    angsuran3: "Rp1.875.000",
    angsuran4: "Rp1.250.000",
    angsuran5: "Rp625.000",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "SPP JULI & UANG KEGIATAN",
    angsuran1: "Rp4.400.000",
    angsuran2: "Rp1.625.000",
    angsuran3: "Rp1.100.000",
    angsuran4: "Rp1.250.000",
    angsuran5: "Rp425.000",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "BIAYA KEGIATAN EXCELLENT",
    angsuran1: "Rp1.200.000",
    angsuran2: "Rp600.000",
    angsuran3: "Rp600.000",
    angsuran4: "",
    angsuran5: "",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "TOTAL PEMBAYARAN",
    angsuran1: "Rp11.850.000",
    angsuran2: "Rp4.725.000",
    angsuran3: "Rp3.575.000",
    angsuran4: "Rp2.500.000",
    angsuran5: "Rp1.050.000",
    total: "",
    highlight: true,
  },
  // 6
  {
    no: "6",
    beasiswa: "UMUM GEL I\n**Potongan INPEM Rp1.000.000**",
    inpen: "Rp8.000.000",
    rincian_potongan: "INPEM",
    angsuran1: "Rp7.000.000",
    angsuran2: "Rp2.800.000",
    angsuran3: "Rp2.100.000",
    angsuran4: "Rp1.400.000",
    angsuran5: "Rp700.000",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "SPP JULI & UANG KEGIATAN",
    angsuran1: "Rp4.400.000",
    angsuran2: "Rp1.625.000",
    angsuran3: "Rp1.100.000",
    angsuran4: "Rp1.250.000",
    angsuran5: "Rp425.000",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "BIAYA KEGIATAN EXCELLENT",
    angsuran1: "Rp1.200.000",
    angsuran2: "Rp600.000",
    angsuran3: "Rp600.000",
    angsuran4: "",
    angsuran5: "",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "TOTAL PEMBAYARAN",
    angsuran1: "Rp12.600.000",
    angsuran2: "Rp5.025.000",
    angsuran3: "Rp3.800.000",
    angsuran4: "Rp2.650.000",
    angsuran5: "Rp1.125.000",
    total: "",
    highlight: true,
  },
  // 7
  {
    no: "7",
    beasiswa: "PRESTASI GEL 2\n**Potongan INPEM Rp750.000**",
    inpen: "Rp8.000.000",
    rincian_potongan: "INPEM",
    angsuran1: "Rp7.250.000",
    angsuran2: "Rp2.900.000",
    angsuran3: "Rp2.175.000",
    angsuran4: "Rp1.450.000",
    angsuran5: "Rp725.000",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "SPP JULI & UANG KEGIATAN",
    angsuran1: "Rp4.400.000",
    angsuran2: "Rp1.625.000",
    angsuran3: "Rp1.100.000",
    angsuran4: "Rp1.250.000",
    angsuran5: "Rp425.000",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "BIAYA KEGIATAN EXCELLENT",
    angsuran1: "Rp1.200.000",
    angsuran2: "Rp600.000",
    angsuran3: "Rp600.000",
    angsuran4: "",
    angsuran5: "",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "TOTAL PEMBAYARAN",
    angsuran1: "Rp12.850.000",
    angsuran2: "Rp5.125.000",
    angsuran3: "Rp3.875.000",
    angsuran4: "Rp2.700.000",
    angsuran5: "Rp1.150.000",
    total: "",
    highlight: true,
  },
  // 8
  {
    no: "8",
    beasiswa: "GELOMBANG 2\n**Potongan INPEM 0**",
    inpen: "Rp8.000.000",
    rincian_potongan: "INPEM",
    angsuran1: "Rp8.000.000",
    angsuran2: "Rp3.200.000",
    angsuran3: "Rp2.400.000",
    angsuran4: "Rp1.600.000",
    angsuran5: "Rp800.000",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "SPP JULI & UANG KEGIATAN",
    angsuran1: "Rp4.400.000",
    angsuran2: "Rp1.625.000",
    angsuran3: "Rp1.100.000",
    angsuran4: "Rp1.250.000",
    angsuran5: "Rp425.000",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "BIAYA KEGIATAN EXCELLENT",
    angsuran1: "Rp1.200.000",
    angsuran2: "Rp600.000",
    angsuran3: "Rp600.000",
    angsuran4: "",
    angsuran5: "",
    total: "",
  },
  {
    no: "",
    beasiswa: "",
    inpen: "",
    rincian_potongan: "TOTAL PEMBAYARAN",
    angsuran1: "Rp13.600.000",
    angsuran2: "Rp5.425.000",
    angsuran3: "Rp4.100.000",
    angsuran4: "Rp2.850.000",
    angsuran5: "Rp1.225.000",
    total: "",
    highlight: true,
  },
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

  const groupIndexes = data
    .map((row, idx) => ({ idx, no: row.no }))
    .filter(row => row.no !== "");

  return (
    <div className="container py-5">
      <div className="col-12">
        <div className="tg-listing-section-title text-center mb-35">
          <h2
            className="mb-15 wow fadeInUp"
            data-wow-delay=".4s"
            data-wow-duration=".6s"
          >
            Tabel Angsuran Excellent
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
              <th rowSpan={2}>BEASISWA<br />EXCELLENT</th>
              <th rowSpan={2}>INPEM</th>
              <th rowSpan={2}>RINCIAN POTONGAN</th>
              <th colSpan={5}>RINCIAN ANGSURAN</th>
            </tr>
            <tr className="biaya-header-1">
              <th>I</th>
              <th>II (10 Agust)</th>
              <th>III (10 Okt)</th>
              <th>IV (10 Des)</th>
              <th>V</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => {
              const groupIdx = groupIndexes.findIndex(g => g.idx === idx);
              let rowSpan = 0;
              if (row.no !== "") {
                const nextGroupIdx = groupIndexes[groupIdx + 1]?.idx ?? data.length;
                rowSpan = nextGroupIdx - idx;
              }

              const isTotalRow =
                row.beasiswa.toLowerCase().includes("total") ||
                row.rincian_potongan.toLowerCase().includes("total");

              return (
                <tr
                  key={idx}
                  className={
                    isTotalRow
                      ? "biaya-total-row"
                      : row.highlight
                      ? "biaya-highlight-row"
                      : idx % 2 === 0
                      ? "biaya-even-row"
                      : "biaya-odd-row"
                  }
                >
                  {row.no !== "" && <td rowSpan={rowSpan}>{row.no}</td>}
                  {row.no !== "" && (
                    <td
                      rowSpan={rowSpan}
                      className="text-start"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: row.beasiswa.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>"),
                        }}
                      />
                    </td>
                  )}
                  {row.no !== "" && <td rowSpan={rowSpan}>{row.inpen}</td>}
                  <td className="text-start">{row.rincian_potongan}</td>
                  <td>{row.angsuran1}</td>
                  <td>{row.angsuran2}</td>
                  <td>{row.angsuran3}</td>
                  <td>{row.angsuran4}</td>
                  <td>{row.angsuran5}</td>
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

        /* === Cells and Rows === */
        .biaya-table tbody td {
          font-size: ${customStyles.cells.style.fontSize};
          padding: ${customStyles.cells.style.padding};
          border-bottom: ${customStyles.rows.style.borderBottom};
          vertical-align: middle !important;
        }

        .biaya-table tbody tr.biaya-even-row {
          background: #f8f9fa;
        }

        .biaya-table tbody tr.biaya-odd-row {
          background: #fff;
        }

        /* === Highlighted Row === */
        .biaya-table tbody tr.biaya-highlight-row {
          background: #ffe066 !important;
          font-weight: bold;
        }

        /* === TOTAL Row === */
        .biaya-table tbody tr.biaya-total-row {
          background: ${customStyles.headCells.style.backgroundColor};
          color: ${customStyles.headCells.style.color};
          color: #fff !important;
          font-weight: bold;
        }

        .biaya-table tbody tr.biaya-total-row td {
          background: ${customStyles.headCells.style.backgroundColor};
          color: ${customStyles.headCells.style.color};
        }

        .biaya-table th, .biaya-table td {
          vertical-align: middle !important;
        }
      `}</style>
    </div>
  );
};

export default BiayaArea;