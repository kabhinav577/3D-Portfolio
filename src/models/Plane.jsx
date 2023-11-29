/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

import planeScene from '../assets/3d/plane.glb';

// eslint-disable-next-line react/prop-types
const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  }, [isRotating, actions]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
