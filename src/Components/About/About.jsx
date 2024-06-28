import React from 'react'
import logo from '../../assets/logoV.jpg'
import myPic3 from '../../assets/picV3.jpeg'
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={logo} alt="" />
      </div>
      <div className='about-sections'>
        <div className='about-left'>
            <img src={myPic3} alt="" />
        </div>
        <div className='about-right'>
            <div className='about-para'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem omnis architecto cum ratione temporibus placeat, iure maiores libero quidem illum, similique reiciendis in. Exercitationem soluta enim rem consequatur, autem vitae.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ex architecto suscipit fuga totam, hic optio ullam consectetur molestiae, in accusamus, expedita necessitatibus. Recusandae tempora accusantium exercitationem eos molestiae mollitia!</p>
            </div>
            <div className="about-skills"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skills"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skills"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skills"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
        </div>
      </div>
    </div>
  )
}

export default About
