// import Card from "src/componests/card";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
function Background() {
  const [cards, setCards] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const ref = useRef(null);
  const addCard = () => {
    if (inputValue.trim() !== "") {
      setCards([...cards, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <div ref={ref} className="fixed w-full h-screen">
        <div className="input-con">
          <input
            type="text"
            className="absolute left-1/2 -translate-x-[100%] z-[4]"
            placeholder="enter notes"
            id="value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="temp-bg" onClick={addCard}>
            Add Note
          </button>
        </div>
        <h1 className="todo">ToDo-List</h1>

        <div className="absolute top-0 left-0 w-full h-full flex flex-wrap z-[3] p-4">
          {cards.map((content, index) => (
            <Card key={index} content={content} reference={ref} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Background;

function Card({ content, reference }) {
  return (
    <>
      <motion.div drag dragConstraints={reference} className="card">
        <div className="tools">
          <div className="circle">
            <span className="redd box"></span>
          </div>
          <div className="circle">
            <span className="yelloww box"></span>
          </div>
          <div className="circle">
            <span className="greenn box"></span>
          </div>
        </div>
        <div className="card__content">{content}</div>
      </motion.div>
    </>
  );
}
