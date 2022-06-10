import { useReducer } from "react";

interface IProps {}

type State = {
  count: number;
};

type Action = { type: "increment" } | { type: "decrement" };

const initialState = { count: 0 };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const UseReducer = ({}: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="">
      <h2>UseReducer :</h2>
      <div className="hook-display">
        <button onClick={() => dispatch({ type: "increment" })}>
          {"dispatch({ type: 'increment' })"}
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          {"dispatch({ type: 'decrement' })"}
        </button>
        <h3 className="display">{state.count}</h3>
      </div>
    </div>
  );
};

export { UseReducer };
