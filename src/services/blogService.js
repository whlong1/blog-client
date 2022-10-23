import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/blogs`

const index = async () => {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (err) {
    throw err
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const create = async (blogData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogData)
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const update = async (blogData) => {
  try {
    const res = await fetch(`${BASE_URL}/${blogData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogData)
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const deleteBlog = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const createComment = async (id, commentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentData)
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const updateComment = async (blogId, commentId, commentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${blogId}/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentData)
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const deleteComment = async (blogId, commentId) => {
  try {
    const res = await fetch(`${BASE_URL}/${blogId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const addLikeToBlog = async (blogId) => {
  try {
    const res = await fetch(`${BASE_URL}/${blogId}/likes`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

const removeLikeFromBlog = async (blogId) => {
  try {
    const res = await fetch(`${BASE_URL}/${blogId}/likes`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

export {
  index,
  show,
  create,
  update,
  deleteBlog,
  createComment,
  updateComment,
  deleteComment,
  addLikeToBlog,
  removeLikeFromBlog,
}