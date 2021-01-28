import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

class MoyDialog extends React.Component {


    constructor(props) {
        super(props);
        this.handleDialogClose = this.handleDialogClose.bind(this);
    }

    handleDialogClose() {
        this.props.handleDialogClose();
    }

    render() {
        const bgColor = parseFloat(this.props.dialogText) >= 10 ? 'green' : 'red';
        const dialogStyle = {
            textAlign: "center",
            backgroundColor: bgColor,
            color: "white"
        }
        return(
            <Dialog
                open={this.props.isDialogOpen}
                onClose={this.handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <div style={dialogStyle}>
                    <DialogTitle id="alert-dialog-title">{this.props.dialogTitle}</DialogTitle>
                    <DialogContent >
                        <DialogContentText style={{color:"white"}} id="alert-dialog-description">{this.props.dialogText}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleDialogClose} style={{color:"white"}}>
                            Ok!
                        </Button>
                    </DialogActions>
                </div>

            </Dialog>
        );
    }
}

export default MoyDialog;