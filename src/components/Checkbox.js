import React, { Component } from 'react';
import '../App.css';

class Tasks extends Component {
    state = {
        isChecked: false,
      }

      updateStatus(checkBoxStatus) {
          this.setState({isChecked: checkBoxStatus})
      }
  render() {
    return (
      <div>
      <input type="checkbox" 
                className="chk-box" 
                //checked={this.state.isChecked}
                //onChange={checkBoxStatus => this.updateStatus(checkBoxStatus)}
                />
      </div>
    );
  }
}

export default Tasks;