import React from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyB1AgXSjszxZ6oVv-O7fdj0tJBmzfz7yUc', language: 'en'
                }}
                defaultCenter={{ "lat": 40.73, "lng": -73.93 }}
                defaultZoom={12}
            >
                <AnyReactComponent
                    lat={40.73}
                    lng={-73.93}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default Map;