import React from 'react';

function LoadingSpinner() {
    return (
        <div role="note" className="loading" aria-placeholder="Loading">
            <h3>Loading...</h3>
            <div role="status" className="loading__ripple">
                <div role="presentation"></div>
                <div role="presentation"></div>
            </div>
        </div>
    );
}

export default LoadingSpinner;
