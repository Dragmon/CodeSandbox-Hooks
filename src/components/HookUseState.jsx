import React, { useState } from "react";

const HookUseState = () => {
  let initialName = "";
  const [name, setName] = useState(initialName);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h2> Hook useState </h2>
      <form>
        <label htmlFor="name">Insert Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
};

export default HookUseState;
