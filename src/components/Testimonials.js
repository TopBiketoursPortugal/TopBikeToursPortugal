import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'



const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <blockquote key={v4()} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </blockquote>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
