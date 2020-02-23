import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import ScheduleItem from './ScheduleItem';
import Hero from './Hero';
import Header from '~components/Header';

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
    title: {
        color: '#7da0bc',
    },
});

const Schedule = ({
    classes,
}) => (
    <React.Fragment>
        <Header active="schedule" />
        <main className={classes.layout}>
            <div className={classes.content}>
                <div className={classes.card}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item xs={12} md={12} align="center">
                            <Hero
                                image="https://66.media.tumblr.com/e03f2692f00927aacb9af49ce8d2f0fe/tumblr_nfdxh43WOn1r2doe0o2_1280.jpg"
                                details={(
                                    <React.Fragment>
                                        <Typography variant="h4" align="center">
                                            Villa Catalina
                                        </Typography>
                                        <Typography variant="p" align="center">
                                            <Link
                                                href="https://maps.google.com/?cid=10672543124784078"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Carretera de Vilafranca km 4,6
                                                <br />
                                                Sant Pere de Ribes, 08810
                                                <br />
                                                Spain
                                            </Link>
                                        </Typography>
                                        <Typography variant="h5" align="center">
                                            Sunday, May 24, 2020
                                        </Typography>
                                        <Typography variant="p" align="center" className={classes.text}>
                                            Garden Attire: Wear sundresses, floral prints,
                                            suits in lighter hues, and fun hats and fascinators.
                                        </Typography>
                                    </React.Fragment>
                                )}
                            />
                        </Grid>
                        <Grid item xs={10} md={7} align="center">
                            <img className={classes.image} alt="instagram influencer" src="https://d2gt2lt628wbyx.cloudfront.net/assets/union-navy/union_color3.png" width="80%" />
                        </Grid>
                    </Grid>
                    <div className={classes.spacer} />
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        spacing={0}
                    >
                        <ScheduleItem
                            eventName="Shuttle Pickup from Sitges"
                            eventDate=""
                            eventTime="3:30pm"
                            locationName=""
                            locationAddress=""
                            details=""
                        />
                        <ScheduleItem
                            eventName="Welcome Drinks"
                            eventDate=""
                            eventTime="4pm"
                            locationName=""
                            locationAddress=""
                            details=""
                        />
                        <ScheduleItem
                            eventName="Ceremony"
                            eventDate=""
                            eventTime="5pm"
                            locationName="Villa Catalina"
                            locationAddress=""
                            details=""
                        />
                        <ScheduleItem
                            eventName="Reception and Dinner"
                            eventDate=""
                            eventTime="5:45pm"
                            locationName=""
                            locationAddress=""
                            details=""
                        />
                    </Grid>
                    <div className={classes.spacer} />
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item sm={8} align="center">
                            <img alt="flowers" src="https://d2gt2lt628wbyx.cloudfront.net/assets/union-navy/unionfooter_color3.png" width="80%" />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </main>
    </React.Fragment>
);

Schedule.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Schedule);
