"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function SinglePostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <article className="container mx-auto px-4 py-8">
          {/* Post Header */}
          <div className="max-w-3xl mx-auto mb-8">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded">
                Technology
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              The Impact of Technology on the Workplace: How Technology Is Changing
            </motion.h1>

            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-muted">
                  <Image
                    src="https://sjc.microlink.io/RonsgigwCUmN19o43WwiC9fG1H94mafzU_K86JSsZmfG8veIHBJUlhm0ZhZajpV5phxeqIxHSHE5JgddXhck9A.jpeg"
                    alt="Jason Francisco"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="text-sm">Jason Francisco</span>
              </div>
              <span className="text-sm text-muted-foreground">August 20, 2022</span>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              className="mb-8 overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Technology in the workplace"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Post Content */}
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                The rapid advancement of technology has revolutionized the way we work, communicate, and conduct
                business. From artificial intelligence to cloud computing, these innovations are reshaping traditional
                workplace dynamics and creating new opportunities for efficiency and productivity.
              </p>

              <h2>The Digital Transformation of Offices</h2>

              <p>
                Modern offices are becoming increasingly digital, with cloud-based tools and collaborative platforms
                replacing traditional methods of communication and file storage. This shift allows for greater
                flexibility, enabling remote work and fostering a more connected global workforce.
              </p>

              <div className="my-8">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Modern office with technology"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <h2>Artificial Intelligence and Automation</h2>

              <p>
                AI and automation are streamlining processes and taking over repetitive tasks, allowing employees to
                focus on more creative and strategic work. While this shift raises concerns about job displacement, it
                also creates new roles and opportunities for upskilling in the workforce.
              </p>

              <blockquote>
                "The future of work is not about humans being replaced by machines. It's about the marriage of human and
                machine, each complementing the other's strengths." - Ginni Rometty, Former CEO of IBM
              </blockquote>

              <h2>The Rise of Remote Work</h2>

              <p>
                The COVID-19 pandemic accelerated the adoption of remote work, proving that many jobs can be done
                effectively from anywhere. This shift has led to a reevaluation of traditional office spaces and work
                schedules, with many companies adopting hybrid models that combine in-office and remote work.
              </p>

              <div className="my-8">
                <Image
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
                  alt="Person working remotely"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <h2>Cybersecurity in the Digital Age</h2>

              <p>
                As workplaces become more digitized, the importance of cybersecurity has never been greater. Companies
                are investing heavily in protecting their digital assets and training employees on best practices for
                maintaining a secure digital environment.
              </p>

              <h2>Conclusion</h2>

              <p>
                The impact of technology on the workplace is profound and ongoing. As we continue to innovate and adapt,
                it's crucial for both employers and employees to stay informed and flexible. By embracing these
                technological advancements, we can create more efficient, productive, and fulfilling work environments
                for the future.
              </p>
            </motion.div>
          </div>
        </article>

        {/* Author Bio */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-4">
              <Image
                src="https://sjc.microlink.io/RonsgigwCUmN19o43WwiC9fG1H94mafzU_K86JSsZmfG8veIHBJUlhm0ZhZajpV5phxeqIxHSHE5JgddXhck9A.jpeg"
                alt="Jason Francisco"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">Jason Francisco</h3>
                <p className="text-muted-foreground">Tech Enthusiast & Writer</p>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              Jason is a passionate tech writer with over a decade of experience in the industry. He specializes in
              exploring the intersection of technology and its impact on modern society.
            </p>
          </div>
        </section>

        {/* Related Posts */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Related post cards would go here */}
            {/* For brevity, I'm not including the full implementation of related posts */}
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

