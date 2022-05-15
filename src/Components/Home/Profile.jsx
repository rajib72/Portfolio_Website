import React from 'react'
import './profile.css'
import  Typical  from 'react-typical'

const Profile = () => {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icons'>
                    <a href="https://www.facebook.com/profile.php?id=100011338001884">
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href="mailto:sarkarrajib2107@gmail.com">
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href="https://www.instagram.com/ig_rajib2op/">
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href="https://github.com/rajib72">
                        <i className='fa fa-github-square'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/rajib-sarkar-a9539820a/">
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    </div>
                </div>
                
                <div className='profile-datails-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello I'M <span className='highlighted-text'>Rajib</span>
                    </span>
                </div>
                <div className='profile-detail-role'>
                    {" "}
                    <h1>
                    <Typical
		                steps={['Web Developer', 1000, 'React Developer', 2000,'MERN Stack Developer',3000]}
		                loop={Infinity}
		                wrapper="p"
	                />
                    </h1>
                    <span className='profile-role-tagline'>
                    Knack of building applications with front and back end operations
                   </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn' >
                        {" "}
                        <a style={{color: "white"}} href="mailto:sarkarrajib2107@gmail.com">Hire Me</a>{""}</button>
                    <a href="RAJIB_SARKAR_Resume.pdf" download="RAJIB_SARKAR_Resume.pdf">
                    <button className='btn highlighted-btn'>My Resume</button>  
                    </a>  
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
                </div>
        </div>
    </div>
  )
}

export default Profile