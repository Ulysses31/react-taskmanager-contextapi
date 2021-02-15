import React, {
  useState,
  useContext,
  useEffect
} from 'react';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/globalstate';

export default function Task(props) {
  const { task, idx, handleOpenDlg } = props;
  const { selectedTask, setSelectedTask } = useContext(
    GlobalContext
  );
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    setBtnDisabled(selectedTask.id !== 0);
  }, [selectedTask]);

  const handleDlgSelectedTask = (task) => {
    setSelectedTask(task);
    handleOpenDlg(task.id);
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
  };

  return (
    <TableRow key={task.id}>
      <TableCell component='th' scope='row'>
        <b>{idx}</b>
      </TableCell>
      <TableCell>{task.descr}</TableCell>
      <TableCell>
        <Button
          type='button'
          variant='contained'
          color='secondary'
          fullWidth
          disabled={btnDisabled}
          onClick={() => handleDlgSelectedTask(task)}
        >
          {/* <DeleteIcon style={{ fontSize: 18 }} /> */}
          &nbsp; Delete
        </Button>
      </TableCell>
      <TableCell>
        <Button
          type='button'
          variant='contained'
          color='primary'
          fullWidth
          disabled={btnDisabled}
          onClick={() => handleEditTask(task)}
        >
          {/* <EditIcon style={{ fontSize: 18 }} /> */}
          &nbsp; Edit
        </Button>
      </TableCell>
    </TableRow>
  );
}

// ****** Props Validations ********
Task.propTypes = {
  task: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  handleOpenDlg: PropTypes.func.isRequired
};
