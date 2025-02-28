"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FeaturedPost() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative h-[400px] w-full">
        <Image
          src="https://sjc.microlink.io/pP45SLiCD3N_Zh6UiSKJ-ISQ4pg4YrPUGK2QIwIEi9yRt3gbTTdmXhjpz7aVIGenPFxwIuep2KMlXCc1WvME9g.jpeg"
          alt="Featured post"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="mb-3">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded">
            Artificial Intelligence
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
          The Future of AI: Transforming Industries and Reshaping Our World
        </h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full overflow-hidden bg-muted">
              <Image
                src="https://sjc.microlink.io/neiC3MWodJ-IaGetWajVEqRjx88cYjak8V-kyBHk6NR0vpYL5ujxxHTz3g4PWGKTBp3D1zst9BVFWieoY4FgLw.jpeg"
                alt="Author"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-sm text-white">Jason Francisco</span>
          </div>
          <span className="text-sm text-white/70">September 15, 2023</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

