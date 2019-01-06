import React, { Component } from 'react';
import '../App.css';

class Tasks extends Component {

  constructor(props){
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(task, index)  {
    return <li className= "listitems" 
    onClick={()=> this.statusChange(index)}
    key={index}>{task.title}</li>}

    statusChange(index) {
    this.props.statusChange(index);
  }

  render() {
    var tasklist = this.props.inputs.map(this.createTasks);
    return (

      <ul  className="tasks">
        {tasklist}
      </ul>

      
    );
  }
}

export default Tasks;