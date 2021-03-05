import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import {Notification} from "./components/Notification";
import "./style.css"
import BlogForm from "./components/BlogForm";

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)
  const [notification, setNotification] = useState(null)


  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const userData = await loginService.login({
        username: username,
        password: password
      })
      setUsername("")
      setPassword("")
      setUser(userData)
      blogService.setToken(userData.token)
      window.localStorage.setItem(
          'loggedBlogUser', JSON.stringify(userData)
      )
    } catch (e) {
      console.error(e)
    }
  }

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem('loggedBlogUser')
  }

  const handleCreateBlog = async (title, author, url) => {
    try {
      const response = await blogService.create({
        title: title,
        author: author,
        url: url
      })
      setBlogs(blogs.concat(response))
      createNotification('Blog created', 'success')
    } catch(e) {
      console.error(e)
      createNotification('Error creating blog', 'error')
    }
  }

  const handleBlogLike = async (id, title, author, url, initialLikes) => {
    const updatedLikes = initialLikes + 1
    try {
      await blogService.update(id, {
        title: title,
        author: author,
        url: url,
        likes: updatedLikes
      })
      const updatedBlogs = blogs.map(blog => {
        if(blog.id === id) {
          blog.title = title
          blog.author = author
          blog.url = url
          blog.likes = updatedLikes
          return blog
        }
        return blog
      })
      setBlogs(updatedBlogs)
      createNotification('Likes added', 'success')
    } catch(e) {
      console.error(e)
      createNotification('Error creating blog', 'error')
    }
  }

  const handleBlogRemove = async (id) => {
    try {
      await blogService.remove(id);
    } catch (e) {
      console.error(e)
      createNotification('Error removing blog', 'error')
    }
    const updatedBlogs = blogs.flatMap(blog => {
      if(blog.id === id) {
       return []
      }
      return [blog]
    })
    setBlogs(updatedBlogs)
  }

  const createNotification = (message, type) => {
    setNotification({message: message, type: type})
    setTimeout(() => {setNotification(null)}, 5000)
  }

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedBlogUser')
    if(loggedInUserJSON) {
      const userData = JSON.parse(loggedInUserJSON)
      blogService.setToken(userData.token)
      setUser(userData)
    }
    blogService.getAll().then(blogs =>
      setBlogs( blogs.sort((a, b) => b.likes - a.likes ))
    )  
  }, [])

  if(user === null) {
    return(
       <div>
         <h2>Log in to application</h2>
         <form>
           <label htmlFor="username">Username</label>
           <input type="text" name="username" id="username" onChange={({ target }) => setUsername(target.value)}/>
           <label htmlFor="password">Password</label>
           <input type="text" name="password" id="password" onChange={({ target }) => setPassword(target.value)}/>
           <button onClick={handleLogin}>Submit</button>
         </form>
       </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification data={notification}/>
      <p>Hello {user.name} <button onClick={handleLogout}>Logout</button></p>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} handleBlogLike={handleBlogLike} handleBlogRemove={handleBlogRemove}/>
      )}

      <h2>create new</h2>
      <BlogForm handleCreateBlog={handleCreateBlog}/>
    </div>
  )
}

export default App