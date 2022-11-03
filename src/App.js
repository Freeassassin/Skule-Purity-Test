import skuletile from "./skuletile.png";
import TinderCard from "react-tinder-card";
import itemsTxt from "./items.txt";
import "./App.css";
import { useEffect, useState, createRef, useRef, React } from "react";

function App() {
  const [index, setIndex] = useState();
  const [items, setItems] = useState(
    fetch(itemsTxt)
      .then((r) => r.text())
      .then((text) => {
        return text.split("\n");
      })
  );

  const childRefs = useRef([createRef()]);

  function swipeRight() {
    console.log(childRefs.current);
    if (childRefs.length) {
      console.log(childRefs);
      childRefs.current[index].current.swipe("right");
    }
  }

  function swipeLeft() {
    if (childRefs.length) {
      childRefs.current[index].current.swipe("left");
    }
  }
  const onSwipe = () => {
    setIndex(index - 1);
  };

  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${skuletile})`, backgroundRepeat: "all" }}
    >
      <div className="swipe-container">
        <div className="item-cards-container">
          {items.map((item, index) => {
            console.log(item);
            return (
              <TinderCard
                className="swipe"
                ref={childRefs[index].current}
                onSwipe={onSwipe}
              >
                <div className="item-card">
                  <h3 className="items-text">{item}</h3>
                </div>
              </TinderCard>
            );
          })}
        </div>
      </div>
      <div className="swipe-buttons">
        <button className="swipe-button" onClick={swipeLeft}>
          Not done it
        </button>
        <button className="swipe-button" onClick={swipeRight}>
          Done it
        </button>
      </div>
    </div>
  );
}

export default App;
