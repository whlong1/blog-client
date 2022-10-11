import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// Components
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Landing from './pages/Landing/Landing'
import NewBlog from './pages/NewBlog/NewBlog'
import NavBar from './components/NavBar/NavBar'
import Profiles from './pages/Profiles/Profiles'
import BlogList from './pages/BlogList/BlogList'
import EditBlog from './pages/EditBlog/EditBlog'
import BlogDetails from './pages/BlogDetails/BlogDetails'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// Services
import * as authService from './services/authService'
import * as blogService from './services/blogService'

const App = () => {
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(authService.getUser())

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
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

  useEffect(() => {
    const fetchAllBlogs = async () => {
      const data = await blogService.getAll()
      setBlogs(data)
    }
    fetchAllBlogs()
  }, [])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />

        <Route path="/blogs" element={<BlogList blogs={blogs} />} />
        <Route path="/blogs/new" element={<NewBlog handleAddBlog={handleAddBlog} />} />

        <Route path="/blogs/edit" element={<EditBlog handleUpdateBlog={handleUpdateBlog} />} />

        <Route path="/blogs/:id" element={<BlogDetails blogs={blogs} user={user} />} />

        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  )
}

export default App