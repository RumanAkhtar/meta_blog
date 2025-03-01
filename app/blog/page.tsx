"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { BlogCard } from "@/components/blog-card"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 relative">
     
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-[-1]" />

        {/* Page Title */}
        <section className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Our Blog</h1>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>•</span>
              <span>Blog</span>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="container mx-auto px-4 pb-12">
          <motion.div
            className="relative overflow-hidden rounded-xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[300px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1653564142048-d5af2cf9b50f?q=80&w=3130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Featured post"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="mb-3">
                <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded">
                  Artificial Intelligence
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                The Future of AI: How Artificial Intelligence is Reshaping Our World
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-muted">
                    <Image src="https://images.unsplash.com/photo-1740121933286-4340a63c4f97?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Author" width={32} height={32} />
                  </div>
                  <span className="text-sm text-white">Dr. Alan Turing</span>
                </div>
                <span className="text-sm text-white/70">June 15, 2023</span>
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <BlogCard key={i} index={i} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-12">
            <motion.button
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More
            </motion.button>
          </div>
        </section>

        {/* Advertisement */}
        <section className="container mx-auto px-4 py-4 mb-12">
          <div className="bg-muted rounded-lg p-6 text-center">
            <p className="text-xs text-muted-foreground mb-1">Advertisement</p>
            <p className="text-sm">You can place ads 750x100</p>
          </div>
        </section>
      </main>
    </div>
  )
}

