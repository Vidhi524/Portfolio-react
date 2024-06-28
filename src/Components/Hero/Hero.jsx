import React from 'react'
import './Hero.css'
import myPic2 from '../../assets/picV2.jpeg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={myPic2} className='myPic1' alt="" />
      <h1><span>Hi! I'm Vidhi Arora,</span> frontend developer based in Delhi, India.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officia quos blanditiis fuga impedit reiciendis, illum vero quo maxime sunt! Rem aspernatur, cupiditate delectus iste in recusandae facilis mollitia hic.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
