const ArticleHeader = ({ title, date }) => {
  return (
    <>
      <div class='Article-title'>{title}</div>
      <div class='Article-author'>
        <span>by Brendan Chess</span>
      </div>
      <div class='Article-paragraph'>{date}</div>
    </>
  )
}

export default ArticleHeader