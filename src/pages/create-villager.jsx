import React from 'react';
import './CreatePost.css'
import { useState } from 'react';

const CreateVillager = () => {
    const personalities = [
        "Peppy", "Lazy", "Smug", "Cranky", "Normal", "Snooty", "Jock", "Uchi"
      ];
    const [villager, setVillager] = useState({
        name: '',
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

       
    };

    return (
        <div>
            <form>
                <label for="title">Name</label> <br />
                <input type="text" id="Name" name="title" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="personality">Personality</label><br />
                <select
                    name="personality"
                    value={villager.personality}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select</option>
                    {personalities.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select><br /><br />

                <label for="description">Hobby</label><br />
                <textarea rows="5" cols="50" id="hobby" onChange={handleChange}>
                </textarea>
                <br/>

                <label for="description">Favorite Item</label><br />
                <input type="submit" value="Submit" onClick={createVillager} />
            </form>
        </div>
    )
}

export default CreateVillager