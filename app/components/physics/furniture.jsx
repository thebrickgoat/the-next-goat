
import { useGLTF } from '@react-three/drei'
import { useCompoundBody, useCylinder } from '@react-three/cannon'
import { Block } from './helpers/block'

export function Chair(props) {
  const [ref] = useCompoundBody(() => ({
    mass: 0.25,
    linearDamping: 0.95,
    angularDamping: 0.95,
    shapes: [
      { type: 'Box', mass: 10, position: [0, 0, 0], args: [3.1, 3.1, 0.5] },
      { type: 'Box', mass: 10, position: [0, -1.75, 1.25], args: [3.1, 0.5, 3.1] },
      { type: 'Box', mass: 1, position: [5 + -6.25, -3.5, 0], args: [0.5, 3, 0.5] },
      { type: 'Box', mass: 1, position: [5 + -3.75, -3.5, 0], args: [0.5, 3, 0.5] },
      { type: 'Box', mass: 1, position: [5 + -6.25, -3.5, 2.5], args: [0.5, 3, 0.5] },
      { type: 'Box', mass: 1, position: [5 + -3.75, -3.5, 2.5], args: [0.5, 3, 0.5] }
    ],
    ...props
  }))
  return (
    <group ref={ref}>
      <Block position={[0, 0, 0]} scale={[3.1, 3.1, 0.5]} />
      <Block position={[0, -1.75, 1.25]} scale={[3.1, 0.5, 3.1]} />
      <Block position={[5 + -6.25, -3.5, 0]} scale={[0.5, 3, 0.5]} />
      <Block position={[5 + -3.75, -3.5, 0]} scale={[0.5, 3, 0.5]} />
      <Block position={[5 + -6.25, -3.5, 2.5]} scale={[0.5, 3, 0.5]} />
      <Block position={[5 + -3.75, -3.5, 2.5]} scale={[0.5, 3, 0.5]} />
    </group>
  )
}
export function Mouse(props) {
  const [ref] = useCompoundBody(() => ({
    mass: 0.25,
    linearDamping: 0.95,
    angularDamping: 0.95,
    shapes: [
      { type: 'Box', mass: 1, position: [0, 0, 0], args: [1, 1, 0.5] },
      { type: 'Box', mass: 1, position: [0, 0, 0], args: [1, 1  , 0.5] },
    ],
    ...props
  }))
  return (
    <group ref={ref}>
      <Block color="black" position={[0, 0.25, .125]} scale={[.1, .2, 0.05]} />
      <Block color="black "position={[0, 0, 0]} scale={[.75, 1, 0.25]} />
    </group>
  )
}
export function Laptop(props) {

  const [ref] = useCompoundBody(() => ({
    mass: 0.25,
    linearDamping: 0.95,
    angularDamping: 0.95,
    shapes: [
      { type: 'Box', mass: 10, position: [0, 0, 0], args: [3, 3, 0.5] },
      { type: 'Box', mass: 10, position: [0, -1.75, 1.25], args: [3, 0.5, 3] },
    ],
    ...props
  }))
  return (
    <group ref={ref}>
      <Block color="#a7adba" position={[0, 0, 0]} scale={[3, 3, 0.5]} />
      <Block color="#161e33" position={[0, .3, .3]} scale={[2.5, 2.2, 0.1]} />
      <Block color="#a7adba" position={[0, -1.75, 1.25]} scale={[3, 0.5, 3]} />
    </group>
  )
}


export function Mug(props) {
  const { nodes, materials } = useGLTF('/cup.glb')
  const [cup] = useCylinder(() => ({ mass: 1, args: [0.62, 0.62, 1.2, 16], linearDamping: 0.95, angularDamping: 0.95, ...props }))
  return (
    <group ref={cup} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.012, 0.012, 0.012]}>
        <mesh receiveShadow castShadow material={materials.default} geometry={nodes['buffer-0-mesh-0'].geometry} />
        <mesh material={materials.Liquid} geometry={nodes['buffer-0-mesh-0_1'].geometry} />
      </group>
    </group>
  )
}

export function Table(props) {
  const [table] = useCompoundBody(() => ({
    mass: 0.25,
    linearDamping: 0.95,
    angularDamping: 0.95,
    shapes: [
      { type: 'Box', mass: 50, position: [0, 0, 0], args: [10, 0.5, 5] },
      { type: 'Box', mass: 1, position: [4, -2.25, 2], args: [0.5, 4, 0.5] },
      { type: 'Box', mass: 1, position: [-4, -2.25, -2], args: [0.5, 4, 0.5] },
      { type: 'Box', mass: 1, position: [-4, -2.25, 2], args: [0.5, 4, 0.5] },
      { type: 'Box', mass: 1, position: [4, -2.25, -2], args: [0.5, 4, 0.5] }
    ],
    ...props
  }))
  return (
    <group ref={table}>
      <Block scale={[10, 0.5, 5]} position={[0, 0, 0]} />
      <Block scale={[0.5, 4, 0.5]} position={[4, -2.25, 2]} />
      <Block scale={[0.5, 4, 0.5]} position={[-4, -2.25, -2]} />
      <Block scale={[0.5, 4, 0.5]} position={[-4, -2.25, 2]} />
      <Block scale={[0.5, 4, 0.5]} position={[4, -2.25, -2]} />
    </group>
  )
}

