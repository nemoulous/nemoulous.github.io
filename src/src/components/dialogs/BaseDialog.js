/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = (theme) => ({
  dialog: {
    backgroundColor: theme.palette.secondary.dark,
  },
  container: {
    maxWidth: 600,
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bottomMargin: {
    marginBottom: theme.spacing(2),
  },
  stepsContainer: {},
});

// eslint-disable-next-line react/prefer-stateless-function
class BaseDialog extends Component {
  render() {
    const {
      classes, open, onClose, children,
    } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll="body"
      >
        <DialogTitle
          id="alert-dialog-title" 
          className={classes.dialog}
        />
        <DialogContent
          className={classes.dialog}
        >
          <DialogContentText id="alert-dialog-description"
          className={classes.dialog}
          >
            <div className={classes.container}>
              {children}
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }
}

BaseDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.any,
};

BaseDialog.defaultProps = {
  open: false,
  children: [],
};

export default withStyles(styles)(BaseDialog);
