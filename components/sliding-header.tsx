"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const featuredPosts = [
  {
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1653564142048-d5af2cf9b50f?q=80&w=3130&auto=format&fit=crop",
  },
  {
    title: "Sustainable Architecture: Building for a Greener Future",
    category: "Architecture",
    image:
      "https://sjc.microlink.io/JMExGpQCNDGPzegNaBDMA2v5vADkenaJJG_68ytjkaW7DWdQh7wDFszCxwbi2DUZ0TN9e9cgquVsRE7BcACyOg.jpeg",
  },
  {
    title: "The Rise of Artificial Intelligence in Modern Business",
    category: "Technology",
    image:
      "https://sjc.microlink.io/pP45SLiCD3N_Zh6UiSKJ-ISQ4pg4YrPUGK2QIwIEi9yRt3gbTTdmXhjpz7aVIGenPFxwIuep2KMlXCc1WvME9g.jpeg",
  },
]

export function SlidingHeader() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredPosts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={featuredPosts[currentIndex].image || "/placeholder.svg"}
            alt={featuredPosts[currentIndex].title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

