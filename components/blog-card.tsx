"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const images = {
  technology: [
    "https://sjc.microlink.io/pP45SLiCD3N_Zh6UiSKJ-ISQ4pg4YrPUGK2QIwIEi9yRt3gbTTdmXhjpz7aVIGenPFxwIuep2KMlXCc1WvME9g.jpeg",
    "https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?q=80&w=2940&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1675257062985-323b7ea418e5?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495549115977-ca0a18c9f6a4?q=80&w=2940&auto=format&fit=crop",
  ],
  architecture: [
    "https://sjc.microlink.io/JMExGpQCNDGPzegNaBDMA2v5vADkenaJJG_68ytjkaW7DWdQh7wDFszCxwbi2DUZ0TN9e9cgquVsRE7BcACyOg.jpeg",
    "https://images.unsplash.com/photo-1554228530-7efa3020ccf6?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574498836938-f1177e6d2340?q=80&w=2940&auto=format&fit=crop",
  ],
  cybersecurity: [
    "https://sjc.microlink.io/022JBXG0QjRfnQ0WCu8j3Alo_eXiOhTk8l3xXnz6sKp83o7UvgppXd3Oh6IppLiELdNLbTeN16fJ_5svdXT53Q.jpeg",
    "https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce?q=80&w=2940&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1663013615239-0aae66c5f1fa?q=80&w=2940&auto=format&fit=crop",
  ],
}

const authors = [
  {
    name: "John Doe",
    image:
      "https://sjc.microlink.io/RonsgigwCUmN19o43WwiC9fG1H94mafzU_K86JSsZmfG8veIHBJUlhm0ZhZajpV5phxeqIxHSHE5JgddXhck9A.jpeg",
  },
  {
    name: "Jane Smith",
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=3087&auto=format&fit=crop",
  },
  {
    name: "Tracy Wilson",
    image:
      "https://sjc.microlink.io/zCKvZlFHFpz1FD-6IcydYx2_Uox6fDDPm4kxD6md-fprdpDUxNTkTg6uw5ziOHoUMTN-DFMjJg3ihwSdoWSsuQ.jpeg",
  },
  {
    name: "Jason Francisco",
    image:
      "https://sjc.microlink.io/neiC3MWodJ-IaGetWajVEqRjx88cYjak8V-kyBHk6NR0vpYL5ujxxHTz3g4PWGKTBp3D1zst9BVFWieoY4FgLw.jpeg",
  },
  { name: "Elizabeth Stain", image: "https://plus.unsplash.com/premium_photo-1661683653197-ca2d0aab80eb" },
  {
    name: "Sarah Johnson",
    image:
      "https://sjc.microlink.io/zCKvZlFHFpz1FD-6IcydYx2_Uox6fDDPm4kxD6md-fprdpDUxNTkTg6uw5ziOHoUMTN-DFMjJg3ihwSdoWSsuQ.jpeg",
  },
  { name: "Ernie Smith", image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1" },
  { name: "Eric Smith", image: "https://images.unsplash.com/photo-1627900352514-7f8bbb3f5edb" },
]

const topics = {
  technology: ["Technology", "AI", "Cloud Computing", "IoT"],
  architecture: ["Architecture", "Urban Design", "Sustainable Building", "Interior Design"],
  cybersecurity: ["Cybersecurity", "Network Security", "Data Protection", "Ethical Hacking"],
}

const titles = {
  technology: [
    "The Impact of AI on Modern Software Development",
    "5G Technology: Revolutionizing Mobile Connectivity",
    "The Rise of Edge Computing in IoT Applications",
    "Quantum Computing: The Next Frontier in Technology",
  ],
  architecture: [
    "Sustainable Architecture: Building for a Greener Future",
    "The Evolution of Skyscraper Design: From Past to Present",
    "Biomimicry in Architecture: Learning from Nature's Designs",
    "Urban Renewal: Transforming Cities Through Innovative Architecture",
  ],
  cybersecurity: [
    "The Growing Importance of Zero Trust Security Models",
    "Artificial Intelligence in Cybersecurity: Friend or Foe?",
    "Blockchain Technology: Revolutionizing Data Security",
    "The Human Factor: Social Engineering in the Digital Age",
  ],
}

export function BlogCard({
  index,
  category = "technology",
}: { index: number; category?: "technology" | "architecture" | "cybersecurity" }) {
  const imageArray = images[category]
  const topicArray = topics[category]
  const titleArray = titles[category]

  return (
    <motion.div
      className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Link href="#" className="block overflow-hidden">
        <div className="aspect-[16/9] w-full relative overflow-hidden">
          <Image
            src={imageArray[index % imageArray.length] || "/placeholder.svg"}
            alt={`${category} blog post`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="mb-3">
          <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded">
            {topicArray[index % topicArray.length]}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          <Link href="#">{titleArray[index % titleArray.length]}</Link>
        </h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full overflow-hidden bg-muted">
              <Image
                src={authors[index % authors.length].image || "/placeholder.svg"}
                alt={authors[index % authors.length].name}
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-xs text-muted-foreground">{authors[index % authors.length].name}</span>
          </div>
          <span className="text-xs text-muted-foreground">August 20, 2022</span>
        </div>
      </div>
    </motion.div>
  )
}

