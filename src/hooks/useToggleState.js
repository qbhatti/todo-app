import React from "react";

export default function useToggle(initialVal = false) {
  const [state, setState] = React.useState(initialVal);
  const toggleState = () => {
    setState(!state);
  };
  return [state, toggleState];
}
