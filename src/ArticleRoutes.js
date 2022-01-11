import { Route } from "react-router-dom"

import AlgorithmBasics from "./components/Articles/Pages/AlgorithmBasics"

const ArticleRoutes = () => {
  return (
    <>

      <Route exact path='/basics_of_algorithm_analysis'>
        <AlgorithmBasics />
      </Route>

    </>
  )
}

export default ArticleRoutes