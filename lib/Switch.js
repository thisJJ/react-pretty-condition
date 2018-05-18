import PropTypes from 'prop-types'
import React from 'react'
import { isEmpty, get } from 'lodash'

export const Switch = ({ value, children }) => {
  const renderElement = React.Children.map(children, child => {
    if(get(child, 'props.value', undefined) === value)
      return get(child, 'props.children', null)
  })

  return !isEmpty(renderElement) ? get(renderElement, '[0]', null) : null 
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
