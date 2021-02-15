import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/header';
import TaskForm from './components/taskform';
import TaskList from './components/tasklist';
import GlobalContextProvider from './context/globalstate';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <GlobalContextProvider>
      <CssBaseline>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                className={classes.paper}
                elevation={3}
              >
                <Header />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                className={classes.paper}
                elevation={3}
              >
                <TaskForm />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                className={classes.paper}
                elevation={3}
              >
                <TaskList />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </CssBaseline>
    </GlobalContextProvider>
  );
}
