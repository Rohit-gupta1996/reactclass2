import React from 'react'


const SingleComment = (props) =>{
    return(
        <div className = 'comment'>
                <a href = "/" className = "avatar">
                    <img src={props.image} alt = "Profile picture"></img>
                </a>
                <div className = 'content'>
                    <a href = "/" className = "author">{props.name}
                    </a>
                    <div className ='metadata'>
                        <span classname = 'date'>{props.time}</span>
                    <div/>
                    <div className ='text'>
                            {props.text}
                    </div>

                    </div>
                </div>
            </div>

    )
}
export default SingleComment;