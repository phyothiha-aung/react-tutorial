import React from 'react';

const AddUserForm = (props) => {

	const initialFormState = {
		id: null,
		name: '',
		username: ''
	}

	const [user, setUser] = React.useState(initialFormState);

	const handleChange = (event) => {
		const {name, value} = event.target;

		setUser({...user, [name]: value});
	}

	const submitForm= (event) => {
		event.preventDefault();
		if(!user.name || !user.username) return;

		props.addUser(user);
		setUser(initialFormState);
	} 
	return (
			<form onSubmit={submitForm}>
				<label htmlFor="name">Name</label>
				<input type="text" placeholder="Enter Name" name="name" value={user.name} onChange={handleChange}/>
				<label htmlFor="username">Username</label>
				<input type="text" placeholder="Enter User Name" name="username" value={user.username} onChange={handleChange}/>
				<button type="submit">Add New User</button>
			</form>
		)
}

export default AddUserForm;