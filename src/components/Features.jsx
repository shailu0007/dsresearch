import React from 'react'

const Features = () => {
  return (
    <>
      <div className="clearfix"></div>
      <section className="service-section section-default" id="service">
        <style>
          {`
            @media (max-width: 767px) {
              .wpb_wrapper {
              margin-left: 1em !important;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
              .who-we-box {
                display: block !important;
                margin-left: auto !important;
                margin-right: auto !important;
                float: none !important;
              }
            }
          `}
        </style>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
              <h1 className="heading-section text-center">Our <span>Features</span> </h1>
            </div>
          </div>
          <div className="row">
            <div className="">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div
                      className="who-we-box pulse one"
                      style={{
                        display: 'inline-block',
                        marginTop: '40px',
                        borderRadius: '100px',
                        background: '#8c20ba',
                        width: '160px',
                        height: '160px'
                      }}
                    >
                      <h4 className="box-title"><strong>Leadership</strong> with Integrity</h4>
                    </div>
                    <div
                      className="who-we-box pulse two"
                      style={{
                        display: 'inline-block',
                        marginTop: '40px',
                        borderRadius: '100px',
                        background: '#ffd63b',
                        width: '160px',
                        height: '160px'
                      }}
                    >
                      <h4 className="box-title">Innovative <strong>Engineering</strong></h4>
                    </div>
                    <div
                      className="who-we-box pulse three"
                      style={{
                        display: 'inline-block',
                        marginTop: '40px',
                        borderRadius: '100px',
                        background: '#bd1533',
                        width: '160px',
                        height: '160px'
                      }}
                    >
                      <h4 className="box-title"><strong>Focus</strong> On Our Clients</h4>
                    </div>
                    <div
                      className="who-we-box pulse four"
                      style={{
                        display: 'inline-block',
                        marginTop: '40px',
                        borderRadius: '100px',
                        background: '#2750cc',
                        width: '160px',
                        height: '160px'
                      }}
                    >
                      <h4 className="box-title">High Quality <strong>Professionals</strong></h4>
                    </div>
                    <div
                      className="who-we-box pulse one"
                      style={{
                        display: 'inline-block',
                        marginTop: '40px',
                        borderRadius: '100px',
                        background: '#8c20ba',
                        width: '160px',
                        height: '160px'
                      }}
                    >
                      <h4 className="box-title"><strong>Leadership</strong> with Integrity</h4>
                    </div>
                    <div
                      className="who-we-box pulse two"
                      style={{
                        display: 'inline-block',
                        marginTop: '40px',
                        borderRadius: '100px',
                        background: '#ffd63b',
                        width: '160px',
                        height: '160px'
                      }}
                    >
                      <h4 className="box-title">Innovative <strong>Engineering</strong></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features