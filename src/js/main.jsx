import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  counter++;
  const countingForAChange = String(counter).padStart(4, "0").split("");

  root.render(
    <React.StrictMode>
      <Home
        golast={countingForAChange[0]}
        gothird={countingForAChange[1]}
        gosecond={countingForAChange[2]}
        gofirst={countingForAChange[3]}
      />
    </React.StrictMode>
  );
}, 1000);
