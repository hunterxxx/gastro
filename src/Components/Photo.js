import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import * as faceapi from 'face-api.js';
import canvas from 'canvas';
import 'react-html5-camera-photo/build/css/index.css';

const { Canvas, Image, ImageData } = canvas;
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });
faceapi.env.monkeyPatch({
    createCanvasElement: () => document.createElement('canvas'),
    createImageElement: () => document.createElement('img')
});

class Photo extends Component {
    constructor(props) {
        super(props);
        this.configureModels();
    }

    configureModels = async () => {
        await faceapi.nets.tinyFaceDetector.loadFromUri('./models_tiny');
    };

    async onTakePhoto(dataUri) {
        const img = document.createElement('img');
        img.src = dataUri;
        alert('Photo taken');
        const detections = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions());
        // Do stuff with the dataUri photo...
        this.props.history.push({
            pathname: '/decision',
            state: {
                length: detections.length,
                restaurant: "Panoramarestaurant zur Festung Hohensalzburg"
            }
        });
    }

    render() {
        return (
            <div className="App">
                <Camera
                    onTakePhoto={(dataUri) => { this.onTakePhoto(dataUri); }}
                />
            </div>
        );
    }
}

export default Photo;
