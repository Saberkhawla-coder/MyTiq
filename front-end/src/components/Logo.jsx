import React from 'react'

function Logo() {
  return (
    <div>
        <div className="ticket-section logo-section">
        <h1 className="logo-title">
          MYTIQ <br /> EVENT
        </h1>

        <div style={{ display: "flex", marginTop: "15px" }}>
      
          <div
          
            style={{
              width: "100px",
              height: "90px",
              marginRight: "15px",
              position: "relative",
              borderRadius: "10px",

            }}
            className='logoBg'
          >
            
           <div className="dot" style={{ top: -8, left: 38 }}></div>
            <div className="dot" style={{ top: 20, left: 38 }}></div>
            <div className="dot" style={{ top: 50, left: 38 }}></div>
            <div className="dot" style={{ top: 78, left: 38 }}></div>

            <div className="dot" style={{ top: 35, left: 90 }}></div>

          </div>

          <p className="logo-subtitle">
            IS <br /> HERE
          </p>
        </div>
      </div>
    </div>
  )
}

export default Logo