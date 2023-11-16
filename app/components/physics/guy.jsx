import { createContext, useContext, useRef } from 'react'
import { useBox, useConeTwistConstraint } from '@react-three/cannon'
import { createRagdoll } from './helpers/createRagdoll'
import { useDragConstraint } from './helpers/drag'
import { Block } from './helpers/block'
import { useGLTF } from '@react-three/drei'

const { shapes, joints } = createRagdoll(5.5, Math.PI / 16, Math.PI / 16, 0)
const context = createContext()

const BodyPart = ({ config, children, render, name, ...props }) => {
  const { color, args, mass, position } = shapes[name]
  const parent = useContext(context)
  const [ref] = useBox(() => ({ mass, args, position, linearDamping: 0.99, ...props }))
  useConeTwistConstraint(ref, parent, config)
  const bind = useDragConstraint(ref)
  return (
    <context.Provider value={ref}>
      <Block castShadow receiveShadow ref={ref} {...props} {...bind} scale={args} name={name} color={color}>
        {render}
      </Block>
      {children}
    </context.Provider>
  )
}

export function Me({ config, children, render, name, ...props }) {
  const gltf = useGLTF('/me.glb')
  const { args, mass, position } = shapes[name]
  const parent = useContext(context)
  const [ref] = useBox(() => ({ mass, args, position, linearDamping: 0.99, ...props }))
  useConeTwistConstraint(ref, parent, config)
  const bind = useDragConstraint(ref)
  return (
    <primitive ref={ref} {...bind} dispose={null} object={gltf.scene} />
  )
}

export function Guy({ config, children, render, name, ...props }) {
  return (
    <BodyPart name="upperBody" {...props}>
      <Me {...props} name="head" config={joints['neckJoint']} />
      <BodyPart {...props} name="upperLeftArm" config={joints['leftShoulder']}>
      </BodyPart>
      <BodyPart {...props} name="upperRightArm" config={joints['rightShoulder']}>
      </BodyPart>
      <BodyPart {...props} name="pelvis" config={joints['spineJoint']}>
        <BodyPart {...props} name="upperLeftLeg" config={joints['leftHipJoint']}>
        </BodyPart>
        <BodyPart {...props} name="upperRightLeg" config={joints['rightHipJoint']}>
        </BodyPart>
      </BodyPart>
    </BodyPart>
  )
}
