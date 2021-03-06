import React, { memo } from 'react';

function LoadingSpinner({ text }) {
    return (
        <div className="loading" aria-placeholder="Loading">
            <h3>{text}</h3>
            <div role="status" className="loading__ripple">
                <div role="presentation"></div>
                <div role="presentation"></div>
            </div>
        </div>
    );
}

LoadingSpinner.defaultProps = {
    text: 'Loading...'
};

export default memo(LoadingSpinner);
