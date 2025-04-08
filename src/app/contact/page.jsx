"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast.ts";
import {
  Mail,
  Send,
  Loader2,
  MessageSquare,
  User,
  CheckCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();
  const formRef = useRef(null);
  const containerRef = useRef(null);

  // Initialize EmailJS
  useEffect(() => {
    // Replace with your actual EmailJS public key
    emailjs.init("7moXUtf2BZWiD5Egr");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual EmailJS service ID and template ID
      await emailjs.sendForm(
        "service_7dxfeke",
        "template_udwb0cl",
        formRef.current
      );

      setIsSubmitting(false);
      setIsSuccess(true);

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "success",
      });

      // Reset form after success animation plays
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);

      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-gray-950 text-gray-100 py-20 relative overflow-hidden"
    >
      {/* Interactive light effect */}
      <div
        className="absolute pointer-events-none z-20"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Section Header */}
      <div className="container mx-auto px-4 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Drop me a message
            and I'll get back to you.
          </p>
        </motion.div>

        {/* Contact Form & Info Grid */}
        <div className="grid md:grid-cols-5 gap-8 relative z-30">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card className="h-full bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
              <CardHeader>
                <CardTitle className="text-2xl text-green-400">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-green-900/30">
                      <Mail className="text-green-400 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-green-300 mb-1">Email</h4>
                      <p className="text-gray-400">
                        mohammadabozamel6@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-green-900/30">
                      <MessageSquare className="text-green-400 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-green-300 mb-1">
                        Let's Talk
                      </h4>
                      <p className="text-gray-400">
                        Schedule a call or video chat
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-3"
          >
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full"></div>
              <CardHeader>
                <CardTitle className="text-2xl text-green-400">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="h-80 flex flex-col items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className="text-green-400 mb-4"
                    >
                      <CheckCircle size={60} />
                    </motion.div>
                    <h3 className="text-xl font-medium text-green-300 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-400 text-center">
                      Your message has been sent successfully.
                    </p>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-300"
                        >
                          Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-500" />
                          </div>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            className="pl-10 bg-gray-800/50 border-gray-700 focus:border-green-500 text-gray-200"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-300"
                        >
                          Email
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-500" />
                          </div>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="awesome@example.com"
                            className="pl-10 bg-gray-800/50 border-gray-700 focus:border-green-500 text-gray-200"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-gray-300"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500 text-gray-200"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-300"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project, questions, or just say hello..."
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500 text-gray-200 min-h-32"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white py-3 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#grid)"
              className="text-green-500/10"
            />
          </svg>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
