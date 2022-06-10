import { useEffect, useState } from "react";

interface IProps {}

const UseEffect = ({}: IProps) => {
  const [placeholderType, setPlaceholderType] = useState("posts");
  const [content, setContent] = useState<object>();
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Added event listener");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Removed event listener");
    };
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${placeholderType}/1`)
      .then((response) => response.json())
      .then((json) => setContent(json));
  }, [placeholderType]);

  return (
    <div>
      <h2>UseEffect</h2>
      <div className="hook-display">
        <button onClick={() => setPlaceholderType("posts")}>Posts</button>
        <button onClick={() => setPlaceholderType("comments")}>Comments</button>
        <div>Type : "{placeholderType.toUpperCase()}"</div>
        <div>Window size : {windowSize}</div>
      </div>
      <div className="" style={{ maxWidth: " 200ch" }}>
        Content:
        <div>
          <ul>
            {content &&
              Object.entries(content).map(([key, value], index) => (
                <li key={index}>
                  {key} : {value}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { UseEffect };
