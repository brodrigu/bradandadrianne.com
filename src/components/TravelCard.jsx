import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import HouseIcon from '@material-ui/icons/HomeOutlined';
import HotelIcon from '@material-ui/icons/HotelOutlined';
import NoteIcon from '@material-ui/icons/CommuteOutlined';

const styles = () => ({
    button: {
        marginTop: '10px',
    },
    text: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
    },
});

const ThingToDo = ({
    address,
    classes,
    description,
    title,
    type,
    url,
}) => (
    <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
    >
        <Grid item xs={12}>
            <Typography variant="h4" align="center">
                {type === 'NOTE' && (<NoteIcon />)}
                {type === 'HOTEL' && (<HotelIcon />)}
                {type === 'HOME_RENTAL' && (<HouseIcon />)}
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h4" align="center">
                {title}
            </Typography>
        </Grid>
        <Grid item xs={12} align="center">
            <Typography variant="p" align="center" className={classes.text}>
                {address}
            </Typography>
        </Grid>
        <Grid item xs={12} align="center">
            <Typography variant="p" align="center" className={classes.text}>
                {description}
            </Typography>
        </Grid>
        <Grid item xs={12} align="center" className={classes.button}>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    window.location.href = url;
                }}
            >
                View
            </Button>
        </Grid>
    </Grid>
);

ThingToDo.propTypes = {
    address: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default withStyles(styles)(ThingToDo);
