import React, { Component } from 'react';
import Tasks from './components/Tasks';
import Checkbox from './components/Checkbox';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state= {
            todo: '',
            tasks: [
            ],
        }
    }

    updateTodo(todo) {
      this.setState({todo: todo.target.value})
    }

    addTask() {
      if(this.state.todo){
        let newTask = {
          title: this.state.todo,
          isComplete: false,
      } 
      let taskArray = this.state.tasks.push(newTask);
      this.setState({ todo: '', taskArray });
      //this.textInput.focus();
      
      }
    }
  render() {
    return (
        <div className="title">
      <div >
        <p className="header">ToDo List App</p>
        <p className="footer">created by using React</p>
      </div>
      <div className="block">
        <input type="text"
                onChange={todo => this.updateTodo(todo)}
                value={this.state.todo}
                placeholder="Enter the task"
                className="textInput"
                />
        <p className="btn" onClick={()=>{this.addTask()}}>+</p>
      </div>
      <div className="task-block">
      {this.state.tasks.map((task, key) => {
        return <div className="task"><Checkbox key={key} task={task} isChecked={this.state.tasks.isComplete}/> <Tasks key={key} task={task} /></div>
      })}
      </div>
      <div className="tab-bar">
        <p className="all tab">All</p>
        <p className="completed tab">Completed</p>
        <p className="active tab">Active</p>
      </div>
      </div>
    );
  }
}

export default App;
