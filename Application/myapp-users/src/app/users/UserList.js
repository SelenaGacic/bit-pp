import React, { Component } from "react"
import PropTypes from "prop-types"

import { UserItem } from "./UserItem"
import { userService } from '../../service/UserService';

export class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentWillMount() {
        console.log("before render");
    }

    componentDidMount() {
        let users = userService.getData();
        users
            .then(myUsers => {
                console.log(myUsers);
                this.setState({users: myUsers})
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    render() {
        return (
            <ul className="collection" >
                {this.state.users.length !== 0 &&
                    this.state.users.map((user, i) => {
                        return <UserItem user={user} key={i} />
                    })
                }
            </ul>
        )
    }
}