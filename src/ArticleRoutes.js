import { Route } from "react-router-dom"

import AlgorithmBasics from "./components/Articles/Pages/AlgorithmBasics"
import MemoryPointersDynamicProgramming from "./components/Articles/Pages/MemoryPointersDynamicProgramming"

const ArticleRoutes = () => {
  return (
    <>

      <Route exact path='/basics_of_algorithm_analysis'>
        <AlgorithmBasics />
      </Route>

      <Route exact path='/memory_pointers_and_dynamic_programming'>
        <MemoryPointersDynamicProgramming />
      </Route>

    </>
  )
}

export default ArticleRoutes