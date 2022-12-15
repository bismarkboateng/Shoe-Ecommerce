import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function signup() {
  return ( 
    <div>
        <strong style={{
                fontSize: "30px",
                fontStyle: "bold",
                position: "absolute",
                top: "70px",
                left: "850px"
                }}> Shoe Commerce </strong>
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
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First name" style={{ width: "25rem" }}c/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" style={{ width: "25rem" }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Username" style={{ width: "25rem" }} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" style={{ width: "25rem" }} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" style={{ width: "25rem" }} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </div>
                    <hr></hr>
                    <p className="d-flex justify-content-center"> Already have an account ? </p>
                    <hr></hr>
                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" href="/login" type="submit">
                            Login
                        </Button>
                    </div>
            </div>
            </Form>
        </Container>
    </div>
  );
}

export default signup;