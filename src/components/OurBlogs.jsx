import React from 'react'

const OurBlogs = () => {
  return (
    <div className="section section-news section-pad2">
      <div className="container">
        <div className="content row">
          <h1 className="heading-section text-center">Our <span>Blog</span> </h1>
          <div className="row">
            {/* Blog Post Loop */}
            <div className="blog-posts">
              <div className="col-sm-4">
                <div className="post post-loop" style={{ height: '500px' }}>
                  <div className="post-thumbs">
                    <a href="blog/Fundamental-Stock-Alert.html">
                      <img
                        alt=""
                        src="../eminentresearch.co/blog/wp-content/uploads/2020/02/stock-market-660-1.jpg"
                        style={{ width: '100%' }}
                      />
                    </a>
                  </div>
                  <div className="post-entry">
                    <div className="post-meta">
                      <span className="pub-date">2020-02-20 10:16:34</span>
                    </div>
                    <h2>
                      <a href="blog/index.html">Fundamental-Stock-Alert</a>
                    </h2>
                    <p>
                      For Any Assistance Call us or Email us
                      Email:- Info@eminentresearch.co
                    </p>
                    <a className="btn btn-alt" href="blog/Fundamental-Stock-Alert.html">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="post post-loop" style={{ height: '500px' }}>
                  <div className="post-thumbs">
                    <a href="blog/Get-Expert-Advice.html">
                      <img
                        alt=""
                        src="../eminentresearch.co/blog/wp-content/uploads/2020/02/97818706-illustration-of-a-person-icon-with-text-expert-advice.jpg"
                        style={{ width: '100%' }}
                      />
                    </a>
                  </div>
                  <div className="post-entry">
                    <div className="post-meta">
                      <span className="pub-date">2020-02-20 10:12:31</span>
                    </div>
                    <h2>
                      <a href="blog/index.html">Get-Expert-Advice</a>
                    </h2>
                    <p>
                      To Know How to Minimize the Market Risk, Call to Our Expert.
                    </p>
                    <a className="btn btn-alt" href="blog/Get-Expert-Advice.html">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="post post-loop" style={{ height: '500px' }}>
                  <div className="post-thumbs">
                    <a href="blog/Sbi-Bank-Making-Positive-Turn.html">
                      <img
                        alt=""
                        src="../eminentresearch.co/blog/wp-content/uploads/2020/02/SBI.png"
                        style={{ width: '100%' }}
                      />
                    </a>
                  </div>
                  <div className="post-entry">
                    <div className="post-meta">
                      <span className="pub-date">2020-02-20 10:07:43</span>
                    </div>
                    <h2>
                      <a href="blog/index.html">Sbi-Bank-Making-Positive-Turn</a>
                    </h2>
                    <p></p>
                    <a className="btn btn-alt" href="blog/Sbi-Bank-Making-Positive-Turn.html">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              {/* ...existing code... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurBlogs