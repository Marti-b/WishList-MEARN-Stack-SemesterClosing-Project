import { useState } from "react";

function AddWish(props){
    const {addWish} = props;

    const [text, setWish] = useState("");

    return(
        <div className="add-wish">
         <h2>Add to the Wish List</h2>
            <div>
            <label htmlFor="title">Wish item: </label>
            <input
            name="title"
            id="title"
            onChange={(event => setWish(event.target.value))}
            type="title"
            />
            </div>
            <button 
            type="submit"
            onClick= {(event =>{
                addWish(text)
            })}>
                Add me!
            </button>
        </div>
    )
}
export default AddWish;