import mapboxgl from 'mapbox-gl';
import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2xhdmthaGl0cml5IiwiYSI6ImNsYnpmNmV5cTBiMHIzbnFxejhibXJqd3MifQ.kaeD3uS6BI6qF1wV0w4lrw';

export const Map = ({ sx, rerenderDependencies }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-74.01521529520066);
    const [lat, setLat] = useState(40.73760113154407);
    const [zoom, setZoom] = useState(9);

    const renderMap = () => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/slavkahitriy/cltt8cmn4005r01qs37ovguaf',
            center: [lng, lat],
            zoom: zoom,
        });

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    };

    const initMap = () => {
        if (!map.current && mapContainer.current) {
            renderMap();
        }
    };

    const handleStorageChange = useDebouncedCallback(() => {
        renderMap();
    }, 500);

    useEffect(() => {
        const tempInterval = setInterval(() => {
            if (map.current) clearInterval(tempInterval);
            else initMap();
        }, 100);

        return () => clearInterval(tempInterval);
    }, []);

    useEffect(() => {
        if (map.current) {
            initMap();
        }
    }, [rerenderDependencies]);

    useEffect(() => {
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                ...sx,
            }}
            ref={mapContainer}
        />
    );
};
