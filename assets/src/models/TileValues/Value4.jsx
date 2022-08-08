/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/../../../Users/alexmnahas/LaunchScout/fiberex_catan/assets/static/gltf_files/4.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes['catan_main_number-tokens012'].geometry} material={nodes['catan_main_number-tokens012'].material} />
    </group>
  )
}

useGLTF.preload('/../../../Users/alexmnahas/LaunchScout/fiberex_catan/assets/static/gltf_files/4.gltf')
