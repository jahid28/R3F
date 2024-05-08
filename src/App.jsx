import { Suspense, useEffect, useRef, useState } from "react";
import "./App.css";
import * as THREE from "three";
import gsap from "gsap";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  OrthographicCamera,
  Text,
} from "@react-three/drei";
import { ForestSpline } from "../models/Forest.jsx";
import { Trees } from "../models/Trees.jsx";
import { Mount } from "../models/Mount.jsx";
function App(props) {
  const cameraRef = useRef();
  // const [isAnimating, setIsAnimating] = useState(false);
  const [boxColor, setBoxColor] = useState("yellow");
  const box = useRef();
  const animateCamera = () => {
    gsap.to(cameraRef.current.position, {
      duration: 2,
      x:200,
      z: 0,
      y: 50,
      ease: "power1.inOut",
      // onComplete: () => setIsAnimating(false),
    });
  };

  // animateCamera()

  // window.addEventListener("scroll", function () {
  //   if (this.scrollY > 200) {
  //     animateCamera();
  //   }
  //   // const scrollPosition = window.scrollY;
  //   // const fullHeight = document.documentElement.scrollHeight - window.innerHeight;
  //   // if (scrollPosition >= fullHeight) {
  //   //   animateCamera()
  //   // } else {
  //   //   // setShowPopup(false);
  //   // }
  //   console.log(this.scrollY);
  // });
  // const {viewport}=useThree()

  // useFrame(() => (box.current.rotation.x = box.current.rotation.y += 0.01));

  // const [helper] = useDirectionalLightHelper();

  const env = useRef();
  const dL = useRef();
  const aL = useRef();

  const [dataToSend, setDataToSend] = useState(1);
  const [mode, setMode] = useState("city");

  function func() {
    if (dataToSend % 2 == 0) {
      // setMode("night")
      gsap.to(aL.current, {
        duration: 2,
        intensity: 2,
        ease: "power1.inOut",
      });
      gsap.to(dL.current, {
        duration: 2,
        intensity: 4,
        ease: "power1.inOut",
      });
    } else {
      // setMode("city")
      gsap.to(aL.current, {
        duration: 2,
        intensity: 0.1,
        ease: "power1.inOut",
      });
      gsap.to(dL.current, {
        duration: 2,
        intensity: 0.5,
        ease: "power1.inOut",
      });
    }
    setDataToSend((e) => e + 1);
  }

  return (
    <>
      {/* <h1>hello</h1> */}
      <div style={{ height: "200vh" }} id="canvas-container">
        <button
          onClick={func}
          style={{ zIndex: 100, position: "absolute", top: 0 }}
        >
          Toggle
        </button>

        {/* <Canvas
          camera={{
            fov: 75,
            near: 1,
            far: 1000,
            position: [0, 5, 3],
          }}
          style={{ width: "50vw", height: "50vh" }}
        > */}
        {/* <button onClick={() => animateCamera()}>Animate Camera</button> */}

        <Canvas
          style={{
            position: "fixed",
            top: "0",
            left: "0vh",
            width: "100vw",
            height: "100vh",
            // border: "2px solid red",
            // backgroundColor: "#364059",
          }}
        >
          <PerspectiveCamera
            ref={cameraRef}
            far={40000}
            near={0.1}
            fov={70}
            makeDefault
            position={[100, 100, 100]}
          />
          {/* <OrthographicCamera
        ref={cameraRef}
        left={-10}
        right={10}
        top={10}
        bottom={-10}
        near={0.1}
        far={1000}
        position={[-200, 230, -350]} // Optional: Set camera position
        makeDefault // Optional: Makes this camera the default camera
      /> */}

          <Suspense fallback={null}>
            <ambientLight ref={aL} intensity={2} />
            <directionalLight
              ref={dL}
              intensity={4}
              color="white"
              position={[0, 4, 2]}
            />
            {/* <directionalLightHelper target={directionalLightRef.current} size={10} /> */}
            {/* <Environment  preset={"night"} environmentIntensity={1}/> */}
            {/* <Text fontSize={5} position={[0,9,-4]}>
  hello
</Text> */}
            <Trees />
            <Mount
              onSubmit={() => {
                animateCamera();
              }}
            />
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
