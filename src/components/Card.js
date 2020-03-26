import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
            <p>
                <b>Name:</b> {props.username.replace(/[._]/g, ' ')}
            </p>
            <hr />
            <p>
                <b>Email:</b> {props.email}
            </p>
            <p>
                <b>Phone:</b> {props.phone}
            </p>
            <cite>{props.company}</cite>
            <blockquote>"{props.catchPhrase}"</blockquote>
        </div>
    );
}
