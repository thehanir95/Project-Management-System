import React from 'react'
import './design.css'
// import IMG1 from '../../assets/fos.jpg'
import IMG1 from '../../assets/2.jpg'
import IMG2 from '../../assets/3.jpg'
import IMG3 from '../../assets/4.jpg'
import IMG4 from '../../assets/5.jpg'
import IMG5 from '../../assets/6.jpg'
import IMG6 from '../../assets/7.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Portpolio Project',
    usedTec: ['HTML ,', ' CSS'],
    github: 'https://github.com/thehanir95/Single-Page-Application.git',
    demo: 'https://portfoliosite-9cf03.web.app'
  },
  {
    id:2,
    image: IMG3,
    title: 'Portpolio Project',
    usedTec: ['HTML ,', ' CSS'],
    github: 'https://github.com/thehanir95/Custom-Portfolio',
    demo: 'https://project-portfolio-d7847.web.app'
  },
  {
    id:3,
    image: IMG4,
    title: 'Architecture Design Project - Developing',
    usedTec: ['HTML ,', ' CSS'],
    github: 'https://github.com/thehanir95/Architecture-website',
    demo: ' https://architecture-site-5e2bb.web.app'
  },
  {
    id:4,
    image: IMG2,
    title: 'Portpolio Project',
    usedTec: ['React'],
    github: 'https://github.com/thehanir95/Portfolio-Sample',
    demo: 'https://www.figma.com/file/DvlWHGp7z143c30GDDjQqN/Food-Ordering-App?type=design&node-id=0%3A1&t=kBkwYTJJVaRBKXjd-1'
  },
  {
    id:5,
    image: IMG5,
    title: 'Project Management System - Developing',
    usedTec: ['Vue'],
    github: 'https://github.com/thehanir95/Project_Collection_Admin_Panel',
    demo: 'https://project-collection-97c01.web.app'
  },
  {
    id:6,
    image: IMG6,
    title: 'Resturant Management System - Developing',
    usedTec: ['Vue'],
    github: 'https://github.com/thehanir95/Resturant-Management-System',
    demo: 'https://project-collection-97c01.web.app'
  }
]


const Design = () => {
  return (
    <section id='design'>
      <h5>What I do</h5>
      <h2>Recent Projects</h2>

      <div className='container design_container'>
        {
          data.map(({id, image, title,usedTec, github, demo}) => {
            return(
              <article className='design_item' key={id}>
                <div className='design_item-image'>
                  <img src={image} alt="IMG1" />
                </div>
                <h3>{title}</h3>
                <div className='tec_name_container'>
                  <h4 className='tec_name_header'>Technologies:</h4>
                  {/* <span className='tec_name'>{usedTec[0]}</span>
                  <span className='tec_name'>{usedTec[1]}</span> */}
                  <span className='tec_name'>{usedTec}</span>
                </div>
                <div className='design_item-cta'>
                <a href={github} className='btn' target='_blank'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>  
                </div>
              </article>
            )
          })
        }
             
      </div>
    </section>
  ) 
}

export default Design