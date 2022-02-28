import { Container, Row, Col, Spacer} from '@nextui-org/react'
import React from 'react'
import TaskCard from './TaskCard'

const CardTodos = ({ todos }) => {
	

	return (
		<Container>
			{
				todos && todos.map((todo) => {
					return (
						<>
							<Row >
								<TaskCard
									key={todo.id}
									title={todo.title}
									description={todo.description}
									state={todo.state}
								/>
							</Row>
							<Row>
								<Spacer y={1}/>
							</Row>
						</>
					)
				})
			}
		</Container>

	)
}

export default CardTodos