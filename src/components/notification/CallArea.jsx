import React from 'react';

const CallArea = () => {
  return (
    <>
      <style>{`
        .callarea_wrapper {
          padding: 30px 0px;
          position: relative;
          overflow: hidden;
          background: #222;
        }

        .callarea_wrapper:before {
          position: absolute;
          content: "";
          width: 60%;
          height: 100%;
          background: #000;
          transform: rotate(18deg) scaleY(3.5) translate(-47px);
          top: 0;
          left: 0;
          z-index: 0;
        }

        .callarea_container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 15px;
          position: relative;
          z-index: 1;
        }

        .callarea_row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }

        .callarea_column {
          flex: 1 1 100%;
          padding: 10px;
        }

        .callarea_text {
          flex: 1 1 60%;
        }

        .callarea_phone {
          flex: 1 1 40%;
          text-align: right;
        }

        .callarea_call_text h2 {
          color: #fff;
          margin: 0px;
          margin-top: 10px;
          font-size: 35px;

        }

        .callarea_call {
          margin-top: 5px;
          text-align: right;
        }

        .callarea_call a {
          font-size: 35px;
          font-weight: 900;
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .callarea_call a:hover {
          color: #007bb6;
        }

        @media (max-width: 768px) {
          .callarea_row {
            flex-direction: column;
            text-align: center;
          }

          .callarea_column {
            flex: 1 1 100%;
            text-align: center !important;
          }

          .callarea_call a {
            font-size: 28px;
          }

          .callarea_call_text h2 {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="callarea_wrapper">
        <div className="callarea_container">
          <div className="callarea_row">
            <div className="callarea_column callarea_text">
              <div className="callarea_call_text">
                <h2>If you need any help, Please call our number</h2>
              </div>
            </div>
            <div className="callarea_column callarea_phone">
              <div className="callarea_call">
                <a href="callto:+91-93405-46337">
                  <span><i className="fa fa-phone"></i></span> +91-93405-46337
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallArea;
// This component displays a call area with a phone number and a call to action.