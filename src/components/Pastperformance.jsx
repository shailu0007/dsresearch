import React, { useState } from "react";

const Pastperformance = () => {
  const trackSheetData = [
    "Stock Cash Regular",
    "Stock Cash Signature",
    "Stock Cash Positional",
    "Stock Option Regular",
    "Stock Option Signature",
    "Stock Future Regular",
    "Stock Future Signature",
    "Stock Future Positional",
    "Nifty Finance",
    "Index Option",
    "Index Future",
    "All Mcx",
     "Stock Future Regular",
    "Stock Future Signature",
    "Stock Future Positional",
    "Nifty Finance",
    "Index Option",
    "Index Future",
    "All Mcx",
  ];

  const reportsData = [
    {
      title: "Equity Monthly Report",
      file: "equity_monthly_report.pdf",
    },
    {
      title: "MCX Weekly Report",
      file: "mcx_weekly_report.pdf",
    },
    {
      title: "Option Performance",
      file: "option_performance.pdf",
    },
    {
      title: "Positional Trades",
      file: "positional_trades.pdf",
    },
     {
      title: "Equity Monthly Report",
      file: "equity_monthly_report.pdf",
    },
     {
      title: "Equity Monthly Report",
      file: "equity_monthly_report.pdf",
    },
     {
      title: "Equity Monthly Report",
      file: "equity_monthly_report.pdf",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const reportsPerSlide = 4;

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(reportsData.length / reportsPerSlide) - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      (prev + 1) % Math.ceil(reportsData.length / reportsPerSlide)
    );
  };

  const sectionStyle = {
    background: "#eeeeee",
    padding: "3rem 0",
  };

  const cardStyle = {
    backgroundColor: "#eeeeee",
    borderRadius: "0.75rem",
    boxShadow: "0 10px 25px hsla(221, 69.70%, 47.80%, 0.38)",
    padding: "1.5rem",
    border: "1px solid #e5e7eb",
    height: "auto",
    transition: "all 0.3s ease",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1rem",
    borderBottom: "2px solid #333",
    paddingBottom: "0.5rem",
    color:"#193cc8"
  };

  const downloadButtonStyle = {
    display: "inline-block",
    padding: "0.4rem 0.8rem",
    backgroundColor: "#2563eb",
    color: "#fff",
    borderRadius: "0.375rem",
    fontSize: "0.75rem",
    fontWeight: "600",
    textDecoration: "none",
    marginTop: "0.5rem",
  };

  const sliderWrapper = {
    overflow: "hidden",
    position: "relative",
    width: "100%",
  };

  const sliderTrack = {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    transform: `translateX(-${currentSlide * 100}%)`,
  };

  const slide = {
    flex: `0 0 100%`,
    padding: "1rem",
  };

  const reportCard = {
    backgroundColor: "#f9fafb",
    border: "1px solid #ddd",
    borderRadius: "0.5rem",
    padding: "1rem",
    textAlign: "center",
  };

  const navButtonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "#1f2937",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    borderRadius: "0.375rem",
  };

  return (
    <div style={sectionStyle}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "1fr 1fr" }}>
          {/* Track Sheet */}
          <div style={cardStyle}>
            <h3 style={headingStyle}>Track Sheet</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "1rem",
              }}
            >
              {trackSheetData.map((sheet, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "#f3f4f6",
                    borderRadius: "0.5rem",
                    padding: "1rem",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                    {sheet}
                  </p>
                  <a
                    href={`uploads/tracksheet/${sheet}.xlsx`}
                    download
                    style={downloadButtonStyle}
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Reports */}
       <div style={cardStyle}>
  <h3 style={headingStyle}>Reports</h3>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "1rem",
    }}
  >
    {reportsData.map((report, idx) => (
      <div
        key={idx}
        style={{
          backgroundColor: "#f3f4f6",
          borderRadius: "0.5rem",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "0.85rem", marginBottom: "0.5rem" }}>
          {report.title}
        </p>
        <a
          href={`uploads/reports/${report.file}`}
          download
          style={downloadButtonStyle}
        >
          Download
        </a>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Pastperformance;
