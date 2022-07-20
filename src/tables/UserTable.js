import React from 'react';

const TableHead = () => {
	return (
			<thead>
				<tr>
					<th>Name</th>
					<th>User Name</th>
					<th>Action</th>
				</tr>
			</thead>
		);
}

const TableBody = (props) => {
	const userData = props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button className="button muted-button" onClick={()=>props.editRow(user)}>Edit</button>
              <button className="button muted-button" onClick={()=>props.deleteUser(user.id)} >Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )

	return <tbody>{userData}</tbody>
}

const UserTable = (props) => {
	return (
			<table>
				<TableHead />
				<TableBody users={props.users} deleteUser={props.deleteUser} editRow={props.editRow}/>
			</table>

		)
}

export default UserTable;