"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { BlogCard } from "@/components/blog-card"

export default function AuthorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Author Profile */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="mb-4 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="https://sjc.microlink.io/zCKvZlFHFpz1FD-6IcydYx2_Uox6fDDPm4kxD6md-fprdpDUxNTkTg6uw5ziOHoUMTN-DFMjJg3ihwSdoWSsuQ.jpeg"
                  alt="Author"
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-background object-cover"
                />
              </motion.div>

              <motion.h1
                className="text-2xl font-bold mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Sarah Johnson
              </motion.h1>

              <motion.p
                className="text-sm text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Tech Enthusiast & Writer
              </motion.p>

              <motion.p
                className="max-w-2xl text-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Sarah Johnson is a passionate tech writer and blogger with a keen interest in the latest technological
                advancements. With a background in Computer Science and years of experience in the tech industry, Sarah
                brings deep insights into how technology is reshaping our world.
              </motion.p>

              <motion.div
                className="flex space-x-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link href="#" className="bg-muted-foreground/20 p-2 rounded-md hover:bg-primary/20 transition-colors">
                  <Facebook className="h-5 w-5 text-muted-foreground" />
                </Link>
                <Link href="#" className="bg-muted-foreground/20 p-2 rounded-md hover:bg-primary/20 transition-colors">
                  <Twitter className="h-5 w-5 text-muted-foreground" />
                </Link>
                <Link href="#" className="bg-muted-foreground/20 p-2 rounded-md hover:bg-primary/20 transition-colors">
                  <Instagram className="h-5 w-5 text-muted-foreground" />
                </Link>
                <Link href="#" className="bg-muted-foreground/20 p-2 rounded-md hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Latest Posts */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Latest Posts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <BlogCard key={i} index={i} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

