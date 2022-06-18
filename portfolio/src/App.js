import './App.scss';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Topbar from './components/Topbar';
import Works from './components/Works';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact /> 
        </div>
    </div>
  );
}

export default App;
