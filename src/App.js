import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Button from 'react-bootstrap/Button';
    /*Refactored to below, easier for syntax but might just import entire library */
import { Button, Alert, Breadcrumb, Card } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
