import React from 'react';

function LoadingSpinner(props) {
    return (
        <div role="note" className="loading" aria-placeholder="Loading">
            <h3>{props.text}</h3>
            <div role="status" className="loading__ripple">
                <div role="presentation"></div>
                <div role="presentation"></div>
            </div>
        </div>
    );
}

export default LoadingSpinner;
