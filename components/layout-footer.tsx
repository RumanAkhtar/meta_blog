import Link from "next/link"
import { AnimatedLogo } from "@/components/animated-logo"
import { NewsletterForm } from "@/components/newsletter-form"

export function LayoutFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4">Weekly Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Get blog articles and offers via email</p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <AnimatedLogo />
            <div>
              <p className="font-bold">MetaBlog</p>
              <p className="text-xs text-muted-foreground">© JS Template 2023. All Rights Reserved.</p>
            </div>
          </div>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

