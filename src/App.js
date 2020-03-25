import React, { useState, useEffect } from 'react';

function App() {
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
    }, [users]);
    return (
        <div className="App">
            <header>Fetch Users</header>
            <main>
                {isLoading && <p>Loading...</p>}
                {users.map(user => (
                    <div className="card" key={user.id}>
                        <p>
                            <b>Name:</b> {user.username}
                        </p>
                        <p>
                            <b>Email:</b> {user.email}
                        </p>
                    </div>
                ))}
            </main>
        </div>
    );
}

export default App;
