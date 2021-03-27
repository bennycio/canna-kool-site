import React, { useRef } from "react";
import { useIntersection } from "react-use";
import Grow from "@material-ui/core/Grow";

const SmoothEntry = ({children, threshold}) => {
  return (
    <>
      {React.Children.map(children, (child, i) => {
        return <SmoothEntryElement subElement={child} key={i} threshold={threshold}/>;
      })}
    </>
  );
};

const SmoothEntryElement = ({ subElement, threshold }) => {
  const scrollRef = useRef(null);
  const intersection = useIntersection(scrollRef, {
    root: null,
    rootMargin: "0px",
    threshold: threshold || 0.1,
  });

  return (
    <div ref={scrollRef}>
      <Grow in={intersection && intersection.intersectionRatio > (threshold || 0.1)}>
        {subElement}
      </Grow>
    </div>
  );
};

export default SmoothEntry;
