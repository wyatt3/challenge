import React, { useState, useEffect } from 'react';

function Character({ character }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://theofficeapi.dev/api/character/${character}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.log(error));
    }, [character]);

    if (!data) return '...';

    const rows = [];
    for (let attr in data) {
        rows.push((<tr>
            <td>{attr}</td>
            <td>{data[attr]}</td>
        </tr>));
    }

    return (
        <div>
            <h2>{data.name}</h2>
            <table>
                {rows}
            </table>
        </div>
    );
}

export default Character;
