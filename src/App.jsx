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
