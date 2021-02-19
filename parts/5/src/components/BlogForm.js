import Toggleable from "./Toggleable";
import React, {useState} from "react";



const BlogForm = (props) => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [url, setUrl] = useState("")

    const handleCreateBlog = event => {
        event.preventDefault()
        props.handleCreateBlog(title, author, url)
    }

    return (

    <Toggleable buttonLabel="New Blog">
        <form>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" onChange={({ target }) => setTitle(target.value)}/>
            <label htmlFor="author">Author:</label>
            <input type="text" name="author" id="author" onChange={({ target }) => setAuthor(target.value)}/>
            <label htmlFor="title">Url:</label>
            <input type="text" name="url" id="url" onChange={({ target }) => setUrl(target.value)}/>
            <button onClick={handleCreateBlog}>Create</button>
        </form>
    </Toggleable>
    )
}

export default BlogForm

