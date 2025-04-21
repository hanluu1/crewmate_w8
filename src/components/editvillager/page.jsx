import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { supabase } from '../../client';
import { useEffect } from 'react';
import './edit.css';
import animalImage from '../../assets/animal.webp'; 

const EditVillager = () => {
    const personalities = [
        "Peppy", "Lazy", "Smug", "Cranky", "Normal", "Snooty", "Jock", "Uchi"
    ];
    const {id} = useParams();
    const [villager, setVillager] = useState({
            id:null,
            name: "",
            species: "",
            personality: "",
            hobby: "",
            favorite_item: "",
          });

    useEffect(() => {
    const fetchVillager = async () => {
        const { data, error } = await supabase
        .from('Posts')  // or 'villagers' if you renamed the table
        .select('*')
        .eq('id', id)
        .single();
    
        if (error) {
        console.error('Fetch error:', error);
        } else {
        setVillager(data); // ✅ fill the form with real data
        }
    };
    
    fetchVillager();
    }, [id]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setVillager( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    };
    const updateVillager = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .update({
                name: villager.name,
                species: villager.species,
                personality: villager.personality,
                hobby: villager.hobby,
                favorite_item: villager.favorite_item,
            })
            .eq('id', id)
           
        window.location = 'http://localhost:5173/';
    };
    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .delete()
            .eq('id', id);
        window.location = '/';
        
    }

    return (
        <div className="edit-form-container">
            <div className='edit-form'>
                <img className="villager-image" src={animalImage} width={70} height={100} />
            
                <div className="column-one">
                    <label htmlFor="name">Name</label> 
                    <input type="text" id="name" name="name" value={villager.name} onChange={handleChange} />
                    
                    <label htmlFor="species">Species</label>
                    <input type="text" id="species" name="species" value={villager.species} onChange={handleChange} />
                    
                </div> 
                <div className='column-two'>
                    <label htmlFor="personality">Personality</label>
                    <select
                        id="personality"
                        name="personality"
                        value={villager.personality}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        {personalities.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>

                    <label htmlFor="hobby">Hobby</label>
                    <textarea id="hobby" name="hobby" value={villager.hobby} onChange={handleChange}>
                    </textarea>

                    <label htmlFor="favorite_item">Favorite Item</label>
                    <input
                        type="text"
                        id="favorite_item"
                        name="favorite_item"
                        value={villager.favorite_item}
                        onChange={handleChange}
                    />
                
                </div>
            </div>
            <div>
                <input type="submit" value="Submit" className='edit-buttons' onClick={updateVillager} />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </div>
        </div>
    )
}

export default EditVillager