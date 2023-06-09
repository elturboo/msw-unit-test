/* eslint-disable no-unused-vars */
import { Fragment, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {ItemList} from "./components/ItemList";
import {ItemForm} from "./components/ItemForm";
import NewItem from './components/NewItem';
import PostFetchMock from './components/PostFetchMock';

function App() {
  const [tasks, setTasks] = useState([
    // {id: 1, name: "Task 1", done: false},
    // {id: 2, name: "Task 2", done: false},
    // {id: 3, name: "Task 3", done: false},
    // {id: 4, name: "Task 4", done: false},
  ]);
const onAddTask = (task) => {
    if(task.name !== "") {
        const id = tasks.length + 1;
        const newTask = {id, ...task};
        setTasks([...tasks, newTask]);
    }
  }
  const onDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };
  const onDoneTask = (task) => {
    setTasks(tasks.map((t) => t.id === task.id ? {...task, done: !task.done} : t));
   }

   const onEditTask = (task) => {
    setTasks(tasks.map((t) => t.id === task.id ? {...task} : t));
   }
   const onLoad = () => {
    console.log('onLoad')
   }

  return (
    <Fragment>
      <PostFetchMock/>
    </Fragment>
  );
}

export default App;
