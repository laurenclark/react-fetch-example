import React from 'react';
import FetchUsers from './components/fetch-users';

function App() {
    return (
        <div className="App">
            <header>
                <span>Fetch Users</span>
                <span>
                    <a href="https//github.com/laurenclark/react-fetch-example">
                        View on GitHub
                    </a>
                </span>
            </header>
            <main className="container">
                <FetchUsers />
            </main>
        </div>
    );
}

export default App;
