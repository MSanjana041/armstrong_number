import { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const checkArmstrong = () => {
    const n = Number(num);
    let temp = n;
    let sum = 0;
    const digits = num.length;

    while (temp > 0) {
      let digit = temp % 10;
      sum += Math.pow(digit, digits);
      temp = Math.floor(temp / 10);
    }

    if (sum === n) {
      setResult("Armstrong Number");
    } else {
      setResult("Not an Armstrong Number");
    }
  };

  return (
    <div>
      <h2>Check if the Number is Armstrong</h2>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter a number"
      />

      <button onClick={checkArmstrong}>
        Check
      </button>

      <p>{result}</p>
    </div>
  );
}

export default App;
