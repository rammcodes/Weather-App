import React, { Component } from "react";

class CityList extends Component {
  render() {
    return (
      <div>
        <select
          value={this.props.currentCity}
          onChange={this.props.onCitySelect}
        >
          <option value="1566083">Ho Chi Minh</option>
          <option value="1880252">Singapore</option>
          <option value="1735161">Kuala Lumpur</option>
          <option value="1850147">Tokyo</option>
          <option value="8131587">Athens</option>
        </select>
      </div>
    );
  }
}

export default CityList;
