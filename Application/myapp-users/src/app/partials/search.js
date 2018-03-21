import React, { Component } from "react";

export class Search extends Component {
    state = {
        inputValue:""
    }
    changeInputValue = (event) =>{
        this.setState({
            inputValue:event.target.value
        })
    }

    render () {
        return(
        <nav>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input onChange={this.changeInputValue} id="search" type="search" required />
                        <label className="label-icon" ><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
        )
    }
}