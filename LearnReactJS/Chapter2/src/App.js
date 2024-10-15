// import logo from './logo.svg';
import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
// import MyComponent from "./components/MyComponent";
// import { useDispatch, useSelector } from 'react-redux';
// import { increaseCounter, decreaseCounter } from './redux/action/counterAction';

const App = () => {
  // const count = useSelector(state => state.counter.count);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
