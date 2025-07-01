import React from 'react'

const ReportSection = () => {
    return (
        <>
            <div className="section section-contents section-pad image-on-right bg-light tbg">
                <div className="container">
                    <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        {/* Track Sheet Card */}
                        <div
                            className="col-md-4"
                            style={{
                                flex: '2 2 33%', // Adjust to 33% for 3 cards in a row
                                boxSizing: 'border-box',
                                marginBottom: '24px',
                                marginLeft: '-45px' // Add spacing between cards
                            }}
                        >
                            <h3 className="myhed">Track sheet</h3>
                            <div
                                className="bg-white"
                                style={{
                                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                                    padding: '24px 18px 18px 18px',
                                    marginBottom: '24px',
                                    background: '#fff',
                                    minHeight: 550,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    border: '1px solid #f0f0f0',
                                }}
                            >
                                <div className="col-sm-12" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {/* Mapping the track sheet links dynamically */}
                                    {[
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
                                    ].map((sheet, idx) => (
                                        <div className="col-sm-4 align-centre rlk" key={idx} style={{ padding: '8px' }}>
                                            <a href="#">
                                                <img src="webassets/image/excel1.png" style={{ height: '50px' }} alt={sheet} />
                                            </a>
                                            <a href={`uploads/tracksheet/${sheet}.xlsx`} className="sheets">
                                                <br /> <strong>{sheet}</strong>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <img src="webassets/image/box_shadow.png" alt="" style={{ width: '100%' }} />
                        </div>

                        {/* Reports Card */}
                        <div
                            className="col-md-4"
                            style={{
                                flex: '1 1 33%', // Adjust to 33% for 3 cards in a row
                                boxSizing: 'border-box',
                                marginBottom: '24px',
                                marginRight: '-20px',
                                marginLeft: '-20px' // Add spacing between cards
                            }}
                        >
                            <h3 className="myhed">Reports</h3>
                            <div
                                className="bg-white"
                                style={{
                                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                                    padding: '24px 18px 18px 18px',
                                    marginBottom: '24px',
                                    background: '#fff',
                                    minHeight: 550,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    border: '1px solid #f0f0f0',
                                }}
                            >
                                <div className="col-sm-12">
                                    {/* Reports content goes here */}
                                </div>
                            </div>
                            <img src="webassets/image/box_shadow.png" alt="" style={{ width: '100%' }} />
                        </div>

                        {/* Market Update Card */}
                        <div
                            className="col-md-4"
                            style={{
                                flex: '1 1 33%', // Adjust to 33% for 3 cards in a row
                                boxSizing: 'border-box',
                                marginBottom: '24px',
                                marginRight: '-45px', // Add spacing between cards
                            }}
                        >
                            <h3 className="myhed">Market Update</h3>
                            <style>
                                {`
                                    .marq .update-item {
                                        margin-bottom: 22px;
                                        padding-bottom: 0;
                                    }
                                    .marq .update-item:last-child {
                                        margin-bottom: 0;
                                    }
                                `}
                            </style>
                            <div
                                className="sidebar-widget services-category effect2 bg-white"
                                style={{
                                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                                    padding: '24px 18px 18px 18px',
                                    marginBottom: '24px',
                                    background: '#fff',
                                    minHeight: 550,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    border: '1px solid #f0f0f0',
                                }}
                            >
                                <marquee
                                    direction="up"
                                    scrollamount="3"
                                    width="100%"
                                    height="368px"
                                    style={{
                                        fontFamily: 'inherit',
                                        fontSize: '1.08rem',
                                        color: '#222',
                                        lineHeight: 1.7,
                                        paddingRight: 8,
                                    }}
                                >
                                    <div className="marq">
                                        <div className="update-item">
                                            CASH BUY SOBHA ABOVE 496 TARGET 500 / 505 / 510 STOPLOSS 490
                                        </div>
                                        <div className="update-item">
                                            FUTURE UPDATE : FEDERALBNK BUY CALL OUR FIRST TAREGET 83.20 ACHIEVED BOOK PARTIAL PROFIT
                                        </div>
                                        <div className="update-item">
                                            FUTURE PLATINUM UPDATE: BALKRISIND SELL CALL HITS OUR TARGET OF 1174 BOOK PLATINUM PROFIT
                                        </div>
                                        <div className="update-item">
                                            CASH SIGNATURE UPDATE:TIMETECHNO BUY CALL NEAR TO FINAL TARGET 134 BOOK FULL PROFIT
                                        </div>
                                    </div>
                                </marquee>
                            </div>
                            <img src="webassets/image/box_shadow.png" alt="" style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportSection;
