import React from 'react';
import './Card.css';

const Card = ({
    title,
    price,
    features,
    unavailableFeatures,
    onClickFunc

}) => {
    return(
        <div className="card">
            <h2>{title}</h2>
            <p className="price">R${price}</p>
            <p className="description">Acessoria Consulado dos vistos</p>
            <button onClick={onClickFunc} className="contract-button">Contratar</button>
            <ul className="features">
                {features.map((feature, index) => (
                    <li key={index} className="available">{feature}</li>
                ))}
                {unavailableFeatures.map((feature, index) => (
                    <li key={index} className="unavailable">{feature}</li>
                ))}
            </ul>
        </div>
    );
};



export default Card;