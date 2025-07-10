import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <header className="site-header header-s1 is-sticky">
        {/* Topbar */}
        <div className="topbar">
          <div className="container containerChange">
            <div className="row">
              <div className="top-aside top-left">
                <ul className="top-nav">
                  <li>
                    <a href="https://eminentresearch.co/msg/" target="_blank" rel="noopener noreferrer">
                      CLIENT LOGIN
                    </a>
                  </li>
                  <li>
                    <a href="offerszone.html">OFFERS ZONE</a>
                  </li>
                </ul>
              </div>
              <div className="top-aside top-right clearfix">
                <ul className="top-contact clearfix">
                  <li className="t-email t-email1">
                    <em className="fa fa-envelope-o" aria-hidden="true"></em>
                    <span>
                      <a href="https://eminentresearch.co/msg/" target="_blank" rel="noopener noreferrer">
                        info@eminentresearch.co
                      </a>
                    </span>
                  </li>
                  <li className="t-phone t-phone1">
                    <em className="fa fa-phone" aria-hidden="true"></em>
                    <span>+91-93405-46337</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Responsive style for top-contact */}
        <style>{`
          @media (max-width: 767px) {
            .top-contact {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              gap: 6px;
              padding: 0;
              margin: 0;
            }
            .top-contact li {
              width: 100%;
              text-align: center;
              font-size: 14px;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .top-contact em {
              margin-right: 6px;
            }
          }
        `}</style>
        {/* Only show desktop table above slider */}
        {!isMobile && (
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div
                style={{
                  overflowX: 'auto',
                  marginTop: 30,
                  position: "absolute",
                  top: 50,
                  width: "100%",
                  zIndex: 999,
                  display: 'block'
                }}
                className="complaints-table-desktop"
              >
                <table
                  className="table table-bordered"
                  style={{
                    background: "#0000007d",
                    color: "#fff",
                    textAlign: "center",
                    minWidth: 600
                  }}
                >
                  <thead>
                    <tr>
                      <th colSpan={5} className="text-center">
                        Number Of Complaints
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th style={{ fontSize: 12 }}>At The Beginning Of The Month</th>
                      <th style={{ fontSize: 12 }}>Received During The Month</th>
                      <th style={{ fontSize: 12 }}>Resolved During The Month</th>
                      <th style={{ fontSize: 12 }}>Pending At The End Of The Month</th>
                      <th style={{ fontSize: 12 }}>Reasons For Pendency</th>
                    </tr>
                    <tr>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>NA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {/* Responsive table placement logic */}
        <style>{`
          @media (max-width: 767px) {
            .complaints-table-desktop { display: none !important; }
          }
          @media (min-width: 768px) {
            .complaints-table-desktop { display: block !important; }
          }
        `}</style>
        <div id="slider" className="banner banner-slider carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="item active">
              <div
                className="fill"
                style={{
                  backgroundImage: "url('uploads/slider/1718961418cryptocurrency-trading-chart-closeup-photo.jpg')"
                }}
              >
                <div className="banner-content">
                  <div className="container">
                    <div className="row">
                      <div className="banner-text al-center pos-center light">
                        <h2 className="with-line ucap">Welcome To D.S Researech Research</h2>
                        <p>
                          We are highly regarded throughout the industry for providing innovative Financial solutions, maintaining strong professional relationships and delivering rewarding high quality outcomes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="fill"
                style={{
                  backgroundImage: "url('uploads/slider/SATISFACTION.jpg')"
                }}
              >
                <div className="banner-content">
                  <div className="container">
                    <div className="row">
                      <div className="banner-text al-center pos-center light">
                        <h2 className="with-line ucap">Welcome To D.S Researech Research</h2>
                        <p>SERVICE LEVEL SATISFACTORY&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="fill"
                style={{
                  backgroundImage: "url('uploads/slider/1718961201business-concept-with-graphic-holography.jpg')"
                }}
              >
                <div className="banner-content">
                  <div className="container">
                    <div className="row">
                      <div className="banner-text al-center pos-center light">
                        <h2 className="with-line ucap"></h2>
                        <p>
                          D.S Researech Investment Advisor is a trusted name in the financial services arena we are Sebi Registered top Leading Advisory Services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="fill"
                style={{
                  backgroundImage: "url('uploads/slider/1718960242pngtree-bull-vs-bear-a-stock-market-battle-in-3d-illustration-image_3793875.jpg')"
                }}
              >
                <div className="banner-content">
                  <div className="container">
                    <div className="row">
                      <div className="banner-text al-center pos-center light">
                        <h2 className="with-line ucap">Confusion ? BULL or BEAR ?</h2>
                        <p>
                          Accurate Tips Coupled With Timely Delivery Gives You The Maximum Return On Your Investment&nbsp;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="fill"
                style={{
                  backgroundImage: "url('uploads/slider/17189610526233237.jpg')"
                }}
              >
                <div className="banner-content">
                  <div className="container">
                    <div className="row">
                      <div className="banner-text al-center pos-center light">
                        <h2 className="with-line ucap">let's Win together </h2>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#slider" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#slider" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* Only show mobile table below slider */}
        {isMobile && (
          <div className="row">
            <div className="col-xs-12">
              <div
                style={{
                  overflowX: 'auto',
                  margin: '16px 0',
                  position: "static",
                  width: "100%",
                  zIndex: 999,
                  display: 'block'
                }}
                className="complaints-table-mobile"
              >
                <table
                  className="table table-bordered"
                  style={{
                    background: "#0000007d",
                    color: "#fff",
                    textAlign: "center",
                    minWidth: 600
                  }}
                >
                  <thead>
                    <tr>
                      <th colSpan={5} className="text-center">
                        Number Of Complaints
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th style={{ fontSize: 12 }}>At The Beginning Of The Month</th>
                      <th style={{ fontSize: 12 }}>Received During The Month</th>
                      <th style={{ fontSize: 12 }}>Resolved During The Month</th>
                      <th style={{ fontSize: 12 }}>Pending At The End Of The Month</th>
                      <th style={{ fontSize: 12 }}>Reasons For Pendency</th>
                    </tr>
                    <tr>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>NA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        <div className="serviceFix">
          <a href="https://wa.me/+919340546337" target="_blank" rel="noopener noreferrer">
            <img src="webassets/image/approval.png" alt="" />
            +91-93405-46337
          </a>
        </div>
        <Navbar />
      </header>
    </>
  )
}

export default Header