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

  return (
    <div>
      <h2>{data.name}</h2>
    </div>
  );
}

export default Character;
