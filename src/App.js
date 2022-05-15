import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/layout';
import Home from './components/home';
import About from './components/about';
import Projects from "./components/projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
      </Route>
    </Routes>
  );
}

export default App;
