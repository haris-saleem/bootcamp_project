import React, { useState, useEffect, useContext } from 'react'; // useContext is global state
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from "./logo.svg";
import './App.css'
import App from './App'
import AppContext from './AppContext';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Overlay from './Overlay';

const links = [ {

    "label" : "Home",
    "path" : "/"
},
{
    "label" : "About",
    "path" : "/about"
},
{
    "label" : "Contact",
    "path" : "/contact"
    
}
]

const LayoutRoute = ({path, component, exact}) => {
    return(
        <div>
        <NavBar className = "navbar navbar-light bg-light" links={links}  logo={logo} />
        <Route path={path} exact={exact} component={component}/>
       
       
         </div>
    )
}

const Main = () => {
 // globalState affects the entire webpage like logging it affects the whole application
    const [globalState, setGlobalState] = useState(
        {
            userid: sessionStorage.getItem('userid') ? sessionStorage.getItem('userid') : null,
            loggedIn: sessionStorage.getItem('jwt') ? 'true' : 'false',
            sidebarOpen: false
             // We check if they are in the jwt
            // If there session is stored in the brower we know they are logged
        }
    )

    return(
        // Switch component is repsonding for rerendering the route depending on the path
        <AppContext.Provider value={[globalState, setGlobalState]}>
        
        <BrowserRouter>
            <Switch> 
            <LayoutRoute path="/" exact={true} component={App}/>
            <LayoutRoute path="/about" component = {About}/>
            <LayoutRoute path="/contact" component = {Contact}/>
            </Switch>
        </BrowserRouter>
        </AppContext.Provider>
    )
}

export default Main; 
