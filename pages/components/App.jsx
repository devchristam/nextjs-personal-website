import MyHeader from './MyHeader'
import SelfIntro from './SelfIntro'
import AboutMe from './AboutMe'
import Project from './Project'
import MyFooter from './MyFooter'

const App = () => {
  return (
    <div className="App font-sans bg-white">
      <MyHeader/>
      <SelfIntro/>
      <AboutMe/>
      <Project/>
      <MyFooter/>
    </div>
  );
}

export default App;
