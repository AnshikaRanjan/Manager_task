import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.scss';
import { FaArrowRight } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            <h1> Meet the Team </h1>

            <div className="card-container">

                <div class="card">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="pic" />
                    <p> Anshika Ranjan</p>
                    <button> <a href='#'> Know More  </a> <FaArrowRight></FaArrowRight></button>
                    <div className='icon'>
                    <a href=''><FaLinkedin className='icon1'></FaLinkedin>  </a>
                    <a href=''><FaGithub className='icon1'></FaGithub>  </a>
                    <a href=''> <FaInstagram className='icon1'></FaInstagram> </a>
                    </div>
                </div>

                <div class="card">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="pic" />
                    <p> Anshika Ranjan</p>
                    <button> <a href='#'> Know More  </a> <FaArrowRight></FaArrowRight></button>
                    <div className='icon'>
                    <a href=''><FaLinkedin className='icon1'></FaLinkedin>  </a>
                    <a href=''><FaGithub className='icon1'></FaGithub>  </a>
                    <a href=''> <FaInstagram className='icon1'></FaInstagram> </a>
                    </div>
                </div>

                <div class="card">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="pic" />
                    <p> Anshika Ranjan</p>
                    <button> <a href='#'> Know More  </a> <FaArrowRight></FaArrowRight></button>
                    <div className='icon'>
                    <a href=''><FaLinkedin className='icon1'></FaLinkedin>  </a>
                    <a href=''><FaGithub className='icon1'></FaGithub>  </a>
                    <a href=''> <FaInstagram className='icon1'></FaInstagram> </a>
                    </div>
                </div>

                <div class="card">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="pic" />
                    <p> Anshika Ranjan</p>
                    <button> <a href='#'> Know More  </a> <FaArrowRight></FaArrowRight></button>
                    <div className='icon'>
                    <a href=''><FaLinkedin className='icon1'></FaLinkedin>  </a>
                    <a href=''><FaGithub className='icon1'></FaGithub>  </a>
                    <a href=''> <FaInstagram className='icon1'></FaInstagram> </a>
                    </div>
                </div>

                <div className="card">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="pic" />
                    <p> Anshika Ranjan</p>
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
