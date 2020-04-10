import React, { useState, useEffect, Fragment } from 'react';
import Card from './user-card';

function FetchUsers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // useEffect(() => {
    //     fetch(url, {
    //         method: 'GET'
    //     })
    //         .then((data) => data.json())
    //         .then((data) => {
    //             setUsers(data);
    //         })
    //         .catch((err) => {
    //             setIsError(true);
    //             console.error(err);
    //         })
    //         .finally(setIsLoading(false));
    // }, [url]);

    useEffect(() => {
        // Cancel on cleanup
        let didCancel = false;
        const url = `https://jsonplaceholder.typicode.com/users`;
        const config = { method: 'GET' };
        const fetchData = async () => {
            if (!didCancel) {
                try {
                    // Await the first and then the second
                    const response = await fetch(url, config);
                    const json = await response.json();
                    setUsers(json);
                } catch (error) {
                    setIsError(true);
                    console.error(error);
                }
                setIsLoading(false);
            }
        };
        fetchData();
        return () => {
            didCancel = true;
        };
    }, []);

    return (
        <Fragment>
            {isLoading && <p>Loading...</p>}
            {isError && <div>Something went wrong...</div>}
            {users &&
                users.map((user) => (
                    <Card
                        key={user.id}
                        username={user.name || 'n/a'}
                        email={user.email || 'n/a'}
                        phone={user.phone || 'n/a'}
                        company={user.company.name || 'n/a'}
                        catchPhrase={user.company.catchPhrase || 'n/a'}
                        test={user.poo || 'n/a'}
                    />
                ))}
        </Fragment>
    );
}

export default FetchUsers;
