import { HashRouter, BrowserRouter, Route, Link } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Smoothies from "./components/Smoothies";

function App() {
  return (
    <div>
      <HashRouter>
        <Header/>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/smoothies" component={Smoothies} />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
