import { useRef, useState } from 'react'
import { Canvas, useFrame, extend, invalidate } from '@react-three/fiber'
import { UnrealBloomPass } from 'three-stdlib'
import { CameraControls, OrbitControls } from '@react-three/drei'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { useLoader } from '@react-three/fiber';
import { useControls } from 'leva'
import { Effects } from '@react-three/drei'
import { PerspectiveCamera, Html } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import { ContactShadows } from '@react-three/drei';

 
// import { Model } from './Ingolfsstraeti2';
// import { Model } from './Test1';
// import { Model } from './Test2';
// import { Model } from './Aegir';
// import { Model } from './Aegir6013myndbandpaelinggata';
// import { Model } from './Hanna-landslag';
import { Harmaborg8 } from './Harmaborg8';
import { Aegircolor } from './Aegircolor';
import { Hvittmesh } from './Hvittmesh';
import { Litamesh } from './Litamesh';
import { Linur } from './Linur';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, BrightnessContrast, HueSaturation } from '@react-three/postprocessing'
import { Macbook } from './Macbook';
import { GataScene } from './GataScene';
import { MacbookScene } from './MacbookScene';

import { map, clamp } from './map'
import { Group } from 'three';

extend({ UnrealBloomPass })


function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : props.scale || 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function AegirHead (props){
  const obj = useLoader(OBJLoader, '/head3d.obj')
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  useFrame((state, delta) => (ref.current.rotation.y += delta))
  return (
    <mesh>
      <primitive
        {...props}
        object={obj}
        scale={0.01}
        ref={ref}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}





export default function App() {
  const [val, setVal] = useState(0)
  function handleSliderChange(e) {
    console.log(e.target.value)
    setVal(e.target.value/40.0)
  }

  // const { baseColor, outlines, singleSlider } = useControls({
  //   baseColor: { value: 1, min: 0, max: 1, step: 0.01 },
  //   outlines: { value: 0, min: 0, max: 1, step: 0.01 },
  //   singleSlider: { value: 0, min: 0, max: 2, step: 0.01 }
  // })
  const { scene, fontSize, contrast, saturation } = useControls({
    scene:{value:'MacbookScene', options:[
      'MacbookScene', 'GataScene'
    ]},
    contrast: { value: 0, min: -1, max: 1, step: 0.01 },
    saturation: { value: -1, min: -1, max: 1, step: 0.01 },
  })


  return (
    <>
    <Canvas>
      <EffectComposer>
        <BrightnessContrast contrast={contrast} />
        <HueSaturation saturation={saturation} />
      </EffectComposer>
    <PerspectiveCamera
          position={[0, 0, 0]}
          fov={100}
          rotation={[3,0,0]}/>
    <Environment preset="city" />
    <ContactShadows frames={1} scale={5} position={[0, -1, 0]} far={1} blur={5} opacity={0.5} color="#204080" />
     
    {/* <color attach="background" args={['#111']} /> */}
    <color attach="background" args={['#FFF']} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />


    {scene == 'MacbookScene' ? <MacbookScene/> : <GataScene />}

      {/* <OrbitControls /> */}
      <CameraControls />
      
      

    </Canvas>
    </>
  )
}
