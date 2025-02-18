'use client'
import { useCallback } from 'react'
import Particles from 'react-particles'
import { useSelector } from 'react-redux'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

export default function LinesEffect() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const color = useSelector((state: any) => state.color.color)

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="-z-20"
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: color,
          },
          links: {
            color,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
