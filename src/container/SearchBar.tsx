import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions";

class SearchBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {term: ""};
    //  this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = (event: any) => {
    console.log(event.target.value);
    this.setState({term: event.target.value})
  }

  onFormSubmit = (event: any) => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term)
    this.setState({term: ""});
  }

  render() {
    return (
      <form onSubmit = {this.onFormSubmit}>
        <div style = {{textAlign: "center", marginBottom: "20px"}}>
          <i className = {"fa fa-search"}/>
          <input className = {"form-control"}
                 placeholder = {"Search for City.."}
                 value = {this.state.term}
                 onChange = {this.onInputChange}
                 style = {{
                   padding     : "5px",
                   paddingLeft : "10px",
                   marginRight : "10px",
                   height      : "30px",
                   width       : "650px",
                   border      : ".5px solid black",
                   borderRadius: ".45px"
                 }}
                 type = {"text"}/>
          <button type = {"submit"}>Submit</button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({fetchWeather}, dispatch)

}

export default connect(null, mapDispatchToProps)(SearchBar);
