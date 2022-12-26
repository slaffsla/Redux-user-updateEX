import { useCounter } from "./useCounter";
const Counter = () => {
  const { counter, counterInc, counterDec, counter0 } = useCounter();
  return (
    <div className="App">
      <button onClick={counterDec}> Decrease Counter</button>
      <h1>Counter: {counter}</h1>
      <button onClick={counterInc}> Increase Counter</button>
      <br></br>
      <button onClick={counter0}> Nullify Counter</button>
    </div>
  );
};
export default Counter;
