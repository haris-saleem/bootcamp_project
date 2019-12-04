import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import LoginButton from './LoginButton'
import AppContext from './AppContext'


const NavBar = (prop) => {

  const [globalState, setGlobalState] = useContext(AppContext);

  const openSidebar = () => {
    setGlobalState({...globalState, sidebarOpen: true})
  }
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
        <img src={prop.logo} width="64" height="64"/>
        </a>
        <ul class="nav">
          {prop.links.map(
            (link) => <li className="nav-item">
            <Link className="nav-link" to={link.path}> {link.label}</Link>
            </li>
          )
        }        
      </ul>

      <div className="form-inline">
          <LoginButton />
          <button onClick= {openSidebar}  className = "btn btn-primary">
            Sidebar
        </button>
        </div>
      </nav>
    )
  }

export default NavBar;