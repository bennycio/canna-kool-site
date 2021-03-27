import React, { useRef } from "react";
import { useIntersection } from "react-use";
import Grow from "@material-ui/core/Grow";

const SmoothEntry = (props) => {
  return (
    <>
      {React.Children.map(props.children, (child, i) => {
        return <SmoothEntryElement subElement={child} key={i} />;
      })}
    </>
  );
};

const SmoothEntryElement = ({ subElement }) => {
  const scrollRef = useRef(null);
  const intersection = useIntersection(scrollRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <div ref={scrollRef}>
      <Grow in={intersection && intersection.intersectionRatio > 0.1}>
        {subElement}
      </Grow>
    </div>
  );
};

export default SmoothEntry;
