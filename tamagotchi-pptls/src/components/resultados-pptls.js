import React, { useEffect, useState } from 'react';

function ResultadosPPTLS() {
  const [posts, setPosts] = useState([]);

  const fetchDataPPTLS = async () => {
    try {
      const response = await fetch('http://localhost:3000/pptls');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log('Error al obtener los datos:', error);
    }
  };

  useEffect(() => {
    fetchDataPPTLS();
  }, []);

  const formatFecha = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString(); 
  };

  return (
    <div className='resultsTable'>
      <table className='flat-table flat-table-1'>
        <thead>
          <tr>
            <td>Fecha</td>
            <td>Ganador</td>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(posts) &&
            posts.map((post, index) => (
              <tr key={index}>
                <td>{formatFecha(post.fecha)}</td>
                <td>{post.ganador}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultadosPPTLS;
