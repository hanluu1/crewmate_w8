import React from 'react';
import { useState } from 'react';
import { supabase } from '../../client';

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
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>
                <label htmlFor="species">Species</label><br />
                <input type="text" id="species" name="species" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="personality">Personality</label><br />
                <select
                    id="personality"
                    name="personality"
                    value={villager.personality}
                    onChange={handleChange}
                    requireds
                >
                    <option value="">Select</option>
                    {personalities.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select><br /><br />

                <label htmlFor="hobby">Hobby</label><br />
                <textarea id="hobby" name="hobby" onChange={handleChange}>
                </textarea>
                <br/>

                <label htmlFor="favorite_item">Favorite Item</label><br />
                <input
                    type="text"
                    id="favorite_item"
                    name="favorite_item"
                    onChange={handleChange}
                /><br />
                <br/>
                <input type="submit" value="Submit" onClick={createVillager} />
            </form>
        </div>
    )
}

export default CreateVillager