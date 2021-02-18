import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DialogComponent extends React.Component {
    render() {
        return (
            <Dialog
                open={this.props.opened}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Da li ste sigurni da želite da diskvalifikujete selektovane učesnike?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Selektovano je {this.props.numOfSelected} učesnika za diskvalifikaciju. Jednom kada se učesnik diskvalifikuje, nije moguće ponovo 
                        ga vratiti u igru.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={this.props.cancelDelete}>
                        Otkaži
                    </Button>
                    <Button color="primary" autoFocus onClick={this.props.proceedDelete}>
                        Nastavi
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default DialogComponent;