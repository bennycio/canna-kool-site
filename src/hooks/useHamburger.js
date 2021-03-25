import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useWindowScroll } from "react-use";

export default function useHamburger(maxScroll) {
  const isBig = useMediaQuery("(min-width: 600px)");
  const { x, y } = useWindowScroll();

  if (!isBig) return true;
  if (isBig && y < maxScroll) return true;
  return false;
}
