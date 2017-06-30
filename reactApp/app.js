/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [
  { taskText: "Wake Up", completed: false },
  { taskText: "Eat something", completed: true },
  { taskText: "Brush my teeth", completed: false },
  { taskText: "Go to sleep", completed: false }
]

class TodoList extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <ul>
        {this.props.todos.map((taskObj)=><Todo task={taskObj}/>)}
      </ul>
    )
  }
}

class Todo extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <li>
          <button>x</button>
        {this.props.task.completed ? <strike>{this.props.task.taskText}</strike> :
      this.props.task.taskText}
      </li>

    )
  }
}

class InputLine extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Write task..."/>
          <input type="submit" value="Add ToDo"/>
        </form>
      </div>
    )
  }
}


class TodoApp extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      todos: []
    }
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    })
  }

  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}


ReactDOM.render(<TodoApp />,
  document.getElementById('root'));
