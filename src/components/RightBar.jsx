import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'sticky',
    top: 0,
    paddingTop: theme.spacing(10),
  },
  section: {
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#555',
  },
  link: {
    marginRight: theme.spacing(3),
    color: '#555',
    fontSize: '18px',
  },
}));

function RightBar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={5} className={classes.section}>
        <Avatar
          alt="Remy Sharp"
          src="https://v4.mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://v4.mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://v4.mui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://v4.mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/avatar/5.jpg"
        />

        <Avatar
          alt="Remy Sharp"
          src="https://v4.mui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://v4.mui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://v4.mui.com/static/images/avatar/8.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://v4.mui.com/static/images/avatar/9.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/avatar/10.jpg"
        />
      </AvatarGroup>

      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={100} style={{ marginBottom: 10 }} cols={2}>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/breakfast.jpg"
            alt="gallery"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/burgers.jpg"
            alt="gallery"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/camera.jpg"
            alt="gallery"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/morning.jpg"
            alt="gallery"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/hats.jpg"
            alt="gallery"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/honey.jpg"
            alt="gallery"
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sports
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Social
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Culture
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>

      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>

      <Link href="#" className={classes.link} variant="body2">
        Music
      </Link>
    </Container>
  );
}

export default RightBar;
