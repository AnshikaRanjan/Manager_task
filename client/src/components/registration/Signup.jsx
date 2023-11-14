import './registration.scss';
import '../../styles/components/_button.scss';
import { useState } from 'react';
import './bg.css';

const Signup = () => {
	const [state, setState] = useState({
		email: '',
		password: '',
		username: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	console.log(state.email, state.password, state.username);
	return (
		<div className='signup-form'>
			<div className='signup-form__wrapper'>
				<form className='form' onSubmit={handleSubmit}>
					<h1>Sign up</h1>

					<div className='form-group'>
						<input
							type='text'
							placeholder='Enter Name'
							name='username'
							value={state.username}
							onChange={handleChange}
						/>
					</div>
					<div className='form-group'>
						<input
							type='email'
							name='email'
							value={state.email}
							id=''
							placeholder='Enter Email'
							onChange={handleChange}
						/>
					</div>
					<div className='form-group'>
						<input
							type='password'
							name='password'
							value={state.password}
							id=''
							placeholder='Enter Password'
							onChange={handleChange}
						/>
					</div>
					<div className='form-group'>
						<button className='button'>Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;