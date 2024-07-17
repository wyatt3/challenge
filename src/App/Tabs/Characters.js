import React, { useState, useEffect } from 'react';
import api from 'api.js';

// Characters

function Characters() {
    let eCharacters = [];
    let page = 1;
    const recursiveFetch = () => {
        fetch(`https://theofficeapi.dev/api/characters?limit=50&page=${page}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                eCharacters.push(data.results.map((result) => {
                    return (
                        <Character
                            key={result.id}
                            {...{
                                character: result,
                            }}
                        />
                    );
                }));
                if (data.meta.isLastPage === false) {
                    page++;
                    recursiveFetch();
                }
            })
            .catch((error) => console.log(error));
    }

    const [data, setData] = useState(null);
    useEffect(() => {
        recursiveFetch();
    }, []);

    if (!data) return '...';



    return (
        <div>
            <h2>characters:</h2>
            <div className="characters">{eCharacters}</div>
        </div>
    );
}

function Character({ character }) {
    return (
        <a onClick={(e) => api.router.click(e, { tab: 'character', character: character.id })} href="/">
            {character.name}
        </a>
    );
}

export default Characters;
