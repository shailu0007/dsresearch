import React, { useEffect, useState } from "react";
import axios from "axios";

const ExpertCards = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/index.php?action=getexpertforms", { withCredentials: true })
      .then((response) => {
        if (response.data && response.data.data) {
          setForms(response.data.data);
        } else {
          setError("No data found.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Error fetching data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) { return <p>Loading...</p>; }
  if (error) { return <p style={{ color: "red" }}>{error}</p>; }

  return (
    <div className="container mt-4">
      <h2>Expert Advice Requests</h2>
      <div className="row">
        {forms.map((form) => (
          <div className="col-md-4" key={form.id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{form.name}</h5>
                <p className="card-text">
                  <strong>Mobile:</strong> {form.mobile}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    {form.created_at}
                  </small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertCards;
