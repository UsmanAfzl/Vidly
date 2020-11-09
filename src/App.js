import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import NavBar from './components/navbar';
import Movies from "./components/movies.jsx";
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notfound';
import MovieForm from './components/movieForm';
import "./App.css";
function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <main className="container">
      <Switch>
        <Route path='/movies/:id' component={MovieForm}/>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/not-found" component={NotFound}></Route>
      <Redirect from="/" exact to="/movies"/>
      <Redirect to='/not-found'/>
      </Switch>
    </main>
    </React.Fragment>
  );
}

export default App;
