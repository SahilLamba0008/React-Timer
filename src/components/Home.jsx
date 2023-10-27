import React, { useRef, useState } from "react";
import styled from "styled-components";

const StyledHome = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  .home-wrapper {
    h1 {
      font-size: 8rem;
      text-align: center;
    }
    .count-container {
      font-size: 12rem;
      margin: 2rem auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: bold;
      border-radius: 2rem;
      text-align: center;
      color: ${({ theme }) => theme.colors.textSecondary};
      text-shadow: 2px 2px ${({ theme }) => theme.colors.secondary};
      input {
        outline: none;
        font-weight: bold;
        border-radius: 2rem;
        font-size: 2rem;
        width: 30%;
        height: 5rem;
        padding: 0 5px;
        text-align: center;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          appearance: none;
        }
      }
    }
    .buttons-wrapper {
      display: flex;
      justify-content: center;
      gap: 5rem;
      flex-wrap: wrap;
    }
  }
`;

const Home = () => {
  const [inputValue, setInputValue] = useState(0);
  const [count, setCount] = useState(null);
  const intervalId = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const startCountdown = () => {
    console.log("Start");
    if (inputValue === null) {
      alert("Set Starting Value");
    } else {
      const startingPoint = parseInt(inputValue, 10); // type conversion from string to int
      //   console.log(typeof(startingPoint));
      setCount(startingPoint);
      intervalId.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopCountdown = () => {
    console.log("Stop");
    clearInterval(intervalId.current);
    setCount();
  };

  return (
    <StyledHome>
      <div className="home-wrapper">
        <h1>Countdown Timer</h1>
        <div className="count-container">
          <input
            type="number"
            id="startingCount"
            name="startingCount"
            placeholder="Enter number >= 0"
            min="0"
            onChange={handleInputChange}
          />
          {count === null ? "⏰" : count}
        </div>
        <div className="buttons-wrapper">
          <button className="btn" onClick={startCountdown}>
            Start
          </button>
          <button className="btn" onClick={stopCountdown}>
            Stop
          </button>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
