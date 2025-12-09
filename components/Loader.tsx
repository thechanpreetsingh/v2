'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ finishLoading }: { finishLoading: () => void }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading();
    }, 2600); // Total animation duration

    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 w-full h-full bg-navy z-[99] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      exit={{ opacity: 0, zIndex: -1 }}
      transition={{ duration: 0.2, delay: 2.4 }}
    >
      <motion.div
        className="w-full max-w-[100px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="block w-full h-full mx-auto"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: [1, 1, 0.1], opacity: [1, 1, 0] }}
          transition={{
            duration: 1.2,
            delay: 2.0,
            times: [0, 0.8, 1],
            ease: 'easeInOut',
          }}
        >
          <title>Loader Logo</title>
          <g>
            <motion.g
              id="B"
              transform="translate(11.000000, 5.000000)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.5 }}
            >
              <text x="23" y="57" fill="currentColor" fontSize="50px" fontFamily="SF Mono, monospace">c</text>
            </motion.g>
            <motion.path
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="text-green"
              d="M 50, 5
                 L 11, 27
                 L 11, 72
                 L 50, 95
                 L 89, 73
                 L 89, 28 z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: 'easeInOut',
              }}
            />
          </g>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}
