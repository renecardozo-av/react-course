import {useState} from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar/Navbar';

const initialState = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/blogs',
    name: 'Blogs'
  },{
    path: '/contact',
    name: 'Contact'
  }
]

function Layout() {
  
  const [routes, setRoutes] = useState(initialState)
  return (
    <>
      <NavBar routes={routes}/>
      {/* <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/blogs'>Blogs</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav> */}
      <Outlet />
    </>
  );
}

export default Layout;