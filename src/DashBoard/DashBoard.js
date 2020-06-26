import React    from "react";
import template from "./DashBoard.jsx";

class DashBoard extends React.Component {
  render() {
    return template.call(this);
  }
}

export default DashBoard;
