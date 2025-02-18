import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import React, { useRef } from 'react'

const Backdrop = () => {
    const shadows = useRef()

    return (
        <AccumulativeShadows
            ref={shadows}
            temporal
            frames={60}
            alphaTest={0.30}
            scale={5}
            resolution={2048}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -0.2]}>
            <RandomizedLight amount={4} radius={9} intensity={0.55 * Math.PI} ambient={0.25} position={[5, 5, -10]} />
            <RandomizedLight amount={4} radius={5} intensity={0.25 * Math.PI} ambient={0.55} position={[-5, 5, -9]} />
        </AccumulativeShadows>
    )
}

export default Backdrop