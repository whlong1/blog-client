import { useState } from "react"

const TooltipButton = ({ children, onClick }) => {
  const [show, setShow] = useState(false)

  const hoverStyle = {
    zIndex: 1,
    position: 'absolute',
    visibility: show ? '' : 'hidden',
  }

  const contentBoxStyle = {
    margin: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  }

  const arrowStyle = {
    width: 0,
    height: 0,
    borderTop: '10px solid black',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
  }

  return (
    <button
      onClick={onClick}
      style={{ position: 'relative' }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
    >
      <span style={{ ...hoverStyle, ...contentBoxStyle }}>Content</span>
      <span style={{ ...hoverStyle, ...arrowStyle }}></span>
      {children}
    </button>
  )
}

export default TooltipButton