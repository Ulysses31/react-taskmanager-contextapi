import React, {
  useContext,
  useState,
  useEffect
} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../context/globalstate';
// import AddIcon from '@material-ui/icons/Add';
// import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // marginBottom: "30px"
    flexGrow: 1
  }
}));

export default function TaskForm() {
  const {
    addTask,
    editTask,
    selectedTask,
    setSelectedTask
  } = useContext(GlobalContext);
  const [task, setTask] = useState({
    id: 0,
    descr: ''
  });
  const classes = useStyles();

  useEffect(() => {
    setTask(selectedTask);
  }, [selectedTask]);

  const handleTask = (e) => {
    setTask({ id: task.id, descr: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (task.descr !== '') {
      if (task.id === 0) {
        // insert
        addTask({
          id: uuidv4(),
          descr: task.descr
        });
      } else {
        // edit
        editTask({
          id: task.id,
          descr: task.descr
        });
      }
    }

    // clear form after submit
    setTask({ id: 0, descr: '' });
  };

  const handleClearForm = (e) => {
    e.preventDefault();
    setTask({ id: 0, descr: '' });
    setSelectedTask({ id: 0, descr: '' });
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmitForm}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='descr'
              name='descr'
              value={task.descr}
              onChange={handleTask}
              autoComplete='off'
              label='enter task description...'
              variant='outlined'
              size='small'
              margin='none'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
            >
              {/* <AddIcon style={{ fontSize: 18 }}/>&nbsp; */}
              {selectedTask.id === 0
                ? 'Add Task'
                : 'Edit Task'}
            </Button>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              fullWidth
              onClick={handleClearForm}
            >
              {/* <ClearIcon style={{ fontSize: 18 }}/>&nbsp; */}
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
