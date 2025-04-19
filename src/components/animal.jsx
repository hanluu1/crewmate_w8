import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
const Card = ({ name, personality, hobby, favorite_item }) => {
  return (
    <div className="Card">
      <h2 className="villager-name">{name}</h2>
      <p>Personality: {personality}</p>
      <p>Hobby: {hobby}</p>
      <p>Fav Item: {favorite_item}</p>
    </div>
  );
};

export default Card;
