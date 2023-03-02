import { useRef } from "react";

interface Props {
  cancel: () => void;
  fire: (duration: number, action: () => void) => void;
}

export function useDelayedAction() {
  return {};
}
