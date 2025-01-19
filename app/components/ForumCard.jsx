"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users, TrendingUp } from "lucide-react";

export function ForumCard({
  title,
  description,
  image,
  icon,
  topics,
  users,
  trending,
}) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48">
          <Image
            src={image || "/placeholder.svg?height=200&width=384"}
            alt={title}
            layout="fill"
            className="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
          <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-full p-2">
            <span className="text-2xl">{icon}</span>
          </div>
          {trending && (
            <Badge
              variant="secondary"
              className="absolute top-4 right-4 bg-yellow-400 text-yellow-900"
            >
              <TrendingUp className="w-4 h-4 mr-1" /> Trending
            </Badge>
          )}
        </div>
        <CardContent className="p-6 flex-grow">
          <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {topics.map((topic, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 dark:bg-gray-800 p-4 flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Users className="w-4 h-4 mr-1" />
            <span>{users.toLocaleString()} users</span>
          </div>
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Join Discussion
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
