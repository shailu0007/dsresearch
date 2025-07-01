import React from 'react'
import ReportSection from './ReportSection'

const Services = () => {
    return (<>
        {/* Responsive CSS for mobile only, no desktop interference */}
        <style>
            {`
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
            `}
        </style>
        <div className="clearfix"></div>
        <section className="services-section">
            <div className="auto-container">
                <div className="sec-title centered">
                    <h1 className="heading-section">Our Best <span>Services</span> </h1>
                </div>
                <div className="row clearfix">
                    <div className="left-column pull-left col-md-5 col-sm-6 col-xs-12">

                        <div className="services-block wow zoomIn">
                            <div className="inner-box">
                                <div className="icon-boxx">
                                    <span className="icon"><img src="webassets/image/bar-chart.png" alt="" /></span>
                                </div>
                                <h3><a href="our_service/show_service/stock-future-regular.html">Stock Future Regular</a></h3>
                                <div className="text"><a href="our_service/show_service/stock-future-regular.html">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></a> </div>
                            </div>
                        </div>


                        <div className="services-block wow zoomIn">
                            <div className="inner-box">
                                <div className="icon-boxx">
                                    <span className="icon"><img src="webassets/image/pie-chart.png" alt="" /></span>
                                </div>
                                <h3><a href="our_service/show_service/journal-services.html">Journal Services</a></h3>
                                <div className="text">test<a href="our_service/show_service/journal-services.html">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></a> </div>
                            </div>
                        </div>


                        <div className="services-block wow zoomIn">
                            <div className="inner-box">
                                <div className="icon-boxx">
                                    <span className="icon"><img src="webassets/image/profits.png" alt="" /></span>
                                </div>
                                <h3><a href="our_service/show_service/index-expiry-special.html">Index Expiry Special</a></h3>
                                <div className="text">Weekly nifty Expiry Calls<a href="our_service/show_service/index-expiry-special.html">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></a> </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-column pull-right col-md-5 col-sm-6 col-xs-12">

                        <div className="services-block wow zoomIn">
                            <div className="inner-box">
                                <div className="icon-boxx">
                                    <span className="icon"><img src="webassets/image/analytics.png" alt="" /></span>
                                </div>
                                <h3><a href="our_service/show_service/index-platinum.html">Index Platinum</a></h3>
                                <div className="text">1. In this Services We Re<a href="our_service/show_service/index-platinum.html">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></a> </div>
                            </div>
                        </div>

                        <div className="services-block wow zoomIn">
                            <div className="inner-box">
                                <div className="icon-boxx">
                                    <span className="icon"><img src="webassets/image/graphic.png" alt="" /></span>
                                </div>
                                <h3><a href="our_service/show_service/all-agri-product.html">All Agri Product</a></h3>
                                <div className="text">Our team keeps an eye on <a href="our_service/show_service/all-agri-product.html">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></a> </div>
                            </div>
                        </div>

                        <div className="services-block wow zoomIn">
                            <div className="inner-box">
                                <div className="icon-boxx">
                                    <span className="icon"><img src="webassets/image/chart.png" alt="" /></span>
                                </div>
                                <h3><a href="our_service/show_service/all-mcx.html">ALL MCX</a></h3>
                                <div className="text">Many people are not aware<a href="our_service/show_service/all-mcx.html">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></a> </div>
                            </div>
                        </div>
                    </div>
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
                                className=""
                                style={{
                                    borderRadius: '50%',
                                    width: '180px',
                                    height: '180px',
                                    zIndex: -1,
                                    position: 'static',
                                    maxWidth: '100%'
                                }}
                                src="webassets/image/about.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="section section-contents section-pad image-on-right bg-light tbg">
            <div className="container">
                <div className="row">
                    <div
                        className="col-md-4"
                        style={{
                            flex: '1 1 100%',
                            maxWidth: '100%',
                            minWidth: 0,
                            boxSizing: 'border-box',
                        }}
                    >
                        <h3 className="myhed">Track sheet </h3>
                        <div
                            className="bg-white"
                            style={{
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
                                <div className="col-sm-4 align-centre rlk">
                                    <a href="#">
                                        <img src="webassets/image/excel1.png" style={{ height: '50px' }} onClick={() => openModal(55)} />
                                    </a>
                                    <a href="uploads/tracksheet/1749035329Stock%20Cash%20Regular.xlsx" className="sheets">
                                        <br /> <strong>Stock Cash Regular</strong>
                                    </a>
                                </div>
                                <div className="col-sm-4 align-centre rlk">
                                    <a href="#">
                                        <img src="webassets/image/excel1.png" style={{ height: '50px' }} onClick={() => openModal(55)} />
                                    </a>
                                    <a href="uploads/tracksheet/1749035310Stock%20Cash%20Signature.xlsx" className="sheets">
                                        <br /> <strong>stock Cash Signature</strong>
                                    </a>
                                </div>
                                <div className="col-sm-4 align-centre rlk">
                                    <a href="#">
                                        <img src="webassets/image/excel1.png" style={{ height: '50px' }} onClick={() => openModal(55)} />
                                    </a>
                                    <a href="uploads/tracksheet/1749035239Stock%20Cash%20Positional.xlsx" className="sheets">
                                        <br /> <strong>Stock Cash Positional</strong>
                                    </a>
                                </div>
                                <div className="col-sm-4 align-centre rlk">
                                    <a href="#">
                                        <img src="webassets/image/excel1.png" style={{ height: '50px' }} onClick={() => openModal(55)} />
                                    </a>
                                    <a href="uploads/tracksheet/1749035225Stock%20Option%20Regular.xlsx" className="sheets">
                                        <br /> <strong>Stock Option Regular</strong>
                                    </a>
                                </div>
                                <div className="col-sm-4 align-centre rlk">
                                    <a href="#">
                                        <img src="webassets/image/excel1.png" style={{ height: '50px' }} onClick={() => openModal(55)} />
                                    </a>
                                    <a href="uploads/tracksheet/1749035186Stock%20Option%20Signature.xlsx" className="sheets">
                                        <br /> <strong>Stock Option Signature</strong>
                                    </a>
                                </div>
                                <div className="col-sm-4 align-centre rlk">
                                    <a href="#">
                                        <img src="webassets/image/excel1.png" style={{ height: '50px' }} onClick={() => openModal(55)} />
                                    </a>
                                    <a href="uploads/tracksheet/1749035168Stock%20Future%20Regular.xlsx" className="sheets">
                                        <br /> <strong>Stock Future Regular</strong>
                                    </a>
                                </div>
                                <div className="col-sm-4 align-centre rlk">
                                    <a href="#">
                                        <img src="webassets/image/excel1.png" style={{ height: '50px' }} onClick={() => openModal(55)} />
                                    </a>
                                    <a href="uploads/tracksheet/1749035149Stock%20Future%20Signature.xlsx" className="sheets">
                                        <br /> <strong>Stock Future Signature</strong>
                                    </a>
                                </div>
                                <div className="col-sm-4 align-centre rlk">
                                    <a href="#">
                                        <img src="webassets/image/excel1.png" style={{ height: '50px' }} onClick={() => openModal(55)} />
                                    </a>
                                    <a href="uploads/tracksheet/1749035115Stock%20Future%20Positional.xlsx" className="sheets">
                                        <br /> <strong>Stock Future Positional</strong>
                                    </a>
                                </div>
                                <div className="col-sm-4 align-centre rlk">
                                    <a href="#">
                                        <img src="webassets/image/excel1.png" style={{ height: '50px' }} onClick={() => openModal(55)} />
                                    </a>
                                    <a href="uploads/tracksheet/1749035032Nifty%20Finance.xlsx" className="sheets">
                                        <br /> <strong>Nifty Finance</strong>
                                    </a>
                                </div>
                                <div className="col-sm-4 align-centre rlk">
                                    <a href="#">
                                        <img src="webassets/image/excel1.png" style={{ height: '50px' }} onClick={() => openModal(55)} />
                                    </a>
                                    <a href="uploads/tracksheet/1749035014Index%20Option.xlsx" className="sheets">
                                        <br /> <strong>Index Option</strong>
                                    </a>
                                </div>
                                <div className="col-sm-4 align-centre rlk">
                                    <a href="#">
                                        <img src="webassets/image/excel1.png" style={{ height: '50px' }} onClick={() => openModal(55)} />
                                    </a>
                                    <a href="uploads/tracksheet/1749034997Index%20Future.xlsx" className="sheets">
                                        <br /> <strong>Index Future</strong>
                                    </a>
                                </div>
                                <div className="col-sm-4 align-centre rlk">
                                    <a href="#">
                                        <img src="webassets/image/excel1.png" style={{ height: '50px' }} onClick={() => openModal(55)} />
                                    </a>
                                    <a href="uploads/tracksheet/1749034981All%20Mcx.xlsx" className="sheets">
                                        <br /> <strong>All Mcx</strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <img src="image/box_shadow.html" alt="" style={{ width: '100%' }} />
                    </div>
                    <ReportSection />
                </div>
            </div>
        </div>
    </>
    )
}

export default Services