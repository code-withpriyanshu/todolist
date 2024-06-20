// import Card from "src/componests/card";
import React, { useState } from "react";
import { motion } from "framer-motion";
function Background() {
  const [cards, setCards] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addCard = () => {
    if (inputValue.trim() !== "") {
      setCards([...cards, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <div className="fixed w-full h-screen">
        <input
          type="text"
          className="absolute left-1/2 -translate-x-[100%] z-[4]"
          placeholder="enter notes"
          id="value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="absolute bg-zinc-300 left-1/2 -translate-x-[50%] z-[4]"
          onClick={addCard}
        >
          Add Note
        </button>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[7vw] leading-none tracking-tighter font-semibold text-zinc-500 z-[2]">
          ToDo-List
        </h1>
        <div className="absolute top-0 left-0 w-full h-full flex flex-wrap z-[3] p-4">
          {cards.map((content, index) => (
            <Card key={index} content={content} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Background;

function Card({ content }) {
  return (
    <>
      <motion.div drag className="card">
        <div className="tools">
          <div className="circle">
            <span className="redd box" onClick={display}></span>
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

function display() {
  let card = document.querySelector(".card");
  card.style.visibility = "hidden";
}
