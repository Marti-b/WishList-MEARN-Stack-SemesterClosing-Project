import { useState } from "react";

function AddWish(props){
    const {addWish} = props;

    const [title, setTitle] = useState("");
    const [dsc, setDescription] = useState("");
    const [link, setLink] = useState("");

    return(
        <div className="add-wish">
         <h2>Add to the Wish List</h2>
            <div className="wishItem">
            <label htmlFor="title">Wish name: </label>
            <input
            name="title"
            id="title"
            onChange={(event => setTitle(event.target.value))}
            type="title"
            />
            </div>
            <div className="wishItem">
            <label htmlFor="title">Description: </label>
            <input
            name="title"
            id="title"
            onChange={(event => setDescription(event.target.value))}
            type="title"
            />
            
            </div>
            <div className="wishItem">
            <label htmlFor="title">External link: </label>
            <input
            name="title"
            id="title"
            onChange={(event => setLink(event.target.value))}
            type="title"
            />
            
            </div>
            <div className="wishItemBtn">
            <button 
            type="submit"
            onClick= {(event =>{
                addWish(title, dsc, link);
            })}>
                Add me!
            </button>
            </div>
            
        </div>
    )
}
export default AddWish;