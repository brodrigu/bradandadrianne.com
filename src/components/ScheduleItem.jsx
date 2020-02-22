import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    alternate: {
        backgroundColor: theme.palette.background.default,
    },
    card: {
        padding: theme.spacing(0, 4, 0),
    },
    content: {
        margin: '0 auto',
        maxWidth: 1200,
        padding: theme.spacing(4, 0, 0),
    },
    image: {
        paddingTop: theme.spacing(4),
    },
    layout: {
        backgroundColor: theme.palette.background.paper,
    },
    line: {
        borderLeft: '2px solid #454546',
        display: 'block',
        height: '274px',
        margin: 'auto',
        width: '1px',
    },
    roundInput: {
        borderRadius: '30px',
    },
    spacer: {
        display: 'block',
        height: '40px',
    },
    text: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
    },
    textBold: {
        fontWeight: 700,
        lineHeight: 1.5,
        margin: 0,
    },
    textBottom: {
        margin: theme.spacing(4),
    },
});

const ScheduleItem = ({
    classes,
    eventName,
    eventDate,
    eventTime,
    locationName,
    locationAddress,
    details
}) => (
    <React.Fragment>
        <Grid item sm={12}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                <Grid item xs={12}>
                    <Typography variant="h3" align="center">
                        {eventName}
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography variant="h5" align="center">
                        {eventDate}
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography variant="h5" align="center">
                        {eventTime}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>
);
ScheduleItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScheduleItem);
