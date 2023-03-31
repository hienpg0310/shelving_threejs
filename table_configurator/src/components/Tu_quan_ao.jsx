/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/tu_quan_ao.gltf
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { ConfiguratorProvider, useConfigurator } from '../contexts/Configurator';

import { useFrame } from "@react-three/fiber";
import * as Three from "three";
import { Vector3 } from "three";

export function TuQuanAo(props) {
  const { nodes, materials } = useGLTF('./models/tu_quan_ao.gltf')

  const {tuColor} = useConfigurator();
  const tuquanao = useRef();

  useEffect(()=>{
    materials['Material.001'].color = new Three.Color(tuColor);
    nodes.vertical_pilar1.material.color = new Three.Color(tuColor); }, [tuColor]); // chinh mau chan ban

  return (
    <group {...props} dispose={null} ref={tuquanao}>
      <mesh geometry={nodes.Wardrobe.geometry} material={materials['Material.001']} scale={[5.5, 4, 1]} />
      <mesh geometry={nodes.vertical_pilar1.geometry} material={nodes.vertical_pilar1.material} position={[-3.6, -0.6, 0.07]} scale={[0.05, 3.3, 0.9]} />
      <mesh geometry={nodes.vertical_pilar3.geometry} material={nodes.vertical_pilar3.material} position={[0.1, -0.01, 0.07]} scale={[0.05, 3.9, 0.9]} />
      <mesh geometry={nodes.horizontal_pilar1.geometry} material={nodes.horizontal_pilar1.material} position={[0, 2.7, 0.07]} scale={[5.3, 0.05, 0.9]} />
      <mesh geometry={nodes.horizontal_pilar2.geometry} material={nodes.horizontal_pilar2.material} position={[-4.5, 1.2, 0.05]} scale={[0.9, 0.05, 0.9]} />
      <mesh geometry={nodes.horizontal_pilar3.geometry} material={nodes.horizontal_pilar3.material} position={[-4.5, -0.3, 0.05]} scale={[0.9, 0.05, 0.9]} />
      <mesh geometry={nodes.horizontal_pilar4.geometry} material={nodes.horizontal_pilar4.material} position={[-4.5, -1.7, 0.05]} scale={[0.9, 0.05, 0.9]} />
      <mesh geometry={nodes.horizontal_pilar5.geometry} material={nodes.horizontal_pilar5.material} position={[-4.5, -3, 0.05]} scale={[0.9, 0.05, 0.9]} />
      <mesh geometry={nodes.horizontal_pilar5002.geometry} material={nodes.horizontal_pilar5002.material} position={[4.1, -0.6, 0.07]} scale={[1.3, 0.05, 0.9]} />
      <mesh geometry={nodes.horizontal_pilar5001.geometry} material={nodes.horizontal_pilar5001.material} position={[2.75, -3, 0.07]} scale={[2.6, 0.05, 0.9]} />
      <mesh geometry={nodes.vertical_pilar1001.geometry} material={nodes.vertical_pilar1001.material} position={[2.75, -2.23, 0.07]} scale={[0.05, 1.68, 0.9]} />
      <mesh geometry={nodes.horizontal_pilar5003.geometry} material={nodes.horizontal_pilar5003.material} position={[4.1, -1.8, 0.07]} scale={[1.3, 0.05, 0.9]} />
      <mesh geometry={nodes.horizontal_pilar5004.geometry} material={nodes.horizontal_pilar5004.material} position={[4.1, -0.6, 0.07]} scale={[1.3, 0.05, 0.9]} />
    </group>
  )
}

useGLTF.preload('./models/tu_quan_ao.gltf')