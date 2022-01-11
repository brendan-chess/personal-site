import { useEffect } from 'react'
import { CodeBlock, railscast } from "react-code-blocks"
import ArticleHeader from "../ArticleHeader"

const AlgorithmBasics = () => {

  useEffect(() => document.title = 'Basics of Algorithm Analysis | Brendan Chess', [])

  return (
    <div class='Article-container'>
      <div class='Article-body'>

        <ArticleHeader
          title='Basics of Algorithm Analysis'
          date='January 2022'
        />

        <div class='Article-paragraph'>
        Algorithms have become sort of a buzzword. You have probably heard about the YouTube algorithm, which determines which videos are recommended to you. You may even be familiar with how Spotify uses an algorithm to recommend new songs for you to listen to, based on music you already like. The public perception of algorithms is probably along the lines of “they do a lot of complicated things behind the scenes”. But if you are studying computer science, then let's take a step back and define what algorithms are and discuss some basics that you should know about them.
        </div>

        <div class='Article-paragraph'>
        An algorithm can simply be defined as a series of computational steps. Any program that you have written is essentially an algorithm. You could even consider a recipe for making a meal to be an algorithm. It really just comes down to being any set of instructions. Algorithms also tell us something; they always produce some sort of output. They are always given some input, and operate on that input to produce a result. Since the definition of an algorithm is so broad, the input and output can take many different forms. For instance, a pathfinding algorithm will output a set of driving directions for your road trip. A search engine’s algorithm will output a list of web pages that are related to your query. Any sort of process that takes some input, performs a set of operations on that input, and returns some output, can be considered an algorithm.
        </div>

        <div class='Article-paragraph'>
        When we talk about algorithms, we are usually concerned with their performance. By performance, we are talking about the time they take to run, and the space in memory they use. Instead of trying to quantify time and space, we actually just want to think about how much more time and space they take as they are provided with bigger inputs. The performance of an algorithm is related to the size of its input. For instance, you can imagine that a sorting algorithm would be quick to sort 10 numbers, but take much longer to sort 10 million numbers. But how much longer would it take? This growth in the algorithm's running time (and space used), as related to the size of its input, is known as its efficiency. 
        </div>

        <div class='Article-paragraph'>
        When talking about algorithm efficiency, we use a standard called Big-O notation. Big-O notation uses the variable ‘n’ to represent the size of an algorithm’s input. We can describe the rate at which the runtime grows in terms of n. To do this, we have to analyze the code of an algorithm. As an example, let's look at an algorithm which prints every element in a list:
        </div>

        <div class='Article-code-block'>
        <CodeBlock 
          text={`function printList(list) {
  for(let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}`}
          language='javascript'
          theme={railscast}
        />
        </div>

        <div class='Article-paragraph'>
        This code consists of a for loop, and the number of times that the loop iterates depends on the length of the input list. That length becomes our variable n in this case. If we were to add one more element to the list, then the for loop would iterate one more time. If we added 1 million more elements, then the for loop would iterate 1 million more times. The runtime of this algorithm grows in a linear fashion, as n increases. Because of that observation, this algorithm at least has a time complexity of O(n), read as “big O of n”. We say at least because we may come across a worse time complexity later on in the code. The worst time complexity that we find is actually all that we use to describe the overall time complexity of the algorithm. We do that because the increase in runtime caused by other more efficient parts of code are insignificant compared to how much the least efficient parts will increase the runtime.
        </div>

        <div class='Article-paragraph'>
        To finish, we have to examine line 3. How much time does this line take? Accessing the ith element of the list will take the same amount of time if the list has 10 elements or 10 million elements. Following that, printing that element with <span class='Article-paragraph-code'>console.log()</span> also takes the same amount of time regardless of the size of the list. Therefore, this line runs in constant time; no matter what the size of the input list is, this line has the same runtime. In Big-O notation this is expressed as O(1), read as “big O of one”. Because O(1) is more efficient than O(n), and we have analyzed all lines of code in this algorithm, we can conclude that the time-complexity of this algorithm is O(n), where n is the length of the input list. The space complexity of this algorithm is O(1) because the algorithm does not declare any variables. The amount of space used in memory from the start of the algorithm to when it finishes remains constant.
        </div>

        <div class='Article-paragraph'>
        In addition to O(1) and O(n), here are some other fundamental space-time complexities that you will encounter:
        </div>

        <div class='Article-paragraph'>
        • O(logn) and O(nlogn) - These runtimes often occur in algorithms that operate on tree data structures. This happens because the height of a tree equals logn.
        </div>

        <div class='Article-paragraph'>
        • O(n²) - Just as a for-loop creates an O(n) runtime, a double for-loop creates an O(n²) time. This is because you are performing n operations on each element in an input of size n.
        </div>

        <div class='Article-paragraph'>
        Analyzing the efficiency of algorithms gets much more complicated than this. One topic to look out for if you are learning about algorithms in school is recurrence relations, which describe the efficiency of recursive algorithms. Also, conditional statements (like if and while) are a bit tricky. They don’t necessarily have a relationship with the size of the input, yet they can still have an influence on space-time complexity. Regardless, I hope that this article gave you, or has strengthened your understanding of the basic ideas about algorithms and what you should know about them.
        </div>

      </div>
    </div>
  )
}

export default AlgorithmBasics