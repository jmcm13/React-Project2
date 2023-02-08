import React, { Component } from "react";
import MenuBar from "./components/MenuBar";
import Form from "./components/Form";
import Display from "./components/Display";

class App extends Component {
  state = {
    formData: [],
  };

  getFormData = (props) => {
    console.log(props);
    let formData = [...this.state.formData, props];
    this.setState({
      formData,
    });
  }

  render() {
    return (
      <>
        <MenuBar />
        <Form getFormData={this.getFormData} />
        <Display formData={this.state.formData} />
      </>
    );
  }
}

export default App;
