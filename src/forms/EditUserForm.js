import React, { useState } from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const submitForm = (event) => {
    event.preventDefault();
    props.updateUser(user.id, user);
  }

  return (
    <form onSubmit={submitForm}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <button type="submit">Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm