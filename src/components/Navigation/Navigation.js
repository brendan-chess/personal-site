import './Navigation.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='Navigation-container'>
      <div onClick={() => setExpanded(!expanded)}>menu</div>
      {
        expanded && 
        <ul className='Navigation-list' onClick={() => setExpanded(!expanded)}>
          <li><NavLink exact to='/'  className='Navigation-link' activeClassName='Navigation-link-active'>home</NavLink></li>
          <li><NavLink to='/articles' className='Navigation-link' activeClassName='Navigation-link-active'>articles</NavLink></li>
          <li><NavLink to='/resume' className='Navigation-link' activeClassName='Navigation-link-active'>resume</NavLink></li>
          <li><NavLink to='/contact' className='Navigation-link' activeClassName='Navigation-link-active'>contact</NavLink></li>
        </ul>
      }
    </div>
  )
}

export default Navigation