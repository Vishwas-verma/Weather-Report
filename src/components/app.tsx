import React from "react";
import SearchBar from "../container/SearchBar";
import WeatherList from "../container/WeatherList";

class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}

export default App;