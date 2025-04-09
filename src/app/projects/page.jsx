"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GitBranch, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [lampPosition, setLampPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Hamza Group",
      description: "Company Full Stack website | 2025",
      technologies: [
        "Next.js",
        "typescript",
        "TailwindCSS",
        "framermotion",
        "Express",
        "mailjs",
        "SQL Lite",
      ],
      githubLink: "https://github.com/AzSuper/hamzagroupweb",
      liveLink: "https://hamzagroupwebsite.vercel.app",
      clientTestimonial: {
        quote:
          "This platform completely transformed the way we communicate with our customers in a very positive and beautiful way.",
        author: "Mohammad Saiede",
        position: "Chief Learning Officer, TechEd Solutions",
      },
      imageUrl: "/assets/project-1-thumbnail.jpg",
    },
    {
      id: 2,
      title: "Super U",
      description: "Your Image on a custome Phone case.",
      technologies: [
        "Next.js",
        "framer-motion",
        "lucide-react",
        "prisma",
        "stripe",
        "zod",
        "tailwind",
        "uploadthing",
      ],
      githubLink: "https://github.com/AzSuper/superu",
      liveLink: "https://superu.vercel.app",
      clientTestimonial: {
        quote:
          "The custom phone case platform exceeded our expectations. The user experience is seamless and our customers love the personalization options.",
        author: "Emily Rodriguez",
        position: "Marketing Director, Super U",
      },
      imageUrl: "/assets/project-2-thumbnail.png",
    },
    {
      id: 3,
      title: "KitchenSync",
      description:
        "KitchenSync is an integrated platform designed to optimize restaurant operations by connecting supply chain management with kitchen inventory and workflow systems.",
      technologies: ["Some Cool TechStack!"],
      githubLink: "#",
      liveLink: "#",
      clientTestimonial: {
        quote: "I'am Very Happy",
        author: "very happy client !",
        position: "CEO",
      },
      imageUrl: "/assets/under-strucher.png",
    },
  ];

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setLampPosition({
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
      {/* Lamp Effect */}
      <div
        className="absolute pointer-events-none z-20"
        style={{
          left: lampPosition.x,
          top: lampPosition.y,
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
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Innovative solutions that bridge technology and human experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative z-30">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: project.id * 0.2 }}
              onClick={() => setActiveProject(project)}
              className="cursor-pointer group"
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl text-green-400">
                      {project.title}
                    </CardTitle>
                    <div className="flex space-x-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GitBranch
                                className="text-gray-400 hover:text-green-500"
                                size={20}
                              />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>View on GitHub</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger>
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink
                                className="text-gray-400 hover:text-green-500"
                                size={20}
                              />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>Live Project</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-green-400 border-green-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="w-full max-w-4xl bg-gray-900 rounded-xl shadow-2xl border border-green-500/20 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid md:grid-cols-2">
                  {/* Project Image */}
                  <div className="relative">
                    <img
                      src={activeProject.imageUrl}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-green-400 mb-4">
                        {activeProject.title}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {activeProject.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-green-500 mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeProject.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              className="bg-green-900/30 text-green-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Client Testimonial */}
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <p className="italic text-gray-300 mb-3">
                          "{activeProject.clientTestimonial.quote}"
                        </p>
                        <div className="flex items-center">
                          <div>
                            <p className="font-semibold text-green-400">
                              {activeProject.clientTestimonial.author}
                            </p>
                            <p className="text-sm text-gray-500">
                              {activeProject.clientTestimonial.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex space-x-4">
                      <a
                        href={activeProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-green-900/30 text-green-300 rounded-md hover:bg-green-900/50 transition-colors"
                      >
                        <GitBranch size={20} />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={activeProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-md hover:bg-green-500/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>Live Project</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background Grid and Animated Elements */}
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

      {/* Global Styles */}
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

export default ProjectsSection;
