import React, { Component } from 'react';
//import '../App.css';

class AllTask extends Component {
    constructor(props){
        super(props);

    }


  createTasks(tasks)  {
    return <li className= "listitems" 
                onClick={()=>this.props.statuChange}
                key={tasks.key}>{tasks.title}</li>
  }

  render() {
      if(tasks.isComplete == false){
    var tasklist = this.props.inputs.map(this.createTasks);
      }
    return (
        
      <ul  className="tasks">
        {tasklist}
      </ul>

      
    );
  }
}

export default Tasks;