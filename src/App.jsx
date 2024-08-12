import React, { useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import Certificates from './pages/Certificates'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start('visible');
    }
  }, [inView, mainControls]);

  return (
    <>
      <div className='max-w-[480px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1280px] mx-auto'>
        <Home />
        <motion.div
          ref={ref}
          variants={{
            hidden: { y: 75, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <About />
        </motion.div>

        <motion.div
          ref={ref}
          variants={{
            hidden: { y: 75, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Skills />
        </motion.div>

        <motion.div
          ref={ref}
          variants={{
            hidden: { y: 75, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Portfolio />
        </motion.div>

        <motion.div
          ref={ref}
          variants={{
            hidden: { y: 75, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Certificates />
        </motion.div>
      </div>
    </>
  )
}

export default App