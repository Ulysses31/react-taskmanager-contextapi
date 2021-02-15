import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

export default function AlertDialog(props) {
  const { open, title, descr, handleDlgClose } = props;

  const handleClose = (curChoice) => {
    handleDlgClose(curChoice);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {descr}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleClose(false)}
            color='primary'
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleClose(true)}
            color='primary'
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// ****** Props Validations ********
AlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.any.isRequired,
  descr: PropTypes.any.isRequired,
  handleDlgClose: PropTypes.func.isRequired
};
