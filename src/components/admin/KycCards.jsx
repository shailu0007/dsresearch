import React, { useEffect, useState } from "react";
import axios from "axios";

const KycCards = () => {
  const [kycList, setKycList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedKyc, setSelectedKyc] = useState(null);
  const [error, setError] = useState("");

  // Dynamically load Bootstrap CSS only for this page
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    axios
      .get("/api/index.php?action=getallkyc")
      .then((res) => {
        if (res.data && res.data.data) {
          setKycList(res.data.data);
        } else {
          setError("No data found");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Error fetching data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const openModal = (kyc) => {
    setSelectedKyc(kyc);
  };

  const closeModal = () => {
    setSelectedKyc(null);
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-danger text-center mt-4">{error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">KYC Submissions</h2>
      <div className="row">
        {kycList.map((kyc) => (
          <div className="col-md-4 mb-3" key={kyc.id}>
            <div
              className="card h-100"
              onClick={() => openModal(kyc)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body">
                <h5 className="card-title">{kyc.fname}</h5>
                <p className="card-text">
                  <strong>Mobile:</strong> {kyc.mobile1}
                  <br />
                  <strong>Email:</strong> {kyc.email}
                </p>
                <p className="card-text text-muted">
                  {new Date(kyc.created_at).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pure React Modal */}
      {selectedKyc && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <div className="modal-header d-flex justify-content-between align-items-center">
              <h5 className="modal-title">
                KYC Details: {selectedKyc.fname}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <table className="table table-sm">
                <tbody>
                  {Object.entries(selectedKyc).map(([key, value]) => (
                    <tr key={key}>
                      <th>{key.replace(/_/g, " ")}</th>
                      <td>
                        {key.includes("path") && value ? (
                          <a
                            href={`/uploads/${value}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View File
                          </a>
                        ) : (
                          value?.toString()
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal styles */}
      <style>{`
        .custom-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.5);
          z-index: 1050;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }
        .custom-modal {
          background: #fff;
          max-width: 900px;
          width: 100%;
          border-radius: 8px;
          overflow-y: auto;
          max-height: 90vh;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export default KycCards;
