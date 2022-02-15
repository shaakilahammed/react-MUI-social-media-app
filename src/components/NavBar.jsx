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
import { Mail, Notifications, Search } from '@material-ui/icons';

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
  },
  input: {
    color: 'white',
    marginLeft: theme.spacing(1),
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
  },
}));

function NavBar() {
  const classes = useStyles();
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
        </div>
        <div className={classes.icons}>
          {/* <Search className={classes.searchButton} /> */}
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
