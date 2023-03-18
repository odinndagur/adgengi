import { Html } from "@react-three/drei"
import { useControls } from "leva"
import { Suspense } from "react";
import { Macbook } from './Macbook';


function Visir(){
    const { vision, fontSize, contrast, outlines, singleSlider, scene } = useControls({
        vision: { value: 1, min: 0.5, max: 4, step: 0.01 },
        fontSize: { value: 1, min: 0.5, max: 4, step: 0.01 },
        contrast: { value: 1, min: 0, max: 4, step: 0.01 },
        scene:{value:'MacbookScene', options:[
          'MacbookScene', 'GataScene'
        ]},
        outlines: { value: 0, min: 0, max: 1, step: 0.01 },
        singleSlider: { value: 0, min: 0, max: 2, step: 0.01 }
      })
    return (
        <div style={{
            filter:`contrast(${contrast})`,
            webkitFilter:`contrast(${contrast})`,
            width:'100%',
            height:'100%',
            display:'flex',
            // justifyContent:'center',
            // alignItems:'center',
            fontSize:`${fontSize}rem`,
            textAlign:'left',
            flexDirection:'column',
            padding:'0.5rem'
          }}>
          <header style={{
            width:'100%',
            maxHeight:'4rem',
            display:'flex',
            justifyContent:'center',
            // alignContent:'center',
            flexDirection:'column',
            backgroundColor:'blue',
            color:'white'
        }}>
            <h1>Vísir.is</h1>
          </header>
          <main>
            <div className="news-story">
                <h2>
                    Netti nettason kominn aftur!
                </h2>
                <p>
                    Helvíti nettur á því eins og alltaf. What a næs yo.
                </p>
            </div>
            <div className="news-story">
                <h2>WHAT! Vann í lottó??</h2>
                <p>
                    Hver? Veit ekki. Einhver sem keypti miða.
                </p>
            </div>
            <div className="news-story">

            </div>
            <div className="news-story">

            </div>
          </main>
          <footer>
            
          </footer>


        </div>
    )
}


export function MacbookScene(){
    const { fontSize, outlines, singleSlider, scene } = useControls({
      fontSize: { value: 1, min: 0.5, max: 4, step: 0.01 },
      scene:{value:'MacbookScene', options:[
        'MacbookScene', 'GataScene'
      ]},
      outlines: { value: 0, min: 0, max: 1, step: 0.01 },
      singleSlider: { value: 0, min: 0, max: 2, step: 0.01 }
    })
    return (
      <Suspense fallback={null}>
      <group position={[0,0,-10]}>
      <Macbook position={[0,0,0]} scale={[50,50,50]}/>
          <Html
          // occlude='blending'
          occlude
          transform
          position={[0,5.5,0.08]}
          // zIndexRange={[0,100]}
          >
            <div className="smapp" style={{
              backgroundColor: 'white',
              width:'600px',
              height: '410px',
              borderRadius: '2px',
              overflow:'hidden'
              }}>
                <Visir/>
            </div>
        </Html>
      </group>
      </Suspense>
    )
  }