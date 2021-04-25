import React, { useEffect, useState } from "react";

function useLabResults() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getResults().then((value) => {
      setData(value);
    });
  }, []);

  return data;
}

const getResults = async () => {
  const URL = process.env.REACT_APP_LAB_RESULTS_ENDPOINT;
  const response = await fetch(URL);
  return await response.json();
};

export default useLabResults;
