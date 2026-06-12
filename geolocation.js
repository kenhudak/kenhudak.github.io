// geolocation.js
// Adds a live GPS "you are here" dot to a qgis2web/OpenLayers map.
// Drop this file into the "resources" folder of EACH new export, and add
// one line to the exported HTML (see instructions).

(function () {
    function initGeolocation() {
        if (typeof map === 'undefined') {
            // map not ready yet, try again shortly
            setTimeout(initGeolocation, 200);
            return;
        }

        // Style for the position dot (blue circle with white outline)
        var positionStyle = new ol.style.Style({
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({ color: '#1a73e8' }),
                stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 })
            })
        });

        // Style for the accuracy circle
        var accuracyStyle = new ol.style.Style({
            fill: new ol.style.Fill({ color: 'rgba(26, 115, 232, 0.15)' }),
            stroke: new ol.style.Stroke({ color: 'rgba(26, 115, 232, 0.4)', width: 1 })
        });

        var positionFeature = new ol.Feature();
        positionFeature.setStyle(positionStyle);

        var accuracyFeature = new ol.Feature();
        accuracyFeature.setStyle(accuracyStyle);

        var positionLayer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [accuracyFeature, positionFeature]
            }),
            zIndex: 1000
        });
        map.addLayer(positionLayer);

        var firstFix = true;

        var geolocation = new ol.Geolocation({
            trackingOptions: {
                enableHighAccuracy: true
            },
            projection: map.getView().getProjection()
        });

        geolocation.on('change:position', function () {
            var coordinates = geolocation.getPosition();
            if (coordinates) {
                positionFeature.setGeometry(new ol.geom.Point(coordinates));

                // Center the map on first GPS fix only
                if (firstFix) {
                    map.getView().setCenter(coordinates);
                    map.getView().setZoom(16);
                    firstFix = false;
                }
            }
        });

        geolocation.on('change:accuracyGeometry', function () {
            accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
        });

        geolocation.on('error', function (error) {
            console.error('Geolocation error: ' + error.message);
        });

        // --- "Track Me" toggle button ---
        var trackButton = document.createElement('button');
        trackButton.innerHTML = '&#128205;'; // location pin emoji
        trackButton.title = 'Toggle GPS tracking';
        trackButton.style.position = 'absolute';
        trackButton.style.top = '4.5em';
        trackButton.style.left = '0.5em';
        trackButton.style.zIndex = '1000';
        trackButton.style.width = '2.375em';
        trackButton.style.height = '2.375em';
        trackButton.style.fontSize = '1.2em';
        trackButton.style.cursor = 'pointer';
        trackButton.style.background = '#f8f8f8';
        trackButton.style.border = 'none';
        trackButton.style.borderRadius = '2px';

        var tracking = false;
        trackButton.addEventListener('click', function () {
            tracking = !tracking;
            geolocation.setTracking(tracking);
            trackButton.style.background = tracking ? '#1a73e8' : '#f8f8f8';
            if (tracking) {
                firstFix = true; // re-center on next fix when re-enabled
            } else {
                positionFeature.setGeometry(null);
                accuracyFeature.setGeometry(null);
            }
        });

        document.getElementById('map').appendChild(trackButton);
    }

    // Wait for the page (and map.js) to finish loading
    if (document.readyState === 'complete') {
        initGeolocation();
    } else {
        window.addEventListener('load', initGeolocation);
    }
})();
