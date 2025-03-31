import { motion } from 'framer-motion';
import { useState } from 'react';

const OllieDemo = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStartAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1200);
  };

  const boardAnimation = {
    y: isAnimating ? [-5, 0, -60, -40, 0] : 0,
    rotate: isAnimating ? [0, 0, -15, -10, 0] : 0,
  };

  const personAnimation = {
    y: isAnimating ? [-5, 0, -100, -60, 0] : 0,
  };

  const transition = {
    duration: 1.2,
    ease: 'easeOut',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">滑板起跳演示</h1>

      <div className="relative w-full max-w-md h-[400px] flex items-center justify-center">
        {/* 滑板 Skateboard */}
        <motion.div
          className="absolute bottom-0 w-48 h-4 bg-gray-800 rounded-lg"
          animate={boardAnimation}
          transition={transition}
        >
          <div className="w-full h-full bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-lg" />
        </motion.div>

        {/* 人 Stickman */}
        <motion.div
          className="absolute bottom-4 w-16 h-24 flex flex-col items-center"
          animate={personAnimation}
          transition={transition}
        >
          <div className="w-8 h-8 bg-gray-800 rounded-full mb-2" />
          <div className="w-4 h-12 bg-gray-800 rounded-full mb-2" />
          <div className="flex gap-2">
            <div className="w-2 h-8 bg-gray-800 rounded-full" />
            <div className="w-2 h-8 bg-gray-800 rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* 控制按钮 */}
      <motion.button
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleStartAnimation}
        disabled={isAnimating}
      >
        {isAnimating ? '起跳中...' : '开始起跳'}
      </motion.button>
    </div>
  );
};

export default OllieDemo;
