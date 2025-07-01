import React, { useState } from 'react'

const testimonials = [
  {
    text: "I would like to thank Eminent Research to suggest me on  Signature services. Also, I would like to give a special thank you for your valuable recommendations for my investment.",
    img: "uploads/tesimonials/dummy.png",
    name: "vijay Singh",
    role: "Trader"
  },
  {
    text: "I am highly satisfied with your services and I share with you that I have finally earned profit from your research. About 80-95% of your tips are correct as per my experience.",
    img: "uploads/tesimonials/dummy1.png",
    name: "Mr. Kumar",
    role: "Businessman"
  },
  {
    text: "I am Satisfied with Your Support Which Help me to Grow up of My Capital, Really It is Very Good Experience with Your Services.",
    img: "uploads/tesimonials/index.html",
    name: "Mr. Ayyar swami",
    role: "Trader"
  },
  {
    text: "I am Completely Satisfied With Eminent Research's Basic Stock Cash Services, I appreciate the Research Team Of Eminent Research & Best Executive Support.",
    img: "uploads/tesimonials/index.html",
    name: "Mr. dAS",
    role: "Trader"
  }
];

const Feedback = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive(active === 0 ? testimonials.length - 1 : active - 1);
  const next = () => setActive(active === testimonials.length - 1 ? 0 : active + 1);

  return (
    <div className="section section-quotes section-pad-lg light" style={{ position: 'relative', overflow: 'hidden' }}>
      <style>
        {`
        .feedback-slider-container {
          max-width: 600px;
          margin: 0 auto;
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.10);
          padding: 36px 24px 32px 24px;
          position: relative;
          z-index: 2;
        }
        .feedback-slider-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 18px;
          gap: 18px;
        }
        .feedback-arrow-btn {
          background: #eee;
          border: none;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          font-size: 1.4em;
          color: #8c20ba;
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .feedback-arrow-btn:hover {
          background: #8c20ba;
          color: #fff;
        }
        .feedback-dots {
          display: flex;
          gap: 8px;
          margin-top: 10px;
          justify-content: center;
        }
        .feedback-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ccc;
          cursor: pointer;
          transition: background 0.2s;
        }
        .feedback-dot.active {
          background: #8c20ba;
        }
        .feedback-profile-img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #8c20ba;
          margin-bottom: 10px;
        }
        .feedback-quote {
          font-size: 1.15em;
          color: #444;
          font-style: italic;
          margin-bottom: 18px;
          min-height: 80px;
        }
        .feedback-profile-name {
          font-weight: bold;
          color: #8c20ba;
          margin-bottom: 2px;
        }
        .feedback-profile-role {
          color: #888;
          font-size: 0.98em;
        }
        @media (max-width: 767px) {
          .feedback-slider-container {
            padding: 24px 8px 24px 8px;
          }
        }
        .feedback-bg-img {
          position: absolute;
          left: 0; top: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;
        }
        .feedback-bg-overlay {
          position: absolute;
          left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.35); z-index: 1;
        }
        `}
      </style>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="content row">
          <div className="col-md-offset-2 col-md-8 center">
            <div className="centered">
              <h1 className="heading-section">Client <span>Feedback</span> </h1>
            </div>
            <div className="testimonials">
              <div className="feedback-slider-container">
                <div className="quotes" style={{ textAlign: 'center' }}>
                  <img
                    src={testimonials[active].img}
                    alt={testimonials[active].name}
                    className="feedback-profile-img"
                  />
                  <div className="quotes-text center feedback-quote">
                    <p>{testimonials[active].text}</p>
                  </div>
                  <div className="profile">
                    <div className="feedback-profile-name">{testimonials[active].name}</div>
                    <div className="feedback-profile-role">{testimonials[active].role}</div>
                  </div>
                </div>
                <div className="feedback-slider-controls">
                  <button className="feedback-arrow-btn" onClick={prev} aria-label="Previous">
                    &#8592;
                  </button>
                  <button className="feedback-arrow-btn" onClick={next} aria-label="Next">
                    &#8594;
                  </button>
                </div>
                <div className="feedback-dots">
                  {testimonials.map((_, idx) => (
                    <div
                      key={idx}
                      className={`feedback-dot${active === idx ? " active" : ""}`}
                      onClick={() => setActive(idx)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* background image and overlay */}
        <img className="feedback-bg-img" src="webassets/image/gallery4-large.jpg" alt="" />
        <div className="feedback-bg-overlay"></div>
      </div>
    </div>
  )
}

export default Feedback