import React, { useState } from "react";

export default function Career() {
  const [showModal, setShowModal] = useState(false);

  const jobList = [
    { title: "LDE", position: "Under Graduate", location: "Ujjain" },
    { title: "BDE", position: "Graduate, MBA, BE", location: "Ujjain" },
  ];

  const styles = {
    section: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
      padding: "2rem 1rem",
      background: "#eeeeee",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      textAlign: "center",
      color: "#1a202c",
    },
    subtextContainer: {
      maxWidth: "1000px",
      margin: "2rem auto",
      background: "#fff",
      padding: "2rem",
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
    },
    subheading: {
      fontSize: "2.5rem",
      marginBottom: "1.9rem",
      color: "#198cc8",
    },
    paragraph: {
      fontSize: "2rem",
      lineHeight: 1.6,
      color: "#4a5568",
    },
    tableContainer: {
      background: "#fff",
      padding: "2rem",
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(23, 55, 124, 0.34)",
      maxWidth: "900px",
      margin: "2rem auto",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      textAlign: "left",
      padding: "1rem",
      background: "#edf2f7",
      color: "#2d3748",
      fontWeight: "600",
      borderBottom: "2px solid #e2e8f0",
    },
    td: {
      padding: "1rem",
      borderBottom: "1px solid #e2e8f0",
      color: "#4a5568",
    },
    badge: {
      backgroundColor: "#e2e8f0",
      padding: "0.25rem 0.75rem",
      borderRadius: "9999px",
      fontSize: "0.875rem",
      fontWeight: "500",
    },
    applyBtn: {
      backgroundColor: "#3182ce",
      color: "#fff",
      border: "none",
      padding: "0.5rem 1rem",
      borderRadius: "8px",
      fontSize: "0.875rem",
      fontWeight: "600",
      cursor: "pointer",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "12px",
      boxShadow: "0 12px 32px rgba(0,0,0,0.1)",
      maxWidth: "400px",
      width: "90%",
      textAlign: "center",
    },
    closeBtn: {
      backgroundColor: "#e53e3e",
      color: "#fff",
      padding: "0.5rem 1rem",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "1rem",
    },
  };

  return (
    <>
      <section style={styles.section}>
        {/* Intro Section */}
        <div style={styles.subtextContainer}>
          <h2 style={styles.subheading}>Why choose us as a career...</h2>
          <p style={styles.paragraph}>
            D.S Researech is one of the fastest-growing companies in financial markets research and is looking for dynamic,
            talented, and skilled individuals who can take up new challenges and have passion.
          </p>
        </div>

        <div style={styles.subtextContainer}>
          <h2 style={styles.subheading}>Who We Are?</h2>
          <p style={styles.paragraph}>
            To make sure that our employees not only have great jobs, but great lives. We are continually searching for and recruiting
            new talent around. Our top priorities are <strong>innovation</strong>, <strong>self-development</strong>, and{" "}
            <strong>team spirit</strong>.
          </p>
        </div>

        {/* Job Listings */}
        <div style={styles.tableContainer}>
          <h2 style={styles.subheading}>Career Opportunities</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Job Title</th>
                <th style={styles.th}>Position</th>
                <th style={styles.th}>Location</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobList.map((job, idx) => (
                <tr key={idx}>
                  <td style={styles.td}>{job.title}</td>
                  <td style={styles.td}>
                    <span style={styles.badge}>{job.position}</span>
                  </td>
                  <td style={styles.td}>{job.location}</td>
                  <td style={styles.td}>
                    <button
                      style={styles.applyBtn}
                      onClick={() => setShowModal(true)}
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2b6cb0")}
                      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3182ce")}
                    >
                      Apply
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {showModal && (
          <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Apply Now</h3>
              <p style={{ color: "#4a5568", fontSize: "1rem" }}>
                Send your resume to <strong>hr@D.S research.in</strong>
              </p>
              <button style={styles.closeBtn} onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
