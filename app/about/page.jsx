"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Users, Zap, Globe, Coffee } from "lucide-react";
import About from "@/public/Images/About.png";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const route = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary overflow-hidden">
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.header className="text-center mb-16" style={{ opacity, scale }}>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-primary mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Senior Developer Gossips
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where Code Meets Conversation
          </motion.p>
        </motion.header>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-card/50 backdrop-blur-md">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2 ">
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground mb-6">
                    At Senior Developer Gossips, we're on a mission to create a
                    vibrant, global community where seasoned developers can
                    connect, share knowledge, and stay ahead of the curve in the
                    ever-evolving world of technology.
                  </p>
                  <Button className="group">
                    Join Our Community
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                  <Image
                    src={About}
                    alt="Community"
                    width={300}
                    height={300}
                    className="rounded-full border-4 border-primary relative z-10"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-12 h-12 text-primary" />,
                title: "Expert Insights",
                description:
                  "Gain valuable knowledge from industry veterans and thought leaders.",
              },
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: "Networking",
                description:
                  "Connect with like-minded professionals and expand your network.",
              },
              {
                icon: <Zap className="w-12 h-12 text-primary" />,
                title: "Cutting-edge Discussions",
                description:
                  "Stay updated with the latest trends and technologies in software development.",
              },
              {
                icon: <Globe className="w-12 h-12 text-primary" />,
                title: "Global Community",
                description:
                  "Interact with developers from around the world and broaden your perspective.",
              },
              {
                icon: <Coffee className="w-12 h-12 text-primary" />,
                title: "Casual Atmosphere",
                description:
                  "Enjoy relaxed, informal discussions in a welcoming environment.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Join the Conversation</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a seasoned pro or an up-and-coming developer, there's
            a place for you in our community. Share your experiences, learn from
            others, and help shape the future of software development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript",
              "Python",
              "React",
              "Node.js",
              "DevOps",
              "Machine Learning",
              "Blockchain",
            ].map((topic) => (
              <Badge
                key={topic}
                variant="secondary"
                className="text-lg py-2 px-4 bg-black "
              >
                #{topic}
              </Badge>
            ))}
          </div>
          <Button
            size="lg"
            className="mt-8 animate-pulse"
            onClick={() => {
              route.push("/forums");
            }}
          >
            Start Gossiping Now <ArrowRight className="ml-2" />
          </Button>
        </motion.section>
      </motion.div>
    </div>
  );
}
