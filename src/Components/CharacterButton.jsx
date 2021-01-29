import React from 'react';

function CharacterButton(props) {
    return (
        <nav>
            <button onClick={props.handleClick}>
                Get a new Character!
            </button>
        </nav>
    );
}

export default CharacterButton;