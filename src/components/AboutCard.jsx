import React, { useState } from 'react';

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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="steps-section">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
    <h2 style={{ fontSize: '32px', color: '#193cc8', fontWeight: 'bold' }}>
      Our Core Beliefs
    </h2>
    <p style={{ color: '#555', fontSize: '16px' }}>
      What drives our mission, vision, and goals.
    </p>
  </div>
      <div className="container">
        <div className="row clearfix">
          {goals.map((item, idx) => {
            const isHovered = hoveredIndex === idx;
            const cardStyle = {
              boxShadow: isHovered
                ? '0 8px 20px rgba(55, 77, 202, 0.4)'
                : '0 0 10px rgba(55, 77, 202, 0.73)',
              borderRadius: '10px',
              transition: 'all 0.3s ease',
              transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
              background: '#fff',
              padding: '30px 20px',
              textAlign: 'center',
              marginBottom: '30px',
            };

            return (
              
              
              <div
                className="step-block col-md-4 col-sm-6 col-xs-12"
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                
                <div className="inner-box" style={cardStyle}>
                  <div className="content">
                    <div className="icon-box">
                      <img
                        src={item.icon}
                        alt={item.title}
                        onError={(e) => (e.target.src = 'https://via.placeholder.com/64')}
                      />
                    </div>
                    <h3 style={{ color: '#193cc8' }}>{item.title}</h3>
                    <div className="text">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Embedded CSS for layout and responsiveness */}
      <style>{`
        .steps-section {
          padding: 60px 0;
          background: #eeeeee;
        }
        .icon-box img {
          max-width: 64px;
          margin-bottom: 15px;
        }
        .text p {
          margin: 0;
          font-size: 14px;
          color: rgb(27, 28, 29);
        }
        h3 {
          font-size: 20px;
          margin-bottom: 12px;
          color: #198cc8;
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
