import React from 'react';

const Compliance = () => {
  const data = [
    'Customer Care',
    'Head of Customer Care',
    'Compliance Officer',
    'CEO',
    'Principal Officer',
  ];

  const containerStyle = {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.15)',
    marginTop: '30px',
  };

  const headingStyle = {
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
  };

  const tableStyle = {
    marginTop: '30px',
    borderCollapse: 'collapse',
    width: '100%',
  };

  const cellStyle = {
    verticalAlign: 'middle',
  };

  return (
    <div className="container" style={{ marginTop: '40px' }}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>
          GRIEVANCE REDRESSAL <span style={{ color: '#007bff' }}>MECHANISM</span>
        </h1>

        <div className="mb-4">
          <p style={{ textAlign: 'justify' }}>
            <b>
              As an organization which focuses on client delight and not just satisfaction, we offer the
              following process to redress complaints.
            </b>
          </p>

          <p style={{ textAlign: 'justify' }}>
            <b>Level 1:</b> Clients having complaints regarding any service may email us at{' '}
            <a href="mailto:info@eminentresearch.co.To" className="text-primary">
              info@eminentresearch.co.To
            </a>. We will respond within 5 working days.
          </p>

          <p style={{ textAlign: 'justify' }}>
            <b>Level 2:</b> If unsatisfied, escalate to our Compliance Officer at{' '}
            <a href="mailto:compliance@eminentresearch.co." className="text-primary">
              compliance@eminentresearch.co.
            </a>{' '}
            within 7 working days.
          </p>

          <p style={{ textAlign: 'justify' }}>
            <b>Level 3:</b> Still unsatisfied? Contact our Director at{' '}
            <a href="mailto:Director@eminentresearch.co." className="text-primary">
              Director@eminentresearch.co.
            </a>{' '}
            You will get a reply within 15 working days.
          </p>

          <p style={{ textAlign: 'justify' }}>
            <b>Level 4:</b> Approach SEBI at{' '}
            <a
              href="https://www.sebi.gov.in/www.scores.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              https://www.sebi.gov.in/www.scores.gov.in
            </a>
          </p>

          <p style={{ textAlign: 'justify' }}>
            <b>Level 5:</b> Final escalation through the ODR Portal at{' '}
            <a
              href="https://smartodr.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              https://smartodr.in
            </a>
          </p>

          <p className="text-muted" style={{ fontSize: '0.9rem' }}>
            Note: Complaints must follow the escalation level hierarchy. Only emails sent from registered
            contacts of paid clients will be considered valid.
          </p>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped" style={tableStyle}>
            <thead className="table-light">
              <tr>
                <th style={cellStyle}>Designation</th>
                <th style={cellStyle}>Contact Person</th>
                <th style={cellStyle}>Address</th>
                <th style={cellStyle}>Phone</th>
                <th style={cellStyle}>Email</th>
                <th style={cellStyle}>Working Hours</th>
              </tr>
            </thead>
            <tbody>
              {data.map((designation, i) => (
                <tr key={i}>
                  <td style={cellStyle}>{designation}</td>
                  <td style={cellStyle}>Shivangi Chandel</td>
                  <td style={cellStyle}>
                    28 Sarthak Nagar, C Sector, Ujjain, Madhya Pradesh, 456010
                  </td>
                  <td style={cellStyle}>9340546337</td>
                  <td style={cellStyle}>
                    <a
                      href="mailto:shivangi.chandel12@gmail.com"
                      className="text-primary"
                    >
                      shivangi.chandel12@gmail.com
                    </a>
                  </td>
                  <td style={cellStyle}>09:00 AM – 05:00 PM</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
