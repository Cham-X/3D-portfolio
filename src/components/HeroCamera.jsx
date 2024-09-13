import { useFrame } from "@react-three/fiber"
import { easing } from "maath";
import { useRef } from "react"


function HeroCamera({ children, isMobile }) {

    const groupRef = useRef();

    useFrame((state, delta) => {

        easing.damp3(state.camera.position, [0, 0, 18], 0.25, delta);

        if (isMobile) {
            easing.dampE(groupRef.current.location, [state.pointer.y / 3, state.location.x / 5, 18], 0.25, delta);
        }
    })

    return (
        <group ref={groupRef} scale={isMobile ? 1 : 1.3}>
            {children}
        </group>
    )
}

export default HeroCamera
