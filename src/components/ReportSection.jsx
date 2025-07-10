import React from 'react';

const ReportSection = () => {
  const trackSheetData = [
    'Stock Cash Regular',
    'Stock Cash Signature',
    'Stock Cash Positional',
    'Stock Option Regular',
    'Stock Option Signature',
    'Stock Future Regular',
    'Stock Future Signature',
    'Stock Future Positional',
    'Nifty Finance',
    'Index Option',
    'Index Future',
    'All Mcx',
  ];

  const marketUpdates = [
    'CASH BUY SOBHA ABOVE 496 TARGET 500 / 505 / 510 STOPLOSS 490',
    'FUTURE UPDATE : FEDERALBNK BUY CALL OUR FIRST TAREGET 83.20 ACHIEVED BOOK PARTIAL PROFIT',
    'FUTURE PLATINUM UPDATE: BALKRISIND SELL CALL HITS OUR TARGET OF 1174 BOOK PLATINUM PROFIT',
    'CASH SIGNATURE UPDATE:TIMETECHNO BUY CALL NEAR TO FINAL TARGET 134 BOOK FULL PROFIT',
  ];

  const sectionStyle = {
    background: 'linear-gradient(to right, #ffffff 30%,#ffffff 80%)',
    padding: '3rem 0',
    minHeight: 'auto'
  };

  const containerStyle = {
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const cardsRowStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'start'
  };

  const cardContainerStyle = {
    width: '100%'
  };

  const headingStyle = {
    fontSize: '2.875rem',
    fontWeight: 'bold',
    color: '#193cc8',
    marginBottom: '1.5rem',
    textAlign: 'center',
    borderBottom: '2px solid rgb(44, 45, 46)',
  };

  const cardStyle = {
    width: '100%',
    backgroundColor: '#eeeeee',
    borderRadius: '0.75rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    border: '1px solid #e5e7eb',
    height: '400px',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  };

  const trackSheetGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '0.75rem',
    height: '70%',
    overflowY: 'auto',
    paddingRight: '0.5rem'
  };

  const trackSheetItemStyle = {
    textAlign: 'center',
    padding: '0.5rem',
    borderRadius: '0.5rem',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer'
  };

  const trackSheetIconContainerStyle = {
    width: '3rem',
    height: '3rem',
    margin: '0 auto 0.5rem',
    backgroundColor: '#dcfce7',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease'
  };

  const trackSheetLinkStyle = {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#374151',
    textDecoration: 'none',
    display: 'block',
    lineHeight: '1.25',
    transition: 'color 0.3s ease'
  };

  const reportsContentStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6b7280'
  };

  const reportsIconContainerStyle = {
    width: '5rem',
    height: '5rem',
    backgroundColor: '#f3f4f6',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem'
  };

  const reportsTextStyle = {
    fontSize: '1.125rem',
    fontWeight: '500',
    marginBottom: '0.5rem'
  };

  const reportsSubTextStyle = {
    fontSize: '0.875rem',
    color: '#9ca3af',
    textAlign: 'center'
  };

  const marketUpdateContainerStyle = {
    height: '100%',
    position: 'relative',
    overflow: 'hidden'
  };

  const marqueeContainerStyle = {
    height: '100%',
    overflow: 'hidden',
    position: 'relative'
  };

  const marqueeContentStyle = {
    animation: 'scroll-up 25s linear infinite',
    paddingRight: '0.5rem'
  };

  const updateItemStyle = {
    marginBottom: '1rem',
    padding: '0.75rem',
    background: 'linear-gradient(to right, #dbeafe, #e0e7ff)',
    borderRadius: '0.5rem',
    borderLeft: '4px solid #3b82f6',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease'
  };

  const updateTextStyle = {
    fontSize: '0.875rem',
    color: '#374151',
    lineHeight: '1.5',
    fontWeight: '500',
    margin: '0'
  };

  const gradientTopStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    height: '2rem',
    background: 'linear-gradient(to bottom, #ffffff, transparent)',
    pointerEvents: 'none',
    zIndex: '1'
  };

  const gradientBottomStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    height: '2rem',
    background: 'linear-gradient(to top, #ffffff, transparent)',
    pointerEvents: 'none',
    zIndex: '1'
  };

  // Media queries styles
  const mediaQueries = `
    @media (max-width: 768px) {
      .section {
        padding: 2rem 0 !important;
      }
      .container {
        padding: 0 1rem !important;
      }
      .cards-row {
        grid-template-columns: 1fr !important;
        gap: 3.5rem !important;
      }
      .card {
        height: 480px !important;
        padding: 3rem !important;
      }
      .heading {
        font-size: 1.5rem !important;
        margin-bottom: 1rem !important;
      }
      .track-sheet-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 0.5rem !important;
      }
      .track-sheet-item {
        padding: 0.25rem !important;
      }
      .track-sheet-icon {
        width: 2.5rem !important;
        height: 2.5rem !important;
      }
      .track-sheet-link {
        font-size: 0.625rem !important;
      }
      .reports-icon-container {
        width: 4rem !important;
        height: 4rem !important;
      }
      .reports-text {
        font-size: 1rem !important;
      }
      .update-item {
        padding: 0.5rem !important;
        margin-bottom: 0.75rem !important;
      }
      .update-text {
        font-size: 0.75rem !important;
      }
      .marquee-content {
        animation-duration: 20s !important;
      }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      .cards-row {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      .card {
        height: 450px !important;
      }
      .heading {
        font-size: 1.75rem !important;
      }
    }

    @media (min-width: 1025px) {
      .cards-row {
        grid-template-columns: repeat(3, 1fr) !important;
      }
    }

    @keyframes scroll-up {
      0% {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(-100%);
      }
    }

    .marquee-content:hover {
      animation-play-state: paused;
    }

    .track-sheet-item:hover {
      background-color: #f9fafb;
    }

    .track-sheet-item:hover .track-sheet-icon {
      background-color: #bbf7d0;
    }

    .track-sheet-item:hover .track-sheet-link {
      color: #2563eb;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .update-item:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  `;

  return (
    <>
      <style>{mediaQueries}</style>
      <div className="section" style={sectionStyle}>
        <div className="container" style={containerStyle}>
          <div className="cards-row" style={cardsRowStyle}>
            
            {/* Track Sheet Card */}
            <div style={cardContainerStyle}>
              
              <div className="card" style={cardStyle}>
                <h3 className="heading" style={headingStyle}>
                Track Sheet
              </h3>
                <div className="track-sheet-grid" style={trackSheetGridStyle}>
                  {trackSheetData.map((sheet, idx) => (
                    <div
                      key={idx}
                      className="track-sheet-item"
                      style={trackSheetItemStyle}
                    >
                      <div className="track-sheet-icon" style={trackSheetIconContainerStyle}>
                        <svg 
                          style={{ width: '1.5rem', height: '1.5rem', color: '#16a34a' }}
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                        </svg>
                      </div>
                      <a
                        href={`uploads/tracksheet/${sheet}.xlsx`}
                        className="track-sheet-link"
                        style={trackSheetLinkStyle}
                        download
                      >
                        {sheet}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reports Card */}
            <div style={cardContainerStyle}>
           
              <div className="card" style={cardStyle}>
                   <h3 className="heading" style={headingStyle}>
                Reports
              </h3>
                <div style={reportsContentStyle}>
                  <div className="reports-icon-container" style={reportsIconContainerStyle}>
                    <svg 
                      style={{ width: '3rem', height: '3rem', color: '#9ca3af' }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                  </div>
                  <p className="reports-text" style={reportsTextStyle}>Reports Coming Soon</p>
                  <p style={reportsSubTextStyle}>
                    Comprehensive trading reports will be available here
                  </p>
                </div>
              </div>
            </div>

            {/* Market Update Card */}
            <div style={cardContainerStyle}>
              
              <div className="card" style={cardStyle}>
                <h3 className="heading" style={headingStyle}>
                Market Update
              </h3>
                <div style={marketUpdateContainerStyle}>
                  <div style={marqueeContainerStyle}>
                    <div className="marquee-content" style={marqueeContentStyle}>
                      <div style={{ paddingBottom: '2rem' }}>
                        {[...marketUpdates, ...marketUpdates, ...marketUpdates].map((update, idx) => (
                          <div
                            key={idx}
                            className="update-item"
                            style={updateItemStyle}
                          >
                            <p className="update-text" style={updateTextStyle}>
                              {update}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div style={gradientTopStyle}></div>
                  <div style={gradientBottomStyle}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportSection;