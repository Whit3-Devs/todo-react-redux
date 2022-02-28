import React, { useState } from 'react'
import { Container, Row, Col, Card } from '@nextui-org/react';

const TaskCard = ({ title, description, state }) => {
  const [statee, setStatee] = useState(state)

  const handleState = () => {
    setStatee(!statee)
  }

  return (
    <Card onClick={handleState} color={statee ? 'success' : 'warning'} css={{ color: 'black' }}>
            <Row justify="start" align="center">
                <h2>{title}</h2>
            </Row>
            <Row>
                <Col>
                    <p>{description}</p>
                </Col>
            </Row>
        </Card>
  )
}

export default TaskCard