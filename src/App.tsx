import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <h1>Julian Portfolio</h1>
    </div>
  );
}

export default App;
