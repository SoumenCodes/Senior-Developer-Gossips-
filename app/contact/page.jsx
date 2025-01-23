"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-16 px-4">
      <motion.div
        className="container mx-auto max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-primary text-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-primary" />
                  <span>contact@seniordevelopergossips.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-primary" />
                  <span>123 Dev Street, Codeville, TX 12345</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" {...register("name")} />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" {...register("email")} />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" {...register("subject")} />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" {...register("message")} />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            >
              <Card className="max-w-md w-full">
                <CardContent className="text-center p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="text-white w-8 h-8" />
                    </div>
                  </motion.div>
                  <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                  <p className="text-muted-foreground mb-4">
                    Thank you for reaching out. We'll get back to you soon!
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>Close</Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
