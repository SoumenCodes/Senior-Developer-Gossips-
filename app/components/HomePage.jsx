"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Users,
  Zap,
  ArrowRight,
  Check,
  Lock,
  Code,
  Brain,
  Puzzle,
  Clock,
  Group,
  FileUp,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const route = useRouter();

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
            Senior Developer Gossips
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

        <motion.section
          className="hero-section relative bg-card rounded-3xl shadow-2xl overflow-hidden mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
          <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.h2
                className="text-3xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Join the Elite Chat
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Connect with fellow senior developers, share experiences, and
                stay updated with the latest industry gossip.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Button
                  size="lg"
                  className="animate-pulse"
                  onClick={() => {
                    route.push("/forums");
                  }}
                >
                  Get Started <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                className="relative w-64 h-64"
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl"></div>
                <div className="relative z-10 w-full h-full bg-card rounded-full border-4 border-primary flex items-center justify-center">
                  <MessageSquare size={64} className="text-primary" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="features grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <FeatureCard
            icon={<Clock size={40} />}
            title="Real-Time Messaging"
            description="Instant communication with fellow developers. No lag, no wait."
          />
          <FeatureCard
            icon={<Group size={40} />}
            title="Group Chat"
            description="Create and join topic-specific groups for focused discussions."
          />
          <FeatureCard
            icon={<FileUp size={40} />}
            title="File Sharing"
            description="Securely share code snippets, diagrams, and documents with ease."
          />
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureDetail
              title="Advanced Encryption"
              description="Your conversations and shared files are protected with state-of-the-art encryption technology."
              icon={<Lock className="w-12 h-12 text-primary" />}
            />
            <FeatureDetail
              title="Code Snippets"
              description="Share and discuss code snippets with syntax highlighting and collaborative editing in real-time."
              icon={<Code className="w-12 h-12 text-primary" />}
            />
            <FeatureDetail
              title="AI-Powered Insights"
              description="Get intelligent suggestions and insights based on your discussions and shared content."
              icon={<Brain className="w-12 h-12 text-primary" />}
            />
            <FeatureDetail
              title="Custom Integrations"
              description="Connect with your favorite development tools and services seamlessly for enhanced productivity."
              icon={<Puzzle className="w-12 h-12 text-primary" />}
            />
          </div>
        </motion.section>

        <motion.section
          className="pricing mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="$9.99"
              features={[
                "Access to public forums",
                "Limited private chats",
                "Basic real-time messaging",
                "5 GB file sharing",
              ]}
            />
            <PricingCard
              title="Pro"
              price="$24.99"
              features={[
                "Unlimited private chats",
                "Advanced real-time messaging",
                "Unlimited group chats",
                "25 GB file sharing",
                "Priority access to new features",
                "Advanced analytics",
              ]}
              highlighted={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              features={[
                "Dedicated support",
                "Custom feature development",
                "Unlimited file sharing",
                "On-premise deployment option",
                "Advanced security features",
                "SLA guarantees",
              ]}
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

function FeatureDetail({ title, description, icon }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-4">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

function PricingCard({ title, price, features, highlighted = false }) {
  return (
    <Card
      className={`flex flex-col ${
        highlighted ? "border-primary shadow-lg" : ""
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && (
            <span className="text-muted-foreground"> / month</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-5 h-5 text-primary mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={highlighted ? "default" : "outline"}
        >
          Choose Plan
        </Button>
      </CardFooter>
    </Card>
  );
}
