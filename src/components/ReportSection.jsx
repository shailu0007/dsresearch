import React from 'react'

const ReportSection = () => {
    return (
        <>
            {/* Reports Card */}
            <div className="col-md-4">
                <h3 className="myhed">Reports</h3>
                <div
                    className="bg-white"
                    style={{
                        // borderRadius: '16px',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                        padding: '24px 18px 18px 18px',
                        marginBottom: '24px',
                        background: '#fff',
                        minHeight: 420,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        border: '1px solid #f0f0f0'
                    }}
                >
                    <div className="col-sm-12">
                        {/* Reports content goes here */}
                    </div>
                </div>
                <img src="webassets/image/box_shadow.png" alt="" style={{ width: '100%' }} />
            </div>
            {/* Market Update Card */}
            <div className="col-md-4">
                <h3 className="myhed">Market Update </h3>
                <div
                    className="sidebar-widget services-category effect2 bg-white"
                    style={{
                        // borderRadius: '16px',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                        padding: '24px 18px 18px 18px',
                        marginBottom: '24px',
                        background: '#fff',
                        minHeight: 420,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        border: '1px solid #f0f0f0'
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
                            <p></p><p><p>CASH BUY SOBHA ABOVE 496 TARGET 500 / 505 / 510 STOPLOSS 490</p>
                            </p>
                            <br />

                            <p></p>
                            <p></p><p><p>FUTURE UPDATE : FEDERALBNK BUY CALL OUR FIRST TAREGET 83.20 ACHIEVED BOOK PARTIAL PROFIT</p>
                            </p>
                            <br />

                            <p></p>
                            <p></p><p><p>FUTURE PLATINUM UPDATE: BALKRISIND SELL CALL HITS OUR TARGET OF 1174 BOOK PLATINUM PROFIT</p>
                            </p>
                            <br />

                            <p></p>
                            <p></p><p><p>CASH SIGNATURE UPDATE:TIMETECHNO BUY CALL NEAR TO FINAL TARGET 134 BOOK FULL PROFIT</p>
                            </p>
                            <br />

                            <p></p>
                        </div>

                    </marquee>
                </div>
                <img src="webassets/image/box_shadow.png" alt="" style={{ width: '100%' }} />

            </div>
        </>
    )
}

export default ReportSection