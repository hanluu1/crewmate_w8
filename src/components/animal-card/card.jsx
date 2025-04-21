import React from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../client';
import animalImage from '../../assets/animal.webp'; 
import './card.css'; 
const Card = ({ id, name, species, personality, hobby, favorite_item }) => {
      const deletePost = async (event) => {
          event.preventDefault();
  
          await supabase
              .from('Posts')
              .delete()
              .eq('id', id);
          window.location = '/';
          
      }
  return (
    <div className="Card">
      <img className="villager-image" src={animalImage} width={70} height={100} />
      <h2 className="villager-name">{name}</h2>
      <p>Species: {species}</p>
      <p>Personality: {personality}</p>
      <p>Hobby: {hobby}</p>
      <p>Fav Item: {favorite_item}</p>
      <button className="editBtn">
        <Link to={`/edit/${id}`} className="link">Edit</Link>
      </button>
     
      <button className="deleteButton" onClick={deletePost}>Delete</button>
      
    </div>
  );
};

export default Card;
