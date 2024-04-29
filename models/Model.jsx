import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Pyramid/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.997, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.paper}
          position={[-0.999, 0.002, -5.649]}
          scale={0.541}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials['Material.002']}
          position={[-0.953, 0.002, -5.982]}
          scale={0.541}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials['Material.003']}
          position={[-0.713, 0.002, -5.999]}
          scale={0.541}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.SIDES}
          position={[-0.958, 0.003, -5.593]}
          scale={0.541}
        />
      </group>
      <group scale={0.298}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.004']}
          position={[0.075, 18.202, -0.003]}
          scale={0.541}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={4.902}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[28.82, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.stone_pillar_01_stone_pillar_01_0.geometry}
              material={materials['Material.001']}
              position={[-28.931, 0.071, 57.945]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Pyramid/scene.gltf')