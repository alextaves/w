import React from "react";
import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";
import fakeWeather from "./fakeWeather";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Weather />
      </div>
    );
  }
}

export default App;
