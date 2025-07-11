const servicedeails = [
  {
    path: "stock-cash-regular",
    stockcashregular: {
      title: "Stock Cash Regular",
      table: {
        monthly: 11500,
        quarterly: 28500,
        halfyearly: 50500,
        yearly: ""
      },
      overview: "Our Stock Cash Regular service provides intraday and short-term equity cash segment recommendations for NSE/BSE stocks. Designed for traders seeking regular opportunities in the cash market.",
      feature: `- Intraday and short-term calls in NSE/BSE stocks
- Proper follow-ups and timely updates
- Daily and weekly market newsletters
- Dedicated support during market hours`,
      mediumOfCall: `Calls are delivered via SMS and our secure client login box. All GSM and CDMA networks are supported.`,
      sampleCall: `BUY TATASTEEL ABOVE 120.50 TARGET 122.00 / 123.50 STOPLOSS 119.00
SELL RELIANCE BELOW 2450 TARGET 2430 / 2410 STOPLOSS 2470`
    }
  },
  {
    path: "stock-cash-signature",
    stockcashregular: {
      title: "Stock Cash Signature",
      table: {
        monthly: 15000,
        quarterly: 40000,
        halfyearly: 75000,
        yearly: 140000
      },
      overview: "Premium equity cash segment service with high accuracy and personalized support for clients seeking exclusive recommendations.",
      feature: `- Premium quality stock cash calls
- Personalized support and guidance
- Detailed research reports
- Limited and high-conviction recommendations`,
      mediumOfCall: `Calls are sent via SMS and client login. Personalized follow-up by our research team.`,
      sampleCall: `BUY HDFCBANK ABOVE 1600 TARGET 1620 / 1640 STOPLOSS 1580`
    }
  },
  {
    path: "stock-future-signature",
    stockcashregular: {
      title: "Stock Future Signature",
      table: {
        monthly: 20000,
        quarterly: 55000,
        halfyearly: 100000,
        yearly: 180000
      },
      overview: "Exclusive stock futures recommendations for positional and intraday trading, tailored for high-value clients.",
      feature: `- High accuracy stock future calls
- Both intraday and positional strategies
- Regular follow-ups and market insights
- Limited and focused recommendations`,
      mediumOfCall: `Calls delivered via SMS and client login. Dedicated relationship manager for support.`,
      sampleCall: `BUY SBIN FUT ABOVE 600 TARGET 610 / 620 STOPLOSS 590`
    }
  },
  {
    path: "stock-future-positional",
    stockcashregular: {
      title: "Stock Future Positional",
      table: {
        monthly: 12000,
        quarterly: 32000,
        halfyearly: 60000,
        yearly: 110000
      },
      overview: "Positional calls in stock futures for medium-term gains, ideal for traders who prefer holding positions for a few days to weeks.",
      feature: `- Positional calls in stock futures
- Technical and fundamental analysis
- Regular updates and exit strategies
- Weekly performance reports`,
      mediumOfCall: `Calls provided via SMS and client login. Support available during market hours.`,
      sampleCall: `BUY INFY FUT ABOVE 1500 TARGET 1530 / 1550 STOPLOSS 1480`
    }
  },
  {
    path: "stock-future-regular",
    stockcashregular: {
      title: "Stock Future Regular",
      table: {
        monthly: 10000,
        quarterly: 27000,
        halfyearly: 50000,
        yearly: 90000
      },
      overview: "Regular stock futures tips for intraday and short-term trading, suitable for active traders.",
      feature: `- Intraday and short-term stock future calls
- Timely entry and exit updates
- Daily and weekly market analysis
- Customer support during trading hours`,
      mediumOfCall: `Calls sent via SMS and client login. All major networks supported.`,
      sampleCall: `SELL AXISBANK FUT BELOW 900 TARGET 890 / 880 STOPLOSS 910`
    }
  },
  {
    path: "nifty-support",
    stockcashregular: {
      title: "Nifty Support",
      table: {
        monthly: 7000,
        quarterly: 18000,
        halfyearly: 34000,
        yearly: 60000
      },
      overview: "Nifty index trading support with technical and fundamental analysis for index traders.",
      feature: `- Nifty intraday and positional calls
- Market trend analysis and support/resistance levels
- Daily index outlook and updates
- Support during market hours`,
      mediumOfCall: `Calls delivered via SMS and client login. All networks covered.`,
      sampleCall: `BUY NIFTY ABOVE 18000 TARGET 18050 / 18100 STOPLOSS 17950`
    }
  },
  {
    path: "index-platinum",
    stockcashregular: {
      title: "Index Platinum",
      table: {
        monthly: 25000,
        quarterly: 70000,
        halfyearly: 130000,
        yearly: 240000
      },
      overview: "Premium index trading service for Nifty and Bank Nifty, designed for high-net-worth traders.",
      feature: `- High accuracy index calls (Nifty/Bank Nifty)
- Limited and high-conviction trades
- Personalized support and research
- Daily and expiry special strategies`,
      mediumOfCall: `Calls via SMS and client login. Dedicated relationship manager for platinum clients.`,
      sampleCall: `BUY BANKNIFTY ABOVE 42000 TARGET 42100 / 42250 STOPLOSS 41800`
    }
  },
  {
    path: "index-expiry-special",
    stockcashregular: {
      title: "Index Expiry Special",
      table: {
        monthly: 6000,
        quarterly: 16000,
        halfyearly: 30000,
        yearly: 55000
      },
      overview: "Specialized index strategies for expiry day trading, maximizing opportunities on expiry days.",
      feature: `- Expiry day special index strategies
- Fast and actionable calls
- Real-time updates and follow-ups
- Support during expiry sessions`,
      mediumOfCall: `Calls provided via SMS and client login. All networks supported.`,
      sampleCall: `SELL NIFTY BELOW 17900 TARGET 17850 / 17800 STOPLOSS 17950`
    }
  },
  {
    path: "stock-option-regular",
    stockcashregular: {
      title: "Stock Option Regular",
      table: {
        monthly: 9000,
        quarterly: 24000,
        halfyearly: 45000,
        yearly: 80000
      },
      overview: "Options trading recommendations for stocks and indices, suitable for both beginners and experienced traders.",
      feature: `- Stock and index option calls
- Intraday and positional strategies
- Regular follow-ups and exit guidance
- Weekly performance review`,
      mediumOfCall: `Calls sent via SMS and client login. All GSM/CDMA networks supported.`,
      sampleCall: `BUY RELIANCE 2500 CE ABOVE 50 TARGET 60 / 70 STOPLOSS 40`
    }
  },
  {
    path: "stock-option-signature",
    stockcashregular: {
      title: "Stock Option Signature",
      table: {
        monthly: 18000,
        quarterly: 48000,
        halfyearly: 90000,
        yearly: 170000
      },
      overview: "Signature service for high-value options trading clients, with exclusive strategies and support.",
      feature: `- Premium stock and index option calls
- Personalized strategies and support
- Limited and high-conviction trades
- Detailed research and analysis`,
      mediumOfCall: `Calls via SMS and client login. Dedicated support for signature clients.`,
      sampleCall: `SELL TCS 3500 PE BELOW 100 TARGET 90 / 80 STOPLOSS 110`
    }
  },
  {
    path: "all-mcx",
    stockcashregular: {
      title: "All Mcx",
      table: {
        monthly: 12000,
        quarterly: 32000,
        halfyearly: 60000,
        yearly: 110000
      },
      overview: "Many people are not aware about how trading can be done in the commodity sector and how big profits it can help you make. We help you to understand this with the help of our expert Commodity Tips. The commodity is considered to be the riskiest of all markets. So now if you wish to invest in commodity market it is important that you get an guidance that is important in order to make money from products like commodity.",
      feature: `We provide you Best Commodity Tips in Intraday Basis Delivery based momentum call Proper follow-ups and news information
                        Commodity Market overview 
                        Daily and weekly Commodity Newsletters
                        9AM - 10PM customer support
                        We provide you call through sms or company messenger lab`,
      mediumOfCall: `Calls given through SMS and on our own Client Login Box.
                            All GSM and CDMA networks are covered.`,
      sampleCall: `MCX SELL ZINC BELOW 210.50 TARGET 209.90 / 209.30 STOPLOSS 211.60
                        MCX BUY GOLD ABOVE 30240 TARGET30300 / 30360 / 30420 STOPLOSS 30150`
    }
  },
  {
    path: "all-agri-product",
    stockcashregular: {
      title: "All Agri Product",
      table: {
        monthly: 7000,
        quarterly: 18000,
        halfyearly: 34000,
        yearly: 60000
      },
      overview: "Agri commodity trading recommendations for NCDEX and MCX, covering a wide range of agricultural products.",
      feature: `- Agri commodity tips for NCDEX/MCX
- Intraday and delivery-based calls
- Market news and updates
- Customer support during agri market hours`,
      mediumOfCall: `Calls via SMS and client login. All networks supported.`,
      sampleCall: `BUY SOYABEAN ABOVE 4000 TARGET 4020 / 4040 STOPLOSS 3980`
    }
  },
  {
    path: "journal-services",
    stockcashregular: {
      title: "Journal Services",
      table: {
        monthly: 3000,
        quarterly: 8000,
        halfyearly: 15000,
        yearly: 28000
      },
      overview: "Trading journal and performance tracking service to help you analyze and improve your trading results.",
      feature: `- Digital trading journal
- Performance analytics and reports
- Trade review and improvement suggestions
- Secure and private record keeping`,
      mediumOfCall: `Online access via client portal. Reports downloadable in PDF/Excel.`,
      sampleCall: `Sample: Your trades and performance will be tracked and analyzed for better results.`
    }
  }
];

export default servicedeails;
