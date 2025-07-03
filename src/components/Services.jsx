import React from 'react';
import ReportSection from './ReportSection';

const Services = () => {
  // Placeholder for openModal function (adjust as per actual modal functionality)
  const openModal = (id) => {
    alert(`Open modal with ID: ${id}`);
  };

  return (
    <>
      {/* Embedded CSS for mobile responsiveness */}
      <style>{`
        @media (max-width: 767px) {
          .services-section .row,
          .section-contents .row {
            display: block !important;
            flex-direction: column !important;
            gap: 0 !important;
          }
          .left-column,
          .right-column,
          .bulb-box,
          .col-md-4 {
            max-width: 100% !important;
            min-width: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            width: 100% !important;
            float: none !important;
          }
          .bulb-box .mn-img img {
            width: 180px !important;
            height: 180px !important;
            position: static !important;
          }
          .services-block {
            margin-bottom: 24px;
          }
          .bg-white {
            min-height: unset !important;
          }
        }

        @media only screen and (max-width: 767px) {
          .bulb-box {
            display: none;
          }
        }

        .align-centre {
          text-align: center;
          margin-bottom: 16px;
        }

        .rlk a.sheets {
          color: #333;
          text-decoration: none;
          font-weight: 600;
        }
        .rlk a.sheets:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="clearfix"></div>

      {/* Services Section */}
      <section className="services-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <h1 className="heading-section">
              Our Best <span>Services</span>
            </h1>
          </div>

          <div className="row clearfix">
            {/* Left Column - Services Block */}
            <div className="left-column pull-left col-md-5 col-sm-6 col-xs-12">
              {/* Service Block 1 */}
              <div className="services-block wow zoomIn">
                <div className="inner-box">
                  <div className="icon-boxx">
                    <span className="icon">
                      <img src="webassets/image/bar-chart.png" alt="" />
                    </span>
                  </div>
                  <h3>
                    <a href="our_service/show_service/stock-future-regular.html">
                      Stock Future Regular
                    </a>
                  </h3>
                  <div className="text">
                    <a href="our_service/show_service/stock-future-regular.html">
                      Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    </a>{' '}
                  </div>
                </div>
              </div>

              {/* Service Block 2 */}
              <div className="services-block wow zoomIn">
                <div className="inner-box">
                  <div className="icon-boxx">
                    <span className="icon">
                      <img src="webassets/image/pie-chart.png" alt="" />
                    </span>
                  </div>
                  <h3>
                    <a href="our_service/show_service/journal-services.html">Journal Services</a>
                  </h3>
                  <div className="text">
                    test{' '}
                    <a href="our_service/show_service/journal-services.html">
                      Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    </a>{' '}
                  </div>
                </div>
              </div>

              {/* Service Block 3 */}
              <div className="services-block wow zoomIn">
                <div className="inner-box">
                  <div className="icon-boxx">
                    <span className="icon">
                      <img src="webassets/image/profits.png" alt="" />
                    </span>
                  </div>
                  <h3>
                    <a href="our_service/show_service/index-expiry-special.html">
                      Index Expiry Special
                    </a>
                  </h3>
                  <div className="text">
                    Weekly nifty Expiry Calls{' '}
                    <a href="our_service/show_service/index-expiry-special.html">
                      Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    </a>{' '}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Services Block */}
            <div className="right-column pull-right col-md-5 col-sm-6 col-xs-12">
              {/* Service Block 4 */}
              <div className="services-block wow zoomIn">
                <div className="inner-box">
                  <div className="icon-boxx">
                    <span className="icon">
                      <img src="webassets/image/analytics.png" alt="" />
                    </span>
                  </div>
                  <h3>
                    <a href="our_service/show_service/index-platinum.html">Index Platinum</a>
                  </h3>
                  <div className="text">
                    1. In this Services We Re{' '}
                    <a href="our_service/show_service/index-platinum.html">
                      Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    </a>{' '}
                  </div>
                </div>
              </div>

              {/* Service Block 5 */}
              <div className="services-block wow zoomIn">
                <div className="inner-box">
                  <div className="icon-boxx">
                    <span className="icon">
                      <img src="webassets/image/graphic.png" alt="" />
                    </span>
                  </div>
                  <h3>
                    <a href="our_service/show_service/all-agri-product.html">All Agri Product</a>
                  </h3>
                  <div className="text">
                    Our team keeps an eye on{' '}
                    <a href="our_service/show_service/all-agri-product.html">
                      Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    </a>{' '}
                  </div>
                </div>
              </div>

              {/* Service Block 6 */}
              <div className="services-block wow zoomIn">
                <div className="inner-box">
                  <div className="icon-boxx">
                    <span className="icon">
                      <img src="webassets/image/chart.png" alt="" />
                    </span>
                  </div>
                  <h3>
                    <a href="our_service/show_service/all-mcx.html">ALL MCX</a>
                  </h3>
                  <div className="text">
                    Many people are not aware{' '}
                    <a href="our_service/show_service/all-mcx.html">
                      Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    </a>{' '}
                  </div>
                </div>
              </div>
            </div>

            {/* Bulb Box */}
            <div className="bulb-box wow zoomIn">
              <div className="image-column">
                <img
                  src="webassets/image/ser.png"
                  alt=""
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <div className="mn-img">
                <img
                  style={{
                    borderRadius: '50%',
                    width: '275px',
                    height: '285px',
                    zIndex: -1,
                    position: 'static',
                    maxWidth: '100%',
                    marginTop: '26px',
                    marginLeft: '26px',
                  }}
                  src="webassets/image/about.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

   
   <ReportSection />
    </>
  );
};

export default Services;
