import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface ModalAttrs{
  open: boolean
  onHandleClose(): any
  handleAgreement(): any
  title: string
  content: string
}

const Modal = ({ open, onHandleClose, handleAgreement, title, content }: ModalAttrs) => {
  return (
    <Dialog
        open={open}
        onClose={onHandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onHandleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleAgreement} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default Modal
