import React, { Component } from "react";
class Topics extends Component {
  render() {
    return (
      <ol>
        {this.props.topics.map((topic, index) => (
          <li key={index}> {topic} </li>
        ))}
      </ol>
    );
  }
}
export default Topics;
