import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.Liked) classes += "-o";
    return <i className={classes} area-hidden="true"></i>;
  }
}

export default Like;
