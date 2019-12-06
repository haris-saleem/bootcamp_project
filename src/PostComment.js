import React, {useState} from 'react';

const PostComment = () => {

    let commentField, imageField;

    const [state, setState] = useState(
        {
            form: 'closed'
        }
    )

    const openTheForm = () => {
        setState({ ...state, form: 'opened'})
    }

    const closeTheForm = () => {
        setState({ ...state, form: 'closed'})
    }

    const sendPost = async () => {

        let response = await fetch('http://localhost:3001/feed', {
            method: 'POST',
            body: JSON.stringify({
                comment: commentField.value,
                image: imageField.value
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '.concat(sessionStorage.getItem('jwt'))
            }
        });

        response = await response.json();

        console.log('response from /feed', response)

    }


    return (
        <div className="post-comment">
          
          { state.form === 'closed' && 
            <button onClick={openTheForm} className="btn btn-primary">
                Post your comment
            </button>
          }

          { state.form === 'opened' &&
            <div>
                <div className="form-group">
                    <label for="imageURL">Image URL</label>
                    <input ref={(elem)=>imageField = elem} type="text" className="form-control" id="imageURL"/>
                </div>

                <div className="form-group">
                    <label for="comment">Comment</label>
                    <textarea ref={(elem)=>commentField = elem} className="form-control" id="comment"/>
                </div>

                <button onClick={closeTheForm} className="btn btn-danger">
                   Cancel
                </button>

                <button onClick={sendPost} 
                className="btn btn-primary">Send</button> 
            </div>
        }

        </div>
    )
}

export default PostComment;