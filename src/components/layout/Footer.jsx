import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-contact new-contact-sebi">
        <div className="row">
          <div className="col-sm-12" style={{ marginBottom: 30 }}>
            <h5 className="mar-b-10 text-center"><b>D.S research   Investment Adviser (D.S Researech Investment Advisor)</b></h5>
            <p className="text-center">SEBI Registered Investment Advisers Registration No. INH000017824</p>
            <p className="text-center">(Type of Registration- Individual, Validity of Registration- 20.03.2018 to Perpetual)</p>
            <p className="text-center">Address : 10/4-6,II Floor,Kalidas Marg,Maxi Road,Freeganj,Ujjain (M.P), Ujjain (M.P.) 456001</p>
            <p className="text-center">Contact No : +91 8959322387</p>
            <p className="text-center">Email : info@dsresearch.live</p>
            <p className="text-center">SEBI regional/local office address : Indore Local Office</p>
            <p className="text-center">10/4-6,II Floor,Kalidas Marg,Maxi Road,Freeganj,Ujjain (M.P)</p>
            <p className="text-center">Tel. Board : N/A</p>
            <p className="text-center">E-mail : indore-lo@sebi.gov.in</p>
          </div>
        </div>
      </div>
      <div className="main-footer">
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="mar-b-30">
              <h4 className="mar-b-20"><b>About us</b></h4>
              <p className="mar-tb-10">
                <strong>D.S Researech Investment Researcher</strong>&nbsp;is an SEBI registered&nbsp;one of the leading Stock Advisory Company in Stock and Commodity Market. Our strong hold in providing the most accurate Tips makes us stand apart from our competitors.<br />
                <strong>D.S Researech Investment Researcher</strong>
              </p>
              <Link className="read-more-btn" to={"aboutus"}><b>READ MORE</b></Link>
            </div>
            <div className="sebi">
              <ul>
                <li><img src="assets/img/ISO-Logo1.png" alt="" /></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <h4 className="mar-b-20"><b>important link</b></h4>
            <ul className="footer-link mar-b-30 mar-r-20">
              <li><Link to={"TermConditions"}>Terms &amp; Condition</Link></li>
              <li><Link to={"privacypolicy"}>Privacy Policy</Link></li>
              <li><Link to={"disclaimer"}>Disclaimer</Link></li>
              <li><Link to={"faq"}>FAQ</Link></li>
              <li><Link to={"disclosure"}>disclosure</Link></li>
              <li><Link to={"investor"}>Investor Charter</Link></li>
            </ul>
            <div className="clearfix"></div>
          </div>
          <div className="col-sm-2 col-md-2">
            <h4 className="mar-b-20"><b>Quick links</b></h4>
            <ul className="footer-link mar-b-30 mar-r-20">
              <li><Link to={"index"}>Home</Link></li>
              <li><Link to={"services"}>service</Link></li>
              <li><Link to={"kyc"}>KYC Form</Link></li>
              <li><Link to={"career"}>Career</Link></li>
              <li><Link to={"complaint_data"}>complaint data</Link></li>
            </ul>
            <div className="clearfix"></div>
          </div>
          <div className="col-sm-3 col-md-3 padAdd">
            <h4 className="mar-b-20"><b>Services</b></h4>
            <ul className="footer-link mar-b-30 mar-r-20">
              <li><Link to={"/services/stock-future-regular"}>Stock Future Regular</Link></li>
              <li><Link to={"/services/journal-services"}>Journal Services</Link></li>
              <li><Link to={"/services/index-expiry-special"}>Index Expiry Special</Link></li>
              <li><Link to={"/services/index-platinum"}>Index Platinum</Link></li>
              <li><Link to={"/services/all-agri-product"}>All Agri Product</Link></li>
              <li><Link to={"/services/all-mcx"}>ALL MCX</Link></li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      <div className="footer-contact" style={{ marginTop: 50, marginBottom: 50 }}>
        <div className="row">
          <div className="col-sm-5">
            <div className="footer-contact-area mar-b-30">
              <div className="left-area"><i className="fa fa-home"></i></div>
              <div className="right-area">
                <h5 className="mar-b-10"><b>Visit Us</b></h5>
                <p>D.S Researech Investment Researcher, 10/4-6,II Floor,Kalidas Marg,Maxi Road,Freeganj,Ujjain (M.P),  Ujjain (MP) 456001</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer-contact-area mar-b-30">
              <div className="left-area"><i className="fa fa-phone"></i></div>
              <div className="right-area">
                <h5 className="mar-b-10"><b>Call Us</b></h5>
                <p>83700-39800</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="footer-contact-area mar-b-30">
              <div className="left-area"><i className="fa fa-envelope"></i></div>
              <div className="right-area">
                <h5 className="mar-b-10"><b>Mail Us</b></h5>
                <p>info@dsresearch.live</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-icons-wrapper">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <ul className="social-icons">
              <li>
                <Link className="facebook box-shadow-light" to="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i><span></span></Link>
              </li>
              <li>
                <Link className="twitter box-shadow-light" to="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i><span></span></Link>
              </li>
              <li>
                <Link className="google box-shadow-light" to="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"></i><span></span></Link>
              </li>
              <li>
                <Link className="linkedin box-shadow-light" to="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i><span></span></Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6">
            <h6 className="title">Subscribe to our news letter</h6>
            <div className="subscribe-form mar-b-30">
              <form method="post" id="news_letter" noValidate name="myForms">
                <input type="email" name="email" placeholder="Email" required id="emailfreew1" />
                <button type="button">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">© 2018 all rights reserved D.S Researech.co</p>
    </div>
  </footer>
)

export default Footer