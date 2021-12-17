import { useState } from "react"

function AddComment(props){
    console.log("Props of Addcomment:", props)

    const [name, setName] = useState("");
    const [content, setComment] = useState("");

    return(
        <div className="add-comment">
            <h2>Add comment</h2>
            <div className="userName">
            <label htmlFor="username">Name: </label>
            <input
            name="username"
            id="username"
            onChange={(event) => setName(event.target.value)}
            type="text"
            />
            </div>
            <div className="content">
            <label htmlFor="content">Comment: </label>
            <input
            name="content"
            id="content"
            onChange={(event) => setComment(event.target.value)}
            type="text"
            />
            </div>
            <button 
            type="submit"
            onClick= {(event =>{
                 props.addComment(props.id, name, content)
            })}>
                Add comment
            </button>
        </div>
    )

} 
export default AddComment; 