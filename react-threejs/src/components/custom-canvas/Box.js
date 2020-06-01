import React, { useRef, useState} from 'react'
import {extend, useLoader } from 'react-three-fiber'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import {
    TextureLoader
} from 'three';

import './Box.scss';
import t1_bk from 'images/lake/bk.jpg';
import t2_dn from 'images/lake/dn.jpg';
import t3_ft from 'images/lake/ft.jpg';
import t4_lf from 'images/lake/lf.jpg';
import t5_rt from 'images/lake/rt.jpg';
import t6_up from 'images/lake/up.jpg';

extend({OrbitControls});

const Box = (props) => {
    const back = useLoader(TextureLoader, t1_bk);
    const down = useLoader(TextureLoader, t2_dn);
    const front = useLoader(TextureLoader, t3_ft);
    const left = useLoader(TextureLoader, t4_lf);
    const right = useLoader(TextureLoader, t5_rt);
    const up = useLoader(TextureLoader, t6_up);
    // This reference will give us direct access to the mesh
    const mesh = useRef()

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={[1, 1, 1]}
        >
            <boxGeometry attach="geometry" args={[1000, 1000, 1000]} />
            <meshBasicMaterial attachArray="material" map={front} side={THREE.BackSide}/>
            <meshBasicMaterial attachArray="material" map={back} side={THREE.BackSide} />
            <meshBasicMaterial attachArray="material" map={up} side={THREE.BackSide}/>
            <meshBasicMaterial attachArray="material" map={down} side={THREE.BackSide}/>
            <meshBasicMaterial attachArray="material" map={right} side={THREE.BackSide}/>
            <meshBasicMaterial attachArray="material" map={left} side={THREE.BackSide}/>
            />

        </mesh>
    )
};

export default Box;