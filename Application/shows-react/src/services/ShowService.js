import {Show} from '../entities/Show'


class ShowService {

    getData() {
        return fetch('https://api.tvmaze.com/shows')
            .then(result => {
               
                return result.json();
            })
            .then(shows => {
                console.log(shows);
                
                const firstFifty = shows.slice(0, 48);
                return firstFifty.map(show => {
                    return new Show(show.id,show.name,show.image)
                })
            })
                

    }
}


export const showService = new ShowService();