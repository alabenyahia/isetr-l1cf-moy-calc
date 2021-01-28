import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Container} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        fontSize: "1rem"
    },
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();

    function handlePrcBtnClick() {
        props.handlePrcBtnClick();
    }
    return (
        <div>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Typography className={classes.title}>
                            ISETR: L1CF: MOY CALC
                        </Typography>
                        <Button color="inherit" onClick={handlePrcBtnClick}>Changer %</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}