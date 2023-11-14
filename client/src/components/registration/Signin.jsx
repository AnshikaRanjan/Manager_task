import './registration.scss';
import '../../styles/components/_button.scss';
import './bg.css';

const Signin = () => {
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
						<button className='button'>Sign In</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signin;