import '../../style.css'
import './Home.css'

const Home = () => {
  return (
    <div className='Page-container'>
      <div className='Page-divider' />
      <img className='Home-pfp' src='https://firebasestorage.googleapis.com/v0/b/personal-site-280c7.appspot.com/o/BCHESS_circle.png?alt=media&token=73d3352a-4495-40a6-8493-d9aac75230cf' />
      <div className='Page-title'>Brendan Chess</div>
      <div className='Page-paragraph'>React + React Native developer. Junior at Arizona State University studying Computer Science.</div>
      <div className='Page-divider' />
      <div className='Page-subtitle'>Check out my articles!</div>
      <div className='Page-paragraph'>I like to write tutorials for React and React Native, as well as giving my insight to the app design and development process.</div>
    </div>
  )
}

export default Home