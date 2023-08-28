import { useEffect } from "react";

function KeyTouch() {
  const handleKeyDown = (event) => {
    if (event.key) {
      console.log(event);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <div onKeyDown={handleKeyDown}></div>;
}

export default KeyTouch;
