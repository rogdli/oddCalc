import { useState, useEffect } from "react";
import "./App.css";
import sound from "./assets/sucked-in.mp3";
import pressSound from "./assets/press.mp3";

export default function App() {
  const [value, setValue] = useState("");
  const [isExploded, setIsExploded] = useState(false);
  const [isBackgroundExploded, setIsBackgroundExploded] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  function handleSelfDestruct() {
    setIsExploded(true);
    setIsBackgroundExploded(true);

    setTimeout(() => {
      setIsExploded(false);
      setIsBackgroundExploded(false);
      setValue("");
    }, 2000);
  }

  function handlePress() {
    setIsPressed(true);

    setTimeout(() => {
      setIsPressed(false);
    });
  }

  useEffect(() => {
    if (isPressed) {
      const pressedSound = new Audio(pressSound);
      pressedSound.play();
    }
  }, [isPressed]);

  useEffect(() => {
    if (isExploded) {
      const explosionSound = new Audio(sound);
      explosionSound.play();
    }
  }, [isExploded]);

  useEffect(() => {
    if (isBackgroundExploded) {
      document.body.classList.add('explode-background');
    } else {
      document.body.classList.remove('explode-background');
    }
  }, [isBackgroundExploded]);

  return (
    <div className={`container ${isExploded ? "exploded" : ""}`}>
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input
              type="button"
              value="AC"
              onClick={() => { setValue(""); handlePress(); }}
            />
            <input
              type="button"
              value="DEL"
              onClick={() => { setValue(value.slice(0, -1)); handlePress(); }}
            />
            <input
              type="button"
              value="."
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
            <input
              type="button"
              value="/"
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
            <input
              type="button"
              value="8"
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
            <input
              type="button"
              value="9"
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
            <input
              type="button"
              value="*"
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
            <input
              type="button"
              value="5"
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
            <input
              type="button"
              value="6"
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
            <input
              type="button"
              value="+"
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
            <input
              type="button"
              value="2"
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
            <input
              type="button"
              value="3"
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
            <input
              type="button"
              value="-"
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
          </div>
          <div>
            <input
              type="button"
              value="00"
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
            <input
              type="button"
              value="0"
              onClick={(e) => { setValue(value + e.target.value); handlePress(); }}
            />
            <input
              className="equal"
              type="button"
              value="="
              onClick={() => { setValue(eval(value)); handlePress(); }}
            />
          </div>
          <div>
            <input
              type="button"
              className="the-button"
              value="Self-Destruct"
              onClick={handleSelfDestruct}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
