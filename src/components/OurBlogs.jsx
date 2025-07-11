import React, { useState } from 'react';

// You'll need to replace these with your actual image imports
// import image from "../../webassets/image/about-right-1.jpg";
// import image1 from "../../webassets/image/about.jpg";

// Using placeholder images for demonstration - replace with your actual images
const image = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop';
const image1 = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop';

const DUMMY_IMAGE = 'https://via.placeholder.com/400x250?text=No+Image';

const blogPosts = [
  {
    id: 1,
    title: 'Fundamental-Stock-Alert',
    date: '2020-02-20 10:16:34',
    image: image1,
    excerpt: 'For Any Assistance Call us or Email us Email:- info@dsresearch.live',
    category: 'Stock Analysis',
    readTime: '5 min read',
    fullContent: `📈 Fundamental Stock Alert

Fundamental stock alerts are insights derived from a company's financial health and broader market conditions.

📊 Why They Matter:
- Help investors make long-term decisions.
- Focus on balance sheets, income statements, growth potential, and market position.

🔍 Our Method:
We analyze companies for:
- Strong revenue growth
- Healthy profit margins
- Low debt-to-equity ratios
- Positive industry outlook

💼 Real Case:
In early 2020, our analysts identified an undervalued mid-cap stock. It had strong earnings and a solid management team. Our clients saw a return of 28% in just two months.

📢 Takeaway:
Use alerts as a guide. Combine them with your own research or consult a certified financial advisor.

📩 Contact:
- Email: info@dsresearch.live
- Phone: +91-9999999999

📢 Disclaimer: Stock market investments are subject to market risk.`
  },
  {
    id: 2,
    title: 'Get-Expert-Advice',
    date: '2020-02-20 10:12:31',
    image: image,
    excerpt: 'To Know How to Minimize the Market Risk, Call to Our Expert.',
    category: 'Expert Advice',
    readTime: '3 min read',
    fullContent: `🧠 Get Expert Advice on Market Risk

Every investor wants to grow their portfolio—but risk is inevitable. That's where expert advice can be a game changer.

✔️ What We Offer:
- Personalized portfolio assessments
- Risk-mitigation strategies
- Guidance on diversification and asset allocation

💬 Case Study:
A client with a high-risk portfolio was advised to rebalance. After shifting 40% of his assets to more stable sectors, he avoided a major loss during market volatility.

📞 Connect with us today to schedule a free consultation.

Email: info@dsresearch.live | Phone: +91-9876543210`
  },
  {
    id: 3,
    title: 'SBI Bank Making Positive Turn',
    date: '2020-02-20 10:07:43',
    image: image,
    excerpt: 'SBI Bank is showing strong signs of a turnaround in 2020.',
    category: 'Market Analysis',
    readTime: '4 min read',
    fullContent: `🏦 SBI Bank Analysis - 2020

SBI has been making a solid comeback after a tough year. With declining NPAs and improved credit growth, the bank is on track to outperform market expectations.

📈 Q3 Financial Highlights:
- Net Profit up by 41% YoY
- Reduction in Gross NPA ratio
- Growth in retail and SME segments

🔮 Outlook:
Our analysts predict SBI will continue its upward trend, especially with the banking sector showing signs of recovery.

🔔 Note:
This is not investment advice. Always do your own research or speak with a licensed advisor.`
  }
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const OurBlogs = () => {
  const [activePost, setActivePost] = useState(null);

  return (
    <div style={{ minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
            borderRadius: '20px',
            marginBottom: '20px'
          }}>
            <span style={{ fontSize: '32px', color: 'white' }}>📈</span>
          </div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '16px',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Our <span style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Blog</span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto 24px',
            lineHeight: '1.6'
          }}>
            Discover insights, analysis, and expert advice on financial markets and investment strategies
          </p>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(135deg,rgb(14, 56, 123) 0%, #1e40af 100%)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Blog Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          marginBottom: '40px'
        }}>
          {blogPosts.map((post) => (
            <div
              key={post.id}
              style={{
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid #e2e8f0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              }}
              onClick={() => setActivePost(post)}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  alt={post.title}
                  src={post.image}
                  onError={(e) => (e.target.src = DUMMY_IMAGE)}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />

                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#374151',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  {post.category}
                </div>

                {/* Read Time */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  color: 'white'
                }}>
                  {post.readTime}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                {/* Date */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  color: '#64748b',
                  marginBottom: '12px'
                }}>
                  <span>📅</span>
                  <span>{formatDate(post.date)}</span>
                </div>

                {/* Title */}
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#193cc8',
                  marginBottom: '12px',
                  lineHeight: '1.3',
                  transition: 'color 0.3s ease'
                }}>
                  {post.title.replace(/-/g, ' ')}
                </h2>

                {/* Excerpt */}
                <p style={{
                  color: '#64748b',
                  marginBottom: '20px',
                  lineHeight: '1.6',
                  fontSize: '14px'
                }}>
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <button style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#3b82f6',
                  fontWeight: '600',
                  fontSize: '14px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#1e40af';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#3b82f6';
                  }}>
                  <span>Read More</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {activePost && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(5px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
              padding: '20px'
            }}
            onClick={() => setActivePost(null)}
          >
            <div
              style={{
                background: 'white',
                borderRadius: '20px',
                maxWidth: '800px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div style={{ position: 'relative' }}>
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                }} />

                {/* Close Button */}
                <button
                  onClick={() => setActivePost(null)}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    color: '#374151'
                  }}
                >
                  ×
                </button>

                {/* Modal Title */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '60px'
                }}>
                  <div style={{
                    display: 'inline-block',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    padding: '6px 12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '12px'
                  }}>
                    {activePost.category}
                  </div>
                  <h2 style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '8px',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    {activePost.title.replace(/-/g, ' ')}
                  </h2>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '14px'
                  }}>
                    <span>📅 {formatDate(activePost.date)}</span>
                    <span>⏱️ {activePost.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div style={{
                padding: '30px',
                overflowY: 'auto',
                maxHeight: 'calc(90vh - 250px)'
              }}>
                <div style={{
                  fontSize: '16px',
                  lineHeight: '1.7',
                  color: '#374151',
                  whiteSpace: 'pre-wrap'
                }}>
                  {activePost.fullContent}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurBlogs;