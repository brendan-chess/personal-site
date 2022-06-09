import { useEffect } from 'react'
import minesweeperLanding from './minesweeper_landing.png'
import minesweeperEasy from './minesweeper_easy.png'
import './Portfolio.css'

const Portfolio = () => {

  useEffect(() => document.title = 'Portfolio | Brendan Chess', [])

  return (
    <div className='Page-container Portfolio-container'>
      <div className='Page-divider' />
      <div className='Page-title'>Portfolio</div>
      <div className='Page-divider' />
      <div className='Portfolio-sections'>
        <div className='Portfolio-section-title'>Projects</div>
        <a href='https://minesweepergame.io' target="_blank" className='Portfolio-section-subtitle'>minesweepergame.io</a>
        <div className='Portfolio-section-text'>My take on the classic game. I wanted to give minesweeper a cosmetic overhaul while keeping the same mechanics. It was built completely with React, is mobile friendly, and has no ads!</div>
        <div className='Portfolio-section-gallery'>
          <img className='Portfolio-section-img' src={minesweeperLanding} />
          <img className='Portfolio-section-img' src={minesweeperEasy} />
        </div>
        <div className='Portfolio-section-title'>Work Experience</div>
        <div className='Portfolio-section-subtitle'>Technical Co-Founder at Greek Rental LLC</div>
        <div className='Portfolio-section-text'>- Built company website from scratch using React, Firebase, and Stripe</div>
        <div className='Portfolio-section-text'>- Assisted in website design using Adobe XD</div>
        <div className='Portfolio-section-text'>- Participated in development of business strategy</div>
        <div className='Portfolio-section-subtitle'>Software Engineer Intern at RealTime Sports</div>
        <div className='Portfolio-section-text'>- Lead development of internal tools used for operating sports-based contests</div>
        <div className='Portfolio-section-text'>- Built components in user-facing iOS app with React Native and Firebase</div>
        <div className='Portfolio-section-text'>- Participated in daily stand-up meetings, followed agile process</div>
      </div>
    </div>
  )
}

export default Portfolio