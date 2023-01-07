import './App.css';
import Particles from './components/Particle';
import Home from './components/Home/Home';
import TechStack from './components/Techstack/techStack'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/about';
import Projects from './components/Projects/projects';

function App() {
  return (
    <div className="App">
      <Home/>
      <Particles id="tsparticles" />
      <TechStack />
      <About/>
      <Projects/>

    </div>
  );
}

export default App;
