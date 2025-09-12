"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, Code, HeartPulse, MapPin, Award, ChevronDown } from "lucide-react";
import { Progress } from "./ui/progress";
import Image from "next/image";
import { Button } from "./ui/button";

const skills = [
  { name: "Html", level: 98 },
  { name: "Css", level: 98 },
  { name: "Javascript", level: 95 },
  { name: "React", level: 95 },
  { name: "Tailwind", level: 90 },
  { name: "TypeScript", level: 90 },
  { name: "Angular", level: 85 },
  { name: "Github", level: 80 },
  { name: "Node.js", level: 50 },
];

const funFacts = [
  { icon: HeartPulse, text: "Become Health consious lost 5 kgs in last 6 months" },
  { icon: Code, text: "Gone through Tanstack, typescript and tailwind" },
  { icon: Award, text: "2+ years of professional experience" },
  { icon: MapPin, text: "Based in Noida, UP" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const techincalSkillsRef = useRef<HTMLDivElement>(null);

  const scrollToBottomTechnicalSkills = () => {
    techincalSkillsRef.current?.scrollTo({
      top: techincalSkillsRef.current?.scrollHeight,
      behavior: 'smooth'
    })
  }

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
                    src="/assets/me.jpg"
                    alt="Raj Agarwal"
                    className="w-full h-full object-cover rounded-full border-4 border-background shadow-xl"
                    width={100}
                    height={100}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  With over 2+ years of experience in software development, I
                  specialize in building scalable web applications using modern
                  technologies like React, Angular, and Node.js.
                </p>
                <p className="text-lg leading-relaxed">
                  I&apos;m passionate about clean code, performance
                  optimization, and creating intuitive user experiences.
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
                      year: "2024-Present",
                      role: "Frontend Engineer",
                      company: "Remote State",
                    },
                    {
                      year: "2024-2024",
                      role: "Full Stack Web Developer (MERN)",
                      company: "Intern",
                    },
                    {
                      year: "2022-2023",
                      role: "Full Stack Web Developer",
                      company: "Pamsar Technologies",
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
              <div className="mb-0">
                <h3 className="text-xl font-semibold mb-6">Technical Skills <span className="text-muted-foreground font-medium">({skills.length})</span></h3>
                <div ref={techincalSkillsRef} className="space-y-4 overflow-y-scroll h-56 md:h-72">
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
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center text-muted-foreground mb-0 hover:text-foreground transition-colors"
              >
                <Button variant='link' onClick={scrollToBottomTechnicalSkills}>
                  <ChevronDown className="h-5 w-5" />
                </Button>
              </motion.div>
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
