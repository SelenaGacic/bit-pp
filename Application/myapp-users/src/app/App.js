import React, { Component } from 'react';
import './App.css';
import { Header } from "./partials/header";
import { Footer } from "./partials/footer";
import { UserList } from "./users/UserList";
import { userService } from '../service/UserService';
import { Search } from "./partials/search";
import { Loader } from "./users/Loader"



export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            listView: localStorage.getItem('listView') === "true",
            load:true
        }
    }

    componentDidMount() {
        this.loadUsers();
       
    }

    loadUsers = () => {
        userService.getData()
            .then(myUsers => {
                this.setState({ users: myUsers })
                this.setState({load :false})
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    changeView = (event) => {
        event.preventDefault();

        const newViewState = !this.state.listView;
        localStorage.setItem('listView', newViewState);

        this.setState({ listView: newViewState });
    }


    render() {
        return (
            <div>
                <Header onChangeViewClick={this.changeView} stateView={this.state.listView} onRefresh={this.loadUsers} />
                <Search/>
                <div className="container">
                    <div className="row">
                    { this.state.load ? <Loader/>: <UserList users={this.state.users} listView={this.state.listView} />
                        
                    }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default App;
