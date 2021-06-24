import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Planets from "./pages/Planets";
import Starships from "./pages/Starships";
import Favorites from './pages/Favorites';
import injectContext from './store/appContext';
import "./index.css"






function App() {

  return (
    <>

    
    

    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/" children={ <Home/> } />
    <Route exact path="/planets" children={ <Planets/> } />
    <Route exact path="/starships" children={ <Starships/> } />
    <Route exact path="/fav" children={ <Favorites/> }/>
    <Route path="*" children={ <Error/> } />
    </Switch>
    </Router>
    









    </>
  );
}

export default injectContext(App);
