import './header.scss';
import '../../styles/components/_button.scss';

const Header = () => {
	return (
		<div>
			<nav className='header'>
				<div className='header__logo'>
					<img src='https://i.pinimg.com/originals/46/cd/20/46cd20a33efe24abce136ee09cea122a.png' alt='logo'></img>
					<h4>Task Manager</h4>
				</div>
				<nav className='header__menu'>
					<a href='#home'>Home </a> 
					<a href='#About'> About Us </a>
				</nav>
				<div className='header__buttons'>
					<button className="button"> Sign In </button>
					<button className="button"> Sign Out </button>
				</div>
			</nav>
		</div>
	);
};

export default Header;