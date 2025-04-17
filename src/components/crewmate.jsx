import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'
import { useEffect } from 'react'

const Card = (props) =>  {

  const [count, setCount] = useState(0)
  useEffect(() => {
    const fetchBetCount = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select('betCount')
        .eq('id', props.id)
        .single();

      if (error) {
        console.error('Error fetching bet count:', error);
      } else if (data) {
        setCount(data.betCount || 0); 
      }
    };

    fetchBetCount();
  }, [props.id]);
  const updateCount = async(event) => {
    event.preventDefault();

    await supabase
        .from('Posts')
        .update({betCount: count + 1})
        .eq('id', props.id)

    setCount((count) => count + 1);
  }

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="title">{props.title}</h2>
          <h3 className="author">{"by " + props.author}</h3>
          <p className="description">{props.description}</p>
          <button className="betButton" onClick={updateCount} >👍 Bet Count: {count}</button>
      </div>
  );
};

export default Card;