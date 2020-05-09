import React, { useState, useEffect, Fragment } from 'react';
import Card from './user-card';
import LoadingSpinner from './loading-spinner';

function FetchUsers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const url = `https://jsonplaceholder.typicode.com/users`;
    const config = { method: 'GET' };

    // If you want to do a regular promise based fetch

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
    // Pass in URL for useEffect to use.
    // }, [url]);

    useEffect(() => {
        let didCancel = false;
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
            // If the fetch request is slow, and the component has already unmounted when the async request finishes there will be an error. Also if the user clicks another {id} if the fetch is to an id based resrouce, the wrong data could be displayed!
            didCancel = true;
        };
    }, [url]);

    return (
        <Fragment>
            {isLoading && <LoadingSpinner text="Fetching Users..." />}
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
