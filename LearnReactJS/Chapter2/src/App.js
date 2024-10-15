// import logo from './logo.svg';
import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
// import MyComponent from "./components/MyComponent";
// import { useDispatch, useSelector } from 'react-redux';
// import { increaseCounter, decreaseCounter } from './redux/action/counterAction';

const App = () => {
  // const count = useSelector(state => state.counter.count);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
