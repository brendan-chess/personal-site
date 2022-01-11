import './Articles.css'
import './Pages/Article.css'
import { useEffect } from 'react'
import ArticleListItem from './ArticleListItem'

const Articles = () => {

  useEffect(() => document.title = 'Articles | Brendan Chess', [])

  return (
    <div className='Page-container'>
      <div className='Page-divider' />
        <div className='Page-title'>Articles</div>
      <div className='Page-divider' />

      <ArticleListItem 
        path="/basics_of_algorithm_analysis"
        title="Basics of Algorithm Analysis"
        description="Algorithms aren't as mysterious as they may seem. Here's what you need to know about them."
      />
    </div>
  )
}

export default Articles