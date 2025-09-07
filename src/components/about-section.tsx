"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, Code, Coffee, MapPin, Award } from "lucide-react";
import { Progress } from "./ui/progress";
import Image from "next/image";

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Angular", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "AWS", level: 70 },
];

const funFacts = [
  { icon: Coffee, text: "500+ cups of coffee consumed this year" },
  { icon: Code, text: "10,000+ lines of code written monthly" },
  { icon: Award, text: "5 years of professional experience" },
  { icon: MapPin, text: "Based in San Francisco, CA" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate software engineer with a love for creating innovative
              solutions and beautiful user experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image and Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-64 h-64 mx-auto lg:mx-0 mb-8">
                  <Image
                    src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc1NzE3MTgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Alex Johnson"
                    className="w-full h-full object-cover rounded-full border-4 border-background shadow-xl"
                    width={100}
                    height={100}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  With over 5 years of experience in software development, I
                  specialize in building scalable web applications using modern
                  technologies like React, Angular, and Node.js.
                </p>
                <p className="text-lg leading-relaxed">
                  I&apos;m passionate about clean code, performance
                  optimization, and creating intuitive user experiences. When
                  I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, contributing to open source projects, or hiking
                  in the beautiful California outdoors.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold mb-4">
                  Experience Timeline
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      year: "2023-Present",
                      role: "Senior Frontend Engineer",
                      company: "TechCorp Inc.",
                    },
                    {
                      year: "2021-2023",
                      role: "Full Stack Developer",
                      company: "StartupXYZ",
                    },
                    {
                      year: "2019-2021",
                      role: "Frontend Developer",
                      company: "WebSolutions",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <span className="font-medium">{item.year}</span> -{" "}
                        {item.role} at{" "}
                        <span className="text-primary">{item.company}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Skills and Fun Facts */}
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : {}}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      >
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Fun Facts */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Fun Facts</h3>
                <div className="grid gap-4">
                  {funFacts.map((fact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <fact.icon className="h-5 w-5 text-primary" />
                      <span>{fact.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
