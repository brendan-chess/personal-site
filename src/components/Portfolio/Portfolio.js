import { useEffect } from 'react'
import './Portfolio.css'

const Portfolio = () => {

  useEffect(() => document.title = 'Portfolio | Brendan Chess', [])

  return (
    <div className='Page-container Portfolio-container'>
      <div className='Page-divider' />
      <div className='Page-title'>Portfolio</div>
      <div className='Page-divider' />
      <div className='Page-subtitle'>Experience</div>
      <div className='Page-paragraph'>Technical Co-Founder at Greek Rental LLC</div>
      <div className='Page-caption'>• Built company website from scratch using React, Firebase, and Stripe</div>
      <div className='Page-caption'>• Assisted in website design using Adobe XD</div>
      <div className='Page-caption'>• Participated in development of business strategy</div>
      <div className='Page-paragraph'>Software Engineer Intern at RealTime Sports</div>
      <div className='Page-caption'>• Lead development of internal tools used for operating sports-based contests</div>
      <div className='Page-caption'>• Built components in user-facing iOS app with React Native and Firebase</div>
      <div className='Page-caption'>• Participated in daily stand-up meetings, followed agile process</div>
    </div>
  )
}

export default Portfolio