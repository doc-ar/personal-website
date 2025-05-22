import { useEffect } from "react";

export default function useDefaultTheme(themeName) {
  useEffect(() => {
    document.documentElement.className = themeName;
  }, []);
}
