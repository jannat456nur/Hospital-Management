import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Register2() {
    const pass ={
        width:"100%",
        borderRadius:"40px",
        backgroundColor:'white',
        color:"white"
    }
  return (
    <Container fixed>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         <Grid item xs={6}>
           <Item>1</Item>
          </Grid>
         <Grid item xs={6}>
           <Item>1</Item>
          </Grid>
         <Grid item xs={6}>
           <Item>2</Item>
         </Grid>
         <Grid item xs={6}>
         <Item>2</Item>
         </Grid>
         <Grid item xs={6}>
         <TextField
         style={pass}
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          
        />
         </Grid>
         <Grid item xs={6}>
         <TextField
          id="filled-password-input"
          label=" confirm Password"
          type="confirm password"
          autoComplete="current-password"
          variant="filled"
        />

       <Col>
           <Form.Group className="mb-3" controlId="formGroupEmail">
             <Form.Control type="email" placeholder="Enter email" />
           </Form.Group>
        </Col>
        <Col>
           <Form.Group className="mb-3" controlId="formGroupEmail">
             <Form.Control type="phone" placeholder="Enter phone" />
           </Form.Group>
        </Col>
         </Grid>
      </Grid>
    </Box>
    </Container>
  );
}
