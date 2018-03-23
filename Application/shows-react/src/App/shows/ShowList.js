import React from "react"
import { ShowItem } from "./ShowItem"
import "./ShowList.css"

export const ShowList = (props) => {
    return (
        <div className='container'>
            <h4>Popular Shows</h4>
            <div className='row'>
                {props.shows.map((show, i) => {
                    return <ShowItem show={show} key={i} />
                })}
            </div>
        </div>
    )
}


