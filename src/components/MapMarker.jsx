import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import {
    InfoWindow,
    Marker,
} from 'react-google-maps';

const styles = () => ({
    text: {
        fontSize: '1.2rem',
        fontWeight: 400,
        lineHeight: 1.5,
    },
});

const MapMarker = ({
    classes,
    index,
    isOpen,
    label,
    position,
    onOpen,
    onClose,
}) => {


    return (
        <Marker
            key={index}
            position={position}
            label={index.toString()}
            onClick={onOpen}
        >
            {
                isOpen && (
                    <InfoWindow
                        onCloseClick={onClose}
                    >
                        <span>{label}</span>
                    </InfoWindow>
                )
            }


        </Marker>
    );
};

MapMarker.propTypes = {
    classes: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onOpen: PropTypes.func.isRequired,
    position: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapMarker);
