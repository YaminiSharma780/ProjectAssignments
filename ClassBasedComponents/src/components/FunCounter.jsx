import { useEffect, useState } from "react";

export default function FunCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timerID = setInterval(() => {
      console.log("useEffect timer");
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="flex gap-6">
      <button
        className="border rounded border-blue-600 border-solid border-x-2 border-y-2 bg-blue-300"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
      <h2 className="font-bold">{count}</h2>
      <button
        className="border rounded border-blue-600 border-solid border-x-2 border-y-2 bg-blue-300"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
}
