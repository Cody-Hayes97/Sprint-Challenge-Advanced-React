import React, { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(url, defaultRes) {
  const [data, setData] = useState(defaultRes);

  const getData = url => {
    const response = axios.get(url);
    const data = response.json();
    setData({
      isLoading: false,
      data
    });
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return [data];
}
