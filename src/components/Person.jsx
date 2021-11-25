import React from 'react';
import PropTypes from 'prop-types';

const Person = (props) => {
    return <div>
        <h1>This is Person Component..</h1>
        <p>Hello {props.name}</p>
        <p>Your message is "{props.msg}"</p>
    </div>
}

Person.defaultProps = {
    name: "New User",
    msg : "Greetings from React Web App",
}

Person.propTypes = {
    name: PropTypes.string,
    msg: PropTypes.string
}

export default Person;