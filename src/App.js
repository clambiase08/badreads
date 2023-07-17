import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './NavBar';
import Home from './Home';
import Contact from './Contact';
import About from './Main/About';
import Main from './Main/Main'; 

function App() {
  return (
    <div className="App">
 <Navbar />
            <Routes>
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route path="/main">
                    <Main />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Routes>

    </div>
  );
}

export default App;
