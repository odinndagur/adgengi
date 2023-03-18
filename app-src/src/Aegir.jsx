/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 aegir.gltf --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/adgengi/aegir-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.head3d.geometry} material={materials.material_0} rotation={[Math.PI / 2, 0, 0]} scale={0.1} />
    </group>
  )
}

useGLTF.preload('/adgengi/aegir-transformed.glb')
