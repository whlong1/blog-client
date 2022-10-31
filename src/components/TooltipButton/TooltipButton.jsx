import { useState } from "react"

const TooltipButton = ({ show, setShow }) => {
  // const [show, setShow] = useState(false)

  const style = {
    // background: 'rgba(0, 0, 0, 0.25)',
    visibility: show ? '' : 'hidden',
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: '1px solid red',
    margin: '0',
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <span
      style={style}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
    >
      5
    </span>
  )
}

export default TooltipButton