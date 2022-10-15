import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// Components
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Logout from './pages/Logout/Logout'
import Landing from './pages/Landing/Landing'
import NewBlog from './pages/NewBlog/NewBlog'
import NavBar from './components/NavBar/NavBar'
import Profiles from './pages/Profiles/Profiles'
import BlogList from './pages/BlogList/BlogList'
import EditBlog from './pages/EditBlog/EditBlog'
import BlogDetails from './pages/BlogDetails/BlogDetails'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// Services
import * as authService from './services/authService'
import * as blogService from './services/blogService'

const App = () => {
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(authService.getUser())

  const handleLogout = () => {
    setUser(null)
    authService.logout()
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddBlog = async (blogData) => {
    const newBlog = await blogService.create(blogData)
    newBlog.author = user
    setBlogs([newBlog, ...blogs])
    navigate('/blogs')
  }

  const handleUpdateBlog = async (blogData) => {
    const updatedBlog = await blogService.update(blogData)
    updatedBlog.author = user
    setBlogs(blogs.map((b) => blogData._id === b._id ? updatedBlog : b))
    navigate('/blogs')
  }

  const handleDeleteBlog = async (id) => {
    console.log('Deleted Blog Id:', id)
    const deletedBlog = await blogService.deleteBlog(id)
    setBlogs(blogs.filter(b => b._id !== deletedBlog._id))
    navigate('/blogs')
  }

  useEffect(() => {
    const fetchAllBlogs = async () => {
      const data = await blogService.index()
      setBlogs(data)
    }
    fetchAllBlogs()
  }, [])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
        <Route path="/signup" element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />

        <Route path="/blogs" element={
          <ProtectedRoute user={user}>
            <BlogList blogs={blogs} />
          </ProtectedRoute>
        } />

        <Route path="/blogs/new" element={
          <ProtectedRoute user={user}>
            <NewBlog handleAddBlog={handleAddBlog} />
          </ProtectedRoute>
        } />

        <Route path="/blogs/:id/edit" element={
          <ProtectedRoute user={user}>
            <EditBlog handleUpdateBlog={handleUpdateBlog} />
          </ProtectedRoute>
        } />

        <Route path="/blogs/:id" element={
          <ProtectedRoute user={user}>
            <BlogDetails user={user} handleDeleteBlog={handleDeleteBlog} />
          </ProtectedRoute>
        } />

        <Route path="/profiles" element={
          <ProtectedRoute user={user}>
            <Profiles />
          </ProtectedRoute>
        } />

        <Route path="/changePassword" element={
          <ProtectedRoute user={user}>
            <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
          </ProtectedRoute>
        } />

      </Routes>
    </>
  )
}

export default App

