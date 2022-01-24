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

      <ArticleListItem 
        path="/memory_pointers_and_dynamic_programming"
        title="Memory, Pointers, and Dynamic Programming"
        description="Here are the fundamentals of how our code works with memory. Pointers will become your best friend."
      />
    </div>
  )
}

export default Articles