import { useControls } from 'leva'
import { map, clamp } from './map'
import { Hvittmesh } from './Hvittmesh';
import { Litamesh } from './Litamesh';
import { Linur } from './Linur';

export function GataScene() {
    const { outlines, singleSlider, scene } = useControls({
      scene:{value:'MacbookScene', options:[
        'MacbookScene', 'GataScene'
      ]},
      outlines: { value: 0, min: 0, max: 1, step: 0.01 },
      singleSlider: { value: 0, min: 0, max: 2, step: 0.01 }
    })
    return (
      <group>
        <Litamesh opacity={1} scale={[1,2,1]}/>
        <Hvittmesh opacity={clamp(singleSlider - 1, 0, 1)} scale={[1,2,1]}/>
        <Linur opacity={clamp(singleSlider, 0, 1)} scale={[1,2,1]}/>
      </group>
    )
  }