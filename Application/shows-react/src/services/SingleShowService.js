import {SingleShow} from '../entities/SingleShow'



class SingleShowService {

    getData() {
        return fetch(`http://api.tvmaze.com/shows/5?embed[]=cast&embed[]=seasons`)
            .then(result => {
               
                return result.json();
            })
            .then(show => {
                console.log(show);
              
            })
                

    }
}


export const singleShowService = new ShowService();