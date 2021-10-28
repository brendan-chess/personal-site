import './Article.css'
import summary from './summary.svg'

const Article = () => {
  return (
    <div class='Article-container'>
      
      <div class='Article-body'>
        <div class='Article-title'>How To Add Firebase To Your React Native App</div>
        <div class='Article-author'>
          <span>Brendan Chess</span>
        </div>
        <div class='Article-date'>November 12th, 2021</div>
        <img class='Article-summary' src={summary} />
        <div class='Article-subtitle'>Installing Dependencies</div>
        <div class='Article-paragraph'>
          We are going to use a library called <span class='Article-paragraph-code'>react-native-firebase</span>. This is essentially like the <span class='Article-paragraph-code'>firebase</span> library if you have used Firebase with React on the web, but it provides support for iOS and Android. In the root of your project directory run the following:
        </div>
      </div>
    </div>
  )
}

export default Article