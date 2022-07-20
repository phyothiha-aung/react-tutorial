import React from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm'

function App() {

  const usersData = [
    {id: 1, name: 'Phyo', username: 'phyo123'},
    {id: 2, name: 'Thiha', username: 'thiha123'},
    {id: 3, name: 'Aung', username: 'aung123'}
  ]

  const initialFormState = {
    id: null,
    name: '',
    username: ''
  }

  const [users, setUsers] = React.useState(usersData);

  const [editing, setEditing] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length+1;
    setUsers([...users, user]);
  }

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter(user => {
      return user.id !== id;
    }))
  }

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({id: user.id, name: user.name, username: user.username});
  }

  const updateUser = (id, updatedUser) => {
  setEditing(false)

  setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App With Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
