import { useState } from "react";

export function getWindowDimensions() {
  return {};
}

export const useWindowDimensions = () => {
  const [windowDimensions] = useState(getWindowDimensions());
  return windowDimensions;
};
