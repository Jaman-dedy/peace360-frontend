import React from "react";
import Router from "./routes/route";
import "./App.scss";
// import './assets/js/slider';

const App = () => {
  // React.useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = __dirname + "/assets/js/slider.js";
  //   script.async = true;
  //   script.onload = () => this.scriptLoaded();

  //   document.body.appendChild(script);
  // });
  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
