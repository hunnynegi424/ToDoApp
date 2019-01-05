import React, { Component } from 'react';
import '../App.css';

class Tasks extends Component {
  render() {
    return (
      <div className="tasks">
      
        
          {this.props.task.title}
        
      </div>
    );
  }
}

export default Tasks;