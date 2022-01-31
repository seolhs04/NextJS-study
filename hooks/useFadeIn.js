import { useEffect, useRef } from "react";

export default function useFadeIn(duration = 1) {
  if (typeof duration !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out`;
      current.style.opacity = 1;
    }
  });
  return { ref: element, style: { opacity: 0 } };
}
