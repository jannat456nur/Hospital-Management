import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Typography } from '@mui/material';
import { NavLink } from 'react-bootstrap';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Register() {
    const text={
        padding:"40px",
        textAlign:"center"
    }
    const button={
        backgroundColor:"blue"
    }
  return (
    <Container fixed>
        <Typography variant="h4" gutterBottom component="div" style={text}>
       Register as Patient
      </Typography>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
            <Form>
              <Row>
                <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control type=" text" placeholder="  First name*" />
            </Form.Group>
                </Col>
             </Row>
             <Row>
             <Col>
                
                <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control type=" password" placeholder="  Password*" />
            </Form.Group>
            </Col>
             </Row>
              
            
             <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Enter email*" />
                    </Form.Group>
                    </Col>
                </Row>
            </Form>
            <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Gender
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="male"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="female"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="third"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
    <NavLink href='sign in'> Already have an account?</NavLink>
 
      </fieldset>
      

        </Grid>
        <Grid item xs={6}>
            <Form>
                <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="text" placeholder="Last name*" />
                </Form.Group>
                    </Col>
                
                </Row>
                <Row>
                <Col>
                
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="confirm password" placeholder=" confirm Password*" />
                </Form.Group>
                </Col>
                </Row>
                
                
               
                <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="phone" placeholder="Enter phone*" />
                    </Form.Group>
                    </Col>
                    
                    
                </Row>
               
                </Form>
                
             </Grid>
                
      </Grid>
      <Col xs="auto">
          <Button type="submit" className="mb-2" style={button} >
         Register
          </Button>
        </Col>
    </Box>
    
   
     </Container>
  );
}
