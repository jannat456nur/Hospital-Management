import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Login() {
  return (
    <Container fixed>
        <Typography gutterBottom variant="h4" align="center">
        Login as Patient
       </Typography>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
        </Grid>
        <Grid item xs={6}>
        <TextField type="password" placeholder="Enter password" label="Password" variant="outlined" fullWidth required />
        </Grid>
        <Grid item xs={12}>
           <Button type="submit" variant="contained" color="primary" align="center">Sign In</Button>
        </Grid>
      </Grid>
      
    </Box>
      </Container>
  );
}
