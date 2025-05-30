import { NavLink } from 'react-router-dom';

function Navbar() {
  
  return (
    <nav className="nav-links">
      <NavLink to="/"       className={({ isActive }) => isActive ? 'active' : ''}>{({ isActive }) => isActive ? '●' : 'Home'}</NavLink>
      <NavLink to="/info"   className={({ isActive }) => isActive ? 'active' : ''}>{({ isActive }) => isActive ? '●' : 'Info'}</NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>{({ isActive }) => isActive ? '●' : 'Projects'}</NavLink>
      <NavLink to="/contact"  className={({ isActive }) => isActive ? 'active' : ''}>{({ isActive }) => isActive ? '●' : 'Contact'}</NavLink>
      
    </nav>

    
  );
}
export default Navbar;
