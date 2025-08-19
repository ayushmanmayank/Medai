"use client"
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

type CubeLogoProps = {
  size?: number
  glow?: boolean
}

export default function CubeLogo({ size = 120, glow = true }: CubeLogoProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [0, 1], [15, -15])
  const rotateY = useTransform(mouseX, [0, 1], [-15, 15])

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className={`relative ${glow ? 'drop-shadow-[0_0_30px_rgba(16,185,129,0.45)]' : ''}`}
      style={{ width: size, height: size }}
      initial={{ rotateX: -10, rotateY: 10, rotateZ: 0 }}
      animate={{ rotateZ: [0, 3, 0] }}
      transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          perspective: 800,
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY
        }}
      >
        <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
          {['front', 'back', 'left', 'right', 'top', 'bottom'].map((face) => (
            <div
              key={face}
              className="absolute w-full h-full rounded-xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(16,185,129,0.9), rgba(99,102,241,0.6))',
                border: '1px solid rgba(16,185,129,0.5)',
                boxShadow: 'inset 0 0 40px rgba(16,185,129,0.35)',
                transform:
                  face === 'front'
                    ? 'translateZ(60px)'
                    : face === 'back'
                    ? 'rotateY(180deg) translateZ(60px)'
                    : face === 'left'
                    ? 'rotateY(-90deg) translateZ(60px)'
                    : face === 'right'
                    ? 'rotateY(90deg) translateZ(60px)'
                    : face === 'top'
                    ? 'rotateX(90deg) translateZ(60px)'
                    : 'rotateX(-90deg) translateZ(60px)'
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

