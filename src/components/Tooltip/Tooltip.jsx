import { useState } from "react"

const Tooltip = ({ children, text, ...rest }) => {
  const [show, setShow] = useState(false)

  const style = {
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.25)',
    visibility: show ? '' : 'hidden',
  }

  return (
    <>
      <div className="tooltip" style={style}>
        {text}
      </div>
      <div {...rest} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </div>
    </>
  )
}

export default Tooltip