import React from 'react'
import './Projects.css'
import p1 from './Image/p1.png'
import p2 from './Image/p2.png'
import p3 from './Image/p3.png'

const Projects = () => {
  return (
    <section>
        <div className="container">
            <div className="all-item">
                <div className="item" data-aos="fade-up">
                    <div className="left">
                        <div className="img">
                            <img src={p1} alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <h2 className='project-title'>Restaurant</h2>
                        <h3 className='project-sub-title'>HTML,CSS,Swiper JS</h3>
                        <p className='project-desc'>A responsive restaurant website using html,css and javascript</p>
                        <div className="buttons">
                            <a href="https://github.com/rajib72/Restaurant_website" className='primary-btn'>Source Code</a>
                        </div>
                    </div>
                </div>

                <div className="item" data-aos="fade-up">
                    <div className="left">
                        <div className="img">
                            <img src={p2} alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <h2 className='project-title'>Mi Store Clone</h2>
                        <h3 className='project-sub-title'>HTML,CSS,JS,React,Bootstrap</h3>
                        <p className='project-desc'>This project is all about Frontend of MI Store. React JS is used for this.
It is a JSON based project and I have store all the data in a JSON file.
I fetched this data from the JSON file using Props in React JS.
</p>
                        <div className="buttons">
                            <a href="https://github.com/rajib72/MI-Store-clone" className='primary-btn'>Source Code</a>
                        </div>
                    </div>
                </div>

                <div className="item" data-aos="fade-up">
                    <div className="left">
                        <div className="img">
                            <img src={p3} alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <h2 className='project-title'>MovieBase</h2>
                        <h3 className='project-sub-title'>HTML,CSS,JS,React,OMDB API</h3>
                        <p className='project-desc'>This project is all about searching movies.
It is an API based project and I have used OMDB API which contains all the data of a movie and
information from that API is integrated in this project.
</p>
                        <div className="buttons">
                            <a href="https://github.com/rajib72/Movie-Search" className='primary-btn'>Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects