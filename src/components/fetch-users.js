import React, { useState, useEffect, Fragment } from 'react';
import Card from './card';

function FetchUsers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const url = `https://jsonplaceholder.typicode.com/users`;

    useEffect(() => {
        fetch(url, {
            method: 'GET'
        })
            .then((data) => data.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => {
                setIsError(true);
                console.error(err);
            })
            .finally(setIsLoading(false));
    }, [url]);
    return (
        <Fragment>
            {isLoading && <p>Loading...</p>}
            {isError && <div>Something went wrong...</div>}
            {users
                ? users.map((user) => (
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
