import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/AddService/AddService';
import Review from './components/Review/Review';
import Book from './components/Book/Book';
import BookingList from './components/BookingList/BookingList';
import Oder from './components/Oder/Oder';
import ManageService from './components/ManageService/ManageService';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login/Login';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/addService">
          <AddService></AddService>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <PrivateRoute path="/service/:id">
          <Book></Book>
        </PrivateRoute>
        <Route path="/book">
          <Book></Book>
        </Route>
        <Route path="/bookingList">
          <BookingList></BookingList>
        </Route>
        <Route path="/Oderlist">
          <Oder></Oder>
        </Route>
        <Route path="/Manageservice">
          <ManageService></ManageService>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/Makeadmin">
          <MakeAdmin></MakeAdmin>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
