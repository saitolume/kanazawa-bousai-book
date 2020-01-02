'use strict'

const buttonStyles = {
  wrapper: {
    borderRadius: '8px',
    boxShadow: '0 2px 12px #00000025',
    boxSizing: 'border-box',
    padding: '8px 12px'
  }
}

const Button = ({ children, style, ...props }) => (
  <div style={{ ...buttonStyles.wrapper, ...style }} {...props}>{children}</div>
)
