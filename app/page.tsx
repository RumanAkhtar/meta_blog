import Link from "next/link"
import { BlogCard } from "@/components/blog-card"
import { SlidingHeader } from "@/components/sliding-header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="relative">
            <SlidingHeader />
            <div className="absolute left-8 right-8 -bottom-20 bg-background rounded-xl p-6 shadow-lg border">
              <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded mb-3">
                Technology
              </span>
              <h2 className="text-xl font-bold mb-3">
                The Impact of Technology on the Workplace: How Technology is Changing
              </h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <img
                    src="https://sjc.microlink.io/RonsgigwCUmN19o43WwiC9fG1H94mafzU_K86JSsZmfG8veIHBJUlhm0ZhZajpV5phxeqIxHSHE5JgddXhck9A.jpeg"
                    alt="Jason Francisco"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm">Jason Francisco</span>
                </div>
                <span className="text-sm text-muted-foreground">August 20, 2022</span>
              </div>
            </div>
          </div>
        </section>

        {/* Advertisement */}
        <section className="container mx-auto px-4 py-4 mt-24">
          <div className="bg-muted rounded-lg p-6 text-center">
            <p className="text-xs text-muted-foreground mb-1">Advertisement</p>
            <p className="text-sm">You can place ads 750x100</p>
          </div>
        </section>

        {/* Latest Posts */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Latest Post</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <BlogCard
                key={i}
                index={i}
                category={i % 3 === 0 ? "technology" : i % 3 === 1 ? "architecture" : "cybersecurity"}
              />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              View All Post
            </Link>
          </div>
        </section>

        {/* Advertisement */}
        <section className="container mx-auto px-4 py-4">
          <div className="bg-muted rounded-lg p-6 text-center">
            <p className="text-xs text-muted-foreground mb-1">Advertisement</p>
            <p className="text-sm">You can place ads 750x100</p>
          </div>
        </section>

        {/* Footer Sections */}
        <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor malesuada urna eget dolor
              magna diam ut metus ut neque volutpat.
            </p>
            <p className="text-sm mb-1">
              <strong>Email:</strong> info@metatemplate.net
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> +800 123 456 789
            </p>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              {["Home", "About", "Blog", "Archived", "Author", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Category */}
          <div>
            <h3 className="font-bold mb-4">Category</h3>
            <ul className="space-y-2">
              {["Lifestyle", "Technology", "Travel", "Business", "Economy", "Sports"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Weekly Newsletter */}
          <div>
            <h3 className="font-bold mb-4">Weekly Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Get blog articles and offers via email</p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              />
              <button className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

