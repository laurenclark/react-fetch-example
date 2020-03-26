import React, { useState, useEffect } from 'react';

function App() {
    const [users, setUsers] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    function nameFormat(name) {
        name = name.replace(/[._-]/g, ' ');
        return name;
    }
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
        <div className="App">
            <header>Fetch Users</header>
            <main>
                {isLoading && <p>Loading...</p>}
                {users.map(user => Card(user))}
            </main>
        </div>
    );

    function Card(user) {
        return (
            <div className="card" key={user.id}>
                <p>
                    <b>Name:</b> {nameFormat(user.username)}
                </p>
                <hr />
                <p>
                    <b>Email:</b> {user.email}
                </p>
                <p>
                    <b>Phone:</b> {user.phone}
                </p>
                <p>
                    <b>Company:</b> {user.company.name} <br /> "
                    <em>{user.company.catchPhrase}</em>"
                </p>
            </div>
        );
    }
}

export default App;
