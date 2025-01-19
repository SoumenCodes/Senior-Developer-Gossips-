"use client";

import { motion } from "framer-motion";
import { ForumCard } from "../components/ForumCard";
import JavaScriptImg from "@/public/Images/javascript.png";

const forums = [
  {
    title: "Next.js",
    description:
      "Explore the latest features and best practices in Next.js development. Join our community of developers building modern web applications.",
    image: "/placeholder.svg?height=200&width=384",
    icon: "⚛️",
    topics: ["SSR", "API Routes", "App Router"],
    users: 12345,
    trending: true,
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
  },
];

export default function ForumsPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-12 px-4"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Explore Our Tech Forums
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {forums.map((forum, index) => (
            <motion.div
              key={forum.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ForumCard {...forum} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
