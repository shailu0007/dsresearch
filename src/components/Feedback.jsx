import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "I would like to thank Eminent Research to suggest me on Signature services. Also, I would like to give a special thank you for your valuable recommendations for my investment.",
    img: "uploads/tesimonials/dummy.png",
    name: "Vijay Singh",
    role: "Trader"
  },
  {
    text: "I am highly satisfied with your services and I share with you that I have finally earned profit from your research. About 80-95% of your tips are correct as per my experience.",
    img: "uploads/tesimonials/dummy1.png",
    name: "Mr. Kumar",
    role: "Businessman"
  },
  {
    text: "I am satisfied with your support which helped me grow my capital. Really a very good experience with your services.",
    img: "uploads/tesimonials/index.html", // intentionally broken
    name: "Mr. Ayyar Swami",
    role: "Trader"
  },
  {
    text: "I am completely satisfied with Eminent Research's Basic Stock Cash Services. I appreciate the research team and executive support.",
    img: "uploads/tesimonials/index.html", // intentionally broken
    name: "Mr. Das",
    role: "Trader"
  }
];

const Feedback = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((active - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((active + 1) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section section-quotes section-pad-lg light" style={{ position: 'relative', overflow: 'hidden' }}>
      <style>{`
        .feedback-slider-container {
          max-width: 700px;
          margin: 0 auto;
          padding: 36px 24px;
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
          width: 40px;
          height: 40px;
          font-size: 1.9em;
          color: #000000;
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          align-items: center;
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
          background: rgb(0, 0, 0);
        }
        .feedback-dots {
          display: flex;
          gap: 8px;
          margin-top: 12px;
          justify-content: center;
        }
        .feedback-profile-img {
          width: 100px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgb(255, 255, 255);
          margin-bottom: 12px;
        }
        .feedback-quote {
          font-size: 1.2em;
          color: #fff;
          margin-bottom: 16px;
        }
        .feedback-profile-name {
          font-weight: bold;
          color: #fff;
        }
        .feedback-profile-role {
          color: #ccc;
          font-size: 0.95em;
        }

        @media (max-width: 767px) {
          .feedback-slider-container {
            padding: 24px 12px;
          }
          .feedback-quote {
            font-size: 1em;
          }
        }
      `}</style>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="content row">
          <div className="col-md-offset-2 col-md-8 center">
            <div className="centered">
              <h1 className="heading-section text-center">
                Client <span>Feedback</span>
              </h1>
            </div>
            <div className="testimonials">
              <div className="feedback-slider-container text-center">
                <img
                  src={testimonials[active].img}
                  alt={testimonials[active].name}
                  className="feedback-profile-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://cdn-icons-png.flaticon.com/512/847/847969.png";
                  }}
                />
                <div className="feedback-quote">
                  <p>{testimonials[active].text}</p>
                </div>
                <div className="profile">
                  <div className="feedback-profile-name">{testimonials[active].name}</div>
                  <div className="feedback-profile-role">{testimonials[active].role}</div>
                </div>

                <div className="feedback-slider-controls">
                  <button className="feedback-arrow-btn" onClick={prev}>&#8592;</button>
                  <button className="feedback-arrow-btn" onClick={next}>&#8594;</button>
                </div>

                <div className="feedback-dots">
                  {testimonials.map((_, idx) => (
                    <div
                      key={idx}
                      className={`feedback-dot${active === idx ? ' active' : ''}`}
                      onClick={() => setActive(idx)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
