import React from 'react';
import './style.css';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
export default function App() {
  return (
    <div>
      <AddTodo></AddTodo>
      <VisibleTodoList> </VisibleTodoList>
      <Footer></Footer>
    </div>
  );
}
