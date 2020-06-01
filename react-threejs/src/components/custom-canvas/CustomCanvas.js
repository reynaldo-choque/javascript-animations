import ReactDOM from 'react-dom'
import React, {Suspense, useEffect} from 'react'
import {Canvas, useFrame, useThree} from 'react-three-fiber';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import Box from "components/custom-canvas/Box";


const CameraController = () => {
    const {camera, gl} = useThree();

    camera.fov = 55;
    camera.near = 100;
    camera.far = 200;
    camera.position.set(-20, 5, -50);

    useEffect(
        () => {
            const controls = new OrbitControls(camera, gl.domElement);

            controls.minDistance = 2;
            controls.maxDistance = 2;
            controls.keyPanSpeed = 2;
            return () => {
                controls.dispose();
            };
        },
        [camera, gl]
    );
    return null;
};

const CustomCanvas = (props) => {
    return (
        <Canvas
            colorManagement
        >
            <Suspense fallback={null}>
                <CameraController/>
                <ambientLight/>
                <pointLight position={[10, 10, 10]} />
                <Box position={[0, 0, 0]}/>
            </Suspense>
        </Canvas>
    );
};

export default CustomCanvas;

