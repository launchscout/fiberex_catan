/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({position}) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "../../static/gltf_files/catan_main_harbour_lighthouse_newbase.gltf"
  );
  return (
    <mesh
      geometry={nodes.mesh_0.geometry}
      material={nodes.mesh_0.material}
      rotation={[-Math.PI / 2, 0, 0]}
      position={position}
    />
  );
}

useGLTF.preload(
  "../../static/gltf_files/catan_main_harbour_lighthouse_newbase.gltf"
);