import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export function useDarkMode(initialVals = {}) {
  const [val, setVal] = useLocalStorage("DarkModeOn", initialVals);

  useEffect(() => {
    if (val) {
      document.body.classList.toggle("dark-mode");
    } else {
      document.body.className = "";
    }
  }, [val]);
  return [val, setVal];
}
