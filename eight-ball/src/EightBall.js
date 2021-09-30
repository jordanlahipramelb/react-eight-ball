import React, { useState } from "react";
import "./EightBall.css";

// picks random element in array
function randChoice(array) {
  const randIdx = Math.floor(Math.random() * array.length); //random idx
  const choice = array[randIdx]; //picks element in arr
  return choice;
}

const EightBall = (props) => {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const shakeBall = () => {
    // const msg = randChoice(props.answers.msg);
    // const color = randChoice(props.answers.color);
    const { msg, color } = randChoice(props.answers); // Same as above
    setMsg(msg); //sets the msg from the answers array
    setColor(color); //sets the color from the same array/obj
  };
  const reset = () => {
    setMsg("Think of a Question");
    setColor("black");
  };

  return (
    <>
      <div
        className="EightBall"
        onClick={shakeBall}
        style={{ backgroundColor: color }} //easier to style inline
      >
        <p>{msg}</p>
      </div>
      <div className="reset">
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

// Eightball takes these as props if no props inputted
EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ],
};

export default EightBall;
