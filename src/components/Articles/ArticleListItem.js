import { Link } from 'react-router-dom'

const ArticleListItem = ({ path, title, description }) => {
  return (
    <div className='Articles-item'>
      <Link to={path}>
        <div className='Articles-item-title'>{title}</div>
      </Link>
      <div className='Articles-item-description'>{description}</div>
      <Link to={path}>
        <div className='Articles-item-cta'>READ ARTICLE</div>
      </Link>
    </div>
  )
}

export default ArticleListItem