import React, { useEffect } from "react";
import { SnackbarContent } from "@bennycio/material-ui-pro";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { useToggle } from "react-use";
import { Slide, Snackbar } from "@material-ui/core";
import { Button } from "@bennycio/material-ui-pro";

const TimerPopup = () => {
  const [complete, toggle] = useToggle(false);

  useEffect(() => {
    setTimeout(() => {
      toggle(true);
    }, 30e3);
  }, []);

  return (
    <Snackbar open={complete} TransitionComponent={Slide}>
      <Button
        color="transparent"
        style={{ textAlign: "center", padding: "0", margin: "0" }}
      >
        <SnackbarContent
          message={
            <h5>
              <b>
                <LocalAtmIcon /> Hey Buddy! Click here for some legendary once
                in a lifetime deals!
              </b>
            </h5>
          }
          close
          color="info"
        />
      </Button>
    </Snackbar>
  );
};

export default TimerPopup;
