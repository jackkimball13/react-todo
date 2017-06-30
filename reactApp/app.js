/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ["Call the doctor", "Eat breakfast", "Brush teeth", "Go to sleep"]

class TodoList extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <ul>
        {dummyData.map((task)=><Todo task={task}/>)}
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
        {this.props.task}
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
  }
  render() {
    return (
      <div>
        <InputLine />
        <TodoList />
      </div>
    )
  }
}


ReactDOM.render(<TodoApp />,
  document.getElementById('root'));
