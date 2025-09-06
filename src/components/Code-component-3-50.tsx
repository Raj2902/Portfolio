"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt:
      "Learn best practices for structuring large React applications with TypeScript, including advanced patterns and optimization techniques.",
    coverImage:
      "https://images.unsplash.com/photo-1658274474851-fda40d4c309d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjBzY3JlZW4lMjBjb2RlfGVufDF8fHx8MTc1NzE3MTgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Architecture"],
    link: "#",
  },
  {
    id: 2,
    title: "Modern CSS Techniques for Better User Interfaces",
    excerpt:
      "Explore the latest CSS features including Grid, Flexbox, and custom properties to create stunning and responsive user interfaces.",
    coverImage:
      "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzU3MTcxODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    publishDate: "2024-01-08",
    readTime: "6 min read",
    tags: ["CSS", "UI/UX", "Design"],
    link: "#",
  },
  {
    id: 3,
    title: "Optimizing Angular Performance: Tips and Tricks",
    excerpt:
      "Discover advanced techniques for optimizing Angular applications, including lazy loading, OnPush strategy, and bundle optimization.",
    coverImage:
      "https://images.unsplash.com/photo-1628017974725-18928e8e8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NTcxNzE4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    publishDate: "2024-01-01",
    readTime: "10 min read",
    tags: ["Angular", "Performance", "Optimization"],
    link: "#",
  },
  {
    id: 4,
    title: "The Future of Web Development: What to Expect in 2024",
    excerpt:
      "A comprehensive look at emerging trends in web development, from new frameworks to development methodologies.",
    coverImage:
      "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc1NzE3MTgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    publishDate: "2023-12-28",
    readTime: "12 min read",
    tags: ["Trends", "Future", "Technology"],
    link: "#",
  },
  {
    id: 5,
    title: "Mastering Git: Advanced Workflows for Teams",
    excerpt:
      "Learn advanced Git techniques and workflows that will help your team collaborate more effectively and maintain clean project history.",
    coverImage:
      "https://images.unsplash.com/photo-1658274474851-fda40d4c309d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjBzY3JlZW4lMjBjb2RlfGVufDF8fHx8MTc1NzE3MTgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    publishDate: "2023-12-20",
    readTime: "7 min read",
    tags: ["Git", "Workflow", "Collaboration"],
    link: "#",
  },
  {
    id: 6,
    title: "Building APIs with Node.js and Express: Best Practices",
    excerpt:
      "Comprehensive guide to building robust and scalable APIs using Node.js and Express, including security and testing strategies.",
    coverImage:
      "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzU3MTcxODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    publishDate: "2023-12-15",
    readTime: "15 min read",
    tags: ["Node.js", "API", "Backend"],
    link: "#",
  },
];

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="blog" className="py-20 bg-muted/30">
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
              Latest Blog Posts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing insights, tutorials, and thoughts on modern web
              development, programming best practices, and emerging
              technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      width={100}
                      height={100}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-background/80 backdrop-blur-sm"
                      >
                        <BookOpen className="h-3 w-3 mr-1" />
                        Article
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full justify-between group/button"
                      asChild
                    >
                      <a href={post.link}>
                        Read More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* Load More / Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline">
              Load More Posts
            </Button>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter to get the latest articles, tutorials,
              and insights delivered directly to your inbox.
            </p>
            <div className="flex max-w-md mx-auto space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-md bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
