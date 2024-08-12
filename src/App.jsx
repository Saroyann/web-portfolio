import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import Certificates from './pages/Certificates'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function AnimatedSection({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { y: 75, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      initial='hidden'
      animate={controls}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <>
      <div className='max-w-[480px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1280px] mx-auto'>
        <Home />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <AnimatedSection>
          <Portfolio />
        </AnimatedSection>
        <AnimatedSection>
          <Certificates />
        </AnimatedSection>
      </div>
    </>
  )
}

export default App