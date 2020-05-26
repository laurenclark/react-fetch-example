import React, { memo } from 'react';

function Card({ username, email, phone, catchPhrase, company }) {
    const formatName = username.replace(/[._]/g, ' ');
    return (
        <section className="card">
            <p>
                <b>Name:</b> {formatName}
            </p>
            <hr />
            <p>
                <b>Email:</b> {email}
            </p>
            <p>
                <b>Phone:</b> {phone}
            </p>
            <blockquote>"{catchPhrase}"</blockquote>
            <cite>{company}</cite>
        </section>
    );
}

Card.defaultProps = {
    username: 'n/a',
    email: 'n/a',
    phone: 'n/a',
    company: 'n/a',
    catchPhrase: 'n/a'
};

export default memo(Card);
