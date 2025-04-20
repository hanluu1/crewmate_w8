import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const EditVillager = ({data}) => {

    const {id} = useParams();
    const [villager, setVillager] = useState({
            id:null,
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
    };
    const updateVillager = async (event) => {
        event.preventDefault();

        
    };
    const deletePost = async (event) => {
        event.preventDefault();

        
    }

    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange} >
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={updateVillager}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditVillager