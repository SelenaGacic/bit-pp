import React from "react"
import {PostList} from "./PostsList"

export const Main = (props) => {

    return (
        <div className="container">
            <div className="row">
                <PostList />
            </div>
        </div>
    )
}