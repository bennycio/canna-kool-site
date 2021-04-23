import React, { useEffect } from "react";
import { SnackbarContent } from "@bennycio/material-ui-pro";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { useToggle } from "react-use";
import { Slide, Snackbar, useMediaQuery } from "@material-ui/core";
import { Button } from "@bennycio/material-ui-pro";

const TimerPopup = () => {
  const [complete, toggle] = useToggle(false);

  const isBig = useMediaQuery("(min-width: 600px)");
  useEffect(() => {
    setTimeout(() => {
      toggle(true);
    }, 30e3);
  }, []);

  const onClose = () => {
    toggle(false);
  };

  if (isBig) {
    return (
      <Snackbar open={complete} TransitionComponent={Slide} onClose={onClose}>
        <Button
          color="transparent"
          style={{
            textAlign: "center",
            padding: "0",
            margin: "0",
            width: "100%",
            wordWrap: "break-word",
          }}
        >
          <SnackbarContent
            message={
              <p style={{ fontSize: "0.9rem" }}>
                <b>
                  <LocalAtmIcon /> Hey Buddy! Click here for some legendary once
                  in a lifetime deals!
                </b>
              </p>
            }
            color="info"
          />
        </Button>
      </Snackbar>
    );
  } else {
    return <></>;
  }
};

export default TimerPopup;
