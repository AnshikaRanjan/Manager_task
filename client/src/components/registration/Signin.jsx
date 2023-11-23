import './registration.scss';
import '../../styles/components/_button.scss';
import './bg.css';
import { useNavigate } from 'react-router-dom';


const Signin = () => {
	const navigate= useNavigate();
	return (
		<div className='signup-form'>
			<div className='signup-form__wrapper'>
				<form className='form'>
					<h1>Sign In</h1>
					<div className='form-group'>
						<input
							type='email'
							name='email'
							id=''
							placeholder='Enter Email'
						/>
					</div>
					<div className='form-group'>
						<input
							type='password'
							name='password'
							id=''
							placeholder='Enter Password'
						/>
					</div>
					<div className='form-group'>
						<button className='button'  onClick={() => navigate("/dashboard")} >Sign In</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signin;