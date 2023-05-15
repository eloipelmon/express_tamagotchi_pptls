import React, { useEffect, useState } from 'react';

function ResultadosTamagotchi() {
  const [posts, setPosts] = useState([]);

  const fetchDataTam = async () => {
    try {
      const response = await fetch('http://localhost:3000/tamagotchi');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log('Error al obtener los datos:', error);
    }
  };

  useEffect(() => {
    fetchDataTam();
  }, []);

  const formatFecha = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString();
  };

  return (
    <div className='resultsTable'>
      <table className='flat-table flat-table-2'>
        <thead>
          <tr>
            <td>Fecha</td>
            <td>Causa de muerte</td>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(posts) &&
            posts.map((post, index) => (
              <tr key={index}>
                <td>{formatFecha(post.fecha)}</td>
                <td>{post.causa_muerte}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultadosTamagotchi;
