import { grey } from "@material-ui/core/colors";
import {
  container,
  mlAuto,
  mrAuto,
  title,
  description,
  blackColor,
  whiteColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.js";

const features = {
  container,
  mlAuto,
  mrAuto,
  title,
  description,
  subscribeContainer: {
    padding: "5% 0 5% 0",
    background: grey[500],
  },
  features1: {
    textAlign: "center",
    padding: "80px 0"
  },
  features2: {
    padding: "80px 0"
  },
  features3: {
    padding: "40px 0",
    "& $phoneContainer": {
      maxWidth: "200px",
      margin: "0 auto",
    }
  },
  alternate: {
    padding: "0 0 0 5%"
  },
  features4: {
    padding: "80px 0",
    "& $phoneContainer": {
      maxWidth: "260px",
      margin: "60px auto 0"
    }
  },
  features5: {
    padding: "80px 0",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    "& $title": {
      marginBottom: "30px"
    },
    "& $title,& $container": {
      position: "relative",
      zIndex: "2",
      color: whiteColor
    },
    "&:after": {
      background: "linear-gradient(0.75turn, #05c7f2, #2e3f8e, #05c7f2);",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      zIndex: "0",
      left: "0px",
      top: "0px"
    },
    "& $container": {
      "& $gridContainer:last-child": {
        "& $gridItem": {
          borderBottom: "0"
        }
      },
      "& $gridItem": {
        border: "1px solid rgba(" + hexToRgb(whiteColor) + ", 0.35)",
        borderTop: "0",
        borderLeft: "0",
        "&:last-child": {
          borderRight: "0"
        }
      }
    },
    "& $infoArea5": {
      textAlign: "center",
      maxWidth: "310px",
      minHeight: "320px",
      "& h4,& p,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: whiteColor
      }
    }
  },
  gridContainer: {},
  gridItem: {},
  textCenter: {
    textAlign: "center"
  },
  imgContainer: {
    alignItems: "center",
    paddingTop: "20%",
    paddingRight: "5%",
    paddingLeft: "5%",
    "& img": {
      maxHeight: "100%",
      maxWidth: "100%",
      borderRadius: "10%",
    },
  },
  doctorImg: {
    alignItems: "center",
    paddingTop: "20%",
    "& img": {
      maxHeight: "100%",
      maxWidth: "100%",
    },
  },
  infoArea: {
    maxWidth: "none",
    margin: "0 auto",
    padding: "10px 0 0px"
  },
  infoArea5: {},
};

export default features;
