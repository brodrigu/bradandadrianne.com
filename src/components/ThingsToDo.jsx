import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    GoogleMap,
    Marker,
    MarkerWithLabel,
    withScriptjs,
    withGoogleMap,
} from 'react-google-maps';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import mapStyle from './map-style.json';

import Header from '~components/Header';
import ThingToDo from './ThingToDo';
import MapMarker from './MapMarker';

import pointsOfInterest from '../points-of-interest.json';

const pairsOfThings = pointsOfInterest.reduce((result, value, index, array) => {
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
        fontSize: '1.2rem',
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

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
    const [openMarker, setOpen] = useState(false);
    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: 41.2358869, lng: 1.7859102 }}
            defaultOptions={{ disableDefaultUI: true, styles: mapStyle }}
        >
            { pointsOfInterest.map((point, index) => (
                <MapMarker
                    index={index + 1}
                    isOpen={openMarker === (index + 1)}
                    onOpen={() => setOpen(index + 1)}
                    onClose={() => setOpen(false)}
                    label={point.title}
                    position={{
                        lat: parseFloat(point.latitude),
                        lng: parseFloat(point.longitude),
                    }}
                />
            ))}
        </GoogleMap>
    );
}));

const ThingsToDo = ({
    classes,
}) => (
    <React.Fragment>
        <Header />
        <main className={classes.layout}>
            <div className={classes.content}>
                <div className={classes.card}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={0}
                    >
                        <Grid item xs={12} align="center">
                            <Typography variant="h3" align="center">
                                Things to do
                            </Typography>
                            <div className={classes.spacer} />
                            <Typography variant="p" align="center" className={classes.text}>
                                We hope you are able to enjoy a fun-filled weekend with us
                                around Sitges, Spain. Please find on this page a few
                                recommendations to kick start your weekend plans.
                            </Typography>
                            <div className={classes.spacer} />
                            <Typography variant="p" align="center" className={classes.text}>
                                Something to consider:
                                Sitges is a tiny town. It is fully walkable and in fact mostly
                                pedestrian so cars are not allowed in the downtown area.
                                As a result, parking is very difficult. If you plan to drive in,
                                leave the car further out from the town for the duration of your
                                stay and pick it up when you leave. Locals use scooters and
                                bikes.
                            </Typography>
                        </Grid>
                        <Grid item xs={10} md={6}>
                            <img className={classes.image} alt="instagram influencer" src="https://d2gt2lt628wbyx.cloudfront.net/assets/union-navy/union_color3.png" width="100%" />
                        </Grid>
                    </Grid>
                    <div className={classes.spacer} />
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item xs={10} md={12}>
                            <MyMapComponent
                                isMarkerShown
                                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDYFzSA8WB93e9ejk3b5dThUpHHKrpNoyk&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: '100%' }} />}
                                containerElement={<div style={{ height: '400px' }} />}
                                mapElement={<div style={{ height: '100%' }} />}
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
                        {pairsOfThings.map(pair => (
                            <React.Fragment>
                                <Grid item sm={5}>
                                    <ThingToDo
                                        title={pair[0].title}
                                        description={pair[0].description}
                                        address={`${pair[0].address_1 || ''} ${pair[0].address_2 || ''} ${pair[0].city || ''} ${pair[0].country_code || ''}`}
                                        url={pair[0].url}
                                    />
                                </Grid>
                                <Hidden xsDown>
                                    <Grid item xs={false} sm={2}>
                                        <div className={classes.line} />
                                    </Grid>
                                </Hidden>
                                <Grid item sm={5} align="center">
                                    <ThingToDo
                                        title={pair[1].title}
                                        description={pair[1].description}
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
                        <Grid item sm={8}>
                            <img alt="flowers" src="https://d2gt2lt628wbyx.cloudfront.net/assets/union-navy/unionfooter_color3.png" width="100%" />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </main>
    </React.Fragment>
);

ThingsToDo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThingsToDo);
