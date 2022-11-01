import { useState } from "react"

const TooltipButton = ({ children, onClick }) => {
  const [show, setShow] = useState(true)

  const containerStyle = {
    zIndex: 1,
    display: 'flex',
    margin: '0 0 52px',
    position: 'absolute',
    flexDirection: 'column',
    visibility: show ? '' : 'hidden',
  }
  
  const contentBoxStyle = {
    margin: 0,
    width: '100%',
    height: '100%',
    color: 'white',
    display: 'flex',
    borderRadius: '5px',
    justifyContent: 'center',
    padding: '4px',
    fontSize: '12px',
    background: 'rgba(0,0,0,0.15)',
  }

  const arrowStyle = {
    borderTop: '10px solid black',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderRadius: '0px 2px',

    fill: '#0f0',
    stroke: '#0f0',
    strokeWidth: 10,
    margin: 0,
    zIndex: 1,
    position: 'absolute',
  }

  return (
    <button
      onClick={onClick}
      style={{ position: 'relative' }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
    >
      <span style={containerStyle}>
        <span style={contentBoxStyle}>5</span>
      </span>
      {children}
    </button>
  )
}

export default TooltipButton