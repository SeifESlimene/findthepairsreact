import { useState, useRef, useEffect } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>
        Now: {count}, before: {prevCount}
        
      </h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
