import React from "react"

export const ShowItem = (props) => {
    return (
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img src={props.show.image} />
                </div>
                <span className="card-title">{props.show.name}</span>
            </div>
        </div>
    )
}

