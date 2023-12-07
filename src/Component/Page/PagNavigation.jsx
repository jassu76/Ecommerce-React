import React from 'react'
import { NavLink } from 'react-router-dom'
const PagNavigation = ({title}) => {
  return (
    <div>
        <NavLink to="/">Home/</NavLink>{title}
    </div>
  )
}

export default PagNavigation