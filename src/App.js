import { useState } from "react";
import "./App.css";

function App() {
  let time = new Date().toLocaleTimeString();
  const [Ctime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{Ctime}</h1>
        <button>
          <b>Created by @Sumit Singh</b>
        </button>
      </div>
    </div>
  );
}

export default App;
