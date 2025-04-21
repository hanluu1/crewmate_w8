import React from 'react';
import { useState } from 'react';
import { supabase } from '../../client';
import './create.css';
import animalImage from '../../assets/animal.webp';
const CreateVillager = () => {
    const personalities = [
        "Peppy", "Lazy", "Smug", "Cranky", "Normal", "Snooty", "Jock", "Uchi"
      ];
    const [villager, setVillager] = useState({
        name: '',
        species: '',
        personality: '',
        hobby: '',
        favorite_item: '',
      })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setVillager( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    const createVillager = async (event) => {
        event.preventDefault();
        console.log("Villager data before insert:", villager);
        const { data, error } = await supabase
            .from('Posts')
            .insert({
                name: villager.name,
                species: villager.species,
                personality: villager.personality,
                hobby: villager.hobby,
                favorite_item: villager.favorite_item,
            });
            
      console.log("Supabase insert result:", { data, error });
    
      if (error) {
        alert("❌ Insert failed: " + error.message);
      } else {
        alert("✅ Villager added!");
        window.location = '/'; 
      }
    };
            
    return (
        <div className="edit-form-container">
            <div className="edit-form">
                <img className="villager-image" src={animalImage} width={70} height={100} />
                
                <div className="column-one">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={handleChange}  />
        
                    <label htmlFor="species">Species</label>
                    <input type="text" id="species" name="species" onChange={handleChange} />
                </div>    
                <div className='column-two'>
                    <label htmlFor="personality">Personality</label>
                    <select
                        id="personality"
                        name="personality"
                        value={villager.personality}
                        onChange={handleChange}
                        required
                        className="form-select"
                    >
                        <option value="">Select</option>
                        {personalities.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                
                
                    <label htmlFor="hobby">Hobby</label>
                    <textarea
                        id="hobby"
                        name="hobby"
                        onChange={handleChange}
                        className="form-textarea"
                    ></textarea>
        
                    <label htmlFor="favorite_item">Favorite Item</label>
                    <input
                        type="text"
                        id="favorite_item"
                        name="favorite_item"
                        onChange={handleChange}
                        className="form-input"
                    />
                    
                </div>
                
                
            </div>
            <div className="form-buttons">
                <input type="submit" value="Submit" onClick={createVillager} className="submit-button" />
            </div>
        </div>
    
    )
}

export default CreateVillager