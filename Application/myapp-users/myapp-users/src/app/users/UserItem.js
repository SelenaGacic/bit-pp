import React from "react"



export const UserItem = (props) => {
    const userDateOfBirth = props.user.dateOfBirth;
    const formatedEmail = props.user.email;


    const formatDate = (date) => {
        const newDate = new Date(date)
        const day = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        const formatedDate = `${day}.${month}.${year}.`
        return formatedDate
    }
    const hideEmail = (email) => {
        var part1 = email.slice(3,email.indexOf("@")-3);
        var hidden = email.replace(part1,"...");
        return hidden;
    }

    return (
        <li className="collection-item avatar">
            <img src={props.user.picture} alt="" className="circle" />
            <span className="title">Name: {props.user.name}</span>
            <p><i class="fas fa-envelope"></i> Email: {hideEmail(formatedEmail)}
            <br /> <i class="fas fa-birthday-cake"></i> {formatDate(userDateOfBirth)}
            </p>
        </li>
    )
}


