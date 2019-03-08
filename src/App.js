import React from "react";
import Weather from "./Weather";
import weatherInfo from "./fakeWeather";

const App = () => {
  const theWeather = weatherInfo.map(temp => (
    <Weather weather={temp} />
  ));
  return <div className="fivedaysRow">{theWeather}</div>;
};
export default App;
