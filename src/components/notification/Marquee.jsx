import React from 'react'

const Marquee = () => {
  return (
    <marquee
      style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100vw',
        height: '24px',
        background: '#000',
        color: '#fff',
        zIndex: 999999999,
        fontSize: '12px',
        paddingTop: '5px'
      }}
    >
      Kindly Note it “D.S Researech Investment Advisors(SEBI Reg.No.INH000017824)” do not Provide any Profit 
      sharing/Loss Sharing Services, Guaranteed Profit Services and The Services Which are Not Listed On Our Website, Investment in the Stocks,
      Commodity and Currency Market is Subject Matter of Risk, We suggest you to Evaluate your own Credit risk before opting 
      any of Our Services”.We do not provide any account opening or Dmat services.D.S Researech Research neither provide portfolio 
      management Services nor Trading or Order place behalf of clients
    </marquee>
  )
}

export default Marquee