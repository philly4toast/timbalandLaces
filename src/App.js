import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Button from 'react-bootstrap/Button';
    /*Refactored to below, easier for syntax but might just import entire library */
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';


function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <Container>
        <Form>
          <Row>
            <Col md>
              <Form.Group controlId='formEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='example@email.com'/>
                <Form.Text className='text-muted'>
                We'll never share your information
                </Form.Text>
             </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password'/>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="secondary" type='submit'>Login</Button>

        </Form>

        <Card className='mb-3' style={{color: "#000"}}>
          <Card.Img src='https://picsum.photos/200/100' />
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>This is an example of react bootstrap cards</Card.Text>
            <Button variant="success">Read More</Button>

          </Card.Body>
        </Card>

        <Breadcrumb>
          <Breadcrumb.Item>Test 1</Breadcrumb.Item>
          <Breadcrumb.Item>Test 2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant='none'>This is a button</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
