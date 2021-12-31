import './Articles.css'
import { useEffect } from 'react'

const Articles = () => {

  useEffect(() => document.title = 'Articles | Brendan Chess', [])

  return (
    <div className='Page-container'>
      <div className='Page-divider' />
        <div className='Page-title'>Articles</div>
      <div className='Page-divider' />
      <div className='Page-subtitle'>Under Construction</div>
    </div>
  )
}

export default Articles