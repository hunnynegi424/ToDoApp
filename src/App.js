import React, { Component } from 'react';
import Tasks from './components/Tasks';
//import AllTask from './components/AllTask';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state= {
            tasks: [
            ],
            taskType: 'all'
        }
        this.alltask = this.alltask.bind(this);
        this.completedtask = this.completedtask.bind(this);
        this.activetask = this.activetask.bind(this);
        this.status = this.status.bind(this);
    }

    addTask(todo) {
      if(this.inputTask.value !== ""){
        let newTask = {
          title: this.inputTask.value,
          isComplete: false,
          key: Date.now(),
      } 
      this.setState((prevState) => {
        return {
            tasks: prevState.tasks.concat(newTask)
        };
      });
      }
      this.inputTask.value = "";
    }

    alltask(){
      var items=this.state.tasks.filter(status => status.isComplete === true || status.isComplete === false)
      return<div><Tasks inputs={items} statusChange={this.status}/></div>
    }
    completedtask(){
      var items=this.state.tasks.filter(status => status.isComplete === true)          
      return<div><Tasks inputs={items} statusChange={this.status}/></div>
    }
    activetask(){
      var items=this.state.tasks.filter(status => status.isComplete === false)
      return<div><Tasks inputs={items} statusChange={this.status}/></div>
    }
  
    status(index){
      var tasks = this.state.tasks;
      tasks[index].isComplete = true;
      console.log(tasks);
      this.setState({tasks:tasks});
    }

  render() {
      var tasks;
     if(this.state.taskType == 'all'){
      tasks= this.alltask()
      }
     else if(this.state.taskType == true){
          tasks = this.completedtask()
      }
    else {
      tasks = this.activetask()
      }
    return (
        <div className="title">
      <div >
        <p className="header">ToDo List App</p>
        <p className="footer">created by using React</p>
      </div>
      <div className="block">
        <input type="text"
                ref={(todo) => {this.inputTask = todo}}
                placeholder="Enter the task"
                className="textInput"
                />
        <p className="btn" onClick={()=>{this.addTask()}}>+</p>
      </div>
      <div className="bar">
        <p className="tab" onClick={()=>{this.setState({taskType: 'all'})}}>All</p>
        <p className="tab" onClick={()=>{this.setState({taskType: true})}}>Completed</p>
        <p className="tab" onClick={()=>{this.setState({taskType: false})}}>Active</p>
      </div>
      <div className="task-block">
      {tasks}
      </div>
      
      </div>
    );
  }
}

export default App;
