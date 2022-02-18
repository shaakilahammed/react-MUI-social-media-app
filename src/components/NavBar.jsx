import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: '30%',

    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.searchOpen ? 'flex' : 'none'),
      width: '60%',
    },
  },
  input: {
    color: 'white',
    marginLeft: theme.spacing(1),
    width: '100%',
  },
  cancel: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  icons: {
    alignItems: 'center',
    display: (props) => (props.searchOpen ? 'none' : 'flex'),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

function NavBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const classes = useStyles({ searchOpen });
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" component="h2" className={classes.logoLg}>
          SOCIAL APP
        </Typography>
        <Typography variant="h6" component="h2" className={classes.logoSm}>
          SOCIAL
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel
            className={classes.cancel}
            onClick={() => setSearchOpen(false)}
          />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setSearchOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.icon}>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="secondary" className={classes.icon}>
            <Notifications />
          </Badge>
          <Avatar
            alt="profile"
            src="https://images.pexels.com/photos/1310524/pexels-photo-1310524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=640"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
