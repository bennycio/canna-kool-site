import React, { useEffect } from "react";

function useScrollStop(state) {
  useEffect(() => {
    document.body.style.overflow = state ? "hidden" : "unset";
  }, [state]);
}

export default useScrollStop;
