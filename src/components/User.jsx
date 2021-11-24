import React from "react";

const User = (props) => {
    return (
        <ul className="text-center mt-4">
            <h1 className="text-2xl font-semibold">List of students</h1>
            {props.names.map((name,key) => {
                return <li className="my-2 font-medium text-xl" key={key.toString()}>{key+1}.{name}</li>
            })}
        </ul>
    )
}

export default User;