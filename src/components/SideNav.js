import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ListItemText, Collapse, Paper } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import classes from './SideNav.module.css';

function SideNav() {
  const [open, setOpen] = useState(true);

  const behandleClick = () => {
    setOpen(!open);
  };

  const [meOpen, setMeOpen] = useState(true);
  const mehandleclick = () => {
    setMeOpen(!meOpen);
  };
  return (
    <div className={classes.link}>
      <Paper>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <ListItemText primary='Background' />
        </NavLink>
        <NavLink
          to='/10th'
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <ListItemText primary='10th' />
        </NavLink>

        <NavLink
          to='/12th'
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <ListItemText primary='12th' />
        </NavLink>

        <NavLink
          to='/be'
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <ListItemText primary='BE' onClick={behandleClick}>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemText>
        </NavLink>

        <Collapse in={open} timeout='auto' unmountOnExit>
          <NavLink
            to='/be/1'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <ListItemText primary='1st Year' />
          </NavLink>
          <NavLink
            to='/be/2'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <ListItemText primary='2nd Year' />
          </NavLink>
          <NavLink
            to='/be/3'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <ListItemText primary='3rd Year' />
          </NavLink>
          <NavLink
            to='/be/4'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <ListItemText primary='4th Year' />
          </NavLink>
        </Collapse>

        <NavLink
          to='/me'
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <ListItemText primary='ME' onClick={mehandleclick}>
            {meOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemText>
        </NavLink>
        <Collapse in={meOpen} timeout='auto' unmountOnExit>
          <NavLink
            to='/me/1'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <ListItemText primary='1st Year' />
          </NavLink>
          <NavLink
            to='/me/2'
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <ListItemText primary='2nd Year' />
          </NavLink>
        </Collapse>

        <NavLink
          to='/pm'
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <ListItemText primary='Project Management' />
        </NavLink>

        <NavLink
          to='/hr'
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <ListItemText primary='Human Resource Management' />
        </NavLink>
      </Paper>
    </div>
  );
}
export default SideNav;
