"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ForumCard } from "../components/ForumCard";
import JavaScriptImg from "@/public/Images/javascript.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const forums = [
  {
    title: "Nextjs",
    description:
      "Explore the latest features and best practices in Next.js development. Join our community of developers building modern web applications.",
    image: "/placeholder.svg?height=200&width=384",
    icon: "⚛️",
    topics: ["SSR", "API Routes", "App Router"],
    users: 12345,
    trending: true,
    id: 1,
  },
  {
    title: "React js",
    description:
      "Explore the latest features and best practices in React.js development. Join our community of developers building modern web applications.",
    image: "/placeholder.svg?height=200&width=384",
    icon: "⚛️",
    topics: ["SSR", "API Routes", "App Router"],
    users: 12345,
    trending: true,
    id: 2,
  },
  {
    title: "JavaScript",
    description:
      "Dive deep into JavaScript concepts, from basics to advanced topics. Share your knowledge and learn from others in our vibrant community.",
    image: JavaScriptImg,
    icon: "🟨",
    topics: ["ES6+", "Async/Await", "Frameworks"],
    users: 56789,
    trending: false,
    id: 3,
  },
  {
    title: "Python",
    description:
      "Uncover the power of Python programming techniques and cutting-edge libraries. Perfect for beginners and experienced developers alike.",
    image: "/placeholder.svg?height=200&width=384",
    icon: "🐍",
    topics: ["Data Science", "Web Scraping", "Django"],
    users: 43210,
    trending: true,
    id: 4,
  },
  {
    title: "CSS",
    description:
      "Master the art of modern styling with CSS and popular frameworks. Learn to create beautiful, responsive designs for the web.",
    image: "/placeholder.svg?height=200&width=384",
    icon: "🎨",
    topics: ["Flexbox", "Grid", "Animations"],
    users: 34567,
    trending: false,
    id: 5,
  },
  {
    title: "PHP",
    description:
      "Elevate your server-side programming skills with advanced PHP techniques. Discuss best practices and solve real-world problems together.",
    image: "/placeholder.svg?height=200&width=384",
    icon: "🐘",
    topics: ["Laravel", "Symfony", "WordPress"],
    users: 23456,
    trending: false,
    id: 6,
  },
];

export default function ForumsPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-primary mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore Our Tech Forums
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where seasoned devs spill the tea on tech
          </motion.p>
        </header>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {forums.map((forum, index) => (
            <motion.div
              key={forum.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              onClick={() => {
                router.push(`/forums/forum/${forum.title}`);
              }}
            >
              <ForumCard {...forum} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
