import React, { useState } from 'react';
import cup from "../../webassets/image/cup.png"

export default function BankDetails() {
  const banks = [
    { id: '20', name: 'YES BANK' },
  ];

  const [form, setForm] = useState({
    bankId: banks[0]?.id || '', // Initialize with first bank's ID
    name: '',
    mobile: '',
    email: '' // Added missing email field
  });

  const captchaCode = '7G4K2';

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.captcha && form.captcha.toUpperCase() !== captchaCode) {
      alert('Captcha is incorrect');
      return;
    }
    console.log('Submitted:', form);
  };

  const bankDetails = {
    '20': {
      img: "./yesbankbarcode.jpeg",
      bankName: 'YES BANK',
      holder: 'Devendra Sahu',
      acc: 'xxxxxxxxx',
      type: 'CURRENT ACCOUNT',
      branch: 'FREEGANJ, UJJAIN',
      ifsc: 'xxxxxxxxx',
    },
  };

  const chosen = bankDetails[form.bankId];

  const styles = {
    container: {
      maxWidth: '1000px',
      margin: 'auto',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      textAlign: 'center',
      fontSize: '3rem',
      textTransform: 'uppercase',
      marginBottom: '30px',
      color: '#2c3e50',
    },
    titleSpan: {
      color: '#198cc3',
    },
    form: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '67px',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      marginBottom: '30px',
    },
    input: {
      padding: '10px',
      fontSize: '1.3rem',
      borderRadius: '6px',
      border: '1px solid #ccc',
    },
    captchaGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    captchaBox: {
      backgroundColor: '#eeeeee',
      color: 'black',
      padding: '10px',
      fontFamily: 'monospace',
      fontSize: '1.9rem',
      borderRadius: '6px',
    },
    submitBtn: {
      gridColumn: '1 / -1',
      padding: '12px',
      border: 'none',
      backgroundColor: '#198cc3',
      color: 'white',
      fontSize: '2rem',
      borderRadius: '6px',
      cursor: 'pointer',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '20px',
      marginBottom: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableCell: {
      borderTop: '1px solid #eee',
      padding: '8px',
    },
    imageGallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '15px',
    },
    image: {
      width: '100%',
      borderRadius: '8px',
      boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        Get Bank <span style={styles.titleSpan}>Details</span>
      </h2>

      <form style={styles.form} onSubmit={handleSubmit}>
        <select
          name="bankId"
          value={form.bankId}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Choose Detail</option>
          {banks.map(b => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>

        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          name="mobile"
          placeholder="Mobile No"
          type="tel"
          value={form.mobile}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.submitBtn}>
          Submit
        </button>
      </form>

      {chosen && (
        <div style={styles.card}>
          <table style={styles.table}>
            <tbody>
              <tr>
                <td style={styles.tableCell}>Bank Name</td>
                <td style={styles.tableCell}>{chosen.bankName}</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>A/C Holder Name</td>
                <td style={styles.tableCell}>{chosen.holder}</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>A/C Number</td>
                <td style={styles.tableCell}>{chosen.acc}</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>Type</td>
                <td style={styles.tableCell}>{chosen.type}</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>Branch</td>
                <td style={styles.tableCell}>{chosen.branch}</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>IFSC</td>
                <td style={styles.tableCell}>{chosen.ifsc}</td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: 20 }}>
            <div style={styles.imageGallery}>
              <img src={chosen.img} alt="Doc" style={styles.image} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}