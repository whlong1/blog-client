import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/blogs`

const index = async () => {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return res.json()
}

const show = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return res.json()
}

const create = async (blogData) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(blogData)
  })
  return res.json()
}

const update = async (blogData) => {
  const res = await fetch(`${BASE_URL}/${blogData._id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(blogData)
  })
  return res.json()
}

const deleteBlog = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

const createComment = async (id, commentData) => {
  const res = await fetch(`${BASE_URL}/${id}/comments`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commentData)
  })
  return res.json()
}

const updateComment = async (blogId, commentId, commentData) => {
  const res = await fetch(`${BASE_URL}/${blogId}/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commentData)
  })
  return res.json()
}

const deleteComment = async (blogId, commentId) => {
  console.log(commentId)
  const res = await fetch(`${BASE_URL}/${blogId}/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

export {
  index,
  show,
  create,
  update,
  deleteBlog,
  createComment,
  updateComment,
  deleteComment
}