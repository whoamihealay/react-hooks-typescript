import { useState } from "react";

interface IProps {}

const UseState = ({}: IProps) => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementByTwo = () => {
    for (let i = 0; i < 2; i++) {
      setCount(count + 1);
      setCountTwo((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h2>UseState :</h2>
      <div className="hook-display">
        <button className="" onClick={incrementByTwo}>
          Increment by 2
        </button>
        <div className="display false">
          <code>{"setCount(count + 1)"}</code> : {count}
        </div>
        <div className="display true">
          <code>{"setCount((prev) => prev + 1)"}</code> : {countTwo}
        </div>
      </div>
    </div>
  );
};

export { UseState };
