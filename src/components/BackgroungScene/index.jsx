import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { easing } from "maath";

function getPoint() {
  const u = Math.random();
  const v = Math.random();
  const theta = u * 2.0 * Math.PI;
  const phi = Math.acos(2.0 * v - 1.0);
  const r = Math.cbrt(Math.random());
  const sinTheta = Math.sin(theta);
  const cosTheta = Math.cos(theta);
  const sinPhi = Math.sin(phi);
  const cosPhi = Math.cos(phi);
  const x = r * sinPhi * cosTheta;
  const y = r * sinPhi * sinTheta;
  const z = r * cosPhi;
  return [x * 4, y * 4, z * 4];
}

function getColor() {
  const r = Math.random();
  const g = Math.random();
  const b = Math.random();
  return [r, g, b];
}

const Stars = () => {
  const geometry = new THREE.BufferGeometry();
  const starCount = 10000;

  const vertices = new Float32Array(
    Array.from({ length: starCount }, () => getPoint()).flat()
  );
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

  const colors = new Float32Array(
    Array.from({ length: starCount }, () => getColor()).flat()
  );
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const groupRef = useRef();
  const materialRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y * 0.2, state.pointer.x * 0.2, 0],
        0.4,
        delta
      );
    }
  });

  return (
    <group ref={groupRef}>
      <points geometry={geometry}>
        <pointsMaterial
          ref={materialRef}
          vertexColors={true}
          size={0.01}
          sizeAttenuation={true}
          alphaTest={0.5}
          transparent={true}
        />
      </points>
    </group>
  );
};

export const BackgroungScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 70 }}
      className="w-screen h-screen !absolute top-0"
    >
      <ambientLight intensity={0.5} />
      <Stars />
    </Canvas>
  );
};
