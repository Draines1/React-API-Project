import React from 'react';

function CharactersContainer({ characters, handleDelete }) {
    return (
        <section>
            <h3>New Character:</h3>
            {
                characters.map(character => (
                    <p key={character.id}
                    >{character.character}
                    <button
                      onClick={(e) => {
                        console.log('they clicked delete');
                        handleDelete(character.id);
                    }}
                    >X</button>
                    </p>
                ))
            }
        </section>
    );
}

export default CharactersContainer;