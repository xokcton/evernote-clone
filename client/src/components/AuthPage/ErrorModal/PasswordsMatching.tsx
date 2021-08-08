import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface ComponentAttrs{
  isOpen: boolean
  setHandleClose(): any
}

const PasswordsMatching = ({isOpen, setHandleClose}: ComponentAttrs) => {
  return (
    <Dialog
        open={isOpen}
        onClose={setHandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Invalid Credentials!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your passwords do not match. Please make sure the passwords are correct!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={setHandleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default PasswordsMatching
