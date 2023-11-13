import { forwardRef } from 'react'
import { Circle } from '@react-three/drei'

// eslint-disable-next-line react/display-name
export const FaceCircle = forwardRef(({ radius, children, transparent = false, opacity = 1, color = 'white', args = [1, 1, 1], ...props }, ref) => {
  return (
    <Circle smoothness={3} bevelSegments={2} radius={radius} args={args} receiveShadow castShadow ref={ref} {...props}>
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </Circle>
  )
})
