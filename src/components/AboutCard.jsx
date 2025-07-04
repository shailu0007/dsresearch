import React from 'react';
// import AboutCard from './card/AboutCard1';

const goals = [
  {
    icon: 'webassets/image/rocket.png',
    title: 'Our Mission',
    text: 'To provide accurate research based recommendation to create investor/trader wealth.',
  },
  {
    icon: 'webassets/image/diamond(1).png',
    title: 'Our Vission',
    text: 'To become the most trusted Investment Advisory in India by 2020.',
  },
  {
    icon: 'webassets/image/trophy.png',
    title: 'Goal',
    text: 'Our goal is to provide you more and more opportunities to earn your best by our tips.',
  },
];

const AboutCard = () => {
  return (
    <section className="steps-section">
      <div className="container">
        <div className="row clearfix">
          {goals.map((item, idx) => (
            <div className="step-block col-md-4 col-sm-6 col-xs-12" key={idx}>
              <div className="inner-box">
                <div className="content">
                  <div className="icon-box">
                    <img src={item.icon} alt={item.title} onError={(e) => (e.target.src = 'https://via.placeholder.com/64')} />
                  </div>
                  <h3>{item.title}</h3>
                  <div className="text">
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional inline styles for responsiveness and layout */}
      <style>{`
        .steps-section {
          padding: 60px 0;
          background: #f9f9f9;
        }
        .inner-box {
          background: #fff;
          padding: 30px 20px;
          margin-bottom: 30px;
          border-radius: 6px;
          text-align: center;
          box-shadow: 0 0 10px rgba(0,0,0,0.05);
        }
        .icon-box img {
          max-width: 64px;
          margin-bottom: 15px;
        }
        .text p {
          margin: 0;
          font-size: 14px;
          color: #444;
        }
        h3 {
          font-size: 18px;
          margin-bottom: 12px;
          color: #1863AB;
        }

        @media (max-width: 767px) {
          .step-block {
            width: 100%;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutCard;
