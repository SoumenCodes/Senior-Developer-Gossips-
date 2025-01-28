"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, ArrowRight } from "lucide-react";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { useEffect, useState } from "react";

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
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg group">
      <CardContent className="p-0 h-full">
        <div className="flex flex-col h-full">
          <div className="flex items-center p-6 bg-primary text-primary-foreground">
            <div className="text-4xl mr-4">{icon}</div>
            <h3 className="text-2xl font-bold">{title}</h3>
            {trending && (
              <Badge
                variant="secondary"
                className="ml-auto bg-yellow-400 text-yellow-900"
              >
                <TrendingUp className="w-3 h-3 mr-1" /> Trending
              </Badge>
            )}
          </div>
          <div className="flex-grow p-6">
            <p className="text-muted-foreground mb-4">{description}</p>
            {topics && topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {topics.map((topic, index) => (
                  <Badge key={index} variant="outline">
                    {topic}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <div className="mt-auto p-6 flex justify-between items-center text-sm text-muted-foreground border-t">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>
                <AnimatedNumberComponent value={users} /> members
              </span>
            </div>
            <span className="text-primary font-medium group-hover:underline flex items-center cursor-pointer">
              Join Discussion
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function AnimatedNumberComponent({ value }) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    setAnimatedValue(value);
  }, [value]);

  return (
    <AnimatedNumber
      className="inline-flex items-center font-mono text-xl font-medium text-muted-foreground"
      springOptions={{
        bounce: 0,
        duration: 4000,
      }}
      value={animatedValue}
    />
  );
}
