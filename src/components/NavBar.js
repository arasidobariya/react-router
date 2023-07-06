import { Grid, Typography, Paper } from '@mui/material';
import classes from './NavBar.module.css';
function NavBar() {
  return (
    <Paper className={classes.header}>
      <Grid container spacing={1} className={classes.header}>
        <Grid item xs={3}>
          <Typography variant='body1'>Photo</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h3'>Arasi Dobariya</Typography>
          <Typography variant='h6'>Software Engineer</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='body1'>
            <ul>
              <li>Dedicated</li>
              <li>Hard Working</li>
              <li>Caring</li>
              <li>Loves Engineer</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default NavBar;
