import React from 'react';
import FetchUsers from './components/fetch-users';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Fetch Users</h1>
                <span>
                    <a
                        title="Visit the github repository for this project"
                        href="https://github.com/laurenclark/react-fetch-example">
                        View on GitHub
                    </a>
                </span>
            </header>
            <main role="main" className="container">
                <FetchUsers />
            </main>
        </div>
    );
}

export default App;
