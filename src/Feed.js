import React, { useState } from 'react';

const Feed = ({_id, image, title, description, buttonLabel}) => {

    const [state, setState] = useState(
        {
            label: buttonLabel,
        }
    );


    const like = async () => {

        setState({ ...state, label: 'Loading...' });

        let response = await fetch('http://localhost:3001/feed/addlike', {
            method: 'POST',
            body: JSON.stringify({
                feedid: _id
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '.concat(sessionStorage.getItem('jwt'))
            }
        });

        let json = await response.json();

        setState({ ...state, label: 'Unlike' })

        // console.log('response from backend', json)
    }

    return(
        <div className="card">
            <img src={image} className="card-img-top" alt={description} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button 
                    onClick={like} 
                    className="btn btn-primary"
                >
                    {state.label}
                </button>
            </div>
        </div>
    )
}

export default Feed;