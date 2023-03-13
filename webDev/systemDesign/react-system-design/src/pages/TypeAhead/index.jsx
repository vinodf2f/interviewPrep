import React, { useCallback, useEffect, useMemo, useState } from "react";


const debounce = (fun, delay = 3000) => {
  let timeout;
  return function () {
    const context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fun.apply(context,arguments);
    }, delay);
  };
};

export default function TypeAhead() {
  const [cities, setCities] = useState([]);
  const [queryString, setQuery] = useState("");
  const fetchData = async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
    );
    const responseJson = await response.json();
    console.log({ responseJson });
    setCities(responseJson);
  };

  const filteredCities = useMemo(() => {
    const regex = new RegExp(queryString, "gi");
    return cities.filter((city) => city.city.match(regex));
  }, [queryString, cities]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnchange = (e) => {
    console.log("called");
    setQuery(e.target.value);
  };

  const debounceHandleChange = debounce(handleOnchange, 1000);


  return (
    <div className="App">
      <h1>Type Ahead</h1>
      <input onChange={debounceHandleChange} />
      <div style={{ height: 500, overflow: "scroll" }}>
        {filteredCities.map((city) => (
          <p key={city.latitude}>{city.city}</p>
        ))}
      </div>
    </div>
  );
}
