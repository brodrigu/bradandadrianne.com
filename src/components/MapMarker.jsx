import React from 'react';
import PropTypes from 'prop-types';
import {
    InfoWindow,
    Marker,
} from 'react-google-maps';

const MapMarker = ({
    index,
    isOpen,
    label,
    position,
    onOpen,
    onClose,
}) => (
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

MapMarker.propTypes = {
    index: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onOpen: PropTypes.func.isRequired,
    position: PropTypes.object.isRequired,
};

export default MapMarker;
