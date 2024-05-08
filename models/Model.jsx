import React, { useRef } from 'react'
import { useGLTF,Text,MeshTransmissionMaterial } from '@react-three/drei'
import { Canvas, useFrame,useThree } from "@react-three/fiber";
import { useControls } from 'leva';
export function Model(props) {
  const mesh=useRef()
  useFrame(()=>{
// mesh.current.rotation.x+=.004
mesh.current.rotation.y+=.01
  })

  const materialProps=useControls({
    thickness:{value:.2,min:0,max:30,step:.05},
    roughness:{value:0,min:0,max:1,step:.1},
    transmission:{value:1,min:0,max:1,step:.1},
    ior:{value:1.2,min:0,max:3,step:.1},
    chromaticAberration:{value:0.02,min:0,max:1},
    // blur:{value:0.02,min:0,max:100,step:.5},
    backside:{value:true}
  })
  
  const { nodes, materials } = useGLTF('/book_pillar.glb')
  return (
    <group scale={2} ref={mesh} {...props} dispose={null}>
      
      <group  position={[0.997, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
        
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.paper}
          position={[-0.999, 0.002, -5.649]}
          scale={0.541}
        >
          
        </mesh>
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
            >
              <MeshTransmissionMaterial {...materialProps}/>
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/book_pillar.glb')