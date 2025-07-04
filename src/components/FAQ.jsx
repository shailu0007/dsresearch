import React from 'react';

const FAQ = () => {
  return (
    <>
      <h2 className="heading-section text-center">FAQ</h2>

      <div className="container">
        <div className="bgWhite01 padBoth15 padTopBot15">
          <div className="row">
            <div className="col-md-12">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                {/* FAQ Item 1 */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <i className="icon fa fa-globe"></i>
                        IS THERE ANY FREE-TRIAL SERVICE? IF YES, HOW CAN I AVAILABLE THAT?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    className="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div className="panel-body">
                      <p>No, you cannot get a free trial.</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i className="icon fa fa-briefcase"></i>
                        WHEN DOES THE ACCOUNT GET ACTIVE AFTER PAYMENT?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div className="panel-body">
                      <p>Account gets active only after payment is received in our bank accounts.</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i className="icon fa fa-credit-card"></i>
                        WHAT ARE THE MODES OF PAYMENTS?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div className="panel-body">
                      <p>
                        We accept DEMAND DRAFT, CHEQUE, CASH DEPOSITS &amp; ONLINE PAYMENT which can be
                        directly deposited to our account.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 4 */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFour">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <i className="icon fa fa-money"></i>
                        CAN WE DEPOSIT CASH?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseFour"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFour"
                  >
                    <div className="panel-body">
                      <p>Yes, you can deposit cash directly to our account.</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 5 */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <i className="icon fa fa-user"></i>
                        DO YOU SUGGEST WHEN CAN I BOOK PROFIT OR EXIT?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseFive"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>Yes, we provide proper follow-ups to our clients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
