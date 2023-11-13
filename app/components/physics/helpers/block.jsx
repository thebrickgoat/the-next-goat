import { forwardRef } from 'react'
import { RoundedBox } from '@react-three/drei'

// eslint-disable-next-line react/display-name
export const Block = forwardRef(({ children, transparent = false, opacity = 1, color = 'white', args = [1, 1, 1], ...props }, ref) => {
  return (
    <RoundedBox args={args} receiveShadow castShadow ref={ref} {...props}>
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </RoundedBox>
  )
})
  