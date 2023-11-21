import './header.scss';
import '../../styles/components/_button.scss';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate= useNavigate();
	return (
		<div>
			<nav className='header'>
				<div className='header__logo'>
					<img src='https://i.pinimg.com/originals/46/cd/20/46cd20a33efe24abce136ee09cea122a.png' alt='logo'></img>
					<h4>Task Manager</h4>
				</div>
				<nav className='header__menu'>
					<a href='/'> Home </a> 
					<a href='/about'> About Us </a>
				</nav>
				<div className='header__buttons'>
				<button className="button" onClick={() => navigate("/signin")}>Sign In</button>
					<button className="button" onClick={() => navigate("/")}> Sign Out </button>
				</div>
			</nav>
		</div>
	);
};

export default Header;