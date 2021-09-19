import React, { Component } from 'react';
import { BsPlusCircle, BsTrash } from 'react-icons/bs';


class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
      todos: []
    };
  }

  changeHandler = (e) => {
    this.setState({
      todoInput: e.target.value
    });
  }

  addTodo = () => {
    const todo = this.state.todoInput;

    if (todo !== '') {
      if (this.state.todos.includes(todo)) {
        return;
      }

      this.setState({
        todos: [...this.state.todos, todo]
      });

      this.clearInput();
    }
  }

  toggleTodo = (e) => {
    const li = e.target;

    li.classList.toggle('completed-todo');
  }

  deleteTodo = (e) => {
    const target = e.currentTarget.parentNode;

    target.remove();
  }

  handleKeydown = (e) => {
    if (e.key === 'Enter') {
      this.addTodo();
    }
  }

  clearInput = () => {
    this.setState({
      todoInput: ''
    });
  }

  render() {
    return (
      <div>
        <div className="todo-input">
          <input 
            type="text" 
            value={this.state.todoInput} 
            placeholder="Yapılacak İş Ekle" 
            onChange={(e) => this.changeHandler(e)}
            onKeyDown={this.handleKeydown}
            />
          <button type="button" onClick={this.addTodo}>
            <BsPlusCircle style={{verticalAlign: 'sub', marginRight: '10px'}} size={20} />
            <span>EKLE</span>
          </button>
        </div>
        <div>
          <ul className="todo-list">
            {this.state.todos.map((todo, index) => 
              <li onClick={this.toggleTodo} key={index} data-id={index}>{todo} 
              <span onClick={this.deleteTodo}><BsTrash></BsTrash></span>
              </li>  
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoInput;
