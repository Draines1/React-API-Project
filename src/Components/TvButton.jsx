import React from 'react';

function TvButton(props) {
    return (
        <nav>
            <button onClick={props.handleClick}>
                Binge Away!
            </button>
        </nav>
    );
}

export default TvButton;