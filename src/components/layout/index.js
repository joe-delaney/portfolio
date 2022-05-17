import "./index.scss";
import Sidebar from "../sidebar";
import Home from '..//home';
import About from '../about';
import Projects from "../projects";
import { Outlet, Route, Routes } from "react-router-dom";

const Layout = () => {
    return (
        <div className="App">
            <Sidebar/>
            <div className="page">
                <Outlet />
                    <Routes>
                        <Route index element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/projects" element={<Projects />}/>
                    </Routes>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;