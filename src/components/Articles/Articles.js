import './Articles.css'
import './Pages/Article.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Articles = () => {

  useEffect(() => document.title = 'Articles | Brendan Chess', [])

  return (
    <div className='Page-container'>
      <div className='Page-divider' />
        <div className='Page-title'>Articles</div>
      <div className='Page-divider' />

      <div className='Articles-item'>
        <Link to='/algorithm_basics'>
          <div className='Articles-item-title'>Algorithm Basics</div>
        </Link>
        <div className='Articles-item-description'>Algorithms aren't as mysterious as they may seem. Here's what you need to know about them.</div>
        <Link to='/algorithm_basics'>
          <div className='Articles-item-cta'>READ ARTICLE</div>
        </Link>
      </div>
      
    </div>
  )
}

export default Articles