import { createContext, useContext } from "react";

interface IProps {}

const themes = {
  light: {
    background: "lightgray",
    fontColor: "green",
  },
  dark: {
    background: "gray",
    fontColor: "blue",
  },
};

const Store = createContext(themes.light);

const UseContext = ({}: IProps) => {
  return (
    <Store.Provider value={themes.dark}>
      <h2>UseState :</h2>
      <h3
        style={{
          background: themes.dark.background,
          color: themes.dark.fontColor,
        }}
      >
        I'm the Context provider
      </h3>
      <Parent />
    </Store.Provider>
  );
};

const Parent = () => {
  return (
    <div className="">
      <h3>I'm the parent component</h3>
      <Child />
    </div>
  );
};

const Child = () => {
  return (
    <div className="">
      <h3>I'm the child component</h3>
      <GrandChild />
    </div>
  );
};

const GrandChild = () => {
  const theme = useContext(Store);

  return (
    <div className="">
      <h3 style={{ background: theme.background, color: theme.fontColor }}>
        I'm the grand-child component styled by context
      </h3>
    </div>
  );
};

export { UseContext };
