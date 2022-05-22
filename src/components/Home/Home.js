import './Home.css'
import { useEffect } from 'react'

const Home = () => {

  useEffect(() => document.title = 'Home | Brendan Chess', [])

  return (
    <div className='Page-container'>
      <img className='Home-pfp' src='https://firebasestorage.googleapis.com/v0/b/personal-site-280c7.appspot.com/o/bchess_circle_small.png?alt=media&token=12e24fee-d45d-42a1-a50c-3e7929d9a486' />
      <div className='Page-divider' />
      <div className='Page-title'>Brendan Chess</div>
      <div className='Page-divider' />
      <div className='Page-paragraph'>React + React Native developer</div>
      <div className='Page-paragraph'>Senior at Arizona State University studying Computer Science</div>
    </div>
  )
}

export default Home