import React from 'react'
import PropTypes from 'prop-types'
import Toggleable from "./Toggleable";
const Blog = ({ blog, handleBlogLike, handleBlogRemove}) => {
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
  const handleRemoveButton = () => {
      if (window.confirm(`Remove blog ${blog.title} by ${blog.author}? `)) {
          handleBlogRemove(blog.id)
      }

  }
  return (
      <div style={blogStyle} className="blogItem">
        {blog.title} by {blog.author}
        <Toggleable buttonLabel="View">
          <p className="blogUrl">{blog.url}</p>
          <p className="blogLikes">{blog.likes} <button onClick={handleLikeButton}>Like</button></p>
          <p><button onClick={handleRemoveButton}>Remove</button></p>
        </Toggleable>
      </div>
  )
}

Blog.propTypes = {
    blog: PropTypes.exact({
        id: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string,
        likes: PropTypes.number,
        author: PropTypes.string,
        user: PropTypes.array
    }),
    handleBlogLike: PropTypes.func.isRequired,
    handleBlogRemove: PropTypes.func.isRequired,
}


export default Blog
