import { useState } from "react";

export function getWindowDimensions() {
  return {
    test: "baz",
  };
}

export const useWindowDimensions = () => {
  const [windowDimensions] = useState(getWindowDimensions());
  return windowDimensions;
};
