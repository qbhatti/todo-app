import React from "react";

export default function useInputState(init) {
  const [state, setState] = React.useState(init);
  const handleChange = e => {
    setState(e.target.value);
  };
  const reset = () => {
    setState("");
  };
  return [state, handleChange, reset];
}
