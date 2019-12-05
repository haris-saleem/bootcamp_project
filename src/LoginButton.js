import React, { useState, useContext } from 'react';
import AppContext from './AppContext';

const LoginButton = () => {

    const [state, setState] = useState(
        {
            status: 'logged-out',
            label: 'Log In'
        }
    )

    const [globalState, setGlobalState] = useContext(AppContext);

    const loginHandler = () => {
        if(state.status === 'logged-in') {
            setState({
                ...state, 
                status: 'logged-out',
                label: 'Log In'
            });

            setGlobalState({
                ...globalState,
                loggedIn: 'false'
            });

        } else {
            setState({
                ...state, 
                status: 'logged-in',
                label: 'Log Out'
            });

            setGlobalState({
                ...globalState,
                loggedIn: 'true'
            });
        }
        
    }

    return(
        <button onClick={loginHandler} className="btn btn-primary">
            { state.label }
        </button>
        
    
    )
}

export default LoginButton;