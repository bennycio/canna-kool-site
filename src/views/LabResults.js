import React, { useEffect } from "react";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";
import Troll from "assets/img/troll.png";
import bg from "assets/img/hexs.webp";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { Parallax, GridContainer, GridItem } from "@bennycio/material-ui-pro";
import LabResultsTable from "components/LabResultsTable";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
import useLabResults from "hooks/useLabResults";

const useStyles = makeStyles(aboutUsStyle);

const LabResults = () => {
  const classes = useStyles();
  return (
    <>
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

  const results = useLabResults();

  const [data, setData] = React.useState(
    React.useMemo(() => makeData(results.KeyCount), [])
  );

  function range(len) {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    return arr;
  }

  function newResult(item) {
    const statusChance = Math.random();
    return {
      date: item.LastModified,
      type: statusChance > 0.5 ? "efficacy" : "safety",
      link: item.Key,
    };
  }

  function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
      const len = lens[depth];
      return range(len).map((d) => {
        return {
          ...newResult(results.Contents[d]),
          subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
        };
      });
    };

    return makeDataLevel();
  }

  return (
    <>
      <LabResultsTable columns={columns} data={data} />
    </>
  );
};

export default LabResults;
