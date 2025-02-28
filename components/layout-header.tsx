"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Bell, Menu, X } from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

export function LayoutHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 ${
        isScrolled ? "bg-background/90 shadow-sm" : "bg-background/80"
      } backdrop-blur-sm border-b transition-all duration-300`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <AnimatedLogo />
            <span className="text-xl font-bold">MetaBlog</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Blog
          </Link>
          <Link
            href="/single-post"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Single Post
          </Link>
          <Link
            href="/author"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Author
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search"
              className="rounded-full bg-muted pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-[180px]"
            />
          </div>
          <ThemeToggle />
          <button className="rounded-full bg-muted p-2">
            <Bell className="h-5 w-5 text-muted-foreground" />
          </button>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="border-t px-4 py-4 flex flex-col space-y-4 bg-background">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/single-post"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Single Post
              </Link>
              <Link
                href="/author"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Author
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full rounded-full bg-muted pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

