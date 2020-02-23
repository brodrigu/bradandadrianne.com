import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

import Header from '~components/Header';
import TravelCard from '~components/TravelCard';

import Hero from './Hero';


import travels from '../travels.json';

const pairsOfTravels = travels.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
    }
    return result;
}, []);

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
        fontSize: '1.0rem',
        // fontWeight: 400,
        // lineHeight: 1.5,
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

const Home = ({
    classes,
}) => (
    <React.Fragment>
        <Header active="travel" />
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
                                image="https://cdn.getyourguide.com/img/tour_img-454880-148.jpg"
                                details={(
                                    <React.Fragment>
                                        <Typography variant="h4" align="center">
                                            Sitges, Spain
                                        </Typography>
                                        <Typography
                                            variant="p"
                                            align="center"
                                            className={classes.text}
                                        >
                                            Sitges is a popular beach town about a 25-30
                                            minute drive from the Barcelona El-Prat Airport.
                                            On this page, please find information about
                                            transportation and accommodation in and around Sitges.
                                        </Typography>
                                    </React.Fragment>
                                )}
                            />
                        </Grid>
                        <Grid item xs={9} md={6} align="center">
                            <img
                                className={classes.image}
                                alt="flowers"
                                src="https://d2gt2lt628wbyx.cloudfront.net/assets/union-navy/union_color3.png"
                                width="80%"
                            />
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
                        {pairsOfTravels.map(pair => (
                            <React.Fragment>
                                <Grid item sm={5}>
                                    <TravelCard
                                        title={pair[0].name}
                                        type={pair[0].type}
                                        description={pair[0].note}
                                        address={`${pair[0].address_1 || ''} ${pair[0].address_2 || ''} ${pair[0].city || ''} ${pair[0].country_code || ''}`}
                                        url={pair[0].url}
                                    />
                                </Grid>
                                {pair[1] && (
                                    <React.Fragment>
                                        <Hidden xsDown>
                                            <Grid item xs={false} sm={2}>
                                                <div className={classes.line} />
                                            </Grid>
                                        </Hidden>
                                        <Grid item sm={5} align="center">
                                            <TravelCard
                                                title={pair[1].name}
                                                type={pair[1].type}
                                                description={pair[1].note}
                                                address={`${pair[1].address_1 || ''} ${pair[1].address_2 || ''} ${pair[1].city || ''} ${pair[1].country_code || ''}`}
                                                url={pair[1].url}
                                            />
                                        </Grid>
                                        <Hidden xsDown>
                                            <Grid item sm={12}>
                                                <div className={classes.spacer} />
                                            </Grid>
                                        </Hidden>
                                    </React.Fragment>
                                )}
                            </React.Fragment>
                        ))}
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

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
