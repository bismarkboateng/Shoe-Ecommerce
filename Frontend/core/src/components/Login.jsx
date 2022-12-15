import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


function Login() {
    return (
        <div>  
            <strong style={{
                fontSize: "30px",
                fontStyle: "bold",
                position: "absolute",
                top: "70px",
                left: "850px"
                }}> <a style= {{ textDecoration: 'none' }} href="/"> Shoe Commerce </a> </strong>
            <Container className="mt-5">
                <Form> 
                    <div style={{ 
                        width: "500px",
                        border: "1px solid #8a8d91",
                        borderRadius: "8px",
                        padding: "50px",
                        position: 'absolute',
                        left: '700px',
                        top: '200px'
                    }}>
                        <strong style={{ fontSize: "30px"}}> Log In </strong>
                        <p></p>
                        <p></p>
                        <Form.Group className="mb-3" controlId="formBasicUserName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" style={{ width: "25rem" }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" style={{ width: "25rem" }} />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </div>
                        <hr></hr>
                        <p className="d-flex justify-content-center"> New Here ? </p>
                        <hr></hr>
                        <div className="d-grid gap-2">
                              <Button variant="outline-secondary" href="/signup">Create your Account </Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>

    );
  }
  
  export default Login;