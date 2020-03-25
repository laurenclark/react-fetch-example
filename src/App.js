import React, { useState, useEffect } from 'react';
import './styles/main.css';

function App() {
    const [users, setUsers] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: 'GET'
        })
            .then(res => res.json())
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
                    <div class="card" key={user.id}>
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
