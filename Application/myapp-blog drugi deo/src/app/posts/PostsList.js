import React, { Component } from "react"
import { PostItem } from "./PostItem"
import { postService } from '../../service/PostService';



export class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentWillMount() {
        
    }

    componentDidMount() {
        let posts = postService.getData();
        posts
            .then(myPosts => {
                const firstTwenty = myPosts.slice(1,20)
                this.setState({ posts: firstTwenty })
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    render() {
        return (
            <div className="col-12 ">
                {
                    this.state.posts.map((post, i) => {
                        return <PostItem post={post} key={i} />
                    })
                }
            </div>
        )
    }
}

                
              
