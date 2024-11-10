import React from "react";
import ReactDOM from "react-dom/client";
import empty from "./empty.json";

//const empty ={"empty":"empty"};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <p>{JSON.stringify(empty)}</p>
  </React.StrictMode>
);
