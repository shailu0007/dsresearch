import React, { useState } from "react";
import pricingDetails from "../details/pricingDetails"; // adjust path as needed

export default function OurServices() {
  const [activeTab, setActiveTab] = useState(pricingDetails[0].path); // default first tab

  // Utility: Extract table data and segment name
  const getActiveServiceData = () => {
    const activeItem = pricingDetails.find((item) => item.path === activeTab);
    if (!activeItem) return null;

    const serviceKey = Object.keys(activeItem).find((key) => key !== "path");
    const service = activeItem[serviceKey];
    const table = service?.table || {};
    return {
      table,
      segment: service?.name || activeTab,
    };
  };

  const serviceData = getActiveServiceData();

  return (
    <section style={{ padding: "40px 20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Tabs */}
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            listStyle: "none",
            padding: 0,
            marginBottom: "20px",
            borderBottom: "2px solid #ccc",
          }}
        >
          {pricingDetails.map((item) => (
            <li
              key={item.path}
              onClick={() => setActiveTab(item.path)}
              style={{
                flex: 1,
                textAlign: "center",
                padding: "12px 10px",
                cursor: "pointer",
                border: "1px solid #ccc",
                borderBottom: "none",
                background:
                  activeTab === item.path ? "#fff" : "#f9f9f9",
                fontWeight: activeTab === item.path ? "bold" : "normal",
                borderBottomColor:
                  activeTab === item.path ? "#fff" : "#ccc",
              }}
            >
              {item.path}
            </li>
          ))}
        </ul>

        {/* Table */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #ccc",
            padding: "20px",
          }}
        >
          {serviceData ? (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["Segment", "Monthly", "Quarterly", "HalfYearly", "Yearly"].map((heading) => (
                    <th
                      key={heading}
                      style={{
                        background: "#f2f2f2",
                        fontWeight: "bold",
                        padding: "12px 10px",
                        border: "1px solid #ddd",
                        textAlign: "left",
                      }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={cellStyle}>{serviceData.table.Segment || "N/A"}</td>
                  <td style={cellStyle}>{serviceData.table.Monthly || "N/A"}</td>
                  <td style={cellStyle}>{serviceData.table.Quarterly || "N/A"}</td>
                  <td style={cellStyle}>{serviceData.table.HalfYearly || serviceData.table.halfyearly || "N/A"}</td>
                  <td style={cellStyle}>{serviceData.table.Yearly || "N/A"}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p>No service data found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

const cellStyle = {
  padding: "12px 10px",
  border: "1px solid #ddd",
  textAlign: "left",
};
