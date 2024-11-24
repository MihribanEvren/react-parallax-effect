import { motion } from 'framer-motion';

function App() {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const gridSquareVariants = { hidden: { opacity: 0 }, show: { opacity: 1 } };

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 gap-10 p-10"
      >
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
        <motion.div
          variants={gridSquareVariants}
          className="flex items-center justify-center gap-10 rounded-lg bg-slate-800 aspect-square"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="flex items-center justify-center gap-10 rounded-lg bg-slate-800 aspect-square"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="flex items-center justify-center gap-10 rounded-lg bg-slate-800 aspect-square"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="flex items-center justify-center gap-10 rounded-lg bg-slate-800 aspect-square"
        ></motion.div>
      </motion.section>
    </div>
  );
}

export default App;
