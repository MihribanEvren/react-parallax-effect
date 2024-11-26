import { useEffect, useRef } from 'react';
import mountains from '/mountains.png';
import planets from '/planets.png';
import stars from '/stars.png';
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

function FirstParallax() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const starsScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const starsAnimation = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  const planetsAnimation = useTransform(
    scrollYProgress,
    [0, 1],
    ['-20%', '40%']
  );

  const mountainShakeX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-40, 20]),
    {
      stiffness: 500,
      damping: 10,
    }
  );
  const mountainShakeY = useSpring(
    useTransform(scrollYProgress, [0, 1], [-50, 50]),
    {
      stiffness: 500,
      damping: 10,
    }
  );

  const mountainsScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <div
      className="relative w-full h-[130vh] overflow-hidden"
      ref={containerRef}
    >
      <motion.img
        className="absolute z-30"
        src={mountains}
        alt="mountains"
        // style={{ scale: mountainsScale, x: mountainShakeX, y: mountainShakeY }}
      />
      <motion.img
        className="absolute z-20 "
        src={planets}
        alt="planets"
        style={{ translateY: planetsAnimation }}
      />
      <motion.img
        className="absolute z-10 -top-24"
        src={stars}
        alt="stars"
        style={{ scale: starsScale, translateX: starsAnimation }}
      />
    </div>
  );
}

export default FirstParallax;
