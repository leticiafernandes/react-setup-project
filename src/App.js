import React from "react";
import { render } from "react-dom";

import FormComponent from "./FormComponent";

const App = () => {
  return (
    <div>
      <h1>rendered app</h1>
      <hr />
      <FormComponent />
    </div>
  );
};

render(<App />, document.getElementById("container"));
