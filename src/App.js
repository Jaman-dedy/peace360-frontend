import React from "react";
import { BrowserRouter } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import Router from "./routes/route";
import "./App.scss";
import Store from "./store/Store";

// toast.configure();

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <ToastContainer /> */}
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
