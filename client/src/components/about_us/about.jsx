import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.scss';
import { FaArrowRight } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const About = () => {
    return (
        <div className='full'>
            <h1> Meet the Team </h1>

            <div className="card-container">

                <div class="card">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="pic" />
                    <p> Anshika Ranjan</p>
                    <button> <a href='https://anshikaranjan.github.io/React-Task-6/' target='_blank'> Know More  </a> <FaArrowRight></FaArrowRight></button>
                    <div className='icon'>
                    <a href='https://www.linkedin.com/in/anshika-ranjan-0b6255228'><FaLinkedin className='icon1'></FaLinkedin>  </a>
                    <a href='https://github.com/AnshikaRanjan'><FaGithub className='icon1'></FaGithub>  </a>
                    <a href='https://instagram.com/anshika.37?igshid=ZDdkNTZiNTM= '> <FaInstagram className='icon1'></FaInstagram> </a>
                    </div>
                </div>

                <div class="card">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="pic" />
                    <p> Sourav Singh </p>
                    <button> <a href='#'> Know More  </a> <FaArrowRight></FaArrowRight></button>
                    <div className='icon'>
                    <a href='https://www.linkedin.com/in/sourav-singh-561104214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedin className='icon1'></FaLinkedin>  </a>
                    <a href='https://github.com/srv-singh7'><FaGithub className='icon1'></FaGithub>  </a>
                    <a href='https://instagram.com/srv_singh7?igshid=MzMyNGUyNmU2YQ=='> <FaInstagram className='icon1'></FaInstagram> </a>
                    </div>
                </div>

                <div class="card">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="pic" />
                    <p> Gargi Kanungo </p>
                    <button> <a href='#'> Know More  </a> <FaArrowRight></FaArrowRight></button>
                    <div className='icon'>
                    <a href=''><FaLinkedin className='icon1'></FaLinkedin>  </a>
                    <a href=''><FaGithub className='icon1'></FaGithub>  </a>
                    <a href=''> <FaInstagram className='icon1'></FaInstagram> </a>
                    </div>
                </div>

                <div class="card">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="pic" />
                    <p> Vanshika Jain</p>
                    <button> <a href='#'> Know More  </a> <FaArrowRight></FaArrowRight></button>
                    <div className='icon'>
                    <a href=''><FaLinkedin className='icon1'></FaLinkedin>  </a>
                    <a href=''><FaGithub className='icon1'></FaGithub>  </a>
                    <a href=''> <FaInstagram className='icon1'></FaInstagram> </a>
                    </div>
                </div>

                <div className="card">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="pic" />
                    <p> Kushank Jain </p>
                    <button> <a href='#'> Know More  </a> <FaArrowRight></FaArrowRight></button>
                    <div className='icon'>
                    <a href=''><FaLinkedin className='icon1'></FaLinkedin>  </a>
                    <a href=''><FaGithub className='icon1'></FaGithub>  </a>
                    <a href=''> <FaInstagram className='icon1'></FaInstagram> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
