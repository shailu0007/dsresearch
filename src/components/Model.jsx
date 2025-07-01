import React from 'react'

const Model = () => {
    return (
        <>
            <div
                className="modal fade bs-example-modal-lg"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
                id="onload"
            >
                <div className="modal-dialog">
                    <div className="modal-content freebg">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            <h4 className="modal-title text-center"> GET EXPERT ADVICE NOW !</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div>
                                        <form id="freetrial" method="post" action="javascript:void(0)">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control fr-form"
                                                    placeholder="Your Name"
                                                    name="name"
                                                    id="name123"
                                                />
                                                <div id="nerrormsg"></div>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control fr-form"
                                                    name="mobile"
                                                    id="usernumber"
                                                    placeholder="Mobile"
                                                    maxLength={10}
                                                />
                                                <div id="merrormsg"></div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-field col-md-6 form-m-bttm">
                                                    <img
                                                        id="Imageid"
                                                        src="captcha/1750950682.6812.jpg"
                                                        style={{ width: 150, height: 30, border: 0 }}
                                                        alt=" "
                                                    />
                                                </div>
                                                <div className="form-field col-md-6">
                                                    <input
                                                        type="text"
                                                        name="cicaptcha"
                                                        id="freecaptchaaaa"
                                                        className="form-control fr-form"
                                                        placeholder="Fill Capcha"
                                                        style={{ marginTop: -1 }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="col-sm-2"></div>
                                            <div className="col-sm-8">
                                                <button
                                                    name="submit"
                                                    type="submit"
                                                    className="btn btn-default btn-block"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <p className="lead">Eminent Research </p>
                                    <ul className="list-unstyled" style={{ lineHeight: 2 }}>
                                        <li>
                                            Want to learn how to manage the trading risks and benefits effectively? Want to know how to invest and trade in the Indian financial market? Then come to Eminent Research Investment advisors.
                                        </li>
                                        <li>
                                            <a href="index.php/Home/about.html"><u>Learn more</u></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="note">
                                <b>Kindly Note:</b>{" "}
                                <span>
                                    If any DND Customer Fill our Form then Eminent Research is authorised to Call and Messages Him/Her
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Model