import React from 'react'

//import './SVGIcon.scss'

export default ({ src }) => {
  const icon = {
    maskImage: `url(${src})`,
    WebkitMaskImage: `url(${src})`
  }
  return (
    <div className="SVGIcon">
      <div className="SVGIcon--icon" style={icon} />
    </div>
  )
}
