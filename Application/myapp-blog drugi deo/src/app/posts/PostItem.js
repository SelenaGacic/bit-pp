import React from "react"

export const PostItem = (props) => {

    return (
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title" >{props.post.title}</span>
                <p>{props.post.body}</p>
            </div>
        </div>
    )
}


