import { Route } from "react-router-dom"

import AlgorithmBasics from "./components/Articles/Pages/AlgorithmBasics"

const ArticleRoutes = () => {
  return (
    <>

      <Route exact path='/algorithm_basics'>
        <AlgorithmBasics />
      </Route>

    </>
  )
}

export default ArticleRoutes