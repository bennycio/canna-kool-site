import React from "react";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";
import Troll from "assets/img/troll.png";
import bg from "assets/img/hexs.webp";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { Parallax, GridContainer, GridItem } from "@bennycio/material-ui-pro";
import LabResultsTable from "components/LabResultsTable";

const useStyles = makeStyles(aboutUsStyle);

const LabResults = () => {
  const classes = useStyles();
  return (
    <body>
      <Parallax image={Troll} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title} style={{ fontSize: "3em" }}>
                Lab Results
              </h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{
          backgroundImage: "url(" + bg + ")",
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% 40%",
        }}
      >
        <div className={classes.container}>
          <SectionTable />
        </div>
      </div>
    </body>
  );
};

const SectionHeader = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem
            md={12}
            sm={12}
            className={classNames(
              classes.mlAuto,
              classes.mrAuto,
              classes.textCenter
            )}
          >
            <h1 className={classes.title} style={{ color: "black" }}>
              Find out what makes our product safer <br /> and more effective
              than any of our competitors
            </h1>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
};

const SectionTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Link",
        accessor: "link",
      },
    ],
    []
  );

  const [data, setData] = React.useState(React.useMemo(() => makeData(40), []));

  function range(len) {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    return arr;
  }

  function newPerson() {
    const statusChance = Math.random();
    return {
      date: randomDate(new Date(2012, 0, 1), new Date()),
      type: statusChance > 0.5 ? "efficacy" : "safety",
      link: "test",
    };
  }

  function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
      const len = lens[depth];
      return range(len).map((d) => {
        return {
          ...newPerson(),
          subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
        };
      });
    };

    return makeDataLevel();
  }

  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ).toLocaleDateString();
  }

  return (
    <>
      <LabResultsTable columns={columns} data={data} />
    </>
  );
};

export default LabResults;
