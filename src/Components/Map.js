import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Polyline, Marker } from 'react-google-maps'

class Map extends React.Component {
    state = {
        progress: [],
        found: false
    }

    path = [
        { lat: 47.800003, lng: 13.043557 },
        { lat: 47.800020, lng: 13.042291 },
        { lat: 47.797907, lng: 13.046871 },
        { lat: 47.796771, lng: 13.045356 },
        { lat: 47.794995, lng: 13.047655 },
    ]

    velocity = 80
    initialDate = new Date()

    getDistance = () => {
        // seconds between when the component loaded and now
        const differentInTime = (new Date() - this.initialDate) / 1000 // pass to seconds
        return differentInTime * this.velocity // d = v*t -- thanks Newton!
    }

    componentDidMount = () => {
        this.interval = window.setInterval(this.moveObject, 1000)
    }

    componentWillUnmount = () => {
        window.clearInterval(this.interval)
    }

    moveObject = () => {
        const distance = this.getDistance()
        if (!distance) {
            return
        }

        let progress = this.path.filter(coordinates => coordinates.distance < distance)

        const nextLine = this.path.find(coordinates => coordinates.distance > distance)
        if (!nextLine) {
            this.setState({ progress })
            return // it's the end!
        }
        const lastLine = progress[progress.length - 1]

        const lastLineLatLng = new window.google.maps.LatLng(
            lastLine.lat,
            lastLine.lng
        )

        const nextLineLatLng = new window.google.maps.LatLng(
            nextLine.lat,
            nextLine.lng
        )

        // distance of this line 
        const totalDistance = nextLine.distance - lastLine.distance
        const percentage = (distance - lastLine.distance) / totalDistance

        const position = window.google.maps.geometry.spherical.interpolate(
            lastLineLatLng,
            nextLineLatLng,
            percentage
        )

        progress = progress.concat(position)
        this.setState({ progress })
    }

    componentWillMount = () => {
        this.path = this.path.map((coordinates, i, array) => {
            if (i === 0) {
                return { ...coordinates, distance: 0 } // it begins here! 
            }
            const { lat: lat1, lng: lng1 } = coordinates
            const latLong1 = new window.google.maps.LatLng(lat1, lng1)

            const { lat: lat2, lng: lng2 } = array[0]
            const latLong2 = new window.google.maps.LatLng(lat2, lng2)

            // in meters:
            const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
                latLong1,
                latLong2
            )

            return { ...coordinates, distance }
        })

        console.log(this.path)
    }

    alertChef = () => {
        if (this.state.progress[2]) {
            if (this.state.progress[2].lng === 13.046871) {
                alert("success")
                this.setState({ found: true })
            }
        }
    }

    render() {
        return (
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{ lat: 47.8000267, lng: 13.0430349 }}
            >
                {!this.state.found && this.alertChef()}
                {this.state.progress && (
                    <>
                        <Polyline path={this.state.progress} options={{ strokeColor: "#FF0000 " }} />
                        <Marker position={this.state.progress[this.state.progress.length - 1]} />
                        <Marker position={{ lat: 47.794995, lng: 13.047655 }} />
                    </>
                )}
            </GoogleMap>
        )
    }
}

const MapComponent = withScriptjs(withGoogleMap(Map))

export default () => (
    <MapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB1AgXSjszxZ6oVv-O7fdj0tJBmzfz7yUc&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: '100vh', width: '100%' }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
)
