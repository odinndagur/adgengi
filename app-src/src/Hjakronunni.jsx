/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 hjakronunni.gltf --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function HjaKronunni(props) {
  const { nodes, materials } = useGLTF('/hjakronunni-transformed.glb')
  materials.Material_0.transparent = true
  materials.Material_0.opacity = props.opacity
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0.geometry} material={materials.Material_0} />
    </group>
  )
}

useGLTF.preload('/hjakronunni-transformed.glb')
