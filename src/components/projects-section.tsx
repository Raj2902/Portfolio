"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include product catalog, shopping cart, payment integration, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzU3MTcxODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Full-Stack",
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application built with Angular and Firebase. Real-time updates, team collaboration, and advanced filtering capabilities.",
    image:
      "https://images.unsplash.com/photo-1658274474851-fda40d4c309d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjBzY3JlZW4lMjBjb2RlfGVufDF8fHx8MTc1NzE3MTgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["Angular", "TypeScript", "Firebase", "RxJS"],
    category: "Frontend",
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with location-based forecasts, interactive charts, and weather maps. Built with React and integrated with multiple weather APIs.",
    image:
      "https://images.unsplash.com/photo-1628017974725-18928e8e8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NTcxNzE4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["React", "Chart.js", "API Integration", "CSS3"],
    category: "Frontend",
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "REST API Service",
    description:
      "A scalable REST API built with Node.js and Express. Features JWT authentication, rate limiting, data validation, and comprehensive API documentation.",
    image:
      "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc1NzE3MTgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "Backend",
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description:
      "A comprehensive analytics dashboard for social media metrics. Real-time data visualization, custom reports, and automated insights generation.",
    image:
      "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzU3MTcxODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["React", "D3.js", "Python", "PostgreSQL"],
    category: "Full-Stack",
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 6,
    title: "Mobile App Backend",
    description:
      "Scalable backend infrastructure for a mobile application with user authentication, push notifications, and real-time messaging capabilities.",
    image:
      "https://images.unsplash.com/photo-1628017974725-18928e8e8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NTcxNzE4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["Node.js", "Socket.io", "Redis", "AWS"],
    category: "Backend",
    demoLink: "#",
    githubLink: "#",
  },
];

const categories = ["All", "Frontend", "Backend", "Full-Stack"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for
              creating innovative solutions.
            </p>
          </div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="flex items-center space-x-2"
              >
                <Filter className="h-4 w-4" />
                <span>{category}</span>
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      width={100}
                      height={100}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
