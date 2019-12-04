import React, { useState, useEffect, useContext } from "react";
import Jumbotron from "./Jumbotron";
import Feed from './Feed';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';


import AppContext from './AppContext' // Allows us to have access to global state

const App = () => {

   const [state, setState] = useState(
        {
            posts: [],
            postsLoaded: false,
            loadMore: false
        }
   )

   const[globalState, setGlobalState] = useContext(AppContext);

  
   useEffect(()=>{ // useEffect stops react from going over the code over and over again
        if(!state.postsLoaded) { 
            // Make fetch request to backend
            fetch('http://localhost:3001/feed/all')

            // Run .json() to convert the backend response
            .then(response => response.json())

            // Change the state for posts array
            .then(json=>{
                setState({  // Makes react go over the code once more 
                    ...state, 
                    posts: json,
                    postsLoaded: true
                });

                console.log(json)
            })
            .catch(e=>console.log('error', e))
        }
   });

  return (
        
            <div className="page">
                
            
            <Jumbotron 
                title="The Newsletter"
                lead="Welcome to ABC.com, the biggest platform for the alphabet."
                moreInfo="Click here to learn more about learning ABC"
                buttonLabel="Signup"
            />
           
          
            
            { globalState.loggedIn !== 'true' && <LoginForm />}

            { 
            globalState.loggedIn === 'true' && 
                <div className="container">        
                    { 
                        state.posts.map(
                            (post)=><Feed 
                            _id={post._id}
                            image={post.image}
                            title={post.username}
                            description={post.comment}
                            buttonLabel={
                                post.likes.includes(globalState.userid) ? 'Unlike' : 'Like'
                            }
                            />
                        )
                    }
                </div>
            }
            </div>
        
  );
};

export default App;
