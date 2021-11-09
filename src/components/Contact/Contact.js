import '../../style.css'
import './Contact.css'
import instagram from './instagram.svg'
import linkedin from './linkedin.svg'
import github from './github.svg'
import email from './email.svg'

const Contact = () => {
  return (
    <div className='Page-container'>
      <div className='Page-divider' />
      <div className='Page-title'>Contact</div>
      <div className='Page-divider' />
      <div className='Page-paragraph Contact-email'>brendanchess25@gmail.com</div>
      <div className='Contact-row'>
        <a href='https://www.instagram.com/brendan_chess/'><img src={instagram} /></a>
        <a href='https://www.linkedin.com/in/brendan-chess-67196421b/'><img src={linkedin} /></a>
        <a href='https://github.com/brendan-chess'><img src={github} /></a>
      </div>
    </div>
  )
}

export default Contact