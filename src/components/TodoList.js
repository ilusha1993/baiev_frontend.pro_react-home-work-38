import React, { useState } from 'react';
import styles from './todoList.modules.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    return (
        <div>
            <div className="wrapper">
                <h1 className={"title"}>Мій Todo List</h1>
                <div>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Додати завдання"
                        className={"inputTodos"}
                    />
                    <button onClick={handleAddTodo} className={"buttonTodos"}>+</button>
                </div>
                <div className="container">
                    {todos.map((todo, index) => (
                        <div
                            key={index}
                            className={`todo-item ${todo.completed ? 'completed' : ''}`}
                            onClick={() => toggleTodo(index)}
                        >
                            {todo.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodoList;
