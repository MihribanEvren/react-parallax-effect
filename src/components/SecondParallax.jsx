import astronaut1 from '/astronaut-1.png';
import astronaut2 from '/astronaut-2.png';
import astronaut3 from '/astronaut-3.png';
import astronaut4 from '/astronaut-4.png';
import earth from '/earth-2.png';
import front from '/front.png';
import shootingStar from '/bigShootingStar.png';
import smallShootingStar from '/smallShootingStar-2.png';
import space from '/space.png';
import smallPlanet from '/smallPlanet.png';
import bigPlanet from '/bigPlanet.png';
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

function SecondParallax() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const { scrollYProgress: starsYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const spaceScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const frontScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const frontAnimation = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  const earthDownAnimation = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '30%']
  );

  const starsDownAnimation = useTransform(
    starsYProgress,
    [0, 1],
    ['-200%', '20%']
  );
  const starsLeftAnimation = useTransform(
    starsYProgress,
    [0, 1],
    ['120%', '-25%']
  );

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <div
      className="relative w-full overflow-hidden mb-[800px]"
      style={{
        aspectRatio: '17 / 11',
      }}
      ref={containerRef}
    >
      <motion.img
        className="absolute z-0 object-cover w-full"
        src={space}
        alt="space"
        style={{ scale: spaceScale }}
      />
      <motion.div
        className="absolute z-30 w-full h-full text-2xl font-bold tracking-wide text-center text-white lg:px-20 lg:text-4xl lg:mt-24 xl:mt-44"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: 'easeOut',
        }}
      >
        <motion.h1
          initial={{ textShadow: '0 0 10px #fff' }}
          animate={{
            textShadow: ['0 0 10px #fff', '0 0 20px #ff00ff', '0 0 10px #fff'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="text-4xl font-extrabold md:text-7xl"
        >
          HELLO FELLOW GALAXY MEMBER
        </motion.h1>
      </motion.div>
      <img
        className="absolute z-10 w-[25%] opacity-70 left-16 -top-10"
        src={bigPlanet}
        alt="big planet"
      />
      <img
        className="absolute z-10 w-[10%] opacity-30 right-32 top-40"
        src={smallPlanet}
        alt="small planet"
      />
      <motion.img
        className="absolute z-20 w-[30%] opacity-60 left-16"
        src={shootingStar}
        alt="shooting star"
        style={{
          translateY: starsDownAnimation,
          translateX: starsLeftAnimation,
        }}
      />
      <motion.img
        className="absolute z-20 w-[20%] opacity-60 right-16"
        src={smallShootingStar}
        alt="small shooting star"
        style={{
          translateY: starsDownAnimation,
          translateX: starsLeftAnimation,
        }}
      />
      <motion.img
        className="absolute z-10 w-full h-full"
        src={front}
        alt="front"
        style={{ scale: frontScale, translateX: frontAnimation }}
      />

      <motion.div
        className="absolute z-20 w-full top-1/2"
        style={{ translateY: earthDownAnimation }}
      >
        <img className="top-0 w-full" src={earth} alt="earth" />
        <div className="absolute z-40 w-1/2 overflow-hidden transform -translate-x-1/2 border-4 h-1/6 top-16 left-1/2 border-slate-300">
          <div className="w-full h-full bg-black opacity-20"></div>
          <h2 className="absolute inset-0 flex items-center justify-center px-4 text-sm font-light text-white md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            adipisci aliquid minus, necessitatibus debitis repellendus sunt
            officiis accusantium vero nam. Hic, deleniti iure veritatis fuga
            provident qui.
          </h2>
        </div>
        <motion.div className="absolute inset-0">
          <img
            className="absolute w-[8%] -translate-y-1/2 -top-4 left-1/2 transform -translate-x-1/2"
            src={astronaut4}
            alt="astronaut"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SecondParallax;
