function loadResponses(fields, data) {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVueXNib2lrbyIsImEiOiJjaXpxdzlxMGswMHMzMnFxbzdpYjJoZDN1In0.O3O4iBtTiODWN0C8oGOBwg';
    var map = new mapboxgl.Map({
        container: 'map-container', // container id
        style: 'mapbox://styles/mapbox/streets-v10', //stylesheet location
        center: [38.713, 48.040], // starting position
        zoom: 8, // starting zoom
        maxBounds: [
            [29.621, 45.537], // Southwest coordinates
            [43.374, 50.986]  // Northeast coordinates
        ]
    });


    map.on('load', function () {

        var features = [];

        data.forEach(function (e, id) {
            var lat = e['_gpslocation_latitude'],
                lon = e['_gpslocation_longitude'];
            var feature = newFeature(lon, lat, id, e);

            features.push(feature);
        });


        map.addSource('responses', {
            type: "geojson",
            data: {
                type: "FeatureCollection",
                features: features
            }
        });


        if (!map.getLayer("responses")) {
            map.addLayer({
                "id": "responses",
                "type": "circle",
                "source": "responses",
                "layout": {
                    'visibility': 'visible'
                },
                'paint': {
                    'circle-radius': 6,
                    'circle-color': 'rgb(238,88,89)',



                    'circle-stroke-color': '#000000',
                    'circle-stroke-width': 1,
                    "circle-opacity": 1
                }
            });
        }
    });

    map.on('click', function (e) {

        var features = map.queryRenderedFeatures(e.point);

        var feature = features[0];

        if (!features.length) {
            return;
        }

        if (feature.layer.source == 'responses') {
            var ind = feature.properties['id'];
            renderTable(fields, data[ind]);

            $('#myModal').modal('show');

        }



    });

    function changeColors(field, choices) {
        var colors = [
                'rgb(88,88,90)',
                'rgb(209,211,212)',
                'rgb(238,88,89)',
                'rgb(210,203,184)',
                'rgb(246,158,97)'
            ];

            var color_list = [];

            choices.forEach(function (e,i) {
                color_list.push([e,colors[i]])
            });

            color = {
                property: field,
                type: 'categorical',
                stops: color_list
            };

            map.setPaintProperty('responses', 'circle-color', color);

    }

    $('#change-color').on('click', function(){
        changeColors('gender_KI', ['male', 'female'])
    })
}