import { useState } from "react"

const TooltipButton = ({ children, onClick }) => {
  const [show, setShow] = useState(true)

  const hoverStyle = {
    zIndex: 1,
    position: 'absolute',
    visibility: show ? '' : 'hidden',
  }

  const contentBoxStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',

    background: 'black',
    borderRadius: '5px'
  }

  const arrowStyle = {
    // width: 0,
    // height: 0,
    // width: '100px',
    borderTop: '10px solid black',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',

    margin: '0 0 40px',
    borderRadius: '0px 2px',

    fill: '#0f0',
    stroke: '#0f0',
    strokeWidth: 10,
  }
  
  const arrow = (
    <svg
      style={{ ...hoverStyle }}
      width="30" height="40" viewBox="0 -50 300 300">
      <polygon style={arrowStyle} strokeLinejoin="round" points="100 100, 150 150, 200 100, 100 100" />
    </svg>
  )

  return (
    <button
      onClick={onClick}
      style={{ position: 'relative' }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
    >
      <span style={{ ...hoverStyle, ...contentBoxStyle }}>Content</span>
      {arrow}
      {/* <span style={{ ...hoverStyle, ...arrowStyle }}></span> */}
      {children}
    </button>
  )
}

export default TooltipButton