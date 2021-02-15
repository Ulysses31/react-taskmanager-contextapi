import React, { useContext, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { GlobalContext } from '../context/globalstate';
import AlertDialog from './alertdlg';
import Task from './task';

const useStyles = makeStyles({
  table: {
    minWidth: '440px'
  }
});

export default function TaskList() {
  const {
    tasks,
    selectedTask,
    setSelectedTask,
    deleteTask
  } = useContext(GlobalContext);
  const [openDlg, setOpenDlg] = useState(false);
  const [title, setTitle] = useState({});
  const [descr, setDescr] = useState({});
  const classes = useStyles();

  const handleOpenDlg = (id) => {
    setDeleteTransactionDlgText(id);
    setOpenDlg(true);
  };

  const handleClose = (curState) => {
    if (curState) {
      deleteTask(selectedTask.id);
    }
    // clear when done
    setOpenDlg(false);
    clearDeleteTransactionDlgText();
    setSelectedTask({ id: 0, descr: '' });
  };

  const setDeleteTransactionDlgText = (id) => {
    setTitle('Delete Transaction');
    setDescr(`Do you want to delete transaction ${id}`);
  };

  const clearDeleteTransactionDlgText = () => {
    setTitle('');
    setDescr('');
  };

  return (
    <>
      <AlertDialog
        open={openDlg}
        handleDlgClose={handleClose}
        title={title}
        descr={descr}
      />
      {tasks.length === 0 ? (
        <h1>No Tasks</h1>
      ) : (
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size='small'
            aria-label='a dense table'
          >
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Task</TableCell>
                <TableCell colSpan='2' align='center'>
                  Options
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task, i) => (
                <Task
                  task={task}
                  key={task.id}
                  idx={i + 1}
                  handleOpenDlg={handleOpenDlg}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
