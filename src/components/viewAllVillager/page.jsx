import React, { useState, useEffect } from 'react';
import Card from '../animal-card/card';
import { supabase } from '../../client';
import './view.css'
const ReadVillagers = () => {
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    const fetchVillagers = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select()
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching villagers:', error);
      } else {
        setVillagers(data);
      }
    };

    fetchVillagers();
  }, []);



  return (
    <div className="ReadVillagers">
      {villagers && villagers.length > 0 ? (
        villagers.map((villager) => (
          <Card
            key={villager.id}
            id={villager.id}
            name={villager.name}
            species={villager.species}
            personality={villager.personality}
            hobby={villager.hobby}
            favorite_item={villager.favorite_item}
            
          />
        ))
      ) : (
        <h2>No Villagers Yet 😞</h2>
      )}
    </div>
  );
};

export default ReadVillagers;