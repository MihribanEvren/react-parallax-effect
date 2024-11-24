import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5 } },
};

const gridSquareVariants = { hidden: { opacity: 0 }, show: { opacity: 1 } };

const svgIconVariants = {
  hidden: { opacity: 0, pathLength: 0, fill: 'rgba(252, 211, 77, 0)' },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(252, 211, 77, 1)',
  },
};

function App() {
  const { scrollYProgress: completionProgress } = useScroll();

  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ['-100%', '0%']
  );

  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ['100%', '0%']
  );

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 gap-10 p-10"
      >
        {/* fade up/down  */}
        <motion.div
          variants={gridSquareVariants}
          className="flex items-center justify-center gap-10 rounded-lg bg-slate-800 aspect-square"
        >
          <motion.div
            className="w-20 h-20 rounded-lg bg-stone-100"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          />
          <motion.div
            className="w-20 h-20 rounded-full bg-stone-100"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          />
        </motion.div>
        {/* Shape Shifting */}
        <motion.div
          variants={gridSquareVariants}
          className="flex items-center justify-center gap-10 rounded-lg bg-slate-800 aspect-square"
        >
          <motion.div
            className="w-1/3 shadow-md h-1/3 bg-rose-400"
            animate={{
              scale: [1, 2, 3, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ['10%', '10%', '50%', '10%'],
            }}
            transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
          />
        </motion.div>
        {/* Button resizing  */}
        <motion.div
          variants={gridSquareVariants}
          className="flex items-center justify-center gap-10 rounded-lg bg-slate-800 aspect-square"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: '#d1d5db',
              color: 'black',
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="w-1/2 px-2 py-4 font-light tracking-wide text-gray-100 rounded-lg md:text-2xl text-md bg-emerald-600"
          >
            subscribe
          </motion.button>
        </motion.div>
        {/* Drag  */}
        <motion.div
          variants={gridSquareVariants}
          className="flex items-center justify-center gap-10 rounded-lg bg-slate-800 aspect-square"
        >
          <motion.div
            className="w-1/3 bg-orange-500 h-1/3 rounded-3xl cursor-grab"
            drag
            dragConstraints={{
              left: -125,
              right: 125,
              top: -125,
              bottom: 50,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          />
        </motion.div>
        {/* Scroll progress  */}
        <motion.div
          variants={gridSquareVariants}
          className="flex items-center justify-center gap-10 rounded-lg bg-slate-800 aspect-square"
        >
          <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
            <motion.div
              className="w-full h-full origin-bottom bg-gray-400 rounded-xl"
              style={{ scaleY: completionProgress }}
            />
          </motion.div>
        </motion.div>
        {/* SVG animation */}
        <motion.div
          variants={gridSquareVariants}
          className="flex items-center justify-center gap-10 rounded-lg bg-slate-800 aspect-square"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-500 stroke-[0.5] "
          >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 2,
                  ease: 'easeInOut',
                  delay: 1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 1,
                },
                fill: {
                  duration: 2,
                  ease: 'easeIn',
                  delay: 1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 1,
                },
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.section>
      <section className="flex flex-col gap-10 mb-10" ref={containerRef}>
        <motion.h1
          className="text-5xl tracking-wide text-center text-slate-100"
          initial="hidden"
          animate={mainControls}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.3 }}
        >
          Just Keep Scrolling
        </motion.h1>
        <motion.p
          style={{ translateX: paragraphOneValue }}
          className="w-1/2 mx-auto text-4xl font-thin text-slate-100"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
          excepturi dicta. Ut atque accusantium autem dolor non officia
          distinctio cupiditate.
        </motion.p>
        <motion.p
          style={{ translateX: paragraphTwoValue }}
          className="w-1/2 mx-auto text-4xl font-thin text-slate-100"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
          repellendus.
        </motion.p>
      </section>
    </div>
  );
}

export default App;
