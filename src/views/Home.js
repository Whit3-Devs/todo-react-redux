import React from 'react';
import CardTodos from '../component/CardTodos';
import FormTodo from '../component/FormTodo'

const Home = () => {
  return (
    <div>
        <FormTodo />
        <CardTodos />
    </div>
  )
}

export default Home