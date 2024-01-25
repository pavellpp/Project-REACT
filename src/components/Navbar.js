import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return <nav className='navbar'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/Api'>Api</NavLink>
  </nav>
  
}

export default Navbar
