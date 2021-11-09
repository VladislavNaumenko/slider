import React, { useState } from "react";
import './App.css';
import SlideAside from "./SlideAside";

const slides = [
  {
    id: "",
    color: "linear-gradient(229.99deg, #11DEE9 -26%, #017E8B 145%)",
    title: "Snow in the desert",
    subtitle: "Love, death & robots",
    img: "https://images.unsplash.com/photo-1601574968106-b312ac309953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1996&q=80",
  },
  {
    id: "",
    color: "linear-gradient(215.32deg, #F90306 -1%, #9E0706 124%)",
    title: "Life Hutch",
    subtitle: "Love, death & robots",
    img: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2023&q=80",
  },
  {
    id: "",
    color: "linear-gradient(221.87deg, #8308EA 1%, #5305AF 128%)",
    title: "Zima Blue",
    subtitle: "Love, death & robots",
    img: "https://images.unsplash.com/photo-1501529301789-b48c1975542a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: "",
    color: "linear-gradient(220.16deg, #FFE101 -8%, #F39102 138%)",
    title: "Automated Customer Service",
    subtitle: "Love, death & robots",
    img: "https://images.unsplash.com/photo-1520263115673-610416f52ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
  },
];
const App = () => {
  const [index, setIndex] = useState(0);
  const decreaseIndex = () => {
    setIndex(getIndex(index - 1));
  }
  const increaseIndex = () => {
    setIndex(getIndex(index + 1));
  }
  const getIndex = (value) => {
    if (value > slides.length - 1) {
      return 0;
    }
    if (value < 0) {
      return slides.length - 1;
    }
    return value;
  }
  return (
    <div>
      <div className="container">
        <div className="sidebar" style={{ top: `-${slides.length - 1}00vh`, transform: `translateY(${index}00vh)` }}>
          {slides.map((item) => (<SlideAside key={item.id} color={item.color} title={item.title} subtitle={item.subtitle} />))}
        </div>
        <div className="main-slide" style={{ transform: `translateY(-${index}00vh)` }}>
          {slides.map((item) => (<div style={{backgroundImage: `url(${item.img})`}} />))}
        </div>
        <div className="controls">
          <button className="down-button" onClick={decreaseIndex}>
            <i className="fas fa-arrow-down" />
          </button>
          <button className="up-button" onClick={increaseIndex}>
            <i className="fas fa-arrow-up" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
