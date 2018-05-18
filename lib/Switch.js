import PropTypes from 'prop-types'
import React from 'react'
import { isEmpty } from 'lodash'

export const Switch = ({ value, children }) => {
  const renderElement = React.Children.map(children, child => {
    if(child.props.value === value)
      return child.props.children
  })

  return !isEmpty(renderElement) ? renderElement[0] : null 
}

Switch.propTypes = {
  children: PropTypes.node,
  value: PropTypes.node,
}

export const Case = ({ children }) => ({ children })

Case.propTypes = {
  children: PropTypes.node,
  value: PropTypes.node,
}
