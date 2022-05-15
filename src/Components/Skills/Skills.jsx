import React from 'react'
import './Skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='experience'>
        <div className="container experience_container">
            <div className="experience_frontend" data-aos="fade-up">
                <h3>Frontend Development</h3>
                <div className="experience_content">
                    <article className='experience_details'> 
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_details'> 
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>CSS</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience_details'> 
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_details'> 
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_details'> 
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>React</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className="experience_backend" data-aos="fade-up">
            <h3>Backend Development</h3>
                <div className="experience_content">
                    <article className='experience_details'> 
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>Node JS</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_details'> 
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>MongoDB</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_details'> 
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>Express</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience_details'> 
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>MySQL</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience_details'> 
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>Mongoose</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills