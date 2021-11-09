import '../../style.css'
import './Projects.css'

const Projects = () => {
  return (
    <div className='Page-container'>
      <div className='Page-divider' />
      <div className='Page-title'>Projects</div>
      <div className='Page-divider' />
      <div className='Page-subtitle'>Greek Rental</div>
      <a className='Page-link Page-paragraph' href='https://www.greekrental.net'>greekrental.net</a>
      <img className='Projects-image' src='https://firebasestorage.googleapis.com/v0/b/personal-site-280c7.appspot.com/o/greekrental.png?alt=media&token=6a2ab292-f8cc-4438-a929-aed1d6a88f53' />
      <div className='Page-paragraph'>My friend Evan started an event equipment rental business based in Tempe, Arizona. I built their website using React, Firebase, and Stripe for payments.</div>
      <div className='Page-divider' />
    </div>
  )
}

export default Projects