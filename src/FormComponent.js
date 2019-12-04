import React, { useState } from "react";

const FormComponent = () => {
  const [something, setSomething] = useState("first value");
  return (
    <div>
      <h1>form example:</h1>
      <form>
        <h3>{something}</h3>
        <label htmlFor="something">
          something:
          <input
            id="something"
            value={something}
            placeholder="type something"
            onChange={e => setSomething(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default FormComponent;
