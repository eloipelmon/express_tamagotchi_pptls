import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ResultadosTamagotchi from './resultados-tamagotchi';
import ResultadosPPTLS from './resultados-pptls';
import '../styles/Resultados.css'

function Resultados() {
    return (
        <div>
            <Link to="/"><button className="volver">Volver</button></Link>
            <h1>Tamagotchi</h1>
            <ResultadosTamagotchi/>
            <h1>PPTLS</h1>
            <ResultadosPPTLS/>
        </div>
    );
}
export default Resultados;