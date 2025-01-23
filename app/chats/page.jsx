"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Smile, Paperclip, Search } from "lucide-react";

const chatData = [
  {
    id: 1,
    sender: "John Doe",
    message: "Hey, how's it going?",
    timestamp: "10:00 AM",
  },
  {
    id: 2,
    sender: "You",
    message: "Not bad, just working on some code. You?",
    timestamp: "10:02 AM",
  },
  {
    id: 3,
    sender: "John Doe",
    message: "Same here! Working on a new project.",
    timestamp: "10:05 AM",
  },
  {
    id: 4,
    sender: "You",
    message: "That's awesome! What kind of project?",
    timestamp: "10:07 AM",
  },
  {
    id: 5,
    sender: "John Doe",
    message: "It's a chat application, actually. Something like this!",
    timestamp: "10:10 AM",
  },
];

const contactsData = [
  {
    id: 1,
    name: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    lastMessage: "It's a chat application, actually. Something like this!",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "offline",
    lastMessage: "Sure, let's catch up tomorrow!",
  },
  {
    id: 3,
    name: "Bob Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    lastMessage: "Did you see the latest React update?",
  },
  {
    id: 4,
    name: "Alice Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "away",
    lastMessage: "I'm working on the new design",
  },
  {
    id: 5,
    name: "Charlie Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    lastMessage: "Can you help me with this bug?",
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState(chatData);
  const [newMessage, setNewMessage] = useState("");
  const [contacts, setContacts] = useState(contactsData);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      const newMsg = {
        id: messages.length + 1,
        sender: "You",
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-16 px-4">
      <motion.div
        className="container mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full h-[80vh] flex">
          {/* Sidebar */}
          <motion.div
            className="w-1/3 border-r border-border"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CardContent className="p-4">
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Search contacts..."
                  className="w-full"
                  icon={<Search className="h-4 w-4 text-muted-foreground" />}
                />
              </div>
              <ScrollArea className="h-[calc(80vh-8rem)]">
                {contacts.map((contact) => (
                  <motion.div
                    key={contact.id}
                    className={`flex items-center p-3 rounded-lg cursor-pointer mb-2 ${
                      selectedContact.id === contact.id
                        ? "bg-secondary"
                        : "hover:bg-secondary/50"
                    }`}
                    onClick={() => setSelectedContact(contact)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={contact.avatar} alt={contact.name} />
                      <AvatarFallback>{contact.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{contact.name}</h3>
                        <span
                          className={`h-2 w-2 rounded-full ${
                            contact.status === "online"
                              ? "bg-green-500"
                              : contact.status === "away"
                              ? "bg-yellow-500"
                              : "bg-gray-500"
                          }`}
                        ></span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {contact.lastMessage}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </ScrollArea>
            </CardContent>
          </motion.div>

          {/* Chat Area */}
          <motion.div
            className="flex-grow flex flex-col"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CardContent className="flex-grow p-6 flex flex-col">
              <motion.h1
                className="text-3xl font-bold mb-6 text-center text-primary"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Chat with {selectedContact.name}
              </motion.h1>
              <ScrollArea className="flex-grow mb-4" ref={scrollAreaRef}>
                <AnimatePresence>
                  {messages.map((msg, index) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`flex items-start mb-4 ${
                        msg.sender === "You" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.sender !== "You" && (
                        <Avatar className="mr-2">
                          <AvatarImage
                            src={selectedContact.avatar}
                            alt={selectedContact.name}
                          />
                          <AvatarFallback>
                            {selectedContact.name[0]}
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`rounded-lg p-3 max-w-[70%] ${
                          msg.sender === "You"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary"
                        }`}
                      >
                        <p className="text-sm">{msg.message}</p>
                        <span className="text-xs opacity-50 mt-1 block">
                          {msg.timestamp}
                        </span>
                      </div>
                      {msg.sender === "You" && (
                        <Avatar className="ml-2">
                          <AvatarImage
                            src="/placeholder.svg?height=40&width=40"
                            alt="You"
                          />
                          <AvatarFallback>Y</AvatarFallback>
                        </Avatar>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </ScrollArea>
              <form
                onSubmit={handleSendMessage}
                className="flex items-center space-x-2"
              >
                <Button type="button" variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-grow"
                />
                <Button type="button" variant="ghost" size="icon">
                  <Smile className="h-5 w-5" />
                </Button>
                <Button type="submit" size="icon">
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
}
