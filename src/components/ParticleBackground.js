import React, { useCallback, useRef } from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import useAnimation from '../hooks/useAnimation';


const ParticleBackground = () => {
    const ref = useRef(null);
    useAnimation(ref);

    const options = {
        fullScreen: {
            enable: true,
            zIndex: -1,
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
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
                value: "#64ffda",
            },
            links: {
                color: "#64ffda",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: false,
            },
            move: {
                direction: "bottom",
                enable: true,
                outModes: {
                    default: "out",
                },
                random: false,
                speed: 1,
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
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {}, []);
    return (
        <div ref={ref} className='container animate' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <Particles
            
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}
            />
        </div>
    );
};

export default ParticleBackground;