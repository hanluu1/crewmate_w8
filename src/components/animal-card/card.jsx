import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ name, species, personality, hobby, favorite_item }) => {
  return (
    <div className="Card">
      <h2 className="villager-name">{name}</h2>
      <p>Species: {species}</p>
      <p>Personality: {personality}</p>
      <p>Hobby: {hobby}</p>
      <p>Fav Item: {favorite_item}</p>
    </div>
  );
};

export default Card;
