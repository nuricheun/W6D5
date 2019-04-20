import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

const objects = [{
  title: "nemo",
  content: "find dory"
}, { title: "dory",
  content: "find nemo"
}];

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Clock/>,  root);
  ReactDOM.render(<Tab objects={objects}/>,  root);
});