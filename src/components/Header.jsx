import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = () => ({
    grow: {
        flexGrow: 1,
    },
    logoButton: {
        color: 'black',
        fontSize: ' 1.4rem',
        marginLeft: -12,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    toolbar: {
        backgroundColor: 'white',
        borderBottom: '1px solid #eceff1',
        boxShadow: 'none',
    },
});

const Header = ({ classes }) => (
    <div>
        <AppBar position="static" color="default" className={classes.toolbar}>
            <Toolbar>
                <Button
                    color="primary"
                    className={classes.logoButton}
                    onClick={() => { window.location.href = '#/'; }}
                >
                    Brad & Adrianne
                </Button>
                <div className={classes.grow} />
                <Button
                    color="primary"
                    className={classes.menuButton}
                    onClick={() => { window.location.href = '#/schedule'; }}
                >
                    Schedule
                </Button>
                <Button
                    color="primary"
                    className={classes.menuButton}
                    onClick={() => { window.location.href = '#/travel'; }}
                >
                    Travel
                </Button>
                <Button
                    color="primary"
                    className={classes.menuButton}
                    onClick={() => { window.location.href = '#/photos'; }}
                >
                    Photos
                </Button>
                <Button
                    color="primary"
                    className={classes.menuButton}
                    onClick={() => { window.location.href = '#/things-to-do'; }}
                >
                    Things To Do
                </Button>
            </Toolbar>
        </AppBar>
    </div>
);

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
