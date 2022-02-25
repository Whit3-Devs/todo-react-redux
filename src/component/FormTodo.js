import React from "react";
import { Container, Row, Col, Input, Button } from "@nextui-org/react";

const FormTodo = () => {
  return (
    <Container fluid display="flex">
      <Row>
        <Col>
          <form action="" className="form">
            <Input placeholder="Task" size="xl" />
            <Button shadow color="primary" size="xl" auto>
              Primary
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormTodo;
