import React from 'react';

const bodyComponent = (props) => {
    return (
        <section className="body">
            <h3>This is the body</h3>
            <p>{props.submitText}</p>
        </section>
    )
}


export default bodyComponent;
