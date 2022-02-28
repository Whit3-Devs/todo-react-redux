import { Col, Container, Row } from '@nextui-org/react';
import React from 'react';
import CardTodos from '../component/CardTodos';
import FormTodo from '../component/FormTodo';
import { Card, Text, Spacer } from '@nextui-org/react';

const todos = [
  {
    id: 1,
    title: 'Comprar tomates',
    description: 'En lo de doña emma',
    state: true
  },
  {
    id: 2,
    title: 'Comprar una cocacola',
    description: 'En lo de doña emma',
    state: false
  },
  {
    id: 3,
    title: 'Lavar la ropa',
    description: 'Comprar jabon en polvo y tambien vivere perfume',
    state: false
  },
  {
    id: 4,
    title: 'Adoptar un perro',
    description: 'Ver lugares',
    state: true
  },
]

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Spacer y={2} />
          <FormTodo />
          <Spacer y={2} />
          <CardTodos todos={todos}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Home