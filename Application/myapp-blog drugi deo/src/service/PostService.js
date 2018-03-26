import {Post} from '../app/entities/Post'


class PostService {

    getData() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(result => {
                return result.json();
            })
            .then(posts => {
            
                return posts.map(post => {
                    return new Post(post)

                })
            })
        }
    }
            

    export const postService = new PostService();

