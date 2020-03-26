import React, { useState, useEffect, Fragment } from 'react';
import Card from './card';

function FetchUsers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                setUsers(response);
                setisLoading(false);
            })
            .catch(err => console.error(err));
    }, []);
    return (
        <Fragment>
            {isLoading && <p>Loading...</p>}
            {users
                ? users.map(user => (
                      <Card
                          key={user.id}
                          username={user.name || 'n/a'}
                          email={user.email || 'n/a'}
                          phone={user.phone || 'n/a'}
                          company={user.company.name || 'n/a'}
                          catchPhrase={user.company.catchPhrase || 'n/a'}
                      />
                  ))
                : 'No Results.'}
        </Fragment>
    );
}

export default FetchUsers;
