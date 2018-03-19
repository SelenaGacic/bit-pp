import React from "react"
import PropTypes from "prop-types"


export const UserItem = (props) => {
    // const newDate= props.user.dateOfBirth
    // const formatDate = (newDate) =>{
    //     const newDate = new Date(date)
    //     const day = newDate.getDate();
    //     const month = newDate.getMonth() + 1;
    //      const year = newDate.getFullYear();
    //      const formatedDate = `${day}.${month}.${year}.`
    //      return formatedDate
    //     }
    
    return (
        <li className="collection-item avatar">
            <img src={props.user.picture} alt="" className="circle" />
            <span className="title">Name: {props.user.name}</span>
            <p>Email: {props.user.email}
                <br /> Date of birth: {props.user.dateOfBirth}
            </p>
        </li>
    )
}


