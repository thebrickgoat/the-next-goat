import { Canvas } from '@react-three/fiber'
import { MeshReflectorMaterial } from '@react-three/drei'
import { Physics, usePlane } from '@react-three/cannon'
import { Cursor } from './helpers/drag'
import { Guy } from './guy'
import { Mug, Chair, Table, Laptop } from './furniture'
import { useEffect, useRef, useState } from 'react'

export default function App() {
  const [physicsEnabled, setPhysicsEnabled] = useState(true)
  const canvasRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhysicsEnabled(false)
        }
      },
      { rootMargin: '0px', threshold: 0.5 }
    )

    if (canvasRef.current) {
      observer.observe(canvasRef.current)
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current)
      }
    }
    
  }, [])  
  return (
    <Canvas style={{ background: "#e12669" }} ref={canvasRef} dpr={[1, 2]} shadows camera={{ position: [-40, 40, 40], fov: 10, near: 1, far: 100 }}>
         <fog attach="fog" args={['#e12669', 60, 90]} />
      <ambientLight intensity={3} />
      <Physics isPaused={physicsEnabled} allowSleep={true} iterations={15} gravity={[0, -200, 0]}>
        <group position={[0, 0, 0]}>
          <Cursor />
          <Guy position={[0, 35, -1]} rotation={[-Math.PI / 3, 0, 0]} />
          <Chair position={[0, 0, 0]} rotation={[0, -Math.PI / 1, 0]} />
          <Table position={[0, 0, -5]} />
          <Laptop position={[0, 2, -5]} />
          <Mug position={[-3, 2, -5]} />
        </group>

        <Floor position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </Physics>
    </Canvas>
  )
}

function Floor(props) {
  const [ref] = usePlane(() => ({ type: 'Static', ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[500, 500]} />
      <MeshReflectorMaterial
        color="#f79bc1"
        blur={[400, 400]}
        resolution={1024}
        mixBlur={1}
        mixStrength={1}
        depthScale={1}
        minDepthThreshold={0.85}
        metalness={0}
        roughness={1}
      />
    </mesh>
  )
}
function Wall(props) {
  const [ref] = usePlane(() => ({ type: 'Static', ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[500, 500]} />
      <MeshReflectorMaterial
        color="#f79bc1"
        blur={[400, 400]}
        resolution={1024}
        mixBlur={1}
        mixStrength={3}
        depthScale={1}
        minDepthThreshold={0.85}
        metalness={0}
        roughness={1}
      />
    </mesh>
  )
}
