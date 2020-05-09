import React from 'react';

export default function Card(props) {
    return (
        <section className="card">
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
            <blockquote>"{props.catchPhrase}"</blockquote>
            <cite>{props.company}</cite>
        </section>
    );
}
