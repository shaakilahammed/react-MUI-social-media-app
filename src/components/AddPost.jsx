import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useState } from 'react';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  addIcon: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  container: {
    width: 500,
    height: 600,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',

    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      height: '100vh',
    },
  },
  formTitle: {
    paddingTop: '10px',
    textAlign: 'center',
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(2),
  },
  inputField: {
    width: '100%',
  },
  halfField: {
    width: '50%',
  },
  createButton: {
    marginRight: theme.spacing(2),
  },
}));

function AddPost() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setModalOpen(false);
    setSuccess(true);
  };

  const handleSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccess(false);
  };
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setModalOpen(true)}>
        <Fab color="primary" className={classes.addIcon}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={modalOpen}>
        <Container className={classes.container}>
          <Typography variant="h5" element="h4" className={classes.formTitle}>
            Add Post
          </Typography>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                variant="outlined"
                label="Title"
                size="small"
                className={classes.inputField}
              />
            </div>

            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                variant="outlined"
                label="Description"
                size="small"
                placeholder="Tell your story..."
                className={classes.inputField}
              />
            </div>

            <div className={classes.item}>
              <TextField
                select
                label="Visibility"
                className={classes.halfField}
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">Who Can Comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom(Premium)"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.createButton}
                onClick={handleSubmit}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={success} autoHideDuration={2000} onClose={handleSuccess}>
        <Alert onClose={handleSuccess} severity="success">
          Post Successfully Added!
        </Alert>
      </Snackbar>
    </>
  );
}

export default AddPost;
