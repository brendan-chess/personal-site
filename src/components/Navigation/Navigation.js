import './Navigation.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='Navigation-container'>
      <ul className='Navigation-list'>
        <li><NavLink exact to='/'  className='Navigation-link' activeClassName='Navigation-link-active'>home</NavLink></li>
        <li><NavLink to='/articles' className='Navigation-link' activeClassName='Navigation-link-active'>articles</NavLink></li>
        <li><NavLink to='/contact' className='Navigation-link' activeClassName='Navigation-link-active'>contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Navigation