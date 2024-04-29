import { Suspense, useEffect, useRef, useState } from "react";
import "./App.css";
import * as THREE from "three";
import gsap from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Model } from "../models/Model.jsx";
function App() {
  const cameraRef = useRef();
  // const [isAnimating, setIsAnimating] = useState(false);
  const [boxColor, setBoxColor] = useState("yellow");
  const box = useRef();
  const animateCamera = () => {
    gsap.to(cameraRef.current.position, {
      duration: 2,
      z: 8,
      y: 3,
      ease: "power1.inOut",
      // onComplete: () => setIsAnimating(false),
    });
  };

  // useFrame(() => (box.current.rotation.x = box.current.rotation.y += 0.01));

  // const [helper] = useDirectionalLightHelper();

  return (
    <>
      <h1>hello</h1>
      <div id="canvas-container">
        {/* <Canvas
          camera={{
            fov: 75,
            near: 1,
            far: 1000,
            position: [0, 5, 3],
          }}
          style={{ width: "50vw", height: "50vh" }}
        > */}
        <button onClick={() => animateCamera()}>Animate Camera</button>

        <Canvas style={{ width: "100vw", height: "100vh" ,border:"2px solid red",marginLeft:"-17vh"}}>
          <PerspectiveCamera
            ref={cameraRef}
            far={40000}
            near={0.1}
            fov={70}
            makeDefault
            position={[0, 10, 0]}
          />

          <Suspense fallback={null}>
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[0, 0, 5]} />
            {/* <directionalLightHelper target={directionalLightRef.current} size={10} /> */}

            {/* <Model /> */}

            <mesh
              onClick={() => {
                setBoxColor("red");
              }}
              ref={box}
              position={[0, 0, 0]}
            >
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color={boxColor} />
            </mesh>
            <OrbitControls />
            <axesHelper args={[20]} />
          </Suspense>
          {/* {isAnimating && animateCamera()} */}
        </Canvas>
      </div>
    </>
  );
}

export default App;
