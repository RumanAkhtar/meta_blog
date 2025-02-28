"use client"

import { motion } from "framer-motion"

export function AnimatedLogo() {
  return (
    <motion.div
      className="relative h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold"
      whileHover={{ scale: 1.1, rotate: 5 }}
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <span className="text-sm">M</span>
      <motion.div
        className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration: 1.5,
        }}
      />
    </motion.div>
  )
}

