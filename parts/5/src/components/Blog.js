import React from 'react'
import Toggleable from "./Toggleable";
const Blog = ({ blog, handleBlogLike}) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const handleLikeButton = () => {
      handleBlogLike(blog.id, blog.title, blog.author, blog.url, blog.likes)
  }
  return (
      <div style={blogStyle}>
        {blog.title}
        <Toggleable buttonLabel="View">
          <p>{blog.url}</p>
          <p>{blog.likes} <button onClick={handleLikeButton}>Like</button></p>
          <p>{blog.author}</p>
        </Toggleable>
      </div>
  )
}


export default Blog
