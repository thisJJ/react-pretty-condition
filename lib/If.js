import { isBoolean } from 'lodash'
export const If = ({ condition, children }) => (
  condition(condition) ? (condition ? children : null) : null
)