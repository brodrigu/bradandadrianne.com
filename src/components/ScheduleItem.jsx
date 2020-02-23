import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    main: {
        marginBottom: '40px',
    },
});

const ScheduleItem = ({
    classes,
    eventDate,
    eventName,
    eventTime,
}) => (
    <React.Fragment>
        <Grid item sm={12} className={classes.main}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">
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

ScheduleItem.defaultProps = {
    eventDate: '',
    eventName: '',
    eventTime: '',
};

ScheduleItem.propTypes = {
    classes: PropTypes.object.isRequired,
    eventDate: PropTypes.string,
    eventName: PropTypes.string,
    eventTime: PropTypes.string,
};

export default withStyles(styles)(ScheduleItem);
