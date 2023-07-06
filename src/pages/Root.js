import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import SideNav from '../components/SideNav';

function RootLayout() {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={2.5}>
          <SideNav />
        </Grid>
        <Grid item xs={9}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}

export default RootLayout;
