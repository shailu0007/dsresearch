import React from 'react';

const ServiceSub = ({ table, overview, feature, mediumOfCall, sampleCall }) => {

  return (
    <div className="container" style={{ marginTop: "2em", marginBottom: "10em" }}>
      <div className="row">
        <div className="col-md-4">
          <div className="sidepanel">
            <table
              style={{ backgroundColor: "#FFF" }}
              className="table tableBodyIn01 table-bordered"
            >
              <tbody>
                <tr style={{ backgroundColor: "#1ABC9C" }}>
                  <th style={{ textTransform: "uppercase", color: "#FFF" }}>Duration</th>
                  <th style={{ textTransform: "uppercase", color: "#FFF" }}>Price</th>
                </tr>
                <tr>
                  <th>Monthly</th>
                  <td><i className="fa fa-inr"></i> {table.monthly || "N/A"}</td>
                </tr>
                <tr>
                  <th>Quarterly</th>
                  <td><i className="fa fa-inr"></i> {table.quarterly || "N/A"}</td>
                </tr>
                <tr>
                  <th>Half-Yearly</th>
                  <td><i className="fa fa-inr"></i> {table.halfyearly || table.halfYearly || "N/A"}</td>
                </tr>
                <tr>
                  <th>Yearly</th>
                  <td><i className="fa fa-inr"></i> {table.yearly || "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-8">
          <div className="tab01 tab02" role="tabpanel">
            <ul className="nav nav-tabs nav-tabs nav-justified" role="tablist">
              <li role="presentation" className="active">
                <a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">Overview</a>
              </li>
              <li role="presentation">
                <a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">Features</a>
              </li>
              <li role="presentation">
                <a href="#Section3" aria-controls="settings" role="tab" data-toggle="tab">Medium of Calls</a>
              </li>
              <li role="presentation">
                <a href="#Section4" aria-controls="settings" role="tab" data-toggle="tab">Sample Call</a>
              </li>
            </ul>

            <div className="tab-content tab-content02">
              <div role="tabpanel" className="tab-pane fade in active" id="Section1">
                <div className="padTopBot15 padBoth15">
                  <div className="row service_inner">
                    <div className="clearfix">
                      <div className="col-md-12">
                        <p>{overview}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" className="tab-pane fade" id="Section2">
                <div className="padTopBot15 padBoth15">
                  <div className="row service_inner">
                    <div className="clearfix">
                      <div className="col-md-12">
                        {feature.split('\n').map((line, idx) => (
                          <p key={idx}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" className="tab-pane fade" id="Section3">
                <div className="padTopBot15 padBoth15">
                  <div className="row service_inner">
                    <div className="clearfix">
                      <div className="col-md-12">
                        <p>{mediumOfCall}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" className="tab-pane fade" id="Section4">
                <div className="padTopBot15 padBoth15">
                  <div className="row service_inner">
                    <div className="clearfix">
                      <div className="col-md-12">
                        {sampleCall.split('\n').map((line, idx) => (
                          <p key={idx}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSub;
