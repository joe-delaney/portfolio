import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/layout';
import Home from './components/home';
import About from './components/about';
import Projects from "./components/projects";
import Sidebar from './components/sidebar';

function App() {
  return (
    <>
    <Layout/>
    </>
  );
}

export default App;
