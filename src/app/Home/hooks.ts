import { useState } from "react";
import { MODE } from "../constants";

const useHome = () => {
  const [mode, setMode] = useState<MODE>(MODE.Browse);

  return {
    mode,
    setMode,
  };
};

export default useHome;
